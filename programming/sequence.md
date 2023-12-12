---
title: Algorithms
---

# Patterns of algorithms:

# sequence -> sequence

## Copy

Used to process all the elements of a sequence using a transformation function.
E.g. get square of every element or convert all elements to lowercase.

#### Input

$$ X[1..] \in \mathbb{S}_{1}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S}_{1} \rightarrow \mathbb{S}_{2}\text{ // transformation function}$$

#### Postcondition
$$Y[1..length(X)] = \{\ F(X[i])\ \}_{i=1}^{length(X)}$$

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
$$cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}$$
$$Y[1..cnt] = \{\ X[i]\ |\ F(X[i])\ \}_{i=1}^{length(X)}$$

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
$$cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}$$
$$Y[1..cnt] = \{\ X[i]\ |\ F(X[i])\ \}_{i=1}^{length(X)}$$
$$Z[1..length(X) - cnt] = \{\ X[i]\ |\ \neg F(X[i])\ \}_{i=1}^{length(X)}$$

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
$$cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i], Y[j])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}$$
$$Z[1..cnt] = \{\ X[i]\ |\ \exists Y[j] \text{ such that } F(X[i], Y[j])\ \}_{i=1}^{length(X)}$$

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
$$cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $X[i] \notin Y$}\\
      0 & \text{otherwise}
    \end{cases}$$
$$Z[1..length(X) + length(Y) - cnt] = \{\ X[i]\ |\ X[i] \notin Y\ \}_{i=1}^{length(X)} \cup Y$$

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
