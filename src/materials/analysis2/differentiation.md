---
title: '[A2] Differentiation'
---

# Differentiation of functions

## Differentiability at a point

### Definition

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in int D_f$.

$f$ is differentiable at $a \overset{df}{\iff}$

$$
\exists \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \in \mathbb{R}
$$

In this case $f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$. This limit is called the derivative of $f$ at $a$.

The set of functions that are differentiable at $a$ is denoted as $D(a)$.

## Derivative of function

### Definition

Let $f \in \mathbb{R} \to \mathbb{R}$ and suppose that the set

$$
D_f' = \{ x \in int D_f \mid f \in D(x) \}
$$

is nonempty. Then the function

$$
f' \in D_f' \to \mathbb{R} \quad x \mapsto f'(x)
$$

is called the derivative function or the derivative of $f$.

### Theorem

$$
f \in D(a) \implies f \in C(a) \quad (\text{but } f \in C \nRightarrow f \in D)
$$

## Basic derivatives

1. $f(x) = c \implies f'(x) = 0$
2. $f(x) = x \implies f'(x) = 1$
3. $f(x) = x^n \implies f'(x) = nx^{n-1}$
4. $f(x) = \frac{1}{x} \implies f'(x) = -\frac{1}{x^2}$
5. $f(x) = \sqrt{x} \implies f'(x) = \frac{1}{2\sqrt{x}}$
6. $f(x) = \sin x \implies f'(x) = \cos x$
7. $f(x) = \cos x \implies f'(x) = -\sin x$
8. $f(x) = tg x \implies f'(x) = \frac{1}{\cos^2 x} = 1 + tg^2 x$
9. $f(x) = e^x \implies f'(x) = e^x$
10. $f(x) = \ln x \implies f'(x) = \frac{1}{x}$
11. $f(x) = \log_a x \implies f'(x) = \frac{1}{x \ln a}$
12. $f(x) = a^x \implies f'(x) = a^x \ln a$

## Rules of differentiation

### Sum theorem

$$
(f + g)'(x) = f'(x) + g'(x)
$$

### Product theorem

$$
(f \cdot g)'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$

### Quotient theorem

$$
\left(\frac{f}{g}\right)'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)}
$$

### Chain rule

$$
(f \circ g)'(x) = f'(g(x)) \cdot g'(x)
$$

### Inverse rule

$$
(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}
$$

## Example 1 (derivative by definition)

Determine $f'(a)$ by definition.

$$
f(x) = \sqrt{x}, \quad a = 3
$$

#### Solution

$$
\begin{aligned}
f'(3) &= \lim_{x \to 3} \frac{\sqrt{x} - \sqrt{3}}{x - 3} = \lim_{x \to 3} \frac{\sqrt{x} - \sqrt{3}}{(\sqrt{x} - \sqrt{3})(\sqrt{x} + \sqrt{3})} =\\
&= \lim_{x \to 3} \frac{1}{\sqrt{x} + \sqrt{3}} = \frac{1}{2\sqrt{3}}
\end{aligned}
$$

## Example 2 (derivative by definition)

Determine $f'(a)$ by definition.

$$
f(x) = x^2 + 2x - 1, \quad a = 1
$$

#### Solution

$$
\begin{aligned}
f'(1) &= \lim_{x \to 1} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1} \frac{x^2 + 2x - 1 - 2}{x - 1} =\\
&= \lim_{x \to 1} \frac{x^2 + 2x - 3}{x - 1} = \lim_{x \to 1} \frac{(x - 1)(x + 3)}{x - 1} =\\
&= \lim_{x \to 1} x + 3 = 4
\end{aligned}
$$

## Example 3 (derivative by definition)

Determine $f'(a)$ by definition.

$$
f(x) = \frac{x + 2}{x^2 - 9}, \quad a = -1
$$

#### Solution

$$
\begin{aligned}
f'(-1) &= \lim_{x \to -1} \frac{f(x) - f(-1)}{x - (-1)} = \lim_{x \to -1} \frac{\frac{x + 2}{x^2 - 9} + \frac{1}{8}}{x + 1} =\\
&= \lim_{x \to -1} \frac{8(x + 2) + x^2 - 9}{8(x^2 - 9)(x + 1)} = \lim_{x \to -1} \frac{x^2 + 8x + 7}{8(x^2 - 9)(x + 1)} =\\
&= \lim_{x \to -1} \frac{(x + 1)(x + 7)}{8(x^2 - 9)(x + 1)} = \lim_{x \to -1} \frac{x + 7}{8(x^2 - 9)} =\\
&= \frac{6}{8 \cdot (-8)} = -\frac{3}{32}
\end{aligned}
$$

## Example 4 (differentiability)

Discuss the differentiability of the following function (in $c$).

$$
f(x) = x \cdot |x|, \quad (x \in \mathbb{R})
$$

#### Solution

$$
f(x) = x \cdot |x| \implies
\begin{cases}
x^2 & \text{if} \quad x \geq 0 \\
-x^2 & \text{if} \quad x < 0
\end{cases}
$$

Is it continuous at $x = 0$?

$$
\begin{aligned}
  \lim_{x \to 0+0} f(x) &= \lim_{x \to 0+0} x^2 = 0 \\
  \lim_{x \to 0-0} f(x) &= \lim_{x \to 0-0} -x^2 = 0
\end{aligned}
$$

So $f$ is continuous at $x = 0 \implies f \in C(0)$.

Is it differentiable ("smooth")?

$$
\begin{aligned}
  x \in (0, +\infty)&: \quad f \in D(x),\ f'(x) = 2x\\
  x \in (-\infty, 0)&: \quad f \in D(x),\ f'(x) = -2x\\
\end{aligned}
$$
