---
title: \[P\] Examples
---

# Practical examples

## Task 1

Determine the smallest even number and the greatest odd number in an integer sequence.

::: tip

1. Partition the sequence into two sets: even and odd numbers. _Partitioning PoA_
2. Find the maximum in the odd set. _Maximum selection PoA_
3. Find the minimum in the even set. _Minimum selection PoA_
   :::

#### Input

$$ numbers[1..] \in \mathbb{R}^n$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(numbers)} \\
    \begin{cases}
      1 & \text{if $numbers[i]$ is even}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$even[1..cnt] = \{\ numbers[i]\ |\ numbers[i]\text{ is even}\ \}_{i=1}^{length(numbers)}$$
$$odd[1..length(numbers) - cnt] = \{\ numbers[i]\ |\ numbers[i]\text{ is odd}\ \}_{i=1}^{length(numbers)}$$
$$maxOdd = \max_{i=1}^{length(odd)} odd[i]$$
$$minEven = \min_{i=1}^{length(even)} even[i]$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < numbers.Length; i++){
  if (numbers[i] % 2 == 0){
    even[cnt] = numbers[i];
    cnt++;
  } else {
    odd[i - cnt] = numbers[i];
  }
}

int maxOdd = odd[0];
for (int i = 1; i < odd.Length; i++){
  if (odd[i] > maxOdd){
    maxOdd = odd[i];
  }
}

int minEven = even[0];
for (int i = 1; i < even.Length; i++){
  if (even[i] < minEven){
    minEven = even[i];
  }
}
```

## Task 2

We know the birth year of N friends. Write an algorithm that gives how many of them are of the same age.

::: tip

1. Count the number of friends born in each year. *Multiset transformation PoA*
2. Find the maximum in the resulting multiset. *Maximum selection PoA*
   :::

#### Input

$$ T_{friend} = (name \times birthyear) $$
$$ n \in \mathbb{N}^+ $$
$$ friends[1..n] \in T_{friend}^n$$

#### Postcondition

$$
cnt = \sum_{i=1}^{length(friends)} \\
    \begin{cases}
      1 & \text{if\ $\ \nexists j\ (1 \le j \lt i): friends[i].birthyear = friends[j].birthyear$}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$ U[1..cnt] = \bigcup_{i=1}^{length(friends)} \{\ friends[i].birthyear\ |\ friends[i].birthyear \notin U\ \}$$
Where U is a set of unique birth years. *After Set transformation PoA*
$$ R[1..cnt].birthyear = U[1..cnt]$$

$$
R[1..cnt].count = \bigcup_{i=1}^{length(friends)} \{\ \sum_{j=1}^{length(friends)} \\
    \begin{cases}
      1 & \text{if $friends[j].birthyear = R[i].birthyear$}\\
      0 & \text{otherwise}
    \end{cases}\ \}
$$

#### Implementation

```c#
int cnt = 0;
for (int i = 0; i < friends.Length; i++){
  int j = 0;
  while (j < cnt && friends[i].birthyear != R[j].birthyear){
    j++;
  }

  if (j == cnt){
    R[cnt].birthyear = friends[i].birthyear;
    R[cnt].count = 1;
    cnt++;
  } else {
    R[j].count++;
  }
}
```

## Task 3

The water temperature was measured at N locations of Lake Balaton for M days. List the days with the
highest temperatures that mostly deviate from the average for the whole period.

::: tip

1. Calculate the average temperature for the period. *Sequence calculation PoA*
2. Transform the sequence into deviations from the average. *Copy PoA*
3. Select maximum deviation. *Maximum selection PoA*
4. Select days with maximum deviation. *Multiple item selection PoA*
   :::

#### Input

$$ T_{measurement} = (loc \times day \times temp) $$
$$ measurements[1..] \in T_{measurement}^{n}$$

#### Postcondition

$$avg = \frac{\sum_{i=1}^{length(measurements)} measurements[i].temp}{length(measurements)}$$
$$\forall i\ (1 \le i \le length(measurements)): deviations[i] = measurements[i].temp - avg$$
$$maxDev = \max_{i=1}^{length(deviations)} deviations[i]$$

$$
cnt = \sum_{i=1}^{length(deviations)} \\
    \begin{cases}
      1 & \text{if $deviations[i] = maxDev$}\\
      0 & \text{otherwise}
    \end{cases}
$$

$$days[1..cnt] = \bigcup_{i=1}^{length(deviations)} \{\ measurements[i].day\ |\ deviations[i] = maxDev\ \}$$

#### Implementation

```c#
double avg = 0;
for (int i = 0; i < measurements.Length; i++){
  avg += measurements[i].temp;
}
avg /= measurements.Length;

double[] deviations = new double[measurements.Length];
for (int i = 0; i < measurements.Length; i++){
  deviations[i] = measurements[i].temp - avg;
}

double maxDev = deviations[0];
for (int i = 1; i < deviations.Length; i++){
  if (deviations[i] > maxDev){
    maxDev = deviations[i];
  }
}

int cnt = 0;
for (int i = 0; i < deviations.Length; i++){
  if (deviations[i] == maxDev){
    days[cnt] = measurements[i].day;
    cnt++;
  }
}
```
