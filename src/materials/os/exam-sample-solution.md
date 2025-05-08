---
title: '[OS] Exam sample solution'
---

# Exam sample solution

## Election

In Hungary there are several electoral districts. In each district there is an electoral committee, which protects the legality of voting.

The committee has got three members: a president and two other people.

Usually one of them are checking the identification documents of the voters, the other one seals down the electoral paper. (The president will be the parent process, the other two members will be child processes.)

a) The president waits for the signals of each of the children that they are ready for work. After
that, the president read from the command line argument the number of voters and
generate a random identification number for each of them. The presidents write the
numbers into an unnamed pipe and the first child process (checking member) has to read
them and write to the screen.

b) The checking member (1st process) checks the identification cards of the voters and in 20%
of the cases they are not good. The checking child send to the second child the identification
numbers and the „can vote”/”cannot vote” remark through a named pipe. The second child
reads the data and writes everything to the screen.

c) The person who can vote will get the electoral paper and votes. (A random number between
1..6). The second child writes the result of the voters to a message queue. The president
reads the message queue and writes everything to the screen.

d) Sometimes one of the members of the committee has a rest somewhere outside. You have
to solve the problem not to leave the electoral room more than one member in the same
time (semaphore). You have to write the starting and ending time of each leaving into a file.

## Solution

```c
#include <fcntl.h>
#include <semaphore.h>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/stat.h>
#include <time.h>
#include <unistd.h>
#include <wait.h>

typedef struct sigaction sigaction_t;
typedef struct stat      stat_t;

typedef struct state_t {
  int          argc;
  const char** argv;
  int          voters_num;
  sem_t*       sem;
  int          pipe_fd[2];
  const char*  fifo_path;
  key_t        key;
  int          msgq_id;
  const char*  time_log;
  int          child1, child2;
  int          signals_received;
} state_t;

typedef struct voter_t {
  int id;
  int can_vote;
  int vote;
} voter_t;

static state_t state = {0};

void sig_handle(int sig) { state.signals_received++; }

void rest(const char* entity) {
  sem_wait(state.sem);

  printf("%s takes a break...\n", entity);

  time_t start_time = time(NULL);
  char   start_buf[32];
  ctime_r(&start_time, start_buf);

  sleep((rand() % 6) + 1);

  time_t end_time = time(NULL);
  char   end_buf[32];
  ctime_r(&end_time, end_buf);

  int fd = open(state.time_log, O_WRONLY | O_CREAT | O_APPEND, S_IRUSR | S_IWUSR);
  if (fd == -1) {
    perror("open error");
    exit(EXIT_FAILURE);
  }

  // write to file
  char buffer[256];
  int  len = snprintf(buffer, sizeof(buffer), "%s takes a break\n from %s to %s\n", entity, start_buf, end_buf);
  write(fd, buffer, len);

  close(fd);

  sem_post(state.sem);
}

void parent() {
  // close read end of the pipe
  close(state.pipe_fd[0]);

  // generate voter ids
  if (rand() % 2 == 0) { rest("Parent"); }  // random rest

  voter_t voters[state.voters_num];
  memset(voters, 0, sizeof(voters));
  for (int i = 0; i < state.voters_num; ++i) { voters[i].id = rand() % 1000000; }
  printf("[Parent] Generated %d voter ids.\n", state.voters_num);

  // write voter ids to pipe
  if (rand() % 2 == 0) { rest("Parent"); }  // random rest

  write(state.pipe_fd[1], &voters, sizeof(voters));
  close(state.pipe_fd[1]);                  // close write end of the pipe
  printf("[Parent] Wrote all voter ids to pipe.\n");

  // wait for message
  if (rand() % 2 == 0) { rest("Parent"); }  // random rest
  msgrcv(state.msgq_id, &voters, sizeof(voters), 0, 0);

  // print votes
  if (rand() % 2 == 0) { rest("Parent"); }  // random rest
  for (int i = 0; i < state.voters_num; ++i) {
    if (!voters[i].can_vote) { continue; }
    printf("[Parent] Voter %d voted %d\n", voters[i].id, voters[i].vote);
  }
}

void child1() {
  printf("[Child-1] Started.\n");

  // close write end of the pipe
  close(state.pipe_fd[1]);

  // send signal to parent
  if (rand() % 2 == 0) { rest("Child-1"); }  // random rest

  kill(getppid(), SIGUSR1);
  printf("[Child-1] Signal sent to parent.\n");

  // read ids from pipe
  if (rand() % 2 == 0) { rest("Child-1"); }  // random rest

  voter_t voters[state.voters_num];
  if (read(state.pipe_fd[0], &voters, sizeof(voters)) == -1) {
    perror("child1 read error");
    exit(EXIT_FAILURE);
  }

  close(state.pipe_fd[0]);  // close read end of the pipe

  for (int i = 0; i < state.voters_num; ++i) { printf("[Child-1] Received voter ID %d\n", voters[i].id); }

  // simulate identification checking with 20% success
  if (rand() % 2 == 0) { rest("Parent"); }  // random rest

  for (int i = 0; i < state.voters_num; ++i) { voters[i].can_vote = (rand() % 100 < 80); }
  printf("[Child-1] Voted IDs checked.\n");

  // use named pipe to send ids to second child
  if (rand() % 2 == 0) { rest("Parent"); }  // random rest

  int fd = open(state.fifo_path, O_WRONLY);
  if (fd == -1) {
    perror("child1 open error");
    exit(EXIT_FAILURE);
  }

  // write to named pipe
  printf("[Child-1] Sending IDs to Child2.\n");
  write(fd, voters, sizeof(voters));

  close(fd);

  exit(EXIT_SUCCESS);
}

void child2() {
  printf("[Child-2] Started.\n");

  // close both ends of the pipe
  close(state.pipe_fd[0]);
  close(state.pipe_fd[1]);

  // send signal to parent
  if (rand() % 2 == 0) { rest("Child-2"); }  // random rest

  kill(getppid(), SIGUSR1);
  printf("[Child-2] Signal sent to parent.\n");

  // open named pipe
  if (rand() % 2 == 0) { rest("Child-2"); }  // random rest

  int fd = open(state.fifo_path, O_RDONLY);
  if (fd == -1) {
    perror("child2 open error");
    exit(EXIT_FAILURE);
  }

  // read from named pipe
  voter_t voters[state.voters_num];
  if (read(fd, &voters, sizeof(voters)) == -1) {
    perror("child1 read error");
    exit(EXIT_FAILURE);
  }

  for (int i = 0; i < state.voters_num; ++i) {
    printf("[Child-2] Voter ID %d %s vote\n", voters[i].id, voters[i].can_vote ? "can" : "cannot");
  }
  close(fd);
  printf("[Child-2] Received IDs from Child1.\n");

  // simulate voting
  if (rand() % 2 == 0) { rest("Child-2"); }  // random rest

  for (int i = 0; i < state.voters_num; ++i) {
    if (!voters[i].can_vote) { continue; }
    voters[i].vote = (rand() % 6) + 1;
  }

  // send votes to parent via msgq
  if (rand() % 2 == 0) { rest("Child-2"); }  // random rest
  msgsnd(state.msgq_id, &voters, sizeof(voters), 0);

  exit(EXIT_SUCCESS);
}

int main(const int argc, const char* argv[]) {
  printf("Initializing.\n");
  srand(time(NULL));

  state.argc = argc;
  state.argv = argv;

  state.time_log = "/tmp/time_log.txt";

  // parse number of voters
  if (argc < 2 || sscanf(argv[1], "%d", &state.voters_num) != 1) {
    printf("Couldn't parse voters number. Incorrect command line argument.\n");
    exit(EXIT_FAILURE);
  }

  // init semaphore
  const char* sem_fifo_name = "kccj71sf";
  sem_unlink(sem_fifo_name);

  state.sem = sem_open(sem_fifo_name, O_CREAT, S_IRUSR | S_IWUSR, 1);
  if (state.sem == SEM_FAILED) {
    perror("sem open error");
    exit(EXIT_FAILURE);
  }

  // init unnamed pipe
  if (pipe(state.pipe_fd) == -1) {
    perror("pipe error");
    exit(EXIT_FAILURE);
  }

  // init named pipe
  state.fifo_path = "/tmp/kccj71np";
  unlink(state.fifo_path);
  if (mkfifo(state.fifo_path, S_IRUSR | S_IWUSR) == -1) {
    perror("mkfifo error");
    exit(EXIT_FAILURE);
  }

  // init message queue
  state.key     = ftok("/tmp/kccj71mq", 0);
  state.msgq_id = msgget(state.key, 0664 | IPC_CREAT);
  if (state.msgq_id == -1) {
    perror("msgget error");
    exit(EXIT_FAILURE);
  }

  // set up signal handler
  printf("Setting up signal handler.\n");

  sigaction_t sa;
  sa.sa_handler = sig_handle;
  sa.sa_flags   = 0;
  sigemptyset(&sa.sa_mask);
  if (sigaction(SIGUSR1, &sa, NULL) == -1) {
    perror("sigaction error");
    exit(EXIT_FAILURE);
  }

  // setup masks to ensure correct signal delivery
  sigset_t sigusr_blocked_mask, sigusr_unblocked_mask;

  sigemptyset(&sigusr_blocked_mask);         // clear
  sigaddset(&sigusr_blocked_mask, SIGUSR1);  // add SIGUSR1 to blocked mask
  // swap mask to blocked and save previous one
  if (sigprocmask(SIG_BLOCK, &sigusr_blocked_mask, &sigusr_unblocked_mask) == -1) {
    perror("sigprocmask error");
    exit(EXIT_FAILURE);
  }

  // start forks

  printf("Forking child 1.\n");
  state.child1 = fork();
  if (state.child1 < 0) {
    perror("child1 fork error");
    exit(EXIT_FAILURE);
  }

  if (state.child1 == 0) {
    child1();
  } else {
    printf("Forking child 2.\n");
    state.child2 = fork();
    if (state.child2 < 0) {
      perror("child2 fork error");
      exit(EXIT_FAILURE);
    }

    if (state.child2 == 0) {
      child2();
    } else {
      // unblock and wait for signals
      while (state.signals_received < 2) { sigsuspend(&sigusr_unblocked_mask); }
      parent();
    }
  }

  // cleanup
  sem_unlink(sem_fifo_name);
  unlink(state.fifo_path);
  msgctl(state.msgq_id, IPC_RMID, NULL);

  return 0;
}
```
