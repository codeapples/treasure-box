---
title: '[OS] Exam project skeleton'
---

# Exam program skeleton

Even if the task of the exam is not known, it is reasonable to create a skeleton for the project. This way, you can focus on the task itself and not on the project structure.

## Program structure

By the information given, every exam program flow would be the following:

- do the initialization
- fork the process 1-2 times
- send signals between processes
- establish a communication channel between processes (e.g. pipe, message queue, shared memory)
- use the communication channel to send data between processes
- do the cleanup

So to simplify comprehension and to separate processes, we can do the following:

```c
int main(int argc, char *argv[]) {
    int child1, child2;
    srand(time(NULL)); // seed random number generator

    // do pre fork logic based on task

    child1 = fork();
    if (child1 < 0) {
        perror("child1 fork");
        exit(EXIT_FAILURE);
    }

    if (child1 == 0) {
        child1_exclusive();
    } else {
        child2 = fork();
        if (child2 < 0) {
            perror("child2 fork");
            exit(EXIT_FAILURE);
        }

        if (child2 == 0) {
            child2_exclusive();
        } else {
            parent_exclusive();
        }
    }

    return 0;
}

void parent_exclusive() {
    // init parent
    // do logic
    // cleanup
}

void child1_exclusive() {
    // init child
    // do logic
    // cleanup

    exit(EXIT_SUCCESS);
}

void child2_exclusive() {
    // init child
    // do logic
    // cleanup

    exit(EXIT_SUCCESS);
}

```
