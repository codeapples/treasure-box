---
title: '[A-1] Convergence of series'
---

# Convergence of series

## Infinite series

An infinite series is the sum of the terms of an infinite sequence. The sum of the terms of a sequence is called a series. If the sequence of partial sums converges to a limit, the series is said to be convergent. If the sequence of partial sums does not converge, the series is said to be divergent.

For $(a_n): \mathbb{N} \to \mathbb{R}$, the series is denoted as:

$$
\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots
$$

#### N-th partial sum of a series

The sequence $(S_n)$ is called the partial sum sequence of the series. $S_n$ is the n-th partial sum of a series and is the sum of the first n terms of the series:

$$
S_n = a_1 + a_2 + a_3 + \cdots + a_n = \sum_{k=1}^{n} a_k
$$

#### Convergence of infinite series

The series $\sum_{n=1}^{\infty} a_n$ is called convergent if it's partial sum sequence $(S_n)$ is convergent.

## Geometric series

A geometric series is a series of the form:

$$
\sum_{n=p}^{\infty} q^n = q^p + q^{p+1} + q^{p+2} + \cdots = q^p \cdot (1 + q + q^2 + \cdots) = \frac{q^p}{1 - q}
$$

#### Convergence of geometric series

The geometric series $\sum_{n=p}^{\infty} q^n$ is **convergent** if $|q| < 1$ and **divergent** if $|q| \geq 1$.

## Hyperharmonic series (p-series)

#### Harmonic series

A harmonic series is an infinite series formed by summing all positive unit fractions. The general form of a harmonic series is:

$$
\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \cdots
$$

#### Hyperharmonic series (also known as p-series)

A hyperharmonic series is a generalization of the harmonic series. The general form of a hyperharmonic series is:

$$
\sum_{n=1}^{\infty} \frac{1}{n^p} = 1 + \frac{1}{2^p} + \frac{1}{3^p} + \cdots
$$

where $p$ is a positive real number.

#### Convergence of hyperharmonic series

The hyperharmonic series $\sum_{n=1}^{\infty} \frac{1}{n^p}$ is **convergent** if $p > 1$ and **divergent** if $p \leq 1$.

## Alternating series

An alternating series is a series in which the terms alternate in sign. The general form of an alternating series is:

$$
\sum_{n=1}^{\infty} (-1)^{n} a_n = a_1 - a_2 + a_3 - a_4 + \cdots
$$

Special case of alternating series where

$$
a_n \geq 0 \quad (n \in \mathbb{N}) \quad \text{and} \quad a_{n + 1} \leq a_n
$$

is called **Leibniz type** series.

#### Convergence of alternating series

An alternating series $\sum_{n=1}^{\infty} (-1)^{n + 1} a_n$ is **convergent** if the following conditions are satisfied:

1. The terms $a_n$ are positive and decreasing, i.e., $\forall n \in \mathbb{N}, a_n > 0$ and $a_{n + 1} \leq a_n$.
2. The terms $a_n$ converge to zero, i.e., $\lim_{n \to \infty} a_n = 0$.

## Telescoping series

A telescoping series is a series in which most of the terms cancel out, leaving only a finite number of terms. The general form of a telescoping series is:

$$
\sum_{n=1}^{\infty} (a_n - a_{n + 1}) = (a_1 - a_2) + (a_2 - a_3) + (a_3 - a_4) + \cdots
$$

#### Convergence of telescoping series

A telescoping series $\sum_{n=1}^{\infty} (a_n - a_{n + 1})$ is **convergent** if the sequence of partial sums $(S_n)$ converges.

## Absolute and conditional convergence

### Absolute convergence

A series $\sum_{n=1}^{\infty} a_n$ is said to be absolutely convergent if the series of the absolute values of the terms converges:

$$
\sum_{n=1}^{\infty} |a_n| = |a_1| + |a_2| + |a_3| + \cdots
$$

$\sum_{n=1}^{\infty} a_n$ is **absolutely convergent** $\implies \sum_{n=1}^{\infty} a_n$ is **convergent**

### Conditional convergence

$\sum_{n=1}^{\infty} a_n$ is **convergent** $\rlap{\quad \not} \implies \sum_{n=1}^{\infty} a_n$ is **absolutely convergent**

## Linearity of convergent series

If $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ are convergent series

$$
\sum_{n=1}^{\infty} (c \cdot a_n + d \cdot b_n)
$$

is also convergent for any $c, d \in \mathbb{R}$.

## Tests for convergence of series

### Zero test

Zero test is quick way to test for divergence of a series.

$$
\sum_{n=1}^{\infty} a_n
$$

$\lim_{n \to \infty} a_n \neq 0 \implies$ the series is **divergent**

$\lim_{n \to \infty} a_n = 0 \implies$ the series may not be **divergent** but it is **inconclusive**

### Comparison test

$$
\sum_{n=1}^{\infty} a_n \quad \text{and} \quad \sum_{n=1}^{\infty} b_n
$$

$$
0 \leq a_n \leq b_n \quad (n \geq n_0)
$$

$\sum_{n=1}^{\infty} b_n$ is **convergent** $\implies \sum_{n=1}^{\infty} a_n$ is **convergent**

$\sum_{n=1}^{\infty} a_n$ is **divergent** $\implies \sum_{n=1}^{\infty} b_n$ is **divergent**

### Ratio test

$$
\lim_{n \to \infty} \left| \frac{a_{n + 1}}{a_n} \right| = L
$$

- $L < 1 \implies \sum_{n=1}^{\infty} a_n$ is **absolutely convergent**
- $L > 1 \implies \sum_{n=1}^{\infty} a_n$ is **divergent**
- $L = 1 \implies$ **inconclusive**

### Root test

$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = L
$$

- $L < 1$: $\sum_{n=1}^{\infty} a_n$ is **absolutely convergent**
- $L > 1$: $\sum_{n=1}^{\infty} a_n$ is **divergent**
- $L = 1$: **inconclusive**

### Leibniz criterion

For alternating series

$$
\sum_{n=1}^{\infty} (-1)^{n} a_n
$$

where $a_n > 0 \quad (n \in \mathbb{N})$ and $a_{n + 1} \leq a_n$ (Leibniz type)

## Example 1

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{n}{2n^2 + n + 5}
$$

You may quickly try zero test:

$$
\lim_{n \to \infty} \frac{n}{2n^2 + n + 5} = \lim_{n \to \infty} \frac{1}{n} \cdot \frac{1}{2 + \frac{1}{n} + \frac{5}{n^2}} = 0
$$

Zero test is inconclusive.

We can conclude that (for large enough $n$) $\frac{n}{2n^2 + n + 5} \approx \frac{n}{2n^2} = \frac{1}{2n}$.

$\sum_{n=1}^{\infty} \frac{1}{2n} = \sum_{n=1}^{\infty} \frac{1}{n}$ is a harmonic sequence which is divergent.

Therefore, we assume that $\sum_{n=1}^{\infty} \frac{n}{2n^2 + n + 5}$ is also divergent. But we need to prove our assumption with comparison test.

$$
0 \leq a_n \leq \frac{n}{2n^2 + n + 5} \leq \frac{1}{2n}
$$

We need $a_n$, so let's find OPL.

$$
\frac{n}{2n^2 + n + 5} \geq \frac{n}{2n^2 + n^ + 5n^2} = \frac{n}{8n^2} = \frac{1}{8n}
$$

$\sum_{n=1}^{\infty} \frac{1}{8n} = \frac{1}{8} \sum_{n=1}^{\infty} \frac{1}{n}$ is a harmonic sequence which is divergent.

Therefore we have

$$
0 \leq \frac{1}{8n} \leq \frac{n}{2n^2 + n + 5} \leq \frac{1}{2n}
$$

Now, by comparison test we can conclude that, because $\sum_{n=1}^{\infty} \frac{1}{8n}$ is divergent, $\sum_{n=1}^{\infty} \frac{n}{2n^2 + n + 5}$ is also divergent.

## Example 2

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{n}{n^3 + n + 5}
$$

Zero test gives zero, so inconclusive.

For large enough $n$

$$
\frac{n}{n^3 + n + 5} \approx \frac{n}{n^3} = \frac{1}{n^2}
$$

$\sum_{n=1}^{\infty} \frac{1}{n^2}$ is a hyperharmonic series with $p = 2 > 1$ which is convergent.

Therefore

$$
0 \leq \frac{n}{n^3 + n + 5} \leq \frac{1}{n^2}
$$

So, by comparison test, we proved that $\sum_{n=1}^{\infty} \frac{n}{n^3 + n + 5}$ is convergent.

## Example 3

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{n}{2n + 1}
$$

Zero test:

$$
\lim_{n \to \infty} \frac{n}{2n + 1} = \lim_{n \to \infty} \frac{1}{2 + \frac{1}{n}} = \frac{1}{2} \neq 0
$$

Therefore, by zero test, the series is divergent.

## Example 4

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} (\sqrt{n + 1} - \sqrt{n})
$$

Zero test inconclusive:

$$
\lim_{n \to \infty} (\sqrt{n + 1} - \sqrt{n}) = \lim_{n \to \infty} \frac{1}{\sqrt{n + 1} + \sqrt{n}} = 0
$$

For large enough $n$

$$
\frac{1}{\sqrt{n + 1} + \sqrt{n}} \approx \frac{1}{\sqrt{n} + \sqrt{n}} = \frac{1}{2\sqrt{n}} = \frac{1}{2} \cdot \frac{1}{n^{1/2}}
$$

$\frac{1}{2}\sum_{n=1}^{\infty} \frac{1}{n^{1/2}}$ is a p-series with $p = 1/2 \leq 1$ which is divergent.

Therefore

$$
0 \leq \frac{1}{2\sqrt{n}} \leq \sqrt{n + 1} - \sqrt{n}
$$

By comparison test, we can conclude that $\sum_{n=1}^{\infty} (\sqrt{n + 1} - \sqrt{n})$ is divergent.

## Example 5

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \sqrt[n]{0.1}
$$

Zero test:

$$
\lim_{n \to \infty} \sqrt[n]{0.1} = 1
$$

Therefore, by zero test, the series is divergent.

## Example 6

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{1}{\sqrt{n (1 + n^2)}}
$$

Zero test is inconclusive.

For large enough $n$

$$
\frac{1}{\sqrt{n (1 + n^2)}} = \frac{1}{\sqrt{n^3 + n}} \approx \frac{1}{\sqrt{n^3}} = \frac{1}{n^{3/2}}
$$

$\sum_{n=1}^{\infty} \frac{1}{n^{3/2}}$ is a p-series with $p = \frac{3}{2} > 1$ which is convergent.

Therefore

$$
0 \leq \frac{1}{\sqrt{n (1 + n^2)}} \leq \frac{1}{n^{3/2}}
$$

By comparison test, we can conclude that $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n (1 + n^2)}}$ is convergent.

## Example 7

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{1}{\sqrt{n(n + 3)}}
$$

Zero test is inconclusive.

For large enough $n$

$$
\frac{1}{\sqrt{n(n + 3)}} = \frac{1}{\sqrt{n^2 + 3n}} \approx \frac{1}{\sqrt{n^2}} = \frac{1}{n}
$$

$\sum_{n=1}^{\infty} \frac{1}{n}$ is a harmonic series which is divergent.

Therefore

$$
0 \leq a_n \leq \frac{1}{\sqrt{n(n + 3)}} \leq \frac{1}{n}
$$

We need $a_n$, so let's find OPL.

$$
\frac{1}{\sqrt{n(n + 3)}} = \frac{1}{\sqrt{n^2 + 3n}} \geq \frac{1}{\sqrt{4n^2}} = \frac{1}{2n}
$$

$\sum_{n=1}^{\infty} \frac{1}{2n} = \frac{1}{2} \sum_{n=1}^{\infty} \frac{1}{n}$ is a harmonic series which is divergent.

Therefore we have

$$
0 \leq \frac{1}{2n} \leq \frac{1}{\sqrt{n(n + 3)}} \leq \frac{1}{n}
$$

Now, by comparison test we can conclude that, because $\sum_{n=1}^{\infty} \frac{1}{2n}$ is divergent, $\sum_{n=1}^{\infty} \frac{1}{\sqrt{n(n + 3)}}$ is also divergent.

## Example 8

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{(n!)^2}{(2n)!}
$$

General rule of thumb, if you see factorials, try ratio test.

$$
L = \lim_{n \to \infty} \left| \frac{a_{n + 1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{(n + 1)!^2}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2} \right|
$$

Since every term is positive, we can remove absolute values.

$$
\lim_{n \to \infty} \frac{(n + 1)!^2}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2} = \lim_{n \to \infty} \frac{(n + 1)^2 (n!)^2 \cdot (2n)!}{(2n + 1)(2n + 2)(2n)! \cdot (n!)^2} =
$$

$$
= \lim_{n \to \infty} \frac{(n + 1)^2}{(2n + 1)(2n + 2)} = \lim_{n \to \infty} \frac{n^2(1 + \frac{1}{n})^2}{n^2(2 + \frac{1}{n})(2 + \frac{2}{n})} =
$$

$$
= \lim_{n \to \infty} \frac{(1 + \frac{1}{n})^2}{(2 + \frac{1}{n})(2 + \frac{2}{n})} = \frac{(1 + 0)^2}{(2 + 0) \cdot (2 + 0)} = \frac{1}{4}
$$

Since $L = \frac{1}{4} < 1$, by ratio test, the series is absolutely convergent.

## Example 9

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \left( \frac{n}{n + 1} \right)^{n^2 + n + 1}
$$

Rule of thumb, if you see exponentials, try root test.

$$
L = \lim_{n \to \infty} \sqrt[n]{\left| \left( \frac{n}{n + 1} \right)^{n^2 + n + 1}\right|}
$$

Every term is positive, so we can remove absolute value.

Also notice that we can transform the expression inside the root to match euler number formula.

$$
\frac{n}{n + 1} = \frac{1}{\frac{n + 1}{n}} = \frac{1}{1 + \frac{1}{n}}
$$

$$
\lim_{n \to \infty} \sqrt[n]{\left( \frac{n}{n + 1} \right)^{n^2 + n + 1}} = \lim_{n \to \infty} \sqrt[n]{\left( \frac{1}{1 + \frac{1}{n}} \right)^{n^2} \cdot \left( \frac{1}{1 + \frac{1}{n}} \right)^{n} \cdot \left( \frac{1}{1 + \frac{1}{n}} \right)} =
$$

$$
= \lim_{n \to \infty} \sqrt[n]{\left( \frac{1}{1 + \frac{1}{n}} \right)^{n^2}} \cdot \lim_{n \to \infty} \sqrt[n]{\left( \frac{1}{1 + \frac{1}{n}} \right)^{n}} \cdot \lim_{n \to \infty} \sqrt[n]{\frac{1}{1 + \frac{1}{n}}} =
$$

$$
= \lim_{n \to \infty} \left( \frac{1}{1 + \frac{1}{n}} \right)^{n} \cdot \lim_{n \to \infty} \left( \frac{1}{1 + \frac{1}{n}} \right) \cdot \lim_{n \to \infty} \sqrt[n]{\frac{1}{1 + \frac{1}{n}}} =
$$

$$
= \frac{1}{e} \cdot \frac{1}{1 + 0} \cdot 1 = \frac{1}{e}
$$

Since $L = \frac{1}{e} < 1$, by root test, the series is absolutely convergent.

## Example 10

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{n^2}{2^n}
$$

Rule of thumb, if you see exponentials, try root test.

$$
L = \lim_{n \to \infty} \sqrt[n]{\left| \frac{n^2}{2^n} \right|}
$$

Since every term is positive, we can remove absolute value.

$$
= \lim_{n \to \infty} \sqrt[n]{\frac{n^2}{2^n}} = \lim_{n \to \infty} \frac{\sqrt[n]{n^2}}{\sqrt[n]{2^n}} = \lim_{n \to \infty} \frac{\sqrt[n]{n^2}}{2} = \frac{1}{2}
$$

Since $L = \frac{1}{2} < 1$, by root test, the series is absolutely convergent.

## Example 11

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{(n!)^2}{2^{n^2}}
$$

Rule of thumb, if you see factorials, try ratio test.

$$
L = \lim_{n \to \infty} \left| \frac{a_{n + 1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{(n + 1)!^2}{2^{(n + 1)^2}} \cdot \frac{2^{n^2}}{(n!)^2} \right| =
$$

Since every term is positive, we can remove absolute value.

$$
= \lim_{n \to \infty} \frac{(n + 1)^2 (n!)^2 \cdot 2^{n^2}}{2^{n^2 + 2n + 1} \cdot (n!)^2} = \lim_{n \to \infty} \frac{(n + 1)^2}{2^{2n + 1}} = 0
$$

Since $L = 0 < 1$, by ratio test, the series is absolutely convergent.

## Example 12

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} (-1)^n \cdot (\sqrt{n + 1} - \sqrt{n})
$$

Rule of thumb, if you see alternating series, try Leibniz criterion.

$$
a_n = \sqrt{n + 1} - \sqrt{n} = \frac{1}{\sqrt{n + 1} + \sqrt{n}}
$$

Leibniz type?

$$
a_n \geq 0 \quad (n \in \mathbb{N}) \quad \checkmark
$$

$$
a_{n + 1} \leq a_n \quad \Leftrightarrow \quad \frac{1}{\sqrt{n + 2} + \sqrt{n + 1}} \leq \frac{1}{\sqrt{n + 1} + \sqrt{n}} \quad \checkmark
$$

Therefore $\sum_{n=1}^{\infty} (-1)^n \cdot a_n$ is series of Leibniz type.

Now, we need to check if $a_n$ converges to zero.

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{1}{\sqrt{n + 1} + \sqrt{n}} = 0
$$

Since $a_n$ converges to zero, by Leibniz criterion, the series is convergent.

## Example 13

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{(-1)^n \cdot (n + 1)}{2n^2 + 5n + 2}
$$

Rule of thumb, if you see alternating series, try Leibniz criterion.

$$
a_n = \frac{n + 1}{2n^2 + 5n + 2}
$$

Leibniz type?

$$
a_n \geq 0 \quad (n \in \mathbb{N}) \quad \checkmark
$$

$$
a_{n + 1} \leq a_n \quad \Leftrightarrow \quad \frac{n+2}{2(n + 1)^2 + 5(n + 1) + 2} \leq \frac{n + 1}{2n^2 + 5n + 2} \quad \checkmark
$$

Therefore $\sum_{n=1}^{\infty} (-1)^n \cdot a_n$ is series of Leibniz type.

Now, we need to check if $a_n$ converges to zero.

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{n + 1}{2n^2 + 5n + 2} = \lim_{n \to \infty} \frac{n(1 + \frac{1}{n})}{n^2(2 + \frac{5}{n} + \frac{2}{n^2})} = 0
$$

Since $a_n$ converges to zero, by Leibniz criterion, the series is convergent.

## Example 14

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{2^n \cdot n!}{n^n}
$$

Rule of thumb, if you see factorials, try ratio test.

$$
L = \lim_{n \to \infty} \left| \frac{a_{n + 1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{2^{n + 1} \cdot (n + 1)!}{(n + 1)^{n + 1}} \cdot \frac{n^n}{2^n \cdot n!} \right| =
$$

Since every term is positive, we can remove absolute value.

$$
= \lim_{n \to \infty} \frac{2 \cdot 2^n \cdot (n + 1) \cdot n! \cdot n^n}{(n + 1) \cdot (n + 1)^n \cdot 2^n \cdot n!} = \lim_{n \to \infty} \frac{2 \cdot n^n}{(n + 1)^n} =
$$

$$
= \lim_{n \to \infty} \frac{2}{\left(\frac{n + 1}{n}\right)^n} = \lim_{n \to \infty} \frac{2}{\left(1 + \frac{1}{n}\right)^n} = \frac{2}{e}
$$

Since $L = \frac{2}{e} < 1$, by ratio test, the series is absolutely convergent.

## Example 15

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{4^n \cdot n!}{n^n}
$$

Rule of thumb, if you see factorials, try ratio test.

$$
L = \lim_{n \to \infty} \left| \frac{a_{n + 1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{4^{n + 1} \cdot (n + 1)!}{(n + 1)^{n + 1}} \cdot \frac{n^n}{4^n \cdot n!} \right| =
$$

Since every term is positive, we can remove absolute value.

$$
= \lim_{n \to \infty} \frac{4 \cdot 4^n \cdot (n + 1) \cdot n! \cdot n^n}{(n + 1) \cdot (n + 1)^n \cdot 4^n \cdot n!} = \lim_{n \to \infty} \frac{4 \cdot n^n}{(n + 1)^n} =
$$

$$
= \lim_{n \to \infty} \frac{4}{\left(\frac{n + 1}{n}\right)^n} = \lim_{n \to \infty} \frac{4}{\left(1 + \frac{1}{n}\right)^n} = \frac{4}{e}
$$

Since $L = \frac{4}{e} > 1$, by ratio test, the series is divergent.

## Example 16

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{2^n + 3^n}{2n + 1}
$$

Zero test:

$$
\lim_{n \to \infty} \frac{2^n + 3^n}{2n + 1} = \infty
$$

Therefore, by zero test, the series is divergent.

## Example 17

Determine whether the following series is convergent or not:

$$
\sum_{n=1}^{\infty} \frac{2^n + 1}{(-3)^n}
$$

Try solve as alternating series.

$$
\sum_{n=1}^{\infty} \frac{2^n + 1}{(-3)^n} = \sum_{n=1}^{\infty} \frac{2^n + 1}{(-1)^n \cdot 3^n} = \sum_{n=1}^{\infty} (-1)^n \cdot \frac{2^n + 1}{3^n}
$$

$$
a_n = \frac{2^n + 1}{3^n}
$$

Leibniz type?

$$
a_n \geq 0 \quad (n \in \mathbb{N}) \quad \checkmark
$$

$$
a_{n + 1} \leq a_n \quad \Leftrightarrow \quad \frac{2^{n + 1} + 1}{3^{n + 1}} \leq \frac{2^n + 1}{3^n} \quad \checkmark
$$

Therefore $\sum_{n=1}^{\infty} (-1)^n \cdot a_n$ is series of Leibniz type.

Now, we need to check if $a_n$ converges to zero.

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{2^n + 1}{3^n} = \lim_{n \to \infty} \frac{2^n}{3^n} + \lim_{n \to \infty} \frac{1}{3^n} = 0 + 0 = 0
$$

Since $a_n$ converges to zero, by Leibniz criterion, the series is convergent.

#### Alternative

This can be also solved by ratio test.
