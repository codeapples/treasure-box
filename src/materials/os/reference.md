---
title: '[OS] C Language and POSIX API Reference'
---

# Basic C Concepts

**Required headers:**

```c
#include <string.h>  // String operations
#include <errno.h>   // Error handling
#include <stdlib.h>  // General utilities
```

## Strings

A string in C is a null-terminated character array. The `\0` character marks the end of the string.

Documentation: [string.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/string.h.html)

Key functions:

- `strcpy(dest, src)` - Copy string from source to destination
- `strcmp(str1, str2)` - Compare strings (returns 0 if equal)
- `strlen(str)` - Get string length (excluding null terminator)
- `strcat(dest, src)` - Concatenate strings
- `strncpy(dest, src, n)` - Copy n characters (safer than strcpy)

##### Short example:

```c
char dest[20];
strcpy(dest, "Hello");  // Copy "Hello" to dest
strcat(dest, " World"); // Append " World" to dest
printf("Length: %zu\n", strlen(dest));  // Print length: 11
```

##### Long example:

```c
void string_operations_example() {
    char str1[50] = "Hello";
    char str2[50] = "World";
    char result[100];

    // strcpy copies the entire string including null terminator
    strcpy(result, str1);
    printf("After strcpy: %s\n", result);  // Output: Hello

    // strcat appends str2 to result
    strcat(result, " ");
    strcat(result, str2);
    printf("After strcat: %s\n", result);  // Output: Hello World

    // strcmp returns 0 if strings are equal
    if (strcmp(str1, "Hello") == 0) {
        printf("Strings match\n");
    }

    // strncpy is safer as it limits the number of characters copied
    char safe[5];
    strncpy(safe, "Too long string", sizeof(safe) - 1);
    safe[sizeof(safe) - 1] = '\0';  // Ensure null termination
    printf("Safe copy: %s\n", safe);  // Output: Too
}
```

## Command Line Arguments

```c
int main(int argc, char **argv) {
    // argc: number of arguments
    // argv: array of argument strings (argv[0] is program name)
}
```

##### Short example:

```c
int main(int argc, char **argv) {
    printf("Program name: %s\n", argv[0]);
    printf("Number of arguments: %d\n", argc - 1);
    return 0;
}
```

##### Long example:

```c
int main(int argc, char **argv) {
    // Check if we have enough arguments
    if (argc < 2) {
        fprintf(stderr, "Usage: %s <filename> [options]\n", argv[0]);
        return 1;
    }

    // Process each argument
    for (int i = 1; i < argc; i++) {
        if (argv[i][0] == '-') {
            // Handle options
            switch (argv[i][1]) {
                case 'v':
                    printf("Verbose mode enabled\n");
                    break;
                case 'h':
                    printf("Help: %s <filename> [-v] [-h]\n", argv[0]);
                    return 0;
                default:
                    fprintf(stderr, "Unknown option: %s\n", argv[i]);
                    return 1;
            }
        } else {
            // Handle filename
            printf("Processing file: %s\n", argv[i]);
        }
    }
    return 0;
}
```

## Error Handling

Error handling in C uses the global `errno` variable to indicate what went wrong.

Documentation: [errno.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/errno.h.html)

- `perror("message")` - Print error message to stderr
- `errno` - Global variable storing last error code
- `exit(code)` - Terminate program (0 for success, non-zero for error)
- `strerror(errno)` - Convert error code to string message

##### Short example:

```c
FILE *fp = fopen("nonexistent.txt", "r");
if (fp == NULL) {
    perror("fopen failed");  // Prints: fopen failed: No such file or directory
    exit(1);
}
```

##### Long example:

```c
void error_handling_example() {
    // Try to open a file
    FILE *fp = fopen("test.txt", "r");
    if (fp == NULL) {
        // perror automatically includes the error message from errno
        perror("Error opening file");

        // strerror converts errno to a human-readable string
        printf("Detailed error: %s\n", strerror(errno));

        // Different handling based on error type
        switch (errno) {
            case ENOENT:
                printf("File does not exist\n");
                break;
            case EACCES:
                printf("Permission denied\n");
                break;
            default:
                printf("Unknown error occurred\n");
        }
        exit(1);
    }

    // Clean up
    fclose(fp);
}
```

# File Operations

**Required headers:**

```c
#include <fcntl.h>    // File control options
#include <unistd.h>   // POSIX operating system API
#include <sys/stat.h> // File status
```

Documentation:

- [fcntl.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/fcntl.h.html)
- [unistd.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/unistd.h.html)

## File Descriptors

File descriptors are integer identifiers for open files. They provide a low-level interface to I/O operations.

##### Standard descriptors:

- `0` - _stdin_
- `1` - _stdout_
- `2` - _stderr_

## File I/O Functions

### `open()`

```c
int open(const char *pathname, int flags, mode_t mode);
```

Common flags:

- `O_RDONLY` - Read only
- `O_WRONLY` - Write only
- `O_RDWR` - Read and write
- `O_CREAT` - Create if doesn't exist
- `O_TRUNC` - Truncate if exists
- `O_APPEND` - Append to file
- `O_NONBLOCK` - Non-blocking mode

##### Short example:

```c
// Open file for reading
int fd = open("file.txt", O_RDONLY);
if (fd == -1) {
    perror("open failed");
    exit(1);
}
```

##### Long example:

```c
void file_operations_example() {
    // Open file with multiple flags
    int fd = open("test.txt",
                 O_RDWR |    // Read and write access
                 O_CREAT |   // Create if doesn't exist
                 O_APPEND,   // Append to end of file
                 0644);      // File permissions (rw-r--r--)

    if (fd == -1) {
        perror("open failed");
        exit(1);
    }

    // Write to file
    const char *msg = "Hello, World!\n";
    ssize_t n = write(fd, msg, strlen(msg));
    if (n == -1) {
        perror("write failed");
        close(fd);
        exit(1);
    }

    // Read from file
    char buf[1024];
    n = read(fd, buf, sizeof(buf) - 1);
    if (n == -1) {
        perror("read failed");
        close(fd);
        exit(1);
    }
    buf[n] = '\0';  // Null terminate the string
    printf("Read: %s", buf);

    // Close file descriptor
    close(fd);
}
```

### `close()`

```c
int close(int fd);
```

Always close file descriptors when done to prevent resource leaks.

### `read()`

```c
ssize_t read(int fd, void *buf, size_t count);
```

##### Returns

- number of bytes read
- 0 at end of file
- -1 on error

##### Example:

```c
char buf[1024];
ssize_t n = read(fd, buf, sizeof(buf));
if (n == -1) {
    perror("read failed");
    exit(1);
}
```

### `write()`

```c
ssize_t write(int fd, const void *buf, size_t count);
```

##### Returns

- number of bytes written
- -1 on error

Example:

```c
const char *msg = "Hello, World!\n";
ssize_t n = write(fd, msg, strlen(msg));
if (n == -1) {
    perror("write failed");
    exit(1);
}
```

# Process Management

**Required headers:**

```c
#include <sys/types.h>  // System data types
#include <sys/wait.h>   // Process wait functions
#include <unistd.h>     // POSIX API
```

Documentation:

- [sys/types.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_types.h.html)
- [sys/wait.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_wait.h.html)

## Process Creation

### `fork()`

The `fork()` system call creates a new process by duplicating the calling process. The new process is called the child process.

```c
pid_t fork(void);
```

- Creates a copy of the calling process
- **Returns**:
  - 0 in child process
  - Child's PID in parent process
  - -1 on error

##### Short example:

```c
pid_t pid = fork();
if (pid == 0) {
    printf("I am the child\n");
} else {
    printf("I am the parent\n");
}
```

##### Long example:

```c
void process_creation_example() {
    printf("Parent process starting\n");

    // Create a new process
    pid_t pid = fork();

    if (pid == -1) {
        // fork() failed
        perror("fork failed");
        exit(1);
    } else if (pid == 0) {
        // Child process
        printf("Child process: PID = %d, Parent PID = %d\n",
               getpid(), getppid());

        // Child process work
        sleep(1);
        printf("Child process exiting\n");
        exit(0);
    } else {
        // Parent process
        printf("Parent process: Child PID = %d\n", pid);

        // Wait for child to finish
        int status;
        waitpid(pid, &status, 0);

        // Check how child exited
        if (WIFEXITED(status)) {
            printf("Child exited with status %d\n",
                   WEXITSTATUS(status));
        }
    }
}
```

### `waitpid()`

```c
pid_t waitpid(pid_t pid, int *status, int options);
```

- Wait for child process to terminate
- `pid`: process ID to wait for
- `status`: pointer to store exit status
- `options`: wait options (0 for basic wait)

Common options:

- `WNOHANG`: Return immediately if no child has exited
- `WUNTRACED`: Also return if child is stopped

## Process Synchronization

### `wait()`

```c
pid_t wait(int *status);
```

- Wait for any child process to terminate
- Returns PID of terminated child
- Returns -1 on error

### Process IDs

```c
pid_t getpid(void);  // Get current process ID
pid_t getppid(void); // Get parent process ID
```

# Inter-Process Communication

**Required headers:**

```c
#include <signal.h>     // Signal handling
#include <sys/ipc.h>    // IPC mechanisms
#include <sys/msg.h>    // Message queues
#include <sys/shm.h>    // Shared memory
#include <sys/sem.h>    // Semaphores
```

Documentation:

- [signal.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/signal.h.html)
- [sys/ipc.h](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_ipc.h.html)

## Signals

Signals are software interrupts that provide a way to handle asynchronous events. They can be used for inter-process communication and process control.

##### Short example:

```c
void handler(int sig) {
    printf("Caught signal %d\n", sig);
}

int main() {
    signal(SIGINT, handler);  // Handle Ctrl+C
    while(1) sleep(1);
    return 0;
}
```

##### Long example:

```c
void signal_handling_example() {
    // Define signal handler
    void handler(int sig) {
        switch(sig) {
            case SIGINT:
                printf("Caught SIGINT (Ctrl+C)\n");
                break;
            case SIGTERM:
                printf("Caught SIGTERM\n");
                exit(0);
                break;
            case SIGCHLD:
                printf("Child process terminated\n");
                break;
        }
    }

    // Set up signal handlers
    struct sigaction sa;
    sa.sa_handler = handler;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;

    // Register handlers for different signals
    sigaction(SIGINT, &sa, NULL);   // Ctrl+C
    sigaction(SIGTERM, &sa, NULL);  // Termination request
    sigaction(SIGCHLD, &sa, NULL);  // Child process status change

    // Create a child process
    pid_t pid = fork();
    if (pid == 0) {
        // Child process
        printf("Child process running\n");
        sleep(2);
        exit(0);
    }

    // Parent process
    printf("Parent process running\n");
    while(1) {
        sleep(1);
    }
}
```

## Pipes

Pipes provide a unidirectional communication channel between processes. There are two types of pipes:

1. Unnamed pipes (created with `pipe()`) - for communication between related processes
2. Named pipes (FIFOs) - for communication between unrelated processes

### Unnamed Pipes

Unnamed pipes are created using the `pipe()` system call and are only accessible to the creating process and its children.

```c
int pipe(int pipefd[2]);
```

- Creates pipe with read (pipefd[0]) and write (pipefd[1]) ends
- One-way communication between related processes
- Data is read in FIFO order
- Automatically closed when process terminates

##### Short example:

```c
int pipefd[2];
pipe(pipefd);
write(pipefd[1], "Hello", 5);
char buf[5];
read(pipefd[0], buf, 5);
```

##### Long example:

```c
void unnamed_pipe_example() {
    int pipefd[2];
    char buf[1024];

    // Create pipe
    if (pipe(pipefd) == -1) {
        perror("pipe failed");
        exit(1);
    }

    // Create child process
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork failed");
        exit(1);
    }

    if (pid == 0) {
        // Child process
        close(pipefd[0]);  // Close read end

        // Write multiple messages
        const char *messages[] = {
            "Hello from child\n",
            "This is a test\n",
            "Goodbye\n"
        };

        for (int i = 0; i < 3; i++) {
            write(pipefd[1], messages[i], strlen(messages[i]));
            sleep(1);  // Simulate some work
        }

        close(pipefd[1]);
        exit(0);
    } else {
        // Parent process
        close(pipefd[1]);  // Close write end

        // Read all messages
        ssize_t n;
        while ((n = read(pipefd[0], buf, sizeof(buf) - 1)) > 0) {
            buf[n] = '\0';
            printf("Parent received: %s", buf);
        }

        close(pipefd[0]);
        wait(NULL);  // Wait for child to finish
    }
}
```

### Named Pipes (FIFO)

Named pipes (FIFOs) are special files that provide a pipe-like communication channel between unrelated processes. They persist in the filesystem until explicitly removed.

```c
int mkfifo(const char *pathname, mode_t mode);
```

- Creates a named pipe in the filesystem
- Can be accessed by any process with appropriate permissions
- Must be opened with `open()` before use
- Persists after process termination until removed

##### Short example:

```c
// Create FIFO
mkfifo("/tmp/myfifo", 0666);

// Process 1 (writer)
int fd = open("/tmp/myfifo", O_WRONLY);
write(fd, "Hello", 5);
close(fd);

// Process 2 (reader)
fd = open("/tmp/myfifo", O_RDONLY);
char buf[5];
read(fd, buf, 5);
close(fd);
```

##### Long example:

```c
void named_pipe_example() {
    const char *fifo_path = "/tmp/myfifo";

    // Create FIFO if it doesn't exist
    if (mkfifo(fifo_path, 0666) == -1 && errno != EEXIST) {
        perror("mkfifo failed");
        exit(1);
    }

    // Create child process
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork failed");
        exit(1);
    }

    if (pid == 0) {
        // Child process (writer)
        int fd = open(fifo_path, O_WRONLY);
        if (fd == -1) {
            perror("open failed");
            exit(1);
        }

        // Write multiple messages
        const char *messages[] = {
            "Hello from writer\n",
            "This is a test\n",
            "Goodbye\n"
        };

        for (int i = 0; i < 3; i++) {
            write(fd, messages[i], strlen(messages[i]));
            sleep(1);  // Simulate some work
        }

        close(fd);
        exit(0);
    } else {
        // Parent process (reader)
        int fd = open(fifo_path, O_RDONLY);
        if (fd == -1) {
            perror("open failed");
            exit(1);
        }

        // Read all messages
        char buf[1024];
        ssize_t n;
        while ((n = read(fd, buf, sizeof(buf) - 1)) > 0) {
            buf[n] = '\0';
            printf("Reader received: %s", buf);
        }

        close(fd);
        wait(NULL);  // Wait for child to finish

        // Clean up FIFO
        unlink(fifo_path);
    }
}
```

## Message Queues

Message queues provide a way for processes to exchange messages. They are useful when you need to send structured data between processes.

##### Short example:

```c
key_t key = ftok("/tmp", 'A');
int msqid = msgget(key, 0666 | IPC_CREAT);
struct msgbuf msg = {1, "Hello"};
msgsnd(msqid, &msg, strlen(msg.mtext) + 1, 0);
```

##### Long example:

```c
void message_queue_example() {
    key_t key;
    int msqid;
    struct msgbuf msg;

    // Generate a unique key
    key = ftok("/tmp", 'A');
    if (key == -1) {
        perror("ftok failed");
        exit(1);
    }

    // Create or access message queue
    msqid = msgget(key, 0666 | IPC_CREAT);
    if (msqid == -1) {
        perror("msgget failed");
        exit(1);
    }

    // Create child process
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork failed");
        exit(1);
    }

    if (pid == 0) {
        // Child process (receiver)
        while (1) {
            // Receive message
            if (msgrcv(msqid, &msg, sizeof(msg.mtext), 1, 0) == -1) {
                perror("msgrcv failed");
                exit(1);
            }

            printf("Child received: %s", msg.mtext);

            // Check for termination message
            if (strcmp(msg.mtext, "quit\n") == 0) {
                break;
            }
        }
        exit(0);
    } else {
        // Parent process (sender)
        const char *messages[] = {
            "Hello from parent\n",
            "This is a test\n",
            "quit\n"
        };

        for (int i = 0; i < 3; i++) {
            // Prepare message
            msg.mtype = 1;
            strcpy(msg.mtext, messages[i]);

            // Send message
            if (msgsnd(msqid, &msg, strlen(msg.mtext) + 1, 0) == -1) {
                perror("msgsnd failed");
                exit(1);
            }

            sleep(1);  // Simulate some work
        }

        // Wait for child to finish
        wait(NULL);

        // Remove message queue
        msgctl(msqid, IPC_RMID, NULL);
    }
}
```

## Shared Memory

Shared memory allows multiple processes to share a region of memory. It's the fastest IPC mechanism but requires explicit synchronization.

##### Short example:

```c
key_t key = ftok("/tmp", 'B');
int shmid = shmget(key, 1024, 0666 | IPC_CREAT);
char *shm = shmat(shmid, NULL, 0);
strcpy(shm, "Hello");
```

##### Long example:

```c
void shared_memory_example() {
    key_t key;
    int shmid;
    char *shm;

    // Generate a unique key
    key = ftok("/tmp", 'B');
    if (key == -1) {
        perror("ftok failed");
        exit(1);
    }

    // Create shared memory segment
    shmid = shmget(key, 1024, 0666 | IPC_CREAT);
    if (shmid == -1) {
        perror("shmget failed");
        exit(1);
    }

    // Attach shared memory segment
    shm = shmat(shmid, NULL, 0);
    if (shm == (char *)-1) {
        perror("shmat failed");
        exit(1);
    }

    // Create child process
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork failed");
        exit(1);
    }

    if (pid == 0) {
        // Child process
        printf("Child process: Reading from shared memory\n");
        printf("Shared memory content: %s\n", shm);

        // Detach shared memory
        shmdt(shm);
        exit(0);
    } else {
        // Parent process
        printf("Parent process: Writing to shared memory\n");
        strcpy(shm, "Hello from parent process!");

        // Wait for child to finish
        wait(NULL);

        // Detach and remove shared memory
        shmdt(shm);
        shmctl(shmid, IPC_RMID, NULL);
    }
}
```

## Semaphores

Semaphores are synchronization primitives that help control access to shared resources. They can be used to prevent race conditions and implement mutual exclusion. There are two types of semaphores in Unix/Linux:

1. System V semaphores (`sys/sem.h`) - older, more complex but more powerful
2. POSIX semaphores (`semaphore.h`) - newer, simpler, more portable

### System V Semaphores

System V semaphores are part of the System V IPC mechanisms. They support operations on multiple semaphores atomically and can be used across unrelated processes.

##### Required headers:

```c
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/sem.h>
```

##### Key functions:

```c
int semget(key_t key, int nsems, int semflg);  // Create/access semaphore set
int semctl(int semid, int semnum, int cmd, ...);  // Control operations
int semop(int semid, struct sembuf *sops, size_t nsops);  // Atomic operations
```

##### Semaphore operations structure:

```c
struct sembuf {
    short sem_num;  // Semaphore number
    short sem_op;   // Operation
    short sem_flg;  // Flags
};
```

##### Short example:

```c
// Generate a unique key for the semaphore using a file path and project ID
key_t key = ftok("/tmp", 'C');

// Create or access a semaphore set with 1 semaphore
// IPC_CREAT: create if doesn't exist
// 0666: read/write permissions for all users
int semid = semget(key, 1, 0666 | IPC_CREAT);

// Initialize the semaphore to 1 (binary semaphore)
union semun { int val; } arg;
arg.val = 1;
semctl(semid, 0, SETVAL, arg);  // SETVAL: set semaphore value

// Wait operation (decrement semaphore)
struct sembuf sb = {0, -1, 0};  // 0: first semaphore, -1: decrement, 0: no flags
semop(semid, &sb, 1);  // Perform atomic operation

// ... critical section ...

// Signal operation (increment semaphore)
sb.sem_op = 1;  // Change operation to increment
semop(semid, &sb, 1);  // Perform atomic operation
```

##### Long example:

```c
void sysv_semaphore_example() {
    key_t key;
    int semid;
    struct sembuf sb;

    // Generate a unique key using /tmp directory and project ID 'C'
    key = ftok("/tmp", 'C');
    if (key == -1) {
        perror("ftok failed");  // Failed to generate key
        exit(1);
    }

    // Create a new semaphore set with one semaphore
    // IPC_CREAT: create if doesn't exist
    // 0666: read/write permissions for all users
    semid = semget(key, 1, 0666 | IPC_CREAT);
    if (semid == -1) {
        perror("semget failed");  // Failed to create/access semaphore
        exit(1);
    }

    // Initialize the semaphore to 1 (binary semaphore)
    union semun {
        int val;
        struct semid_ds *buf;
        unsigned short *array;
    } arg;
    arg.val = 1;  // Set initial value to 1
    if (semctl(semid, 0, SETVAL, arg) == -1) {
        perror("semctl failed");  // Failed to initialize semaphore
        exit(1);
    }

    // Create a child process to demonstrate inter-process synchronization
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork failed");  // Failed to create child process
        exit(1);
    }

    if (pid == 0) {
        // Child process
        for (int i = 0; i < 3; i++) {
            // Wait for semaphore (decrement)
            sb.sem_num = 0;    // First semaphore in the set
            sb.sem_op = -1;    // Decrement operation
            sb.sem_flg = 0;    // No special flags
            if (semop(semid, &sb, 1) == -1) {
                perror("semop wait failed");  // Failed to wait on semaphore
                exit(1);
            }

            printf("Child process: Critical section %d\n", i);
            sleep(1);  // Simulate work in critical section

            // Signal semaphore (increment)
            sb.sem_op = 1;     // Change to increment operation
            if (semop(semid, &sb, 1) == -1) {
                perror("semop signal failed");  // Failed to signal semaphore
                exit(1);
            }
        }
        exit(0);
    } else {
        // Parent process
        for (int i = 0; i < 3; i++) {
            // Wait for semaphore (decrement)
            sb.sem_num = 0;    // First semaphore in the set
            sb.sem_op = -1;    // Decrement operation
            sb.sem_flg = 0;    // No special flags
            if (semop(semid, &sb, 1) == -1) {
                perror("semop wait failed");  // Failed to wait on semaphore
                exit(1);
            }

            printf("Parent process: Critical section %d\n", i);
            sleep(1);  // Simulate work in critical section

            // Signal semaphore (increment)
            sb.sem_op = 1;     // Change to increment operation
            if (semop(semid, &sb, 1) == -1) {
                perror("semop signal failed");  // Failed to signal semaphore
                exit(1);
            }
        }

        // Wait for child process to finish
        wait(NULL);

        // Remove the semaphore set from the system
        if (semctl(semid, 0, IPC_RMID) == -1) {
            perror("semctl IPC_RMID failed");  // Failed to remove semaphore
            exit(1);
        }
    }
}
```

### POSIX Semaphores

POSIX semaphores are simpler to use and more portable across different Unix-like systems. They can be either named (shared between processes) or unnamed (shared between threads).

##### Required headers:

```c
#include <semaphore.h>
#include <fcntl.h>     // For O_CREAT, O_EXCL
#include <sys/stat.h>  // For mode constants
```

##### Key functions:

```c
sem_t *sem_open(const char *name, int oflag, mode_t mode, unsigned int value);
int sem_wait(sem_t *sem);    // Decrement (wait)
int sem_post(sem_t *sem);    // Increment (signal)
int sem_close(sem_t *sem);   // Close semaphore
int sem_unlink(const char *name);  // Remove named semaphore
```

##### Short example:

```c
// Named semaphore example (shared between processes)
// Create or open a named semaphore
// O_CREAT: create if doesn't exist
// 0666: read/write permissions for all users
// 1: initial value
sem_t *sem = sem_open("/mysem", O_CREAT, 0666, 1);

// Wait operation (decrement semaphore)
sem_wait(sem);  // Blocks if semaphore value is 0

// ... critical section ...

// Signal operation (increment semaphore)
sem_post(sem);  // Increment semaphore value

// Clean up
sem_close(sem);  // Close semaphore
sem_unlink("/mysem");  // Remove named semaphore from system

// Unnamed semaphore example (shared between threads)
sem_t sem;
// Initialize unnamed semaphore
// 0: shared between threads
// 1: initial value
sem_init(&sem, 0, 1);

// Wait operation
sem_wait(&sem);  // Blocks if semaphore value is 0

// ... critical section ...

// Signal operation
sem_post(&sem);  // Increment semaphore value

// Clean up
sem_destroy(&sem);  // Destroy unnamed semaphore
```

##### Long example:

```c
void posix_semaphore_example() {
    const char *sem_name = "/mysem";
    sem_t *sem;

    // Create or open a named semaphore
    // O_CREAT: create if doesn't exist
    // 0666: read/write permissions for all users
    // 1: initial value (binary semaphore)
    sem = sem_open(sem_name, O_CREAT, 0666, 1);
    if (sem == SEM_FAILED) {
        perror("sem_open failed");  // Failed to create/open semaphore
        exit(1);
    }

    // Create child process to demonstrate inter-process synchronization
    pid_t pid = fork();
    if (pid == -1) {
        perror("fork failed");  // Failed to create child process
        exit(1);
    }

    if (pid == 0) {
        // Child process
        for (int i = 0; i < 3; i++) {
            // Wait for semaphore (decrement)
            if (sem_wait(sem) == -1) {
                perror("sem_wait failed");  // Failed to wait on semaphore
                exit(1);
            }

            printf("Child process: Critical section %d\n", i);
            sleep(1);  // Simulate work in critical section

            // Signal semaphore (increment)
            if (sem_post(sem) == -1) {
                perror("sem_post failed");  // Failed to signal semaphore
                exit(1);
            }
        }

        // Close semaphore in child process
        sem_close(sem);
        exit(0);
    } else {
        // Parent process
        for (int i = 0; i < 3; i++) {
            // Wait for semaphore (decrement)
            if (sem_wait(sem) == -1) {
                perror("sem_wait failed");  // Failed to wait on semaphore
                exit(1);
            }

            printf("Parent process: Critical section %d\n", i);
            sleep(1);  // Simulate work in critical section

            // Signal semaphore (increment)
            if (sem_post(sem) == -1) {
                perror("sem_post failed");  // Failed to signal semaphore
                exit(1);
            }
        }

        // Wait for child process to finish
        wait(NULL);

        // Clean up
        sem_close(sem);  // Close semaphore in parent process
        sem_unlink(sem_name);  // Remove named semaphore from system
    }
}

// Example of unnamed semaphore for thread synchronization
void thread_semaphore_example() {
    sem_t sem;
    pthread_t thread;

    // Initialize unnamed semaphore
    // 0: shared between threads
    // 1: initial value (binary semaphore)
    if (sem_init(&sem, 0, 1) == -1) {
        perror("sem_init failed");  // Failed to initialize semaphore
        exit(1);
    }

    // Create a new thread
    if (pthread_create(&thread, NULL, thread_function, &sem) != 0) {
        perror("pthread_create failed");  // Failed to create thread
        exit(1);
    }

    // Main thread work
    for (int i = 0; i < 3; i++) {
        // Wait for semaphore (decrement)
        sem_wait(&sem);  // Blocks if semaphore value is 0
        printf("Main thread: Critical section %d\n", i);
        sleep(1);  // Simulate work in critical section
        // Signal semaphore (increment)
        sem_post(&sem);  // Increment semaphore value
    }

    // Wait for thread to finish
    pthread_join(thread, NULL);

    // Clean up
    sem_destroy(&sem);  // Destroy unnamed semaphore
}
```
