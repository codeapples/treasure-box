---
title: '[A1-T] Series'
---

# Series

## Numerical series

### Definition

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a sequence. The expression

$$
a_1 + a_2 + \ldots + a_n = \sum_{n=1}^{\infty} a_n
$$

is called an infinite sum or an **infinite numerical series**. The numbers $a_n$ are called the **terms** of the series. The sequence

$$
S_n = a_1 + a_2 + \ldots + a_n = \sum_{k=1}^{n} a_k \quad (n \in \mathbb{N})
$$

is called the **partial sum** sequence of the series. $S_n$ is the n-th partial sum.

### Convergence of series

The series $\sum_{n=1}^{\infty} a_n$ is called convergent if it's partial sum sequence $(S_n)$ is convergent.

If the partial sum sequence does not converge, the series is said to be divergent.

### Sum of an infinite series

The sum of an infinite series is the limit of the partial sum sequence

$$
\sum_{n=1}^{\infty} a_n = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \sum_{k=1}^{n} a_k
$$

where $S_n$ is the $n$-th partial sum of the series.

### Theorem (sum of two convergent series)

If the series $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ are convergent, then the series $\sum_{n=1}^{\infty} (a_n + b_n)$ is also convergent and

$$
\sum_{n=1}^{\infty} (a_n + b_n) = \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n
$$

### Theorem (convergent series with scalar multiplication)

If the series $\sum_{n=1}^{\infty} a_n$ is convergent and $c \in \mathbb{R}$, then the series $\sum_{n=1}^{\infty} c \cdot a_n$ is also convergent and

$$
\sum_{n=1}^{\infty} c \cdot a_n = c \cdot \sum_{n=1}^{\infty} a_n
$$

## Geometric series

### Definition

Let $q \in \mathbb{K}$ be a fixed number. The series

$$
q + q^2 + q^3 + \cdots = \sum_{n=1}^{\infty} q^n
$$

is called a **geometric series** (with base $q$ or with quotient $q$).

### Theorem (convergence of geometric series)

The geometric series $\sum_{n=p}^{\infty} q^n$ is **convergent** if $|q| < 1$ and **divergent** if $|q| \geq 1$.

If the geometric series is convergent, the sum of the series is

$$
\sum_{n=1}^{\infty} q^n = \frac{1}{1 - q}
$$

if the starting index is $p$, then the sum is

$$
\sum_{n=p}^{\infty} q^n = \frac{q^p}{1 - q}
$$

## Zero sequence test

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ and suppose that series $\sum_{n=1}^{\infty} a_n$ is convergent. Then

$$
\lim_{n \to \infty} a_n = 0
$$

#### The converse statement is not true!

As a counterexample, consider the harmonic series

$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$

The terms of this series obviously tend to 0, but the series is divergent.

## Cauchy's convergence test

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$. Then the series $\sum_{n=1}^{\infty} a_n$ is convergent if and only if

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall m \geq n \geq N: |a_n + a_{n+1} + \ldots + a_m| < \varepsilon
$$

The number $N$ is called _threshold index_.

## Positive term series

### Definition

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$. The series $\sum_{n=1}^{\infty} a_n$ is called a **positive term series** if $a_n \geq 0\ (n \in \mathbb{N})$.

### Theorem

A positive term series is convergent if and only if it's partial sum sequence is bounded above.

### Property of partial sums

$$
S_{n+1} = S_n + a_{n+1} \geq S_n \quad (n \in \mathbb{N})
$$

$(S_n)$ is monotonically increasing.

## Comparison test

### Theorem

Let $a_n, b_n \in \mathbb{R}\ (n \in \mathbb{N})$ be two sequences such that $0 \leq a_n \leq b_n\ (n \in \mathbb{N})$. Then

#### Majorant criterion

If the series $\sum_{n=1}^{\infty} b_n$ is convergent, then the series $\sum_{n=1}^{\infty} a_n$ is also convergent.

#### Minorant criterion

If the series $\sum_{n=1}^{\infty} a_n$ is divergent, then the series $\sum_{n=1}^{\infty} b_n$ is also divergent.

## Hyperharmonic series

### Definition

Let $p > 0$ be a fixed real number. The positive term series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

is called a **hyperharmonic series** or _p-series_

### Theorem

Let $p > 0$. The hyperharmonic series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

is convergent if and only if $p > 1$.

## Alternating series

A real number series is called an alternating series if it contains alternately positive
and negative terms.

### Definition

Let $a_1 \geq a_2 \geq a_3 \geq \ldots > 0$ be a monotonically decreasing sequence of positive numbers. Then the series

$$
a_1 - a_2 + a_3 - a_4 + a_5 - \ldots = \sum_{n=1}^{\infty} (-1)^{n - 1} \cdot a_n
$$

is called a series of **Leibniz type**.

### Theorem (Leibniz criterion)

The series of Leibniz type

$$
\sum_{n=1}^{\infty} (-1)^{n-1} a_n
$$

is convergent if and only if $\lim_{n \to \infty} a_n = 0$.

## Absolute and conditional convergence of a series

### Absolute convergence

#### Definition

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$. The series $\sum_{n=1}^{\infty} a_n$ is called **absolutely convergent** if the series of absolute values

$$
\sum_{n=1}^{\infty} |a_n|
$$

is convergent.

#### Theorem

If a series is absolutely convergent, then it is convergent.

### Conditional convergence

#### Definition

A series that is convergent but not absolutely convergent is called **conditionally convergent**.

### Example

The alternating hyperharmonic series $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^p}$ is absolutely convergent if $p > 1$ and conditionally convergent if $0 < p \leq 1$.

## Rearrangement of series

### Theorem

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$, and $p : \mathbb{N} \to \mathbb{N}$ be a bijection. If the series $\sum_{n=1}^{\infty} a_n$, then the series

$$
\sum_{n=1}^{\infty} a_{p(i)}
$$

is absolutely convergent and is called a **rearrangement** of the series $\sum_{n=1}^{\infty} a_n$.

## Root test

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ and suppose that the limit

$$
L = \lim_{n \to \infty} \sqrt[n]{|a_n|} \in [0, +\infty]
$$

exists. Then

1. If $L < 1$, the series $\sum_{n=1}^{\infty} a_n$ is absolutely convergent.
2. If $L > 1$, the series $\sum_{n=1}^{\infty} a_n$ is divergent. Moreover, $\lim_{n \to \infty} |a_n| = +\infty$.

## Ratio test

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ and suppose that the limit

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| \in [0, +\infty]
$$

exists. Then

1. If $L < 1$, the series $\sum_{n=1}^{\infty} a_n$ is absolutely convergent.
2. If $L > 1$, the series $\sum_{n=1}^{\infty} a_n$ is divergent. Moreover, $\lim_{n \to \infty} |a_n| = +\infty$.

## Cauchy’s Product of two series

### Definition

Let $a_n, b_n \in \mathbb{K}\ (n \in \mathbb{N})$. Then the series

$$
\sum_{n=0}^{\infty} \sum_{
  \begin {aligned}
    i,j \in \mathbb{N} \cup \{0\} \\
    i+j=n
  \end {aligned}
} a_i \cdot b_j
$$

is called Cauchy's product of the series $\sum_{i=0}^{\infty} a_i$ and $\sum_{j=0}^{\infty} b_j$.

The above formula is often written shortly as

$$
\sum_{n=0}^{\infty} \sum_{i+j=n} a_i \cdot b_j
$$

### Theorem

Let $a_n, b_n \in \mathbb{K}\ (n \in \mathbb{N})$. If the series $\sum_{n=0}^{\infty} a_n$ and $\sum_{n=0}^{\infty} b_n$ are absolutely convergent, then the Cauchy's product of the two series is also absolutely convergent.

## Power series

### Definition

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a sequence and let $x_0 \in \mathbb{K}$. The series

$$
\sum_{n=0}^{\infty} a_n \cdot (x - x_0)^n
$$

is called a **power series**. The number $a_n$ are the coefficients of the power series, $x_0$ is the center of the power series, and $x$ is the variable of the power series.

### Convergence set

The set of all $x \in \mathbb{K}$ for which the power series converges is called the **convergence set** of the power series.

### Example

$$
\sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

is a power series. Here $a_n = \frac{1}{n!}$ and $x_0 = 0$.

### Theorem

Let $\sum_{n=0}^{\infty} a_n \cdot (x - x_0)^n$ be a power series and denote by $S$ it's convergence set. Suppose that the limit exists:

$$
L = \lim_{n \to \infty} \sqrt[n]{|a_n|} \in [0, +\infty]
$$

Then

1. If $L = 0$, the power series is absolutely convergent for all $x \in \mathbb{K}$. Thus $S = \mathbb{K}$.
2. If $L = +\infty$
   - the power series is absolutely convergent at $x = x_0$.
   - the power series is divergent for all $x \neq x_0$.
3. If $0 < L < +\infty$, then the power series is
   - absolutely convergent for all $x \in \mathbb{K}$ such that $|x - x_0| < \frac{1}{L}$.
   - divergent for all $x \in \mathbb{K}$ such that $|x - x_0| > \frac{1}{L}$.

Thus $B(x_0, \frac{1}{L}) \subseteq S \subseteq \overline{B}(x_0, \frac{1}{L})$.

### Radius of convergence

Using foregoing notations, suppose that limit $L$ exists. Then the radius of convergence is defined as following:

$$
R = \begin{cases}
  0 & \text{if } L = +\infty \\
  \frac{1}{L} & \text{if } 0 < L < +\infty \\
  +\infty & \text{if } L = 0
\end{cases}
$$
