---
title: '[A2] Extreme values'
---

# Extreme values of functions

## Local extrema of functions

### Definition

Let $f \in \mathbb{R} \to \mathbb{R},\ a \in D_f$.

We say that $f$ has at $a$

1. local minimum $\overset{df}{\iff} \exists r > 0\ \forall x \in B(a, r) \cap D_f: f(x) \geq f(a)$
2. strict local minimum $\overset{df}{\iff} \exists r > 0\ \forall x \in B(a, r) \cap D_f \setminus\{a\}: f(x) > f(a)$
3. local maximum $\overset{df}{\iff} \exists r > 0\ \forall x \in B(a, r) \cap D_f: f(x) \leq f(a)$
4. strict local maximum $\overset{df}{\iff} \exists r > 0\ \forall x \in B(a, r) \cap D_f \setminus\{a\}: f(x) < f(a)$

Where $a$ is a point of local extremum and $f(a)$ is the local extreme value.

### First derivative test for local extremum

Let $f \in \mathbb{R} \to \mathbb{R},\ a \in D_f,\ f \in D(a)$ and suppose that $f$ has a local extremum at $a$.

Then $f'(a) = 0$.

## Monotonicity

### First derivative test for monotonicity

Let $I \subseteq \mathbb{R}$ be an interval of any type, $f : I \to \mathbb{R},\ f \in C,\ f \in D$. Then

1. If $\forall x \in int I: f'(x) > 0$, then $f$ is strictly increasing on $I$.
2. If $\forall x \in int I: f'(x) < 0$, then $f$ is strictly decreasing on $I$.
3. If $\forall x \in int I: f'(x) = 0$, then $f$ is constant on $I$.

The practical application of the theorem: Let $f \in \mathbb{R} \to \mathbb{R},\ D_f$ be interval. Suppose that the equation $f'(x) = 0$ has finite many roots: $x_1 < x_2 < \ldots < x_k$. If $f'$ is continuous then the sign of $f'$ is constant on the interval $(x_{j−1}, x_j)$.Consequently the function is strictly increasing or strictly decreasing over $[x_{j−1}, x_j]$.

## Example 1

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values
of the following function

$$
f(x) = 1 - 4x - x^2
$$

### Solution

$$
f'(x) = -4 - 2x
$$

Find the roots of $f'$:

$$
-4 - 2x = 0 \Rightarrow x = -2
$$

$$
\begin{aligned}
\forall x < -2&: f'(x) > 0\\
\forall x > -2&: f'(x) < 0\\
x = -2&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly increasing on $(-\infty, -2)$
2. $f$ is strictly decreasing on $(-2, \infty)$
3. $f$ has a local maximum at $x = -2,\ f(-2) = 5$
4. $x = -2$ is also a global maximum
   $$
   \lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} (1 - 4x - x^2) = \lim_{x \to \pm\infty} x^2(\frac{1}{x^2} - \frac{4}{x} - 1) = -\infty
   $$
5. $f$ has no local or global minimum

## Example 2

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values

$$
f(x) = \frac{x}{x^2 - 6x - 16}
$$

$$
x^2 - 6x - 16 = 0 \Rightarrow x = 8, -2 \implies D_f = \mathbb{R} \setminus \{8, -2\}
$$

### Solution

$$
f'(x) = \frac{(x^2 - 6x - 16) - x(2x - 6)}{(x^2 - 6x - 16)^2} = \frac{-x^2 - 16}{(x^2 - 6x - 16)^2}
$$

Denominator is always positive, numerator is always negative. Therefore

$$
f'(x) < 0\ \forall x \in D_f \implies f\ \text{is strictly decreasing on}\ D_f
$$

$$
\lim_{x \to -2\pm0} f(x) = \pm\infty
$$

$$
\lim_{x \to 8\pm0} f(x) = \pm\infty
$$

$$
\lim_{x \to \pm\infty} f(x) = 0
$$

Therefore $f$ has no local or global extremum.

## Example 3

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values

$$
f(x) = e^{x^2 - 4x}
$$

### Solution

$$
f'(x) = e^{x^2 - 4x} \cdot (2x - 4)
$$

$e^{x^2 - 4x}$ is always positive

$$
2x - 4 = 0 \Rightarrow x = 2
$$

$$
\begin{aligned}
\forall x < 2&: f'(x) < 0\\
\forall x > 2&: f'(x) > 0\\
x = 2&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly decreasing on $(-\infty, 2)$
2. $f$ is strictly increasing on $(2, \infty)$
3. $f$ has a local minimum at $x = 2,\ f(2) = e^{-4}$
4. $x = 2$ is also a global minimum
   $$
   \lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} e^{x^2 - 4x} = +\infty
   $$
5. $f$ has no local or global maximum

## Example 4

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values

$$
f(x) = x \cdot \ln x
$$

$$
D_f = (0, \infty)
$$

### Solution

$$
f'(x) = \ln x + 1
$$

$$
\ln x + 1 = 0 \Rightarrow x = \frac{1}{e}
$$

$$
\begin{aligned}
\forall x \in (0, \frac{1}{e})&: f'(x) < 0\\
\forall x \in (\frac{1}{e}, \infty)&: f'(x) > 0\\
x = \frac{1}{e}&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly decreasing on $(0, \frac{1}{e})$
2. $f$ is strictly increasing on $(\frac{1}{e}, \infty)$
3. $f$ has a local minimum at $x = \frac{1}{e},\ f(\frac{1}{e}) = -\frac{1}{e}$
4. $x = \frac{1}{e}$ is also a global minimum
   $$
   \lim_{x \to 0+0} f(x) = 0
   $$
   $$
   \lim_{x \to \infty} f(x) = \infty
   $$
5. $f$ has no local or global maximum

## Example 5

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values

$$
f(x) = x^3 - 3x^2 + 3x + 2
$$

### Solution

$$
f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2
$$

$$
3(x - 1)^2 = 0 \Rightarrow x = 1
$$

$$
\begin{aligned}
\forall x < 1&: f'(x) > 0\\
\forall x > 1&: f'(x) > 0\\
x = 1&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly increasing on $(-\infty, 1) \cup (1, \infty)$
2. $f$ has a local minimum at $x = 1,\ f(1) = 3$
3. $x = 1$ is also a global minimum
   $$
   \lim_{x \to \pm\infty} f(x) = +\infty
   $$
4. $f$ has no local or global maximum

## Example 6

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values

$$
f(x) = x^2 \cdot e^{-x}
$$

### Solution

$$
f'(x) = 2x \cdot e^{-x} - x^2 \cdot e^{-x} = e^{-x} \cdot (2x - x^2)
$$

$e^{-x}$ is always positive

$$
2x - x^2 = 0 \Rightarrow x = 0, 2
$$

$$
\begin{aligned}
\forall x < 0&: f'(x) < 0\\
\forall x \in (0, 2)&: f'(x) > 0\\
\forall x > 2&: f'(x) < 0\\
x = 0&: f'(x) = 0\\
x = 2&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly decreasing on $(-\infty, 0)$
2. $f$ is strictly increasing on $(0, 2)$
3. $f$ is strictly decreasing on $(2, \infty)$
4. $f$ has a local minimum at $x = 0,\ f(0) = 0$
5. $f$ has a local maximum at $x = 2,\ f(2) = 4e^{-2}$

$$
\lim_{x \to -\infty} f(x) = +\infty
$$

$$
\lim_{x \to \infty} f(x) = 0
$$

6. $f$ has no global maximum
7. $f$ has a global minimum at $x = 0$

## Example 7

Discuss the monotonicity, the local extreme values and the global (=absolute) extreme values

$$
f(x) = x - \ln (1 + x)
$$

$$
D_f = (-1, \infty)
$$

### Solution

$$
f'(x) = 1 - \frac{1}{1 + x} = \frac{x}{1 + x}
$$

$$
\frac{x}{1 + x} = 0 \Rightarrow x = 0
$$

$$
\begin{aligned}
\forall x \in (-1, 0)&: f'(x) < 0\\
\forall x \in (0, \infty)&: f'(x) > 0\\
x = 0&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly decreasing on $(-1, 0)$
2. $f$ is strictly increasing on $(0, \infty)$
3. $f$ has a local minimum at $x = 0,\ f(0) = 0$
4. $x = 0$ is also a global minimum
   $$
   \lim_{x \to -1+0} f(x) = +\infty
   $$
   $$
   \lim_{x \to \infty} f(x) = +\infty
   $$
5. $f$ has no local or global maximum

## Example 8

Determine the global extreme values of the following function

$$
f(x) = \frac{x}{1 + x^2} \quad (x \in \mathbb{R})
$$

### Solution

$$
f'(x) = \frac{1 + x^2 - x \cdot 2x}{(1 + x^2)^2} = \frac{1 - x^2}{(1 + x^2)^2}
$$

$(1 + x^2)^2$ is always positive

$$
1 - x^2 = 0 \Rightarrow x = \pm 1
$$

$$
\begin{aligned}
\forall x \in (-1, 1)&: f'(x) > 0\\
\forall x \in (-\infty, -1) \cup (1, \infty)&: f'(x) < 0\\
x = -1&: f'(x) = 0\\
x = 1&: f'(x) = 0
\end{aligned}
$$

Therefore

1. $f$ is strictly increasing on $(-1, 1)$
2. $f$ is strictly decreasing on $(-\infty, -1) \cup (1, \infty)$
3. $f$ has a local minimum at $x = -1,\ f(-1) = -\frac{1}{2}$
4. $f$ has a local maximum at $x = 1,\ f(1) = \frac{1}{2}$

$$
\lim_{x \to -\infty} f(x) = 0
$$

$$
\lim_{x \to \infty} f(x) = 0
$$

5. $f$ has a global maximum at $x = 1,\ f(1) = \frac{1}{2}$
6. $f$ has a global minimum at $x = -1,\ f(-1) = -\frac{1}{2}$

## Example 9

Determine the global extreme values of the following function

$$
f(x) = \sin^4 x + \cos^4 x \quad (-\frac{2\pi}{3} \leq x \leq \frac{\pi}{3})
$$

### Solution

$$
\begin{aligned}
f'(x) &= 4\sin^3 x \cdot \cos x - 4\cos^3 x \cdot \sin x = 4\sin x \cos x (\sin^2 x - \cos^2 x) =\\
&= 2 \cdot \sin 2x \cdot (-\cos 2x) = -2 \sin 2x \cos 2x = -\sin 4x
\end{aligned}
$$

$$
\sin 4x = 0 \Rightarrow x = \frac{k\pi}{4},\ k \in \mathbb{Z}
$$

$$
\frac{k\pi}{4} \in (-\frac{2\pi}{3}, \frac{\pi}{3}) \Rightarrow k = -2, -1, 0, 1
$$

$$
\begin{aligned}
f(0) &= 1\\
f(-\frac{\pi}{4}) &= f(\frac{\pi}{4}) = \frac{1}{2}\\
f(-\frac{\pi}{2}) &= 1\\
f(-\frac{2\pi}{3}) &= \left(\frac{\sqrt{3}}{2}\right)^4 + \left(-\frac{1}{2}\right)^4 = \frac{5}{8}\\
f(\frac{\pi}{3}) &= \left(\frac{1}{2}\right)^4 + \left(\frac{\sqrt{3}}{2}\right)^4 = \frac{5}{8}
\end{aligned}
$$

Therefore

1. $f$ has a global maximum at $x = 0 \lor x = -\frac{\pi}{2},\ f(x) = 1$
2. $f$ has a global minimum at $x = \pm\frac{\pi}{4},\ f(x) = \frac{1}{2}$
