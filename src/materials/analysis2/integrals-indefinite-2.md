---
title: '[A2] Indefinite integrals II'
---

# Indefinite integrals II

## Integration of rational functions

### General steps

**1. Decomposition by division with remainder (if necessary).**

Given a rational function of with polynomials $P$ and $Q$:

$$
\frac{P(x)}{Q(x)} = T(x) + \frac{R(x)}{Q(x)}
$$

where $T(x)$ is a polynomial and $\deg R < \deg Q$ (degree of polynomial $P$ is less than that of $Q$).

**2. Factor the denominator.**

Factor the denominator $Q(x)$ into a product of linear and irreducible quadratic factors.

**3. Decompose into a sum of elementary fractions.**

For each factor $Q_i(x)$ of $Q(x)$, write the corresponding term as a sum of elementary fractions:

$$
\frac{R(x)}{Q(x)} = \frac{A_1}{Q_1(x)} + \frac{A_2}{Q_2(x)} + \ldots + \frac{A_n}{Q_n(x)}
$$

**4. Integrate each elementary fraction separately and sum the results.**

## Integration by parts

### Theorem

Let $I \subseteq \mathbb{R}$ be an open interval, $f, g : I \to \mathbb{R}$, $f, g \in D$, $f', g' \in C$.

Then

$$
\int f(x) \cdot g'(x) \, dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx
$$

Basic types of integrals for which it may be worthwhile to integrate by parts:

**1. Integrals of the form**

$$
\int P(x) \cdot T(ax + b) \, dx \quad (x,a,b \in \mathbb{R}, a \neq 0)
$$

where $P$ is a polynomial and $T \in \{ \sin, \cos, \exp \}$.

In this case whe choose $f(x) = P(x)$ and $g'(x) = T(ax + b)$.

**2. Integrals of the form**

$$
\int P(x) \cdot G^n(ax + b) \, dx \quad (ax + b \in D_G,\ a,b \in \mathbb{R}, a \neq 0, n \in \mathbb{N^+})
$$

where $P$ is a polynomial and $G \in \{ \ln, \arcsin,  \arctan \}$.

In this case whe choose $f(x) = G^n(ax + b)$ and $g'(x) = P(x)$.

## Substitution rule

Let $I, J \subseteq \mathbb{R}$ be open intervals.

Assume that $f : I \to \mathbb{R}$, $g : J \to I$, $\mathcal{R}_g = I$, $g \in D(J)$, $g' > 0$ on $J$ (or $g' < 0$ on $J$), and that the function $(f \circ g) \cdot g'$ has an antiderivative.

Then the function $f$ also has an antiderivative and

$$
\int f(x) \, dx \overset{x = g(t)}{=} \int f(g(t)) \cdot g'(t) \, dt \bigg|_{t = g^{-1}(x)} \quad (x \in I)
$$

We typically apply substitution rule in the following way:

Suppose we want to compute an indefinite integral $\int f(x) \, dx$.

Using a suitable function $g$, that satisfies the conditions of the substitution rule, we introduce the **new** variable $t = g^{-1}(x)$ in place of the **old** variable $x$ by setting $x = g(t)$.

Then we compute the integral $\int f(g(t)) \cdot g'(t) \, dt$ with respect to the new variable $t$.

Finally, we replace the variable $t$ with the expression $g^{-1}(x)$ to obtain the result.

#### Trigonometric substitution

Advisable to watch this [video](https://www.youtube.com/watch?v=t3rzxSgvZZk) or similar, for a better understanding of trigonometric substitution.

1. **Integrals of the form**

$$
\int R(x, \sqrt{a^2 - x^2}) \, dx
$$

where $R$ is a rational function and $a > 0$.

In this case we choose $x = a \sin t$.

2. **Integrals of the form**

$$
\int R(x, \sqrt{x^2 + a^2}) \, dx
$$

where $R$ is a rational function and $a > 0$.

In this case we choose $x = a \tan t$.

3. **Integrals of the form**

$$
\int R(x, \sqrt{x^2 - a^2}) \, dx
$$

where $R$ is a rational function and $a > 0$.

In this case we choose $x = a \sec t$.

## Example 1 (integration by parts)

Evaluate the following indefinite integral:

$$
\int x e^{2x} \, dx
$$

#### Solution

Let $f(x) = x \implies f'(x) = 1$.

Let $g'(x) = e^{2x} \implies g(x) = \frac{1}{2} e^{2x}$.

Then

$$
\begin{aligned}
\int x e^{2x} \, dx &= f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= x \cdot \frac{1}{2} e^{2x} - \int 1 \cdot \frac{1}{2} e^{2x} \, dx =\\
&= \frac{1}{2} x e^{2x} - \frac{1}{2} \int e^{2x} \, dx =\\
&= \frac{1}{2} x e^{2x} - \frac{1}{4} e^{2x} + C
\end{aligned}
$$

## Example 2 (integration by parts)

Evaluate the following indefinite integral:

$$
\int x^2 e^{-x} \, dx
$$

#### Solution

Let $f(x) = x^2 \implies f'(x) = 2x$.

Let $g'(x) = e^{-x} \implies g(x) = -e^{-x}$.

Then

$$
\begin{aligned}
\int x^2 e^{-x} \, dx &= f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= x^2 \cdot (-e^{-x}) - \int 2x \cdot (-e^{-x}) \, dx =\\
&= -x^2 e^{-x} + 2 \int x e^{-x} \, dx
\end{aligned}
$$

Now we can use integration by parts again to evaluate the remaining integral.

Let $f(x) = x \implies f'(x) = 1$.

Let $g'(x) = e^{-x} \implies g(x) = -e^{-x}$.

Then

$$
\begin{aligned}
\int x e^{-x} \, dx &= f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= x \cdot (-e^{-x}) - \int 1 \cdot (-e^{-x}) \, dx =\\
&= -x e^{-x} + \int e^{-x} \, dx =\\
&= -x e^{-x} - e^{-x} + C
\end{aligned}
$$

Therefore

$$
\begin{aligned}
\int x^2 e^{-x} \, dx &= -x^2 e^{-x} + 2 \left( -x e^{-x} - e^{-x} \right) + C =\\
&= -x^2 e^{-x} - 2x e^{-x} - 2 e^{-x} + C =\\
&= -e^{-x} \left( x^2 + 2x + 2 \right) + C
\end{aligned}
$$

## Example 3 (integration by parts)

Evaluate the following indefinite integral:

$$
\int x^2 \sin(5x + 1) \, dx
$$

#### Solution

Let $f(x) = x^2 \implies f'(x) = 2x$.

Let $g'(x) = \sin(5x + 1) \implies g(x) = -\frac{1}{5} \cos(5x + 1)$.

Then

$$
\begin{aligned}
&\int x^2 \sin(5x + 1) \, dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= x^2 \cdot \left( -\frac{1}{5} \cos(5x + 1) \right) - \int 2x \cdot \left( -\frac{1}{5} \cos(5x + 1) \right) \, dx =\\
&= -\frac{1}{5} x^2 \cos(5x + 1) + \frac{2}{5} \int x \cos(5x + 1) \, dx
\end{aligned}
$$

Now we can use integration by parts again to evaluate the remaining integral.

Let $f(x) = x \implies f'(x) = 1$.

Let $g'(x) = \cos(5x + 1) \implies g(x) = \frac{1}{5} \sin(5x + 1)$.

Then

$$
\begin{aligned}
&\int x \cos(5x + 1) \, dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= x \cdot \frac{1}{5} \sin(5x + 1) - \int 1 \cdot \frac{1}{5} \sin(5x + 1) \, dx =\\
&= \frac{1}{5} x \sin(5x + 1) - \frac{1}{5} \int \sin(5x + 1) \, dx =\\
&= \frac{1}{5} x \sin(5x + 1) + \frac{1}{25} \cos(5x + 1) + C
\end{aligned}
$$

Therefore

$$
\begin{aligned}
&\int x^2 \sin(5x + 1) \, dx =\\
&= -\frac{1}{5} x^2 \cos(5x + 1) + \frac{2}{5} \left( \frac{1}{5} x \sin(5x + 1) + \frac{1}{25} \cos(5x + 1) \right) + C =\\
&= -\frac{1}{5} x^2 \cos(5x + 1) + \frac{2}{25} x \sin(5x + 1) + \frac{2}{125} \cos(5x + 1) + C
\end{aligned}
$$

## Example 4 (integration by parts)

Evaluate the following indefinite integral:

$$
\int \ln x \, dx
$$

#### Solution

Let $f(x) = \ln x \implies f'(x) = \frac{1}{x}$.

Let $g'(x) = 1 \implies g(x) = x$.

Then

$$
\begin{aligned}
\int \ln x \, dx &= f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= \ln x \cdot x - \int \frac{1}{x} \cdot x \, dx =\\
&= x \ln x - \int 1 \, dx =\\
&= x \ln x - x + C =\\
&= x \left( \ln x - 1 \right) + C
\end{aligned}
$$

## Example 5 (integration by parts)

Evaluate the following indefinite integral:

$$
\int (x^3 + 2x + 2) \ln x \, dx
$$

#### Solution

Let $f(x) = \ln x \implies f'(x) = \frac{1}{x}$.

Let $g'(x) = x^3 + 2x + 2 \implies g(x) = \frac{1}{4} x^4 + x^2 + 2x$.

Then

$$
\begin{aligned}
&\int (x^3 + 2x + 2) \ln x \, dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= \ln x \cdot \left( \frac{1}{4} x^4 + x^2 + 2x \right) - \int \frac{1}{x} \cdot \left( \frac{1}{4} x^4 + x^2 + 2x \right) \, dx =\\
&= \frac{1}{4} x^4 \ln x + x^2 \ln x + 2x \ln x - \int \frac{1}{4} x^3 + x + 2 \, dx =\\
&= \frac{1}{4} x^4 \ln x + x^2 \ln x + 2x \ln x - \frac{1}{16} x^4 - \frac{1}{2} x^2 - 2x + C
\end{aligned}
$$

## Example 6 (integration by parts)

Evaluate the following indefinite integral:

$$
\int \arctan 3x \, dx
$$

#### Solution

Let $f(x) = \arctan 3x \implies f'(x) = \frac{3}{1 + (3x)^2} = \frac{3}{1 + 9x^2}$.

Let $g'(x) = 1 \implies g(x) = x$.

Then

$$
\begin{aligned}
\int \arctan 3x \, dx &= f(x) \cdot g(x) - \int f'(x) \cdot g(x) \, dx =\\
&= \arctan 3x \cdot x - \int \frac{3x}{1 + 9x^2} \, dx
\end{aligned}
$$

Now we can use substitution rule to evaluate the remaining integral.

$$
(1 + 9x^2)' = 18x
$$

$$
\begin{aligned}
\int \frac{3x}{1 + 9x^2} \, dx &= \frac{1}{6} \int \frac{18x}{1 + 9x^2} \, dx =\\
&= \frac{1}{6} \ln |1 + 9x^2| + C = \frac{1}{6} \ln (1 + 9x^2) + C
\end{aligned}
$$

Therefore

$$
\begin{aligned}
\int \arctan 3x \, dx &= x \arctan 3x - \frac{1}{6} \ln (1 + 9x^2) + C
\end{aligned}
$$

## Example 7 (integration of rational functions)

Evaluate the following indefinite integral:

$$
\int \frac{x^3 + x^2 - x + 3}{x^2 - 1} \, dx
$$

#### Solution

1. Decomposition by division with remainder.

$$
\frac{x^3 + x^2 - x + 3}{x^2 - 1} = x + 1 + \frac{4}{x^2 - 1}
$$

2. Factor the denominator.

$$
x^2 - 1 = (x - 1)(x + 1)
$$

3. Decompose into a sum of elementary fractions.

$$
\begin{align}
\frac{4}{x^2 - 1} &= \frac{A}{x - 1} + \frac{B}{x + 1} =\\
&= \frac{A(x + 1) + B(x - 1)}{(x - 1)(x + 1)}
\end{align}
$$

$$
\begin{align}
x = 1 &\implies 4 = 2A \implies A = 2\\
x = -1 &\implies 4 = -2B \implies B = -2
\end{align}
$$

$$
\frac{4}{x^2 - 1} = \frac{2}{x - 1} - \frac{2}{x + 1}
$$

4. Integrate each elementary fraction separately and sum the results.

$$
\begin{aligned}
\int \frac{x^3 + x^2 - x + 3}{x^2 - 1} \, dx &= \int x + 1 + \frac{2}{x - 1} - \frac{2}{x + 1} \, dx =\\
&= \frac{1}{2} x^2 + x + 2 \ln |x - 1| - 2 \ln |x + 1| + C
\end{aligned}
$$

## Example 8 (integration of rational functions)

Evaluate the following indefinite integral:

$$
\int \frac{1}{x^2 - 6x + 8} \, dx
$$

#### Solution

1. Decomposition by division with remainder.

_Not needed_

2. Factor the denominator.

$$
x^2 - 6x + 8 = (x - 2)(x - 4)
$$

3. Decompose into a sum of elementary fractions.

$$
\begin{align}
\frac{1}{x^2 - 6x + 8} &= \frac{A}{x - 2} + \frac{B}{x - 4} =\\
&= \frac{A(x - 4) + B(x - 2)}{(x - 2)(x - 4)}
\end{align}
$$

$$
\begin{align}
x = 2 &\implies 1 = -2A \implies A = -\frac{1}{2}\\
x = 4 &\implies 1 = 2B \implies B = \frac{1}{2}
\end{align}
$$

$$
\frac{1}{x^2 - 6x + 8} = -\frac{1}{2} \frac{1}{x - 2} + \frac{1}{2} \frac{1}{x - 4}
$$

4. Integrate each elementary fraction separately and sum the results.

$$
\begin{aligned}
\int \frac{1}{x^2 - 6x + 8} \, dx &= -\frac{1}{2} \int \frac{1}{x - 2} \, dx + \frac{1}{2} \int \frac{1}{x - 4} \, dx =\\
&= -\frac{1}{2} \ln |x - 2| + \frac{1}{2} \ln |x - 4| + C
\end{aligned}
$$

## Example 9 (integration of rational functions)

Evaluate the following indefinite integral:

$$
\int \frac{4x^2 + 13x - 9}{x^3 + 2x^2 - 3x} \, dx
$$

#### Solution

1. Decomposition by division with remainder.

_Not needed_

2. Factor the denominator.

$$
x^3 + 2x^2 - 3x = x(x^2 + 2x - 3) = x(x + 3)(x - 1)
$$

3. Decompose into a sum of elementary fractions.

$$
\begin{align}
\frac{4x^2 + 13x - 9}{x^3 + 2x^2 - 3x} &= \frac{A}{x} + \frac{B}{x + 3} + \frac{C}{x - 1} =\\
&= \frac{A(x + 3)(x - 1) + Bx(x - 1) + Cx(x + 3)}{x(x + 3)(x - 1)}
\end{align}
$$

$$
\begin{align}
x = 0 &\implies -9 = -3A \implies A = 3\\
x = -3 &\implies 4 \cdot 9 - 13 \cdot 3 - 9 = B \cdot (-3) \cdot (-4)\\
&-12 = B \cdot 12 \implies B = -1\\
x = 1 &\implies 4 + 13 - 9 = C \cdot 1 \cdot 4\\
&8 = 4C \implies C = 2
\end{align}
$$

$$
\frac{4x^2 + 13x - 9}{x^3 + 2x^2 - 3x} = \frac{3}{x} - \frac{1}{x + 3} + \frac{2}{x - 1}
$$

4. Integrate each elementary fraction separately and sum the results.

$$
\begin{aligned}
\int \frac{4x^2 + 13x - 9}{x^3 + 2x^2 - 3x} \, dx &= \int \frac{3}{x} - \frac{1}{x + 3} + \frac{2}{x - 1} \, dx =\\
&= 3 \ln |x| - \ln |x + 3| + 2 \ln |x - 1| + C
\end{aligned}
$$

## Example 10 (integration of rational functions)

Evaluate the following indefinite integral:

$$
\int \frac{1}{x^3 + 2x^2 + x} \, dx
$$

#### Solution

1. Decomposition by division with remainder.

_Not needed_

2. Factor the denominator.

$$
x^3 + 2x^2 + x = x(x^2 + 2x + 1) = x(x + 1)^2
$$

3. Decompose into a sum of elementary fractions.

$$
\begin{align}
\frac{1}{x^3 + 2x^2 + x} &= \frac{A}{x} + \frac{B}{x + 1} + \frac{C}{(x + 1)^2} =\\
&= \frac{A(x + 1)^2 + Bx(x + 1) + Cx}{x(x + 1)^2}
\end{align}
$$

$$
\begin{align}
x = 0 &\implies 1 = A \cdot 1 \cdot 1 \implies A = 1\\
x = -1 &\implies 1 = C \cdot (-1) \implies C = -1\\
x = 1 &\implies 1 = 4A + 2B + C = 4 + 2B - 1 \implies B = -1
\end{align}
$$

$$
\frac{1}{x^3 + 2x^2 + x} = \frac{1}{x} - \frac{1}{x + 1} - \frac{1}{(x + 1)^2}
$$

4. Integrate each elementary fraction separately and sum the results.

$$
\begin{aligned}
\int \frac{1}{x^3 + 2x^2 + x} \, dx &= \int \frac{1}{x} - \frac{1}{x + 1} - \frac{1}{(x + 1)^2} \, dx =\\
&= \ln |x| - \ln |x + 1| + \frac{1}{x + 1} + C
\end{aligned}
$$

## Example 11 (substitution rule)

Evaluate the following indefinite integral:

$$
\int \frac{e^{3x}}{e^x + 2} \, dx
$$

#### Solution

Let $t = e^x \implies x = \ln t =: g(t)$.

Since $x \in \mathbb{R}$, we have $\mathcal{R}_g = \mathbb{R}$, and consequently $\mathcal{D}_g = (0, \infty)$.

The function $g$ is differentiable and $g'(t) = \frac{1}{t} > 0$.

Which implies that $g$ is strictly increasing, therefore $g$ is invertible.

$$
g^{-1}(x) = e^x = t \quad (x \in \mathbb{R})
$$

Then

$$
\begin{aligned}
\int \frac{e^{3x}}{e^x + 2} \, dx &= \int \frac{t^3}{t + 2} \cdot \frac{1}{t} \, dt =\\
&= \int \frac{t^2}{t + 2} \, dt
\end{aligned}
$$

Now we can use polynomial division to simplify the integrand.

$$
\begin{aligned}
\frac{t^2}{t + 2} &= t - 2 + \frac{4}{t + 2}
\end{aligned}
$$

Integrate

$$
\begin{aligned}
\int \frac{t^2}{t + 2} \, dt &= \int t - 2 + \frac{4}{t + 2} \, dt =\\
&= \frac{1}{2} t^2 - 2t + 4 \ln |t + 2| + C =\\
&= \frac{1}{2} t^2 - 2t + 4 \ln (t + 2) + C
\end{aligned}
$$

Substitute $t = e^x$ back

$$
\begin{aligned}
\frac{t^2}{2} - 2t + 4 \ln (t + 2) + C \bigg|_{t = e^x} &= \frac{e^{2x}}{2} - 2e^x + 4 \ln (e^x + 2) + C \quad (x \in \mathbb{R})
\end{aligned}
$$

## Example 12 (substitution rule)

Evaluate the following indefinite integral:

$$
\int \sqrt{e^x - 1} \, dx \quad (x > 0)
$$

#### Solution

Let $t = \sqrt{e^x - 1} \implies t^2 = e^x - 1 \implies e^x = t^2 + 1 \implies x = \ln (t^2 + 1) =: g(t)$.

Since $\mathcal{R}_g = (0, \infty)$, the function $g$ is differentiable and

$$
g'(t) = \frac{2t}{t^2 + 1} > 0 \quad (t > 0)
$$

So $g$ is strictly increasing, therefore $g$ is invertible.

$$
g^{-1}(x) = \sqrt{e^x - 1} = t \quad (x > 0)
$$

Then

$$
\begin{aligned}
\int \sqrt{e^x - 1} \, dx &= \int t \cdot \frac{2t}{t^2 + 1} \, dt =\\
&= 2 \int \frac{t^2}{t^2 + 1} \, dt =\\
&= 2 \int 1 - \frac{1}{t^2 + 1} \, dt =\\
&= 2 \left( t - \arctan t \right) + C
\end{aligned}
$$

Substitute $t = \sqrt{e^x - 1}$ back

$$
\begin{aligned}
2 \left( t - \arctan t \right) + C \bigg|_{t = \sqrt{e^x - 1}} &= 2 \left( \sqrt{e^x - 1} - \arctan \sqrt{e^x - 1} \right) + C \quad (x > 0)
\end{aligned}
$$

## Example 13 (substitution rule)

Evaluate the following indefinite integral:

$$
\int x \sqrt{3x - 1} \, dx \quad (x > \frac{1}{3})
$$

#### Solution

Let $t = \sqrt{3x - 1} \implies t^2 = 3x - 1 \implies x = \frac{t^2 + 1}{3} =: g(t)$.

Since $x > \frac{1}{3}$, we have $\mathcal{R}_g = (0, \infty)$, and consequently $\mathcal{D}_g = (\frac{1}{3}, \infty)$.

The function $g$ is differentiable and $g'(t) = \frac{2t}{3} > 0$.

Which implies that $g$ is strictly increasing, therefore $g$ is invertible.

$$
g^{-1}(x) = \sqrt{3x - 1} = t \quad (x > \frac{1}{3})
$$

Then

$$
\begin{aligned}
\int x \sqrt{3x - 1} \, dx &= \int \frac{t^2 + 1}{3} \cdot t \cdot \frac{2t}{3} \, dt =\\
&= \frac{2}{9} \int t^4 + t^2 \, dt =\\
&= \frac{2}{9} \left( \frac{t^5}{5} + \frac{t^3}{3} \right) + C
\end{aligned}
$$

Substitute $t = \sqrt{3x - 1}$ back

$$
\begin{aligned}
&\frac{2}{9} \left( \frac{t^5}{5} + \frac{t^3}{3} \right) + C \bigg|_{t = \sqrt{3x - 1}} =\\
&=\frac{2}{9} \left( \frac{(\sqrt{3x - 1})^5}{5} + \frac{(\sqrt{3x - 1})^3}{3} \right) + C \quad (x > \frac{1}{3})
\end{aligned}
$$

## Example 14 (substitution rule)

Evaluate the following indefinite integral:

$$
\int \frac{1}{x^2} \sqrt[3]{\frac{x + 1}{x}} \, dx \quad (x > 0)
$$

#### Solution

Let $t = \sqrt[3]{\frac{x + 1}{x}} \implies t^3 = \frac{x + 1}{x} \implies x = \frac{1}{t^3 - 1}$.

If $x > 0$, then $t > 1$, therefore the substitution function $g$ is given by

$$
g(t) = \frac{1}{t^3 - 1} = x \quad (t > 1)
$$

Since $g$ is differentiable and

$$
g'(t) = \frac{3t^2}{(t^3 - 1)^2} > 0 \quad (t > 1)
$$

$g$ is strictly decreasing, therefore $g$ is invertible.

$$
g^{-1}(x) = \sqrt[3]{\frac{x + 1}{x}} = t \quad (x > 0)
$$

Then

$$
\begin{aligned}
\int \frac{1}{x^2} \sqrt[3]{\frac{x + 1}{x}} \, dx &= \int \frac{1}{\left( \frac{1}{t^3 - 1} \right)^2} \cdot t \cdot \frac{3t^2}{(t^3 - 1)^2} \, dt =\\
&= 3 \int \frac{t^3 (t^3 - 1)^2}{(t^3 - 1)^2} \, dt =\\
&= 3 \int t^3 \, dt =\\
&= \frac{3}{4} t^4 + C
\end{aligned}
$$

Substitute $t = \sqrt[3]{\frac{x + 1}{x}}$ back

$$
\begin{aligned}
\frac{3}{4} t^4 + C \bigg|_{t = \sqrt[3]{\frac{x + 1}{x}}} &= \frac{3}{4} \left( \sqrt[3]{\frac{x + 1}{x}} \right)^4 + C \quad (x > 0)
\end{aligned}
$$
