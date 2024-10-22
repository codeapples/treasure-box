---
title: '[A2] Continuity'
---

# Continuity of functions

## Continuity at a point

### Definition

Let $f \in \mathbb{R} \to \mathbb{R}$ be a function.

$f$ is continuous at $a$ $\overset{df}{\iff} \forall \varepsilon > 0 \ \exists \delta > 0 \ \forall x \in B(a, \delta) \cap D_f: f(x) \in B(f(a), \varepsilon)$

If we denote set of functions that are continuous at $a$ as $C(a)$, then from the definition it follows that

- if $a$ is an isolated point of $D_f$, then $f$ is continuous at $a$.
- if $a$ is an accumulation point of $D_f$, then

$$f \text{ is continuous at } a \iff \lim_{x \to a} f(x) = f(a)$$

## Continuity of function

### Definition

Let $f \in \mathbb{R} \to \mathbb{R}$ be a function.

The function $f$ is continuous if it is continuous at every point of its domain.

$$ \forall a \in D_f: f \in C(a) \implies f \in C(D_f) $$

## Discontinuities

### Definition

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D_f$.

$f$ has a discontinuity at $a$ if $f \notin C(a)$.

### Types of discontinuities

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D_f$, $f \notin C(a)$.

We say that $a$ is a point of

- removable discontinuity $\iff \exists \lim_{x \to a} f$, but $\lim_{x \to a} f \neq f(a)$.
- jump discontinuity $\iff \exists \lim_{x \to a^+} f \land \exists \lim_{x \to a^-} f$, but $\lim_{x \to a^+} f \neq \lim_{x \to a^-} f$.
- discontinuity of second kind $\iff \nexists \lim_{x \to a^-} f \lor \nexists \lim_{x \to a^+} f$.

## Transference theorem of continuity

$$
f \in C(a) \iff \forall x_n \in D_f \quad (n \in \mathbb{N}) \quad \lim_{n \to \infty} x_n = a \implies \lim_{n \to \infty} f(x_n) = f(a)
$$

Using the transference theorem of continuity, we can prove the following:

$$
f, g \in C(a),\ c \in \mathbb{R} \implies
$$

- $f + g \in C(a)$
- $f - g \in C(a)$
- $f \cdot g \in C(a)$
- $\frac{f}{g} \in C(a)$, if $g(a) \neq 0$
- $c \cdot f \in C(a)$
- $f \circ g \in C(a)$

## Bolzano's theorem

Let $f: [a, b] \to \mathbb{R}$ be a continuous function.

Suppose that $f(a) \neq f(b)$, for example $f(a) < f(b)$. Then

$$
\forall c \in \left(f(a), f(b)\right) \ \exists x \in [a, b]: f(x) = c
$$

## Example 1

Discuss the continuity of the following function:

$$
f(x) =
\begin{cases}
\frac{x^2 - 5x + 6}{x^2 - 7x + 10} & \text{if} \quad x \in \mathbb{R},\ x \neq 2,\ x \neq 5 \\
\\
0 & \text{if} \quad x \in \left\{2, 5\right\}
\end{cases}
$$

#### Solution

1. Since polynomials are continuous everywhere, using the transference theorem of continuity, we can conclude that the function is continuous if $x \neq 2 \land x \neq 5$.

$x \in \mathbb{R}\setminus\left\{2, 5\right\} : f \in C(x)$. Since $x^2 - 7x + 10 \neq 0$

2. If $x = 2$.

$$
\lim_{x \to 2} f(x) = \lim_{x \to 2} \frac{x^2 - 5x + 6}{x^2 - 7x + 10} = \lim_{x \to 2} \frac{(x - 2)(x - 3)}{(x - 2)(x - 5)} = \lim_{x \to 2} \frac{x - 3}{x - 5} = \frac{-1}{-3} = \frac{1}{3}
$$

So

$$
\exists \lim_{x \to 2} f(x) = \frac{1}{3}
$$

but $f(2) = 0 \neq \frac{1}{3}$, so $f$ has a **removable discontinuity** at $x = 2$.

3. If $x = 5$

$$
\lim_{x \to 5\pm0} f(x) = \lim_{x \to 5\pm0} \frac{x - 3}{x - 5} = \pm\infty
$$

So $f$ has a **discontinuity of second kind** at $x = 5$.

## Example 2

Discuss the continuity of the following function:

$$
f(x) =
\begin{cases}
\frac{3 - \sqrt{x}}{9 - x} & \text{if} \quad x \geq 0,\ x \neq 9 \\
\\
0 & \text{if} \quad x = 9
\end{cases}
$$

#### Solution

1. If $x \geq 0,\ x \neq 9$, then $f \in C(x)$ by theorem of transference of continuity ($9 - x \neq 0$).
2. If $x = 9$

$$
\lim_{x \to 9} f(x) = \lim_{x \to 9} \frac{3 - \sqrt{x}}{9 - x} = \lim_{x \to 9} \frac{3 - \sqrt{x}}{(3 - \sqrt{x})(3 + \sqrt{x})} = \lim_{x \to 9} \frac{1}{3 + \sqrt{x}} = \frac{1}{6}
$$

So

$$
\exists \lim_{x \to 9} f(x) = \frac{1}{6}
$$

but $f(9) = 0 \neq \frac{1}{6}$, so $f$ has a **removable discontinuity** at $x = 9$.

## Example 3

Discuss the continuity of the following function:

$$
f(x) =
\begin{cases}
\frac{x - 7}{|x - 7|} & \text{if} \quad x \neq 7 \\
\\
5 & \text{if} \quad x = 7
\end{cases}
$$

#### Solution

1. If $x \neq 7$, then $f \in C(x)$ by theorem of transference of continuity. Since $|x - 7| \neq 0$.
2. If $x = 7$

$$
x > 7: f = 1 \implies f \in C(x)
$$

$$
x < 7: f = -1 \implies f \in C(x)
$$

$$
x = 7: \lim_{x \to 7+0} f(x) = 1 \neq -1 = \lim_{x \to 7-0} f(x)
$$

So $f$ has a **jump discontinuity** at $x = 7$.

## Example 4

Discuss the continuity of the following function:

$$
f(x) =
\begin{cases}
2x + 1 & \text{if} \quad x \leq -1 \\
\\
3x & \text{if} \quad -1 < x < 1 \\
\\
2x - 1 & \text{if} \quad x \geq 1
\end{cases}
$$

#### Solution

1. If $x \in \left(-\infty, -1\right) \cup \left(1, +\infty\right) \cup \left(-1, 1\right)$, then $f \in C(x)$
2. If $x = -1$

$$
\lim_{x \to -1+0} f(x) = \lim_{x \to -1+0} 3x = -3
$$

$$
f(-1) = 2 \cdot (-1) + 1 = -1
$$

So $f$ has a **jump discontinuity** at $x = -1$.

3. If $x = 1$

$$
\lim_{x \to 1-0} f(x) = \lim_{x \to 1-0} 3x = 3
$$

$$
f(1) = 2 \cdot 1 - 1 = 1
$$

So $f$ has a **jump discontinuity** at $x = 1$.

## Example 5

Discuss the continuity of the following function:

$$
f(x) =
\begin{cases}
\frac{1}{x + 1} & \text{if} \quad x < -1 \\
\\
x & \text{if} \quad -1 \leq x < 0 \\
\\
\ln(x + 1) & \text{if} \quad x \geq 0
\end{cases}
$$

#### Solution

1. If $x \in \mathbb{R}\setminus\left\{-1, 0\right\}$, then $f \in C(x)$
2. If $x = -1$

$$
\lim_{x \to -1-0} f(x) = \lim_{x \to -1-0} \frac{1}{x + 1} = -\infty
$$

$$
f(-1) = -1
$$

So $f$ has a **discontinuity of second kind** at $x = -1$.

3. If $x = 0$.

$$
\lim_{x \to 0-0} f(x) = \lim_{x \to 0-0} x = 0
$$

$$
f(0) = \ln(0 + 1) = 0
$$

So $f$ is continuous at $x = 0$. $f \in C(0)$.

## Example 6

Determine $f(0)$ so that the function $f: \mathbb{R} \to \mathbb{R}$ is continuous.

$$
f(x) = \frac{(1 + x)^n - 1}{x} \quad (x \in \mathbb{R}\setminus\left\{0\right\},\ n \in \mathbb{N})
$$

#### Solution

If $\exists \lim_{x \to 0} f(x) = \alpha$, then $f(0) = \alpha \implies f \in C(0)$.

$$
\begin{aligned}
\lim_{x \to 0} f(x) &= \lim_{x \to 0} \frac{(1 + x)^n - 1}{x} = \lim_{x \to 0} \frac{(1 + x - 1)((1 + x)^{n - 1} + \ldots + 1)}{x} = \\
&= \lim_{x \to 0} ((1 + x)^{n - 1} + \ldots + 1) = n
\end{aligned}
$$

So $f(0) = n$.

## Example 7

Determine $f(0)$ so that the function $f: \mathbb{R} \to \mathbb{R}$ is continuous.

$$
f(x) = \frac{1 - \cos(x)}{x^2} \quad (x \in \mathbb{R}\setminus\left\{0\right\})
$$

#### Solution

If $\exists \lim_{x \to 0} f(x) = \alpha$, then $f(0) = \alpha \implies f \in C(0)$.

$$
\lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{1 - \cos(x)}{x^2} = \frac{1}{2}
$$

So $f(0) = \frac{1}{2}$.

## Example 8

Prove that given equation have roots in the given interval:

$$
x^3 - 3x + 1 = 0 \quad \text{in the interval} \quad \left(0, 1\right)
$$

Also compute the first three terms of the sequence that approximates the root. Estimate the error of the approximation with the 3rd term.

#### Solution

$$
f(x) = x^3 - 3x + 1 \quad (x \in \mathbb{R}) \implies f \in C
$$

$$
f(0) = 1 > 0, \quad f(1) = -1 < 0
$$

By Bolzano's theorem, $\exists c \in \left(0, 1\right): f(c) = 0$.

Let's find the first three terms of the sequence that approximates the root.

$$
\begin{aligned}
\left[x_0, y_0\right] &= \left[0, 1\right] \quad \text{half point}: \frac{1}{2} \quad f(\frac{1}{2}) = -\frac{3}{8} < 0 \\
\left[x_1, y_1\right] &= \left[0, \frac{1}{2}\right] \quad \text{half point}: \frac{1}{4} \quad f(\frac{1}{4}) = \frac{17}{64} > 0 \\
\left[x_2, y_2\right] &= \left[\frac{1}{4}, \frac{1}{2}\right]
\end{aligned}
$$

Approximating sequence:

$$
(x_n) = 0, 0, \frac{1}{4}, \ldots
$$

$$
(y_n) = 1, \frac{1}{2}, \frac{1}{2}, \ldots
$$

Error of the approximation with the 3rd term: $|c - x_2| = \left|\frac{1}{4} - \frac{1}{2}\right| = \frac{1}{4}$

## Example 9

Prove that given equation have roots in the given interval:

$$
x^2 = \sqrt{x + 1} \quad \text{in the interval} \quad \left(1, 2\right)
$$

#### Solution

$$
f(x) = x^2 - \sqrt{x + 1} \quad (x \geq -1) \implies f \in C
$$

$$
f(1) = 1 - \sqrt{2} < 0, \quad f(2) = 4 - \sqrt{3} > 0
$$

By Bolzano's theorem, $\exists c \in \left(1, 2\right): f(c) = 0$.

## Example 10

Prove that given equation have roots in the given interval:

$$
\cos x = x \quad \text{in the interval} \quad \left(0, \frac{\pi}{2}\right)
$$

#### Solution

$$
f(x) = \cos x - x \quad (x \in \mathbb{R}) \implies f \in C
$$

$$
f(0) = 1 - 0 > 0, \quad f\left(\frac{\pi}{2}\right) = 0 - \frac{\pi}{2} < 0
$$

By Bolzano's theorem, $\exists c \in \left(0, \frac{\pi}{2}\right): f(c) = 0$.

## Example 11

Prove that given equation have roots in the given interval:

$$
e^x = 2 - x \quad \text{in the interval} \quad \mathbb{R}
$$

#### Solution

$$
f(x) = e^x - 2 + x \quad (x \in \mathbb{R}) \implies f \in C
$$

$$
f(0) = 1 - 2 < 0, \quad f(1) = e - 1 > 0
$$

By Bolzano's theorem, $\exists c \in \left(0, 1\right): f(c) = 0$.

## Example 12

Prove that given equation have roots in the given interval:

$$
x^5 - x^2 + 2x + 3 = 0 \quad \text{in the interval} \quad \mathbb{R}
$$

#### Solution

$$
f(x) = x^5 - x^2 + 2x + 3 \quad (x \in \mathbb{R}) \implies f \in C
$$

$$
f(0) = 3 > 0, \quad f(-1) = -1 - 1 - 2 + 3 = -1 < 0
$$

By Bolzano's theorem, $\exists c \in \mathbb{R}: f(c) = 0$.
