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
