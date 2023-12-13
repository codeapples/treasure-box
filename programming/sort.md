# Patterns of algorithms
# sort & other

## Bubble sort
Used to sort a collection of elements with simple exchange method.

#### Input
$$ X[1..] \in \mathbb{R}^n$$

#### Postcondition
$$\forall_{i=1}^{length(X)-1} X[i] \le X[i+1]$$

#### Implementation
```c#
// we need to do this n - 1 times
for (int i = 0; i < X.Length - 1; i++){
  // go through the collection
  // and exchange elements if needed
  // each time the largest element
  // will be moved to the end of the window
  // so we can reduce the window size by 1 each time
  for (int j = 0; j < X.Length - i - 1; j++){
    if (X[j] > X[j + 1]){
      int tmp = X[j];
      X[j] = X[j + 1];
      X[j + 1] = tmp;
    }
  }
}
```

## Selection sort
Used to sort a collection of elements by finding the smallest element and moving it to the beginning of the collection.

#### Input
$$ X[1..] \in \mathbb{R}^n$$

#### Postcondition
$$\forall_{i=1}^{length(X)-1} X[i] \le X[i+1]$$

#### Implementation
```c#
// we need to do this n - 1 times
for (int i = 0; i < X.Length - 1; i++){
  // assume that the current element
  // is the smallest one
  int minInd = i;
  // find the smallest element
  // in the unsorted part of the collection
  for (int j = i + 1; j < X.Length; j++){
    if (X[j] < X[minInd]){
      minInd = j;
    }
  }
  // swap the current element
  // with the smallest element
  int tmp = X[i];
  X[i] = X[minInd];
  X[minInd] = tmp;
}
```
