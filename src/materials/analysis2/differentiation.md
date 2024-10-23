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
13. $f(x) = \arcsin x \implies f'(x) = \frac{1}{\sqrt{1 - x^2}}$
14. $f(x) = \arccos x \implies f'(x) = -\frac{1}{\sqrt{1 - x^2}}$
15. $f(x) = \arctan x \implies f'(x) = \frac{1}{1 + x^2}$

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

## Equation of tangent line

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in int D_f$ and $f \in D(a)$.

The equation of the tangent line to the curve $y = f(x)$ at the point $(a, f(a))$ is

$$
y = f(a) + f'(a) \cdot (x - a)
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

If $x \in (0, +\infty)$

$$
f(x) = x^2 \implies f'(x) = 2x \quad f \in D(x)
$$

If $x \in (-\infty, 0)$

$$
f(x) = -x^2 \implies f'(x) = -2x \quad f \in D(x)
$$

If $x = 0$

Is it continuous at $x = 0$?

$$
\begin{aligned}
  \lim_{x \to 0+0} f(x) &= \lim_{x \to 0+0} x^2 = 0 \\
  \lim_{x \to 0-0} f(x) &= \lim_{x \to 0-0} -x^2 = 0
\end{aligned}
$$

So $f$ is continuous at $x = 0 \implies f \in C(0)$.

Is it differentiable ("smooth") at $x = 0$?

$$
\begin{aligned}
  \lim_{x \to 0+0} \frac{f(x) - f(0)}{x - 0} &= \lim_{x \to 0+0} \frac{x^2 - 0}{x} = 0\\
  \lim_{x \to 0-0} \frac{f(x) - f(0)}{x - 0} &= \lim_{x \to 0-0} \frac{-x^2 - 0}{x} = 0
\end{aligned}
$$

So

$$
f'_+\left(0\right) =f'_-\left(0\right) = 0 \implies f \in D(0),\ f'(0) = 0
$$

## Example 5 (differentiability)

Discuss the differentiability of the following function (in $c$).

$$
f(x) =
\begin{cases}
1 - x & \text{if} \quad x < 0 \\
e^{-x} & \text{if} \quad x \geq 0
\end{cases}
$$

#### Solution

If $x \in (0, +\infty)$

$$
f(x) = e^{-x} \implies f'(x) = -e^{-x} \quad f \in D(x)
$$

If $x \in (-\infty, 0)$

$$
f(x) = 1 - x \implies f'(x) = -1 \quad f \in D(x)
$$

If $x = 0$

Is it continuous at $x = 0$?

$$
\begin{aligned}
  \lim_{x \to 0+0} f(x) &= \lim_{x \to 0+0} e^{-x} = e^0 = 1 \\
  \lim_{x \to 0-0} f(x) &= \lim_{x \to 0-0} 1 - x = 1 - 0 = 1
\end{aligned}
$$

So $f$ is continuous at $x = 0 \implies f \in C(0)$.

Is it differentiable ("smooth") at $x = 0$?

$$
\begin{aligned}
  f'_+\left(0\right) &= -e^{-x} \Big|_{x = 0} = -1 \\
  f'_-\left(0\right) &= -1
\end{aligned}

\quad \implies f \in D(0),\ f'(0) = -1
$$

## Example 6 (differentiability)

Discuss the differentiability of the following function (in $c$) $\alpha$ is a real parameter.

$$
f(x) =
\begin{cases}
\alpha x + x^2 & \text{if} \quad x < 0 \\
x - x^2 & \text{if} \quad x \geq 0
\end{cases}
$$

#### Solution

If $x \in (0, +\infty)$

$$
f(x) = x - x^2 \implies f'(x) = 1 - 2x \quad f \in D(x)
$$

If $x \in (-\infty, 0)$

$$
f(x) = \alpha x + x^2 \implies f'(x) = \alpha + 2x \quad f \in D(x)
$$

If $x = 0$

Is it continuous at $x = 0$?

$$
\begin{aligned}
  \lim_{x \to 0+0} f(x) &= \lim_{x \to 0+0} x - x^2 = 0 \\
  \lim_{x \to 0-0} f(x) &= \lim_{x \to 0-0} \alpha x + x^2 = 0
\end{aligned}
$$

So $f$ is continuous at $x = 0 \implies f \in C(0)$.

Is it differentiable ("smooth") at $x = 0$?

$$
\begin{aligned}
  f'_+\left(0\right) &= 1 - 2 \cdot 0 = 1 \\
  f'_-\left(0\right) &= \alpha + 2 \cdot 0 = \alpha
\end{aligned}
$$

So $f \in D(0) \iff \alpha = 1$.

## Example 7 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = 4x^5 - 3x^4 + 2x^3 - 7x^2 + 6x + 7
$$

#### Solution

$$
\begin{aligned}
f'(x) &= 4 \cdot 5x^4 - 3 \cdot 4x^3 + 2 \cdot 3x^2 - 7 \cdot 2x + 6 =\\
&= 20x^4 - 12x^3 + 6x^2 - 14x + 6
\end{aligned}
$$

## Example 8 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = x^2 \cdot \sqrt[3]{x}
$$

#### Solution

$$
\begin{aligned}
f(x) &= x^2 \cdot x^{\frac{1}{3}} = x^{\frac{7}{3}} \implies f'(x) = \frac{7}{3}x^{\frac{4}{3}}
\end{aligned}
$$

## Example 9 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = \sqrt{x \cdot \sqrt[3]{x}}
$$

#### Solution

$$
\begin{aligned}
f(x) &= \sqrt{x \cdot x^{\frac{1}{3}}} = \left(x^{\frac{4}{3}}\right)^{\frac{1}{2}} = x^{\frac{2}{3}} \implies f'(x) = \frac{2}{3}x^{-\frac{1}{3}}
\end{aligned}
$$

## Example 10 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = e^x \cdot \sin x
$$

#### Solution

$$
\begin{aligned}
f'(x) &= e^x \cdot \cos x + e^x \cdot \sin x = e^x \cdot (\cos x + \sin x)
\end{aligned}
$$

## Example 11 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = (x^3 + \ln x) \cdot \cos x
$$

#### Solution

$$
\begin{aligned}
f'(x) &= (3x^2 + \frac{1}{x}) \cdot \cos x - (x^3 + \ln x) \cdot \sin x
\end{aligned}
$$

## Example 12 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = \frac{2x^2 + 3x + 1}{x^3 + x^2 + x + 1}
$$

#### Solution

$$
\begin{aligned}
f'(x) &= \frac{(2x^2 + 3x + 1)'(x^3 + x^2 + x + 1) - (2x^2 + 3x + 1)(x^3 + x^2 + x + 1)'}{(x^3 + x^2 + x + 1)^2} =\\
&= \frac{(4x + 3)(x^3 + x^2 + x + 1) - (2x^2 + 3x + 1)(3x^2 + 2x + 1)}{(x^3 + x^2 + x + 1)^2}
\end{aligned}
$$

## Example 13 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = \sin(x^3 + \ln x)
$$

#### Solution

$$
\begin{aligned}
f'(x) &= \cos(x^3 + \ln x) \cdot (3x^2 + \frac{1}{x})
\end{aligned}
$$

## Example 14 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = e^{\sin^3 x}
$$

#### Solution

$$
\begin{aligned}
f'(x) &= e^{\sin^3 x} \cdot 3\sin^2 x \cdot \cos x
\end{aligned}
$$

## Example 15 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = \frac{1}{\sqrt[3]{x + \sqrt{x}}}
$$

#### Solution

$$
\begin{aligned}
f(x) &= (x + x^{\frac{1}{2}})^{-\frac{1}{3}} \implies f'(x) = -\frac{1}{3}(x + x^{\frac{1}{2}})^{-\frac{4}{3}} \cdot (1 + \frac{1}{2}x^{-\frac{1}{2}})
\end{aligned}
$$

## Example 16 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = x^x
$$

#### Solution

$$
\begin{aligned}
f(x) &= e^{\ln x^x} = e^{x \ln x} \implies\\
f'(x) &= e^{x \ln x} \cdot (x \cdot \ln x)' =\\
&= e^{x \ln x} \cdot (\ln x + x \cdot \frac{1}{x}) = x^x \cdot (\ln x + 1)
\end{aligned}
$$

## Example 17 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = (\sin x)^{\cos \sqrt{x}}
$$

#### Solution

$$
\begin{aligned}
f(x) &= e^{\ln(\sin x)^{\cos \sqrt{x}}} = e^{\cos x^{\frac{1}{2}} \cdot \ln \sin x} \implies\\
f'(x) &= e^{\cos x^{\frac{1}{2}} \cdot \ln \sin x} \cdot (\cos x^{\frac{1}{2}} \cdot \ln \sin x)' =\\
&= e^{\cos x^{\frac{1}{2}} \cdot \ln \sin x} \cdot (-\sin x \cdot \frac{1}{2} x^{-\frac{1}{2}} \cdot \ln \sin x + \cos x^{\frac{1}{2}} \cdot \frac{1}{\sin x} \cdot \cos x)
\end{aligned}
$$

## Example 18 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = \arcsin (2x^2 - \sqrt{x})
$$

#### Solution

$$
\begin{aligned}
f(x) &= \arcsin (2x^2 - x^{\frac{1}{2}}) \implies f'(x) = \frac{1}{\sqrt{1 - (2x^2 - x^{\frac{1}{2}})^2}} \cdot (4x - \frac{1}{2}x^{-\frac{1}{2}})
\end{aligned}
$$

## Example 19 (determine derivative)

Determine the derivative of the following function.

$$
f(x) = \frac{\arcsin x}{\arctan x}
$$

#### Solution

$$
\begin{aligned}
f'(x) = \frac{\arctan x \cdot \frac{1}{\sqrt{1 - x^2}} - \arcsin x \cdot \frac{1}{1 + x^2}}{(\arctan x)^2}
\end{aligned}
$$

## Example 20 (equation of tangent line)

Determine the equation of the tangent line to the following curves at the given points.

$$
y = \frac{x}{x^2 - 2} \quad x_0 = 2
$$

#### Solution

$$
\begin{aligned}
f'(x) &= \frac{(x)'(x^2 - 2) - x(x^2 - 2)'}{(x^2 - 2)^2} = \frac{x^2 - 2 - x(2x)}{(x^2 - 2)^2} = \frac{-x^2 - 2}{(x^2 - 2)^2}\\
f'(2) &= \frac{-2^2 - 2}{(2^2 - 2)^2} = -\frac{6}{4} = -\frac{3}{2}\\
f(2) &= \frac{2}{2^2 - 2} = \frac{2}{2} = 1
\end{aligned}
$$

$$
\begin{aligned}
y &= f(2) + f'(2) \cdot (x - 2) = 1 - \frac{3}{2} \cdot (x - 2) =\\
&= 1 - \frac{3}{2}x + 3 = 4 - \frac{3}{2}x
\end{aligned}
$$

## Example 21 (equation of tangent line)

Determine the equation of the tangent line to the following curves at the given points.

$$
y = e^x + e^{2x} \quad x_0 = 0
$$

#### Solution

$$
\begin{aligned}
f'(x) &= e^x + 2e^{2x}\\
f'(0) &= e^0 + 2e^0 = 1 + 2 = 3\\
f(0) &= e^0 + e^{2 \cdot 0} = 1 + 1 = 2
\end{aligned}
$$

$$
\begin{aligned}
y &= f(0) + f'(0) \cdot (x - 0) = 2 + 3 \cdot x = 3x + 2
\end{aligned}
$$

## Example 22 (equation of tangent line)

Determine the equation of the tangent line to the following curves at the given points.

$$
x^2y = 2y + x^{x + 1} \quad P_0 = (1, -1)
$$

#### Solution

$$
x^2y = 2y + x^{x + 1} \implies y = \frac{x^{x + 1}}{x^2 - 2}
$$

$$
x^{x + 1} = e^{(x + 1) \ln x} \implies (x^{x + 1})' = x^{x + 1} \cdot (\ln x + \frac{x + 1}{x})
$$

$$
\begin{aligned}
f(x) &= \frac{x^{x + 1}}{x^2 - 2} \quad x_0 = 1,\ f(1) = -1\\
f'(x) &= \frac{(x^{x + 1})'(x^2 - 2) - x^{x + 1}(x^2 - 2)'}{(x^2 - 2)^2} =\\
&= \frac{x^{x + 1} \cdot (\ln x + \frac{x + 1}{x}) \cdot (x^2 - 2) - x^{x + 1} \cdot 2x}{(x^2 - 2)^2}\\
f'(1) &= \frac{1 \cdot (0 + 2) \cdot (1 - 2) - 1 \cdot 2}{1^2 - 2 \cdot 1 \cdot 2 + 2^2} = \frac{-2 - 2}{1 - 4 + 4} = -4
\end{aligned}
$$

$$
\begin{aligned}
y &= f(1) + f'(1) \cdot (x - 1) = -1 - 4 \cdot (x - 1) = -4x + 3
\end{aligned}
$$
