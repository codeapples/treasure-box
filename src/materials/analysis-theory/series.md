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
\sum_{n=1}^{\infty} q^n = \frac{q}{1 - q}
$$

#### Proof

Suppose that $q = 1$. Then

$$
S_n = \sum_{k=1}^{n} 1^k = n
$$

which is an obviously divergent sequence.

Suppose that $q \neq 1$. Using formula for the sum of the first $n$ terms of geometric sequence, we have

$$
S_n = \sum_{k=1}^{n} q^k = q \cdot \frac{q^n - 1}{q - 1} \quad (n \in \mathbb{N})
$$

It follows from the theorem about the convergency of geometric sequence that if $|q| \geq 1$, then $(S_n)$ is divergent. If $|q| < 1$, then

$$
\sum_{n=1}^{\infty} q^n = \lim_{n \to \infty} S_n = \lim_{n \to \infty} q \cdot \frac{q^n - 1}{q - 1} = q \cdot \frac{0 - 1}{q - 1} = \frac{q}{1 - q}
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

#### Proof

Let $A = \sum_{n=1}^{\infty} a_n$ and $(S_n)$ be the partial sum sequence of the series. Obviously

$$
S_n = S_{n-1} + a_n \quad (n \in \mathbb{N}, n \geq 2)
$$

Moreover we have

$$
\lim_{n \to \infty} S_n = A \quad \text{and} \quad \lim_{n \to \infty} S_{n-1} = A
$$

Therefore

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} (S_n - S_{n-1}) = \lim_{n \to \infty} S_n - \lim_{n \to \infty} S_{n-1} = A - A = 0
$$

## Cauchy's convergence test

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$. Then the series $\sum_{n=1}^{\infty} a_n$ is convergent if and only if

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall m \geq n \geq N: |a_n + a_{n+1} + \ldots + a_m| < \varepsilon
$$

The number $N$ is called _threshold index_.

#### Proof

Denote by $(S_n)$ the sequence of partial sums: $S_n = a_1 + a_2 + \ldots + a_n$. Since for $m \geq n \geq 2$ we have

$$
a_n + a_{n+1} + \ldots + a_m = S_m - S_{n-1}
$$

then the statement is simple consequence of the application of Cauchy's convergence criterion for sequence $(S_n)$.

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

#### Proof

Denote by $(S_n)$ and by $T_n$ the partial sums of the series $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ respectively. By the assumptions of the theorem $(S_n)$ and $(T_n)$ are monotonically increasing, furthermore

$$
S_n \leq T_n \quad (n \in \mathbb{N})
$$

a) If $\sum_{n=1}^{\infty} b_n < \infty$, then $(T_n)$ is bounded above. Therefore $(S_n)$ is also bounded above, which implies that $\sum_{n=1}^{\infty} a_n < \infty$.

b) If $\sum_{n=1}^{\infty} a_n = \infty$, then $(S_n)$ is not bounded above. Therefore $(T_n)$ is also not bounded above, which implies that $\sum_{n=1}^{\infty} b_n = \infty$.

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

#### Proof

1. Suppose that $L < 1$. Let $q \in \mathbb{R}$, $0 \leq L < q < 1$. Then $q - L > 0$, therefore

$$
\exists N \in \mathbb{N}\ \forall n \geq N: L - (q - L) < \sqrt[n]{|a_n|} < L + (q - L)
$$

The right side of inequality implies that

$$
0 \leq \sqrt[n]{|a_n|} < q \quad (n \geq N)
$$

Taking the $n$-th power of the inequality, we get

$$
|a_n| < q^n \quad (n \geq N)
$$

By $0 \leq q < 1$, the geometric series $\sum_{n=1}^{\infty} q^n$ is convergent, then by majorant criterion the series $\sum_{n=1}^{\infty} |a_n|$ is also convergent.

2. Suppose that $L > 1$. Let $q \in \mathbb{R}$, $1 < q < L$. Then $L - q > 0$, therefore

$$
\exists N \in \mathbb{N}\ \forall n \geq N: L - (L - q) < \sqrt[n]{|a_n|} < L + (L - q)
$$

The left side of inequality implies that

$$
\sqrt[n]{|a_n|} > q \quad (n \geq N)
$$

Taking the $n$-th power of the inequality, we get

$$
|a_n| > q^n \quad (n \geq N)
$$

This inequality shows that $(|a_n|)$ is not a zero sequence, therefore, by zero sequence test, the series $\sum_{n=1}^{\infty} a_n$ is divergent. Moreover, $\lim_{n \to \infty} |a_n| = +\infty$.

## Ratio test

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ and suppose that the limit

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| \in [0, +\infty]
$$

exists. Then

1. If $L < 1$, the series $\sum_{n=1}^{\infty} a_n$ is absolutely convergent.
2. If $L > 1$, the series $\sum_{n=1}^{\infty} a_n$ is divergent. Moreover, $\lim_{n \to \infty} |a_n| = +\infty$.

#### Proof

1. Suppose that $L < 1$. Let $q \in \mathbb{R}$, $0 \leq L < q < 1$. Then $q - L > 0$, therefore

$$
\exists N \in \mathbb{N}\ \forall n \geq N: L - (q - L) < \left| \frac{a_{n+1}}{a_n} \right| < L + (q - L)
$$

The right side of inequality implies that

$$
0 \leq \left| \frac{a_{n+1}}{a_n} \right| < q \quad (n = N, N+1, N+2, \ldots)
$$

Fix a natural number $k \geq N+1$, and write the above inequality for $n = N, N+1, \ldots, k-1$. Then multiply these $k-N$ inequalities with each other. We obtain that

$$
\left| \frac{a_{N+1}}{a_N} \right| \cdot \left| \frac{a_{N+2}}{a_{N+1}} \right| \cdot \ldots \cdot \left| \frac{a_k}{a_{k-1}} \right| < \underbrace{q \cdot q \cdot \ldots \cdot q}_{k-N}
$$

that is

$$
\left| \frac{a_{N+1} \cdot a_{N+2} \cdot \ldots \cdot a_k}{a_N \cdot a_{N+1} \cdot \ldots \cdot a_{k-1}} \right| < q^{k-N}
$$

By the telescoping property of the left side of the inequality, we get

$$
\left| \frac{a_k}{a_N} \right| < \frac{q^k}{q^N}
$$

that is

$$
|a_k| < \frac{|a_N|}{q^N} \cdot q^k \quad (k \geq N+1)
$$

By $0 \leq q < 1$, the series

$$
\sum_{n=1}^{\infty} \frac{|a_N|}{q^N} \cdot q^k = \frac{|a_N|}{q^N} \cdot \sum_{n=1}^{\infty} q^k
$$

is convergent, then by majorant criterion the series $\sum_{n=1}^{\infty} |a_n|$ is also convergent.

2. Suppose that $L > 1$. Let $q \in \mathbb{R}$, $1 < q < L$. Then $L - q > 0$, therefore

$$
\exists N \in \mathbb{N}\ \forall n \geq N: L - (L - q) < \left| \frac{a_{n+1}}{a_n} \right| < L + (L - q)
$$

The left side of inequality implies that

$$
\left| \frac{a_{n+1}}{a_n} \right| > q \quad (n = N, N+1, N+2, \ldots)
$$

As in previous part fix $k \geq N+1$, and write the above inequality for $n = N, N+1, \ldots, k-1$. Then multiply these $k-N$ inequalities with each other. We obtain that

$$
\left| \frac{a_{N+1}}{a_N} \right| \cdot \left| \frac{a_{N+2}}{a_{N+1}} \right| \cdot \ldots \cdot \left| \frac{a_k}{a_{k-1}} \right| > \underbrace{q \cdot q \cdot \ldots \cdot q}_{k-N}
$$

that is

$$
\left| \frac{a_{N+1} \cdot a_{N+2} \cdot \ldots \cdot a_k}{a_N \cdot a_{N+1} \cdot \ldots \cdot a_{k-1}} \right| > q^{k-N}
$$

By the telescoping property of the left side of the inequality, we get

$$
\left| \frac{a_k}{a_N} \right| > \frac{q^k}{q^N}
$$

that is

$$
|a_k| > \frac{|a_N|}{q^N} \cdot q^k \quad (k \geq N+1)
$$

This inequality shows that $(|a_n|)$ is not a zero sequence, therefore, by zero sequence test, the series $\sum_{n=1}^{\infty} a_n$ is divergent. Moreover, $\lim_{n \to \infty} |a_n| = +\infty$.

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

### Theorem (convergence set of power series)

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

#### Proof

We have remarked that the power series is absolutely convergent at $x = x_0$, thus $x_0 \in S$. Suppose that $x \in \mathbb{K} \setminus \{x_0\}$ and apply the root test

$$
\sum_{n=0}^{\infty} a_n \cdot (x - x_0)^n
$$

First we compute the limit of the $n$-th root

$$
\lim_{n \to \infty} \sqrt[n]{|a_n \cdot (x - x_0)^n|} = |x - x_0| \cdot \lim_{n \to \infty} \sqrt[n]{|a_n|} =
$$

$$
= |x - x_0| \cdot L
$$

Then we can distinguish three cases:

1. Suppose that $L = 0$. Then

$$
|x - x_0| \cdot L = 0 < 1
$$

therefore by root test the power series is absolutely convergent for all $x \in \mathbb{K}$.

2. Suppose that $L = +\infty$. Then

$$
|x - x_0| \cdot L = +\infty > 1 \quad (x \neq x_0)
$$

therefore by root test the power series is divergent for all $x \in \mathbb{K} \setminus \{x_0\}$.

3. Suppose that $0 < L < +\infty$. Then

$$
|x - x_0| \cdot L < 1 \iff |x - x_0| < \frac{1}{L}
$$

this implies the statement of the theorem.

### Radius of convergence

Using foregoing notations, suppose that limit $L$ exists. Then the radius of convergence is defined as following:

$$
R = \begin{cases}
  0 & \text{if } L = +\infty \\
  \frac{1}{L} & \text{if } 0 < L < +\infty \\
  +\infty & \text{if } L = 0
\end{cases}
$$

## Analytical functions

### Definition

Suppose that the radius of convergence of a power series is positive. Then it's sum function is called analytical function.

### Exponential function

The function $exp : \mathbb{K} \to \mathbb{K}$, defined as

$$
exp(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots = \sum_{n=0}^{\infty} \frac{x^n}{n!} \quad (x \in \mathbb{K})
$$

is called the exponential function.

### Sine function

The function $sin : \mathbb{K} \to \mathbb{K}$, defined as

$$
sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \ldots = \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n+1}}{(2n+1)!} \quad (x \in \mathbb{K})
$$

is called the sine function.

### Cosine function

The function $cos : \mathbb{K} \to \mathbb{K}$, defined as

$$
cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \ldots = \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n}}{(2n)!} \quad (x \in \mathbb{K})
$$

is called the cosine function.

### Hyperbolic sine function

The function $sinh : \mathbb{K} \to \mathbb{K}$, defined as

$$
sinh(x) = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \ldots = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \quad (x \in \mathbb{K})
$$

is called the hyperbolic sine function.

### Hyperbolic cosine function

The function $cosh : \mathbb{K} \to \mathbb{K}$, defined as

$$
cosh(x) = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \ldots = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!} \quad (x \in \mathbb{K})
$$

is called the hyperbolic cosine function.

### Theorem (convergence of exponential function)

The exponential function $exp(x)$ is absolutely convergent for all $x \in \mathbb{K}$.

#### Proof

Investigating convergency by ratio test, if $x = 0$, then the series is absolutely convergent. If $x \in \mathbb{K} \setminus \{0\}$, then

$$
\left| \frac{\frac{x^{n+1}}{(n+1)!}}{\frac{x^n}{n!}} \right| = \left| \frac{x^{n+1} \cdot n!}{(n+1)! \cdot x^n} \right| = \frac{|x|}{n+1} \to 0 \quad (n \to \infty)
$$

Since $0 < 1$, the series is absolutely convergent.

### Simple properties of the functions above

- $exp(0) = 1$, $sin(0) = 0$, $cos(0) = 1$, $sinh(0) = 0$, $cosh(0) = 1$
- For all $x \in \mathbb{K}$,

$$
sin(-x) = -sin(x),\ cos(-x) = cos(x)
$$

$$
sinh(-x) = -sinh(x),\ cosh(-x) = cosh(x)
$$

### Theorem (connection between $\exp$ and $\sinh$, $\cosh$ functions)

For all $x \in \mathbb{K}$,

$$
exp(x) = cosh(x) + sinh(x)
$$

#### Proof

$$
\exp x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!} + \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} = cosh(x) + sinh(x)
$$

#### Consequences

$$
\exp(-x) = cosh(-x) + sinh(-x) = cosh(x) - sinh(x)
$$

$$
\exp(x) + \exp(-x) = 2 \cdot cosh(x)
$$

$$
\exp(x) - \exp(-x) = 2 \cdot sinh(x)
$$

$$
\cosh(x) = \frac{\exp(x) + \exp(-x)}{2}
$$

$$
\sinh(x) = \frac{\exp(x) - \exp(-x)}{2}
$$

### Theorem (connection between $\exp$ and $\sin$, $\cos$ functions)

Let $i$ be the imaginary unit. For all $x \in \mathbb{K}$,

$$
\exp (ix) = \cos (x) + i \cdot \sin (x) \quad \text{Euler's identity}
$$

#### Proof

$$
\exp (ix) = \sum_{n=0}^{\infty} \frac{(ix)^n}{n!} = \sum_{n=0}^{\infty} \frac{(ix)^{2n}}{(2n)!} + \sum_{n=0}^{\infty} \frac{(ix)^{2n+1}}{(2n+1)!} =
$$

$$
= \sum_{n=0}^{\infty} \frac{i^{2n} \cdot x^{2n}}{(2n)!} + \sum_{n=0}^{\infty} \frac{i^{2n+1} \cdot x^{2n+1}}{(2n+1)!} = \sum_{n=0}^{\infty} \frac{(i^2)^n \cdot x^{2n}}{(2n)!} + \sum_{n=0}^{\infty} \frac{i \cdot (i^2)^n \cdot x^{2n+1}}{(2n+1)!} =
$$

$$
= \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n}}{(2n)!} + i \cdot \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n+1}}{(2n+1)!} = \cos (x) + i \cdot \sin (x)
$$

#### Consequences

$$
\exp(-ix) = \cos (-x) + i \cdot \sin (-x) = \cos (x) - i \cdot \sin (x)
$$

$$
\exp(ix) + \exp(-ix) = 2 \cdot \cos (x)
$$

$$
\exp(ix) - \exp(-ix) = 2i \cdot \sin (x)
$$

$$
\cos (x) = \frac{\exp(ix) + \exp(-ix)}{2}
$$

$$
\sin (x) = \frac{\exp(ix) - \exp(-ix)}{2i}
$$

### Theorem (addition of exponential functions)

For all $x, y \in \mathbb{K}$,

$$
\exp(x + y) = \exp(x) \cdot \exp(y)
$$

#### Proof

Apply Cauchy's product for the two absolutely convergent power series $\exp(x)$ and $\exp(y)$, then use Binomial theorem:

$$
\exp(x) \cdot \exp(y) = \left( \sum_{n=0}^{\infty} \frac{x^n}{n!} \right) \cdot \left( \sum_{n=0}^{\infty} \frac{y^n}{n!} \right) = \sum_{n=0}^{\infty} \sum_{k=0}^{n} \frac{x^k}{k!} \cdot \frac{y^{n-k}}{(n-k)!} =
$$

$$
= \sum_{n=0}^{\infty} \frac{1}{n!} \cdot \sum_{k=0}^{n} \frac{n!}{k! \cdot (n-k)!} \cdot x^k \cdot y^{n-k} = \sum_{n=0}^{\infty} \frac{1}{n!} \sum_{k=0}^{n} \binom{n}{k} \cdot x^k \cdot y^{n-k} =
$$

$$
= \sum_{n=0}^{\infty} \frac{1}{n!} \cdot (x + y)^n = \sum_{n=0}^{\infty} \frac{(x + y)^n}{n!} = \exp(x + y)
$$

### Theorem (addition of $\sin$,$\cos$,$\cosh$,$\sinh$ functions)

For all $x, y \in \mathbb{K}$,

$$
\begin{aligned}
  sin(x + y) &= sin(x) \cdot cos(y) + cos(x) \cdot sin(y) \\
  cos(x + y) &= cos(x) \cdot cos(y) - sin(x) \cdot sin(y) \\
  sinh(x + y) &= sinh(x) \cdot cosh(y) + cosh(x) \cdot sinh(y) \\
  cosh(x + y) &= cosh(x) \cdot cosh(y) + sinh(x) \cdot sinh(y)
\end{aligned}
$$

#### Proof

We prove $\cos(x + y) = \cos(x) \cdot \cos(y) - \sin(x) \cdot \sin(y)$, the other statements are proved similarly. First we express $\cos$ with $\exp$ then we apply the addition of exponential functions theorem, then using Euler's identity we get back to $\cos$ and $\sin$ functions:

$$
\begin{aligned}
  \cos(x + y) &= \frac{\exp(i \cdot (x + y)) + \exp(-i \cdot (x + y))}{2} = \\
  &= \frac{\exp(ix+iy) + \exp(-ix-iy)}{2} = \\
  &= \frac{\exp(ix) \cdot \exp(iy) + \exp(-ix) \cdot \exp(-iy)}{2} = \\
  &= \frac{(\cos x + i \sin x) (\cos y + i \sin y) + (\cos x - i \sin x) (\cos y - i  \sin y)}{2}
\end{aligned}
$$

Completing operations in the numerator, we get

$$
\frac{2 \cos x \cos y - 2 \sin x \sin y}{2} = \cos x \cos y - \sin x \sin y
$$

#### Corollary for $\sin$ and $\cos$

If we apply the above theorem for $x = y$, we get

$$
\begin{aligned}
  sin(2x) &= 2 \cdot sin(x) \cdot cos(x) \\
  cos(2x) &= cos^2(x) - sin^2(x)
\end{aligned}
$$

If we apply the above theorem for $x = -y$, we get

$$
1 = cos^2(x) + sin^2(x)
$$

#### Corollary for $\sinh$ and $\cosh$

If we apply the above theorem for $x = y$, we get

$$
\begin{aligned}
  sinh(2x) &= 2 \cdot sinh(x) \cdot cosh(x) \\
  cosh(2x) &= cosh^2(x) + sinh^2(x)
\end{aligned}
$$

If we apply the above theorem for $x = -y$, we get

$$
1 = cosh^2(x) - sinh^2(x)
$$

### Theorem (value of $\exp(1)$)

By the definition of the exponential function

$$
exp(1) = \sum_{n=0}^{\infty} \frac{1}{n!} = e
$$

where $e$ is the Euler's number.

### Theorem (irrationality of $e$)

Denote by $S_n$ the partial sum of the series $\sum_{n=0}^{\infty} \frac{1}{n!}$, that is

$$
S_n = \sum_{k=0}^{n} \frac{1}{k!}
$$

Then for all $n \in \mathbb{N}$

$$
0 < e - S_n < \frac{1}{n! \cdot n}
$$

#### Proof

$S_n$ can be regarded as an infinite series for any fixed $n$:

$$
S_n = \sum_{k=0}^{n} \frac{1}{k!} = \sum_{k=0}^{\infty} a_k \quad \text{where } a_k =
\begin{cases}
  \frac{1}{k!} & \text{if } k \leq n \\
  0 & \text{if } k > n
\end{cases}
$$

Therefore we have

$$
e - S_n = \sum_{k=n+1}^{\infty} \frac{1}{k!} - \sum_{k=0}^{\infty} a_k = \sum_{k=n+1}^{\infty} \left( \frac{1}{k!} - a_k \right) = \sum_{k=n+1}^{\infty} \frac{1}{k!}
$$

Thus $e - S_n > 0$. We can write that:

$$
0 < e - S_n = \sum_{k=n+1}^{\infty} \frac{1}{k!} = \frac{1}{(n+1)!} + \frac{1}{(n+2)!} + \ldots =
$$

$$
= \frac{1}{n!} \cdot \left(\frac{1}{n+1} + \frac{1}{(n+1)(n+2)} + \frac{1}{(n+1)(n+2)(n+3)} + \ldots \right) <
$$

$$
< \frac{1}{n!} \cdot \underbrace{\left(\frac{1}{n+1} + \frac{1}{(n+1)^2} + \frac{1}{(n+1)^3} + \ldots \right)}_{\text{geometric series}} =
$$

$$
= \frac{1}{n!} \cdot \frac{\frac{1}{n+1}}{1 - \frac{1}{n+1}} = \frac{1}{n!} \cdot \frac{1}{n + 1 - 1} = \frac{1}{n! \cdot n}
$$
