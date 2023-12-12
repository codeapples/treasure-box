# Practical examples

## Task 1
Determine the smallest even number and the greatest odd number in an integer sequence.

::: tip
1. Partition the sequence into two sets: even and odd numbers. *Partitioning PoA*
2. Find the maximum in the odd set. *Maximum selection PoA*
3. Find the minimum in the even set. *Minimum selection PoA*
:::
#### Input
$$ numbers[1..] \in \mathbb{R}^n$$

#### Postcondition
$$cnt = \sum_{i=1}^{length(numbers)} \\
    \begin{cases}
      1 & \text{if $numbers[i]$ is even}\\
      0 & \text{otherwise}
    \end{cases}$$
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


