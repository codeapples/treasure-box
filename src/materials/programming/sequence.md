---
title: \[P\] Algorithms
---

# Patterns of algorithms:<br>sequence -> sequence

## Copy

Used to process all the elements of a sequence using a transformation function.
E.g. get square of every element or convert all elements to lowercase.

#### Input

$$ X[1..] \in \mathbb{S}_{1}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S}_{1} \rightarrow \mathbb{S}_{2}\text{ // transformation function}$$

#### Postcondition

$$\forall i\ (1 \le i \le length(X)):Y[i] = F(X[i])$$

#### Implementation

```c#
for (int i = 0; i < X.Length; i++){
  Y[i] = F(X[i]);
}
```

#### Note

Copy can be used to transform multiple sequences into a single sequence.
The only difference is that input is a set of sequences instead of a single sequence.
E.g. sum two vectors

## Multiple item selection (MIS)

Used to select multiple elements from a sequence based on a certain condition.
Resulting sequence can be shorter or same length as the original sequence.
Therefore MIS implements Counting PoA, because we need separate indexing for the original and resulting sequences.

#### Input

$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{L}\text{ // logical function or expression}$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$Y[1..cnt] = \bigcup_{i=1}^{length(X)}\{\ X[i]\ |\ F(X[i])\ \}$$

*Short notation:*
$$ (cnt, Y[1..cnt]) = \text{MULTISELECT}_{i=1}^{length(X)} (X[i] | F(X[i]))$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (F(X[i])){
    Y[cnt] = X[i];
    cnt++;
  }
}
```

## Partitioning

Used to split a sequence into two sequences based on a certain condition.
E.g. split a list of numbers into even and odd numbers.

#### Input

$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{L}\text{ // logical function or expression}$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$Y[1..cnt] = \bigcup_{i=1}^{length(X)} \{\ X[i]\ |\ F(X[i])\ \}$$
$$Z[1..length(X) - cnt] = \bigcup_{i=1}^{length(X)} \{\ X[i]\ |\ \neg F(X[i])\ \}$$

*Short notation:*
$$ (cnt, Y, Z) = \text{PARTITION}_{i=1}^{length(X)} (X[i] | F(X[i]))$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (F(X[i])){
    Y[cnt] = X[i];
    cnt++;
  } else {
    Z[i - cnt] = X[i];
  }
}
```

#### Note

Partitioning can be used to within a single sequence. Instead of two resulting sequences, we have two partitions within the same sequence. E.g. rearrange collection so even numbers are placed before odd numbers.

## Intersection

Used to find common elements or elements with a common attribute between two sequences.

#### Input

$$ X[1..] \in \mathbb{S}_{1}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ Y[1..] \in \mathbb{S}_{2}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S}_{1} \times \mathbb{S}_{2} \rightarrow \mathbb{L}\text{ // logical function or expression}$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i], Y[j])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$Z[1..cnt] = \bigcup_{i=1}^{length(X)} \{\ X[i]\ |\ \exists j\ (1 \le j \le length(Y)) : F(X[i], Y[j])\ \}$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  for (int j = 0; j < Y.Length; j++){
    // simple conditional expression can be used
    // instead of a function call F(X[i], Y[j])
    if (F(X[i], Y[j])){
      Z[cnt] = X[i];
      cnt++;
    }
  }
}
```

## Union

Used to combine two sequences into a single sequence.
Repeated elements that exist in both sequences are not duplicated in the resulting sequence.

#### Input

$$ X[1..] \in \mathbb{S}_{1}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ Y[1..] \in \mathbb{S}_{2}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $X[i] \notin Y$}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$Z[1..length(X) + length(Y) - cnt] = \{ \bigcup_{i=1}^{length(X)} \{\ X[i]\ |\ X[i] \notin Y\ \}\} \cup Y$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  // simple conditional expression can be used
  // instead of a function call F(X[i], Y[j])
  // e.g. X[i] != Y[j]
  if (F(X[i], Y[j])){
    Z[cnt] = X[i];
    cnt++;
  }
}

for (int j = 0; j < Y.Length; j++){
  Z[cnt] = Y[j];
  cnt++;
}
```

#### Note

There are order-preserving implementations of union, but they are more complicated.
E.g. order-preserving merge of two sorted sequences.

#### Implementation

```c#
int i = 0;
int j = 0;
int cnt = 0;
while (i < X.Length && j < Y.Length){
  // if X[i] is smaller than Y[j] take X[i] and increment X index
  if (X[i] < Y[j]){
    Z[cnt] = X[i];
    i++;
  // if Y[j] is smaller than X[i] take Y[j] and increment Y index
  } else if (X[i] > Y[j]){
    Z[cnt] = Y[j];
    j++;
  // if X[i] and Y[j] are equal take either one and increment both indices
  } else {
    Z[cnt] = X[i];
    i++;
    j++;
  }
  cnt++;
}
```

## Set transformation

Used to transform a sequence into a set.
E.g. remove duplicates from a sequence.

#### Input

$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if\ $\ \nexists j\ (1 \le j \lt i): X[i] = X[j]$}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$Y[1..cnt] = \bigcup_{i=1}^{length(X)} \{\ X[i]\ |\ X[i] \notin Y\ \}$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  // F(Y[..cnt], X[i]) is a function that implements decision PoA
  // it returns true if X[i] is not in Y[..cnt]
  // Y[..cnt] contains elements that were already processed up to this point
  if (F(Y[..cnt], X[i])){
    Y[cnt] = X[i];
    cnt++;
  }
}
```

#### Note

Set transformation is a special case of MIS, where the condition is based on whether an item has been put in the resulting set yet (determined by Decision PoA).

## Multiset transformation

Used to transform a sequence into a multiset. Multiset stores several attributes of the original sequence. E.g. value and count of each value or other.

### First example

Get names of students and count how many students have the same name.

#### Input

$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if\ $\ \nexists j\ (1 \le j \lt i): X[i] = X[j]$}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$Y[1..cnt] = \bigcup_{i=1}^{length(X)} \{\ X[i]\ |\ X[i] \notin Y\ \}$$

$$
Z[1..cnt] = \bigcup_{i=1}^{length(X)} \{\ \sum_{j=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $X[j] = Y[i]$}\\
      0 & \text{otherwise}
    \end{cases}\ \}
$$

Where Y contains unique names and Z contains count of each name.

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  int j = 0;
  // iterate through Y (resulting collection)
  // if X[i] is already in Y, then j will be the index of X[i] in Y
  while (j < cnt && X[i] != Y[j]){
    j++;
  }

  // if j reached the end of Y, then X[i] is not in Y
  if (j == cnt){
    // add X[i] to Y
    Y[cnt] = X[i];
    // set count of X[i] to 1
    Z[cnt] = 1;
    cnt++;
  // otherwise X[i] is in Y
  } else {
    // then only increment count of X[i]
    Z[j]++;
  }
}
```

### Second example

We're given a list of payouts and we need to calculate the total amount earned for each employee.

#### Input

$$ T_{employee} = \{\ name\ \times\ amount\ \}$$
$$ X[1..] \in T_{employee}^n$$
#### Postcondition

$$
cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if\ $\ \nexists j\ (1 \le j \lt i): X[i].name = X[j].name$}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$ U[1..cnt] = \bigcup_{i=1}^{length(X)} \{\ X[i].name\ |\ X[i].name \notin U\ \}$$
Where U is a set of unique employee names. *After Set transformation PoA*
$$ R[1..cnt].name = U[1..cnt]$$
$$ R[1..cnt].amount =\bigcup_{i=1}^{length(X)} \{\ \sum_{j=1}^{length(X)} X[j].amount\ |\ X[j].name = U[i].name\ \}$$
Where R is resulting collection of structures of employees.

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  int j = 0;
  // iterate through R (resulting collection)
  // if X[i].name is already in R, then j will be the index of X[i].name in R
  while (j < cnt && X[i].name != R[j].name){
    j++;
  }

  // if j reached the end of R, then X[i].name is not in R
  if (j == cnt){
    // add X[i].name to R
    R[cnt].name = X[i].name;
    // set amount of X[i].name to X[i].amount
    R[cnt].amount = X[i].amount;
    cnt++;
  // otherwise X[i].name is in R
  } else {
    // then only increment amount of X[i].name
    R[j].amount += X[i].amount;
  }
}
```
