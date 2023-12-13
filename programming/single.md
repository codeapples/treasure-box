---
title: Algorithms
---
# Patterns of algorithms:
# sequence -> single value (reduction)

## Counting
Used to count a number of elements in a collection, or to count the number of times a certain condition is satisfied.

#### Input
$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{L}\text{ // logical function or expression}$$
#### Postcondition
$$cnt = \sum_{i=1}^{length(X)} \\
    \begin{cases}
      1 & \text{if $F(X[i])$ // if condition is met}\\
      0 & \text{otherwise}
    \end{cases}$$

#### Implementation
```c#
int cnt = 0;
for (int i = 0; i < X.Length; i++){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (F(X[i])){
    cnt++;
  }
}
```

## Maximum selection
Used to find the maximum element (value or index or both) in a collection.

#### Input
$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$

#### Postcondition
$$maxInd, maxVal = \max_{i=1}^{length(X)} X[i]$$

*Short notation:*
$$ (maxInd) = \text{MAXIND}_{i=1}^{length(X)} (i)$$
$$ (maxVal) = \text{MAXVAL}_{i=1}^{length(X)} (X[i])$$

#### Implementation
```c#
int maxInd = 0;
int maxVal = X[0];
// iterate over the collection
// start from 1, because we already have the first element
for (int i = 1; i < X.Length; i++){
  // if the current element is greater than the current maximum
  if (X[i] > maxVal){
    maxInd = i;
    maxVal = X[i];
  }
}
```
Maximum selection can be used on a collection of complex elements, where the maximum is determined by a certain attribute of the element. E.g. find the employee with the highest salary.
```c#
int maxInd = 0;
int maxVal = X[0].salary;
for (int i = 1; i < X.Length; i++){
  // logical expression can be substituted with a function call
  // if more complicated logic is needed
  if (X[i].salary > maxVal){
    maxInd = i;
    maxVal = X[i].salary;
  }
}
```
#### Note
Minimum selection is similar to maximum selection, but the condition is reversed.

## Selection
Used to select an element that has a certain attribute from a collection. It is assumed that the element is present in the collection.

#### Input
$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{L}\text{ // logical function or expression}$$

#### Postcondition
$$ind = i:F(X[i])\ and$$
$$val = X[ind]$$
*Short notation:*
$$ (ind, val) = \text{SELECT}_{i=1}^{length(X)} (X[i]\ |\ F(X[i]))$$
#### Implementation
```c#
int ind = 0;
int val = 0;
int i = 0;
while (i < X.Length){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (F(X[i])){
    ind = i;
    val = X[i];
  }
  i++;
}
```

## Decision
Used to determine if a collection has an item/element with certain attribute.

#### Input
$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{L}\text{ // logical function or expression}$$

#### Postcondition
$$exists = \exists_{i=1}^{length(X)}F(X[i])$$

#### Implementation
```c#
bool exists = false;
int i = 0;
while (!exists && i < X.Length){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (F(X[i])){
    exists = true;
  }
  i++;
}
```
A variation of Decision PoA is Decision(All), which is used to determine if all elements in a collection have a certain attribute.
#### Postcondition
$$all = \forall_{i=1}^{length(X)}F(X[i])$$
#### Implementation
```c#
bool all = true;
int i = 0;
while (all && i < X.Length){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (!F(X[i])){
    all = false;
  }
  i++;
}
```

## Search
Used to find an element with a given attribute (value or index or both) in a collection, element may not exist in that collection.

Search combines the functionality of Decision and Selection PoAs.
#### Input
$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{L}\text{ // logical function or expression}$$

#### Postcondition
$$exists = \exists_{i=1}^{length(X)}F(X[i])$$
$$\text{if $exists$}\rightarrow ind = i:F(X[i])\ and$$
$$val = X[ind]$$

*Short notation:*
$$ (exists, ind, val) = \text{SEARCH}_{i=1}^{length(X)} (X[i]\ |\ F(X[i]))$$
#### Implementation
```c#
bool exists = false;
int ind = 0;
int val = 0;
int i = 0;
while (!exists && i < X.Length){
  // simple conditional expression can be used
  // instead of a function call F(X[i])
  if (F(X[i])){
    exists = true;
    ind = i;
    val = X[i];
  }
  i++;
}
```
There are many variations of implementation, e.g. if element exists can be determined by checking if the original value if ind has changed or not.
```c#
int ind = -1;
int val = 0;
int i = 0;
while (ind < 0 && i < X.Length){
  if (F(X[i])){
    // if index is changed, then element exists
    ind = i;
    val = X[i];
  }
  i++;
}
```
In case of using a variation of search - postcondition has to reflect that.

## Sequence calculation
Used to calculate a single value from a collection of values using a transformation function.

Examples: sum, product, concatenation of all the elements of a collection.

#### Input
$$ X[1..] \in \mathbb{S}^*\text{ // where $\mathbb{S}$ - arbitrary set}$$
$$ F: \mathbb{S} \rightarrow \mathbb{S}\text{ // transformation function that returns value $\in\mathbb{S}$}$$

#### Postcondition
$$sc = F(X[1]..X[length(X)])\text{ // where $sc$ - sequence calculation result}$$

### Specific example: Summation
#### Postcondition
$$sc = \sum_{i=1}^{length(X)}X[i]$$

#### Implementation
```c#
int sc = 0;
for (int i = 0; i < X.Length; i++){
  sc += X[i];
}
```
### Specific example: Product
#### Postcondition
$$sc = \prod_{i=1}^{length(X)}X[i]$$

#### Implementation
```c#
int sc = 1;
for (int i = 0; i < X.Length; i++){
  sc *= X[i];
}
```

### Specific example: Concatenation
#### Postcondition
$$sc = X[1]..X[length(X)]$$

#### Implementation
```c#
string sc = "";
for (int i = 0; i < X.Length; i++){
  sc += X[i];
}
```


