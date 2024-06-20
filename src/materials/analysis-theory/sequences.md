---
title: '[A1-T] Sequences'
---

# Sequences

## Index sequence

### Definition

The sequence $n_k \in \mathbb{N}$ is called an **index sequence** if it is strictly monotone increasing, that is

$$
\forall n \in \mathbb{N}: n_k < n_{k+1}
$$

### Example

The sequence $n_k = 2k$ is an index sequence.

## Subsequence

### Definition

Let $a : \mathbb{N} \to H$ be a sequence and $(n_k)$ be an index sequence. Then the sequence

$$
a_{n_k} \in H \quad (k \in \mathbb{N})
$$

is called a **subsequence** of $(a_n)$ (composed with the index sequence $(n_k)$).

### Example

Let $a_n = \frac{1}{n}\ (n \in \mathbb{N})$ and $n_k = 2^k$, then

$$
a_{n_k} = a_{2^k} = \frac{1}{2^k} = \left(\frac{1}{2}\right)^k \quad (k \in \mathbb{N})
$$

is a subsequence of $(a_n)$.

## Neighborhood (environment)

Let us discuss the real number sequence $a_n = \frac{1}{n}\ (n \in \mathbb{N})$. We feel intuitively that the terms of this sequence are arbitrarily near to the number 0 if the index $n$ is great enough. We say that the numbers $\frac{1}{n}$ approach 0 or converge to 0. This impression is the base of the concept of the convergency and of the limit.

To define exactly what "near to a number" means, we need the concept of neighborhood (or ball or environment).

### Definition

Let $a \in \mathbb{K}$ and $r > 0$. The neighborhood of $a$ with radius $r$ is the set

$$
B(a, r) = \{x \in \mathbb{K}: |x - a| < r\} \subset \mathbb{K}
$$

#### Neighborhood in $\mathbb{R}$

If $\mathbb{K} = \mathbb{R}$, then the neighborhood of $B(a, r)$ is the open interval $(a - r, a + r)$.

#### Neighborhood in $\mathbb{C}$

If $\mathbb{K} = \mathbb{C}$, then the neighborhood of $B(a, r)$ is the open circular disk with center $a$ and radius $r$ on the complex number plane.

## Convergence of a sequence

### Definition

The number sequence $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ is named convergent if

#### Definition using neighborhoods

$$
\exists A \in \mathbb{K}\ \forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \geq N: a_n \in B(A, \varepsilon)
$$

#### Definition using inequalities

$$
\exists A \in \mathbb{K}\ \forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \geq N: |a_n - A| < \varepsilon
$$

A number sequence is named divergent if it is not convergent.

#### Limit of a convergent sequence

The number $A$ is called the limit of the convergent sequence $a_n$ and is denoted as

$$
A = \lim_{n \to \infty} a_n
$$

We often say that $a_n$ tends to $A$, or $a_n$ tends to $A$ if $n$ tends to infinity.

## Boundedness of a sequence

The boundedness of a sequence is de¯ned as the boundedness of its range.

### Definition

The sequence $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ is called bounded if

$$
\exists M > 0\ \forall n \in \mathbb{N}: |a_n| \leq M
$$

The number M is called a bound of the sequence.

A number sequence is called unbounded if it is not bounded.

### Theorem

Every convergent number sequence is bounded.

#### Proof

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a convergent sequence and $A = \lim_{n \to \infty} a_n \in \mathbb{K}$. Apply the definition of convergency with $\varepsilon = 1$:

$$
\exists N \in \mathbb{N} \ \forall n \geq N: |a_n - A| < 1
$$

Using second triangle inequality, we get

$$
|a_n| - |A| \leq ||a_n| - |A|| < |a_n - A| < 1
$$

Rearrange:

$$
|a_n| < 1 + |A| \quad (n \in \mathbb{N}, n \geq N)
$$

Thus obviously

$$
|a_n| \leq M \quad (n \in \mathbb{N}) \quad \text{where} \quad M = \max\{|a_1|, |a_2|, \ldots, |a_{N-1}|, 1 + |A|\}
$$

### Bolzano-Weierstrass theorem

Every bounded number sequence contains a convergent subsequence.

## Convergency and ordering

### Theorem

Let $a_n$, $b_n \in \mathbb{R}\ (n \in \mathbb{N})$ be convergent sequences. And suppose that

$$
\lim_{n \to \infty} a_n \leq \lim_{n \to \infty} b_n
$$

Then

$$
\exists N \in \mathbb{N} \ \forall n \geq N: a_n \leq b_n
$$

#### Proof

Let $A = \lim_{n \to \infty} a_n$ and $B = \lim_{n \to \infty} b_n$.

It is assumed that $A \leq B$.

Let $\varepsilon = \frac{B - A}{2} > 0$.

Then, by the definition of the limit

$$
\exists N_1 \in \mathbb{N} \ \forall n \geq N_1: |a_n - A| < \frac{B - A}{2}
$$

and

$$
\exists N_2 \in \mathbb{N} \ \forall n \geq N_2: |b_n - B| < \frac{B - A}{2}
$$

Using the definition of the absolute value, for any $n \geq N = \max(N_1, N_2)$ we have

$$
\begin{aligned}
A - \frac{B - A}{2} &< a_n < A + \frac{B - A}{2} \\
B - \frac{B - A}{2} &< b_n < B + \frac{B - A}{2}
\end{aligned}
$$

Since $A + \frac{B - A}{2} = B - \frac{B - A}{2} = \frac{A + B}{2}$, we get

$$
a_n < \frac{A + B}{2} < b_n \quad (n \in \mathbb{N}, n \geq N)
$$

## Zero sequences

### Definition

The sequence $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ is called a **zero sequence** if it's convergent and $\lim_{n \to \infty} a_n = 0$.

### Theorem (T1)

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be sequence and $A \in \mathbb{K}$. Then

$$
\lim_{n \to \infty} a_n = A \quad \Leftrightarrow \quad \lim_{n \to \infty} (a_n - A) = 0
$$

### Theorem (T2)

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be sequence. Then

$$
\lim_{n \to \infty} a_n = 0 \quad \Leftrightarrow \quad \lim_{n \to \infty} |a_n| = 0
$$

### Theorem (T3, Majorant Principle)

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be sequence and $b_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a zero sequence. If

$$
\exists N_0 \in \mathbb{N}\ \forall n \geq N_0: |a_n| \leq b_n
$$

then $(a_n)$ is also a zero sequence.

### Theorem (T4, Sum)

Let $a_n, b_n \in \mathbb{K}\ (n \in \mathbb{N})$ be zero sequences. Then their sum $(a_n + b_n)$ is also a zero sequence.

### Theorem (T5, Product)

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a zero sequence and $b_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a bounded sequence. Then their product $(a_n \cdot b_n)$ is also a zero sequence.

## Operations with convergent sequences

### Theorem (absolute value)

Let $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ be a convergent sequence. Then the absolute value sequence $(|a_n|)$ is also convergent and

$$
\lim_{n \to \infty} |a_n| = |\lim_{n \to \infty} a_n|
$$

### Theorem (addition)

Let $a_n, b_n \in \mathbb{K}\ (n \in \mathbb{N})$ be convergent sequences. Then their sum $(a_n + b_n)$ is also convergent and

$$
\lim_{n \to \infty} (a_n + b_n) = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n
$$

### Theorem (multiplication)

Let $a_n, b_n \in \mathbb{K}\ (n \in \mathbb{N})$ be convergent sequences. Then their product $(a_n \cdot b_n)$ is also convergent and

$$
\lim_{n \to \infty} (a_n \cdot b_n) = \lim_{n \to \infty} a_n \cdot \lim_{n \to \infty} b_n
$$

### Theorem (division)

Let $a_n, b_n \in \mathbb{K}\ (n \in \mathbb{N})$ be convergent sequences and $b_n \in \mathbb{K} \setminus \{0\}\ (n \in \mathbb{N})$. Then their quotient $\left(\frac{a_n}{b_n}\right)$ is also convergent and

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{\lim_{n \to \infty} a_n}{\lim_{n \to \infty} b_n}
$$

### Theorem (reciprocal)

Let $b_n \in \mathbb{K} \setminus \{0\}\ (n \in \mathbb{N})$ be a convergent sequence. Suppose that $B = \lim_{n \to \infty} b_n \neq 0$. Then

- The sequence $\left(\frac{1}{b_n}\right)$ is bounded.
- The sequence $\left(\frac{1}{b_n}\right)$ is convergent and

$$
\lim_{n \to \infty} \frac{1}{b_n} = \frac{1}{B}
$$

### Theorem (q-th root)

Let $a_n \in \mathbb{R_0^+}\ (n \in \mathbb{N})$ be a convergent sequence and $q \in \mathbb{N}, q \geq 2$. Then its q-th root sequence $\left(\sqrt[q]{a_n}\right)$ is also convergent and

$$
\lim_{n \to \infty} \sqrt[q]{a_n} = \sqrt[q]{\lim_{n \to \infty} a_n}
$$

## Sandwich theorem

Let $a_n, b_n, c_n \in \mathbb{K}\ (n \in \mathbb{N})$ be sequences. Suppose that

$$
\exists N_0 \in \mathbb{N}\ \forall n \geq N_0: a_n \leq b_n \leq c_n
$$

and that $(a_n)$ and $(c_n)$ are convergent and

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = A
$$

Then $(b_n)$ is also convergent and

$$
\lim_{n \to \infty} b_n = A
$$

## Geometric sequence

### Definition

Let $q \in \mathbb{K}$ be a constant. The sequence

$$
a_n = q^n \quad (n \in \mathbb{N})
$$

is called a **geometric sequence** (with base $q$ or with quotient $q$).

### Theorem (convergence of geometric sequence)

The geometric sequence $a_n = q^n\ (n \in \mathbb{N})$ converges if and only if $|q| < 1$ or $q = 1$. In this case

$$
\lim_{n \to \infty} q^n =
\begin{cases}
0 & \text{if} \ |q| < 1 \\
1 & \text{if} \ q = 1
\end{cases}
$$

## Other important convergent sequences

### Theorem (convergence of $\sqrt[n]{a}$)

Let $a \in \mathbb{R}$, $a > 0$ be _fixed_. Then

$$
\lim_{n \to \infty} \sqrt[n]{a} = 1
$$

### Theorem (convergence of $\sqrt[n]{n}$)

The sequence $\left(\sqrt[n]{n}\right)$ is convergent and

$$
\lim_{n \to \infty} \sqrt[n]{n} = 1
$$

### Theorem (convergence of $n^k \cdot q^n$)

Let $q \in \mathbb{R}$ and $k \in \mathbb{N}$ be _fixed_. Then

$$
\lim_{n \to \infty} n^k \cdot q^n = 0
$$

### Corollary (convergence of $\frac{n^k}{a^n}$)

Let $a \in \mathbb{R}$, $a > 1$. Applying the previous theorem with $q = \frac{1}{a}$, we obtain for any $k \in \mathbb{N}$ that

$$
\lim_{n \to \infty} \frac{n^k}{a^n} = 0
$$

### Theorem (convergence of $\frac{x^n}{n!}$)

Let $x \in \mathbb{K}$ be _fixed_. Then

$$
\lim_{n \to \infty} \frac{x^n}{n!} = 0
$$

## Monotone sequences

### Definition

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a real number sequence. We say that this sequence is

- **monotonically increasing** if $\forall n \in \mathbb{N}: a_n \leq a_{n+1}$.
- **strictly monotonically increasing** if $\forall n \in \mathbb{N}: a_n < a_{n+1}$.
- **monotonically decreasing** if $\forall n \in \mathbb{N}: a_n \geq a_{n+1}$.
- **strictly monotonically decreasing** if $\forall n \in \mathbb{N}: a_n > a_{n+1}$.
- **monotone** if it is monotonically increasing or monotonically decreasing.
- **strictly monotone** if it is strictly monotonically increasing or strictly monotonically decreasing.

### Theorem (monotone subsequence)

Every real number sequence has a monotone subsequence.

### Theorem (convergence of monotonically increasing sequence)

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a monotonically increasing sequence. It is convergent if and only if it is bounded. Moreover

$$
\lim_{n \to \infty} a_n = \sup\ \{a_n: n \in \mathbb{N}\} \in \mathbb{R}
$$

### Theorem (convergence of monotonically decreasing sequence)

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a monotonically decreasing sequence. It is convergent if and only if it is bounded. Moreover

$$
\lim_{n \to \infty} a_n = \inf\ \{a_n: n \in \mathbb{N}\} \in \mathbb{R}
$$

## Euler's number

### Theorem

The sequence

$$
a_n = \left(1 + \frac{1}{n}\right)^n \quad (n \in \mathbb{N})
$$

is convergent.

### Definition

On the base of the previous theorem, we can define Euler's number $e$ as

$$
e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n
$$

## Cauchy's sequence

### Definition

The number sequence $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ is called a **Cauchy's sequence** if

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall m, n \geq N: |a_n - a_m| < \varepsilon
$$

### Theorem

Every Cauchy sequence is bounded. Consequently, by the [Bolzano-Weierstrass theorem](/materials/analysis-theory/sequences#bolzano-weierstrass-theorem), it has convergent subsequence.

### Cauchy's convergence test

The number sequence $a_n \in \mathbb{K}\ (n \in \mathbb{N})$ is convergent if and only if it is a Cauchy's sequence.

## Infinite limits of real number sequences

### Definition

#### Definition for $\lim_{n \to \infty} a_n = +\infty$

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a real number sequence. We say that $(a_n)$ tends to $+\infty$ if

$$
\forall P > 0\ \exists N \in \mathbb{N}\ \forall n \geq N: a_n > P
$$

#### Definition for $\lim_{n \to \infty} a_n = -\infty$

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a real number sequence. We say that $(a_n)$ tends to $-\infty$ if

$$
\forall P < 0\ \exists N \in \mathbb{N}\ \forall n \geq N: a_n < P
$$

### Theorem (limit of monotone increasing sequence)

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a monotonically increasing sequence. Suppose that it is not bounded above. Then

$$
\lim_{n \to \infty} a_n = +\infty
$$

### Theorem (limit of monotone decreasing sequence)

Let $a_n \in \mathbb{R}\ (n \in \mathbb{N})$ be a monotonically decreasing sequence. Suppose that it is not bounded below. Then

$$
\lim_{n \to \infty} a_n = -\infty
$$

### Example of non-monotone sequence with infinite limit

$$
\lim_{n \to \infty} n^{(-1)^n} = +\infty \quad \text{where} \quad n \in \mathbb{N}
$$

### Theorem (addition)

Let $a_n, b_n \in \mathbb{R}\ (n \in \mathbb{N})$ be sequences. Suppose that $\lim_{n \to \infty} a_n = A$ where $-\infty \leq A \leq +\infty$ and $\lim_{n \to \infty} b_n = +\infty$. Then

$$
\lim_{n \to \infty} (a_n + b_n) = +\infty
$$

### The table of addition in $\overline{\mathbb{R}}$

|      $x + y$       | $y = -\infty$ | $y \in \mathbb{R}$ | $y = +\infty$ |
| :----------------: | :-----------: | :----------------: | :-----------: |
|   $x = -\infty$    |   $-\infty$   |     $-\infty$      |  not defined  |
| $x \in \mathbb{R}$ |   $-\infty$   |      $x + y$       |   $+\infty$   |
|   $x = +\infty$    |  not defined  |     $+\infty$      |   $+\infty$   |

Sums $(-\infty) + (+\infty)$ and $(+\infty) + (-\infty)$ are called indeterminate sums. They are a kind of indeterminate expressions, since in that case sequence can behave itself variously.

For example

- for $a_n = n$ and $b_n = -n$
  $$
  \begin{aligned}
  \lim_{n \to \infty} a_n = +\infty, \quad \lim_{n \to \infty} b_n = -\infty \\
  a_n + b_n = 0 \\
  \lim_{n \to \infty} (a_n + b_n) = 0
  \end{aligned}
  $$
- for $a_n = n$ and $b_n = -2n$
  $$
  \begin{aligned}
  \lim_{n \to \infty} a_n = +\infty, \quad \lim_{n \to \infty} b_n = -\infty \\
  a_n + b_n = -n \\
  \lim_{n \to \infty} (a_n + b_n) = -\infty
  \end{aligned}
  $$
- for $a_n = 2n$ and $b_n = -n$
  $$
  \begin{aligned}
  \lim_{n \to \infty} a_n = +\infty, \quad \lim_{n \to \infty} b_n = -\infty \\
  a_n + b_n = n \\
  \lim_{n \to \infty} (a_n + b_n) = +\infty
  \end{aligned}
  $$

#### Theorem of addition for $\overline{\mathbb{R}}$

If the real number sequences $a_n, b_n \in \mathbb{R}\ (n \in \mathbb{N})$ have limits, furthermore the sum of $\lim_{n \to \infty} a_n$ and $\lim_{n \to \infty} b_n$ is defined, then

$$
\lim_{n \to \infty} (a_n + b_n) = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n
$$

### Theorem (multiplication)

Let $a_n, b_n \in \mathbb{R}\ (n \in \mathbb{N})$ be sequences. Suppose that $\lim_{n \to \infty} a_n = A$ where $A \in \overline{\mathbb{R}} \setminus \{0\}$ and $\lim_{n \to \infty} b_n = +\infty$. Then

$$
\lim_{n \to \infty} (a_n \cdot b_n) =
\begin{cases}
+\infty & \text{if} \ A > 0 \\
-\infty & \text{if} \ A < 0
\end{cases}
$$
