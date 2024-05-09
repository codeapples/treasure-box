---
title: '[A-1] Radius of convergence of power series'
---

# Radius of convergence of power series

## Power series

A power series is an infinite series of the form

$$
\sum_{n=0}^{\infty} a_n \cdot (x - x_0)^n = a_0 + a_1 \cdot (x - x_0) + a_2 \cdot (x - x_0)^2 + \cdots
$$

where $a_n$ are the coefficients of the series and $x_0$ is the center of the series.

#### Geometric power series

The geometric power series is a special case of the power series where the coefficients are constant and the series is centered at $x_0 = 0$.

$$
\sum_{n=0}^{\infty} x^n \quad \text{convergent for} \quad |x| < 1
$$

#### Exponential power series

The exponential power series is another special case of the power series where the coefficients are constant and the series is centered at $x_0 = 0$.

$$
\sum_{n=0}^{\infty} \frac{x^n}{n!} \quad \text{convergent for all} \quad x \in \mathbb{R}
$$

## Convergence set

The **convergence set** or the **interval of convergence**, is a set of all possible $x \in \mathbb{K}$ for which the series converges.

The convergence set can be a single point, an interval centered at $x_0$, or the entire $\mathbb{R}$ line.

## Convergence of power series

Let $\sum_{n=0}^{\infty} a_n \cdot (x - x_0)^n$ be a power series and suppose the following limit exists.

$$
L = \lim_{n \to \infty} \sqrt[n]{|a_n|} \quad \text{or} \quad L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right|
$$

as you can see we can use either the root test or the ratio test to find the limit $L$.

Then, let's denote $S$ as the convergence set

1. In case $L = 0$

   - the series is absolutely convergent for all $x \in \mathbb{K}$. Therefore, the convergence set is $S = \mathbb{K}$.

2. In case $L = \infty$

   - the series is absolutely convergent only at $x = x_0$. $S = \{ x_0 \}$.
   - the series is divergent for all $x \neq x_0$.

3. In case $0 < L < \infty$

   - the series is absolutely convergent at any $x \in \mathbb{K}$ such that $|x - x_0| < \frac{1}{L}$.
   - the series is divergent at any $x \in \mathbb{K}$ such that $|x - x_0| > \frac{1}{L}$.

     Thus the convergence set is $B(x_0, \frac{1}{L}) \supseteq S \supseteq \overline{B}(x_0, \frac{1}{L})$.

     Which means that the convergence set $S$ includes all points of the neighborhood $B(x_0, \frac{1}{L})$ and may also include the boundary points of the neighborhood $\overline{B}(x_0, \frac{1}{L})$.

## Radius of convergence

Taking into consideration what is mentioned above, we can define the **radius of convergence** $R$ as

$$
R =
\begin{cases}
  0 & \text{if $L = \infty$} \\
  \infty & \text{if $L = 0$} \\
  \frac{1}{L} & \text{if $0 < L < \infty$}
\end{cases}
$$

Or in short, $R = \frac{1}{L}$ if we agree that $\frac{1}{\infty} = 0$ and $\frac{1}{0} = \infty$.

Using the radius of convergence, we can shortly say that the power series is absolutely convergent at any $x \in B(x_0, R)$ and divergent at any $x \notin \overline{B}(x_0, R)$.

In case $0 \le R < \infty$, we can not say anything about the convergence of the series at the boundary points of the neighborhood $\overline{B}(x_0, R)$, so it is indeterminate case, where further investigation is required. For example, the following series all have $R = 1$:

- $\sum_{n=0}^{\infty} x^n$ - is divergent at $x = 1$ and $x = -1$.
- $\sum_{n=0}^{\infty} \frac{x^n}{n}$ - is divergent at $x = 1$ and convergent at $x = -1$.
- $\sum_{n=0}^{\infty} \frac{x^n}{n^2}$ - is convergent at $x = 1$ and $x = -1$.

## Analytical functions

Suppose that the radius of convergence $R$ is positive. Then the power series defines an analytical function $f(x)$ on the interval $I = B(x_0, R)$.

#### Examples

1. The constant function $f(x) = c$ where $x \in \mathbb{K}$ and $c \in \mathbb{K} is fixed$ has the power series representation $\sum_{n=0}^{\infty} c \cdot (x - x_0)^n$ with $R = \infty$.
   $$
   f(x) = c + 0 \cdot (x - x_0) + 0 \cdot (x - x_0)^2 + \cdots
   $$
2. Every polynomial is analytical on $\mathbb{R}$ and has a power series representation with $R = \infty$.
   $$
    f(x) = a_0 + a_1x + \cdots + a_nx^n + 0 \cdot x^{n+1} + 0 \cdot x^{n+2} + \cdots
   $$
3. The function $f(x) = \frac{1}{1 - x} \quad (x \in B(0, 1))$ is analytical on $B(0, 1)$ because it has the power series representation $\sum_{n=0}^{\infty} x^n$ with $R = 1 > 0$.

#### Five important analytical functions

1. The exponential function $exp: \mathbb{K} \to \mathbb{K}$
   $$
   exp(x) = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}
   $$
2. The sine function $sin: \mathbb{K} \to \mathbb{K}$
   $$
   sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n+1}}{(2n+1)!}
   $$
3. The cosine function $cos: \mathbb{K} \to \mathbb{K}$
   $$
   cos(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} (-1)^n \cdot \frac{x^{2n}}{(2n)!}
   $$
4. The hyperbolic sine function $sinh: \mathbb{K} \to \mathbb{K}$
   $$
   sinh(x) = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!}
   $$
5. The hyperbolic cosine function $cosh: \mathbb{K} \to \mathbb{K}$
   $$
   cosh(x) = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}
   $$

## Example 1

Determine the radius of convergence and the convergence set of the power series.

If the radius of convergence is positive, give the domain of the corresponding analytical function.

$$
\sum_{n=0}^{\infty} \left( 1 +\frac{1}{n} \right)^n \cdot x^n
$$

First, find the radius of convergence $R$, using root test.

$$
L = \lim_{n \to \infty} \sqrt[n]{\left| 1 + \frac{1}{n} \right|^n} = \lim_{n \to \infty} \left| 1 + \frac{1}{n} \right| = 1 \implies R = \frac{1}{1} = 1
$$

The center of the series is $x_0 = 0$.

So we need to identify the convergence set and check boundary points.

- $|x - 0| < 1 \Leftrightarrow -1 \le x \le 1$ the power series is abs. convergent
- $|x - 0| > 1 \Leftrightarrow x < -1 \lor x > 1$ the power series is divergent
- $x = 1$ to see if $\sum_{n=0}^{\infty} \left( 1 +\frac{1}{n} \right)^n$ is convergent, we can use the zero test.
  $$
  \lim_{n \to \infty} \left( 1 +\frac{1}{n} \right)^n = \lim_{n \to \infty} \left( 1 +\frac{1}{n} \right)^n = e \neq 0 \implies \text{divergent}
  $$
- $x = -1$ to see if $\sum_{n=0}^{\infty} \left( 1 +\frac{1}{n} \right)^n \cdot (-1)^n$ is convergent, we can use the zero test.
  $$
  \lim_{n \to \infty} \left( 1 +\frac{1}{n} \right)^n \cdot (-1)^n \neq 0 \implies \text{divergent}
  $$

Therefore, the convergence set is

$$
S = (-1, 1)
$$

The power series defines an analytical function on the interval $D_f = (-1, 1)$.

## Example 2

Determine the radius of convergence and the convergence set of the power series.

If the radius of convergence is positive, give the domain of the corresponding analytical function.

$$
\sum_{n=0}^{\infty} \frac{(x - 1)^n}{n^p} \quad ( p \in \mathbb{R} \quad \text{is a parameter})
$$

$$
\sum_{n=0}^{\infty} \frac{(x - 1)^n}{n^p} = \sum_{n=0}^{\infty} \frac{1}{n^p} \cdot (x - 1)^n
$$

$$
a_n = \frac{1}{n^p} \quad \text{and} \quad x_0 = 1
$$

First, find the radius of convergence $R$, using root test.

$$
L = \lim_{n \to \infty} \sqrt[n]{\left| \frac{1}{n^p} \right|} = \lim_{n \to \infty} \frac{\sqrt[n]{1}}{(\sqrt[n]{n})^p} = \frac{1}{1} = 1 \implies R = \frac{1}{1} = 1
$$

So we need to identify the convergence set and check boundary points.

- $|x - 1| < 1 \Leftrightarrow 0 < x < 2$ the power series is abs. convergent
- $|x - 1| > 1 \Leftrightarrow x < 0 \lor x > 2$ the power series is divergent
- $x = 2$ see if $\sum_{n=0}^{\infty} \frac{1}{n^p}$ is convergent

  $\sum_{n=0}^{\infty} \frac{1}{n^p}$ is hyperharmonic series $\implies$ convergent for $p > 1$

- $x = 0$ see if $\sum_{n=0}^{\infty} \frac{1}{n^p} \cdot (-1)^n$ is convergent

  $\sum_{n=0}^{\infty} \frac{1}{n^p} \cdot (-1)^n$ is alternating series $\implies$ to be convergent, it must satisfy the Leibniz criterion

  1. $\lim_{n \to \infty} \frac{1}{n^p} = 0$
  2. $\frac{1}{n^p}$ is decreasing

  Only possible for $p > 0$

Therefore

$$
S =
\begin{cases}
  [0, 2] & \text{- if $p \ge 1$} \\
  [0, 2) & \text{- if $0 \le p \leq 1$} \\
  (0, 2) & \text{- if $p \leq 0$}
\end{cases}
$$

The power series defines an analytical function on the interval $D_f = S$.

## Example 3

Determine the radius of convergence and the convergence set of the power series.

If the radius of convergence is positive, give the domain of the corresponding analytical function.

$$
\sum_{n=0}^{\infty} \frac{(n!)^2}{(2n)!} \cdot (x + 2)^n
$$

$$
a_n = \frac{(n!)^2}{(2n)!} \quad \text{and} \quad x_0 = -2
$$

First, find the radius of convergence $R$, using ratio test.

$$
L = \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n \to \infty} \left| \frac{(n+1)!^2}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2} \right| =
$$

Every term is positive so remove the absolute value

$$
= \lim_{n \to \infty} \frac{(n+1)!^2}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2} = \lim_{n \to \infty} \frac{(n + 1)^2 \cdot (n!)^2 \cdot (2n)!}{(2n + 2)(2n + 1) \cdot (2n)! \cdot (n!)^2} =
$$

$$
= \lim_{n \to \infty} \frac{(n + 1)^2}{2(n + 1)(2n + 1)} = \lim_{n \to \infty} \frac{n + 1}{4n + 2} = \lim_{n \to \infty} \frac{n(1 + \frac{1}{n})}{n(4 + \frac{2}{n})} = \frac{1}{4} \implies R = \frac{1}{\frac{1}{4}} = 4
$$

So we need to identify the convergence set and check boundary points.

- $|x + 2| < 4 \Leftrightarrow -6 < x < 2$ the power series is abs. convergent
- $|x + 2| > 4 \Leftrightarrow x < -6 \lor x > 2$ the power series is divergent
- $x = 2$ see if $\sum_{n=0}^{\infty} \frac{(n!)^2 \cdot 4^n}{(2n)!}$ is convergent, we can use the ratio test

  $$
  \lim_{n \to \infty} \left| \frac{(n+1)!^2 \cdot 4^{n+1}}{(2n+2)!} \cdot \frac{(2n)!}{(n!)^2 \cdot 4^n} \right| =
  $$

  Absolute value can be removed

  $$
  = \lim_{n \to \infty} \frac{(n+1)^2 \cdot (n!)^2 \cdot 4 \cdot 4^n \cdot (2n)!}{(2n+2)(2n+1) \cdot (2n)! \cdot (n!)^2 \cdot 4^n} =
  $$

  $$
  = \lim_{n \to \infty} \frac{4n + 4}{4n + 2} = \frac{n(4 + \frac{4}{n})}{n(4 + \frac{2}{n})} = 1 \implies \text{inconclusive}
  $$

  Since $b_n = \frac{(n!)^2 \cdot 4^n}{(2n)!}$ is not an alternating sequence and since in ratio test nominator was marginally bigger than the denominator, we can deduct that $b_n$ is increasing, so we can try to prove that $b_n < b_{n+1}$ which would mean that the series is divergent.
