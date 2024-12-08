---
title: '[A2] Definite integrals'
---

# Definite integrals

## Newton-Leibniz formula

Let $[a, b] \in \mathbb{R}$ be a closed bounded interval and $f \in R[a, b]$. Suppose that there exists a function $F : [a, b] \to \mathbb{R}$ for which

1. $F$ is continuous on $[a, b]$,
2. $F$ is differentiable on $(a, b)$,
3. $F'(x) = f(x)$ for all $x \in (a, b)$.

Then

$$
\int_a^b f(x) \, dx = F(b) - F(a) =: \left[ F(x) \right]_a^b
$$

## Improper integrals

### Definition

Let $-\infty \leq a < b \leq \infty$ and $I$ be the interval whose left-hand endpoint is $a$ and right-hand endpoint is $b$. Let $f : I \to \mathbb{R}$ be a function and suppose that $f$ is integrable over every closed and bounded suninterval of $I$. We say that the improper integral

$$
\int_a^b f(x) \, dx
$$

is convergent if for some $c \in (a, b)$ the following limits exists and finite:

$$
\lim_{t \to a^+} \int_t^c f(x) \, dx \quad \lim_{s \to b^-} \int_c^s f(x) \, dx
$$

### Theorem

Using previous notations let $f : I \to \mathbb{R}$ be a function and suppose that $f$ is integrable over every closed and bounded suninterval of $I$. Suppose that $F : I \to \mathbb{R}$ is continuous on $I$ and $F'(x) = f(x)$ $(x \in int I)$. Then

1. $\lim_{t \to a^+} \int_t^c f(x) \, dx$ is finite $\iff$ $\lim_{t \to a^+} F(t)$ is finite,
2. $\lim_{s \to b^-} \int_c^s f(x) \, dx$ is finite $\iff$ $\lim_{s \to b^-} F(s)$ is finite.
3. In this case the improper integral can be computed as follows:

$$
\int_a^b f(x) \, dx = \lim_{s \to b^-} F(s) - \lim_{t \to a^+} F(t)
$$

## Applications of definite integrals

### Area of a plane figure

For two bounded and integrable functions $f, g : [a, b] \to \mathbb{R}$, where $g(x) \leq f(x)$ for all $x \in [a, b]$, the area of the plane figure enclosed by the graphs of $f$ and $g$ and the lines $x = a$ and $x = b$,

$$
B = \{ (x, y) \in \mathbb{R}^2 \mid a \leq x \leq b, g(x) \leq y \leq f(x) \},
$$

is defined by the following definite integral:

$$
\text{Area}(B) = \int_a^b (f(x) - g(x)) \, dx
$$

### Length of a curve

Let $a, b \in \mathbb{R}$ with $a < b$ and $f : [a, b] \to \mathbb{R}$. The graph of $f$ is a curve in the plane,

$$
\Gamma_f = \{ (x, f(x)) \in \mathbb{R}^2 \mid a \leq x \leq b \},
$$

and the length of the curve $\Gamma_f$ is defined by the following definite integral:

$$
\text{Length}(\Gamma_f) = \int_a^b \sqrt{1 + (f'(x))^2} \, dx
$$

### Volume of a solid of revolution

Consider a non-negative function $f$ on the bounded and closed interval $[a, b]$. Then the set

$$
A_f = \{ (x, y, z) \in \mathbb{R}^3 \mid a \leq x \leq b, y^2 + z^2 \leq f(x)^2 \}
$$

is a solid of revolution around the $x$-axis. The volume of the solid $A_f$ is defined by the following definite integral:

$$
\text{Volume}(A_f) = \pi \int_a^b f^2(x) \, dx
$$

## Example 1 (basic)

Find the following definite integral:

$$
\int_0^{\pi/3} \sin 8x \, dx
$$

#### Solution

$$
\int \sin 8x \, dx = -\frac{1}{8} \cos 8x + C
$$

Then

$$
\begin{aligned}
\int_0^{\pi/3} \sin 8x \, dx &= -\frac{1}{8} \left[ \cos 8x \right]_0^{\pi/3} =\\
&= -\frac{1}{8} \left( \cos \frac{8\pi}{3} - \cos 0 \right) =\\
&= -\frac{1}{8} \left( \cos \frac{4\pi}{3} - 1 \right) =\\
&= -\frac{1}{8} \left( -\frac{1}{2} - 1 \right) = \frac{3}{16}
\end{aligned}
$$

## Example 2 (basic)

Find the following definite integral:

$$
\int_0^1 \frac{1}{3x - 5} \, dx
$$

#### Solution

$$
\int \frac{1}{3x - 5} \, dx = \frac{1}{3} \ln |3x - 5| + C
$$

Since $3x - 5 < 0$ for $x \in (0, 1)$, we have

$$
\begin{aligned}
\int_0^1 \frac{1}{3x - 5} \, dx &= \frac{1}{3} \left[ \ln (5 - 3x) \right]_0^1 =\\
&= \frac{1}{3} \left( \ln 2 - \ln 5 \right) = \frac{1}{3} \ln \frac{2}{5}
\end{aligned}
$$

## Example 3 (basic)

Find the following definite integral:

$$
\int_1^e \frac{\ln^2 x}{x} \, dx
$$

#### Solution

$$
\int \frac{\ln^2 x}{x} \, dx = \frac{1}{3} \ln^3 x + C
$$

Then

$$
\begin{aligned}
\int_1^e \frac{\ln^2 x}{x} \, dx &= \frac{1}{3} \left[ \ln^3 x \right]_1^e =\\
&= \frac{1}{3} \left( \ln^3 e - \ln^3 1 \right) =\\
&= \frac{1}{3} \ln^3 e = \frac{1}{3}
\end{aligned}
$$

## Example 4 (basic)

Find the following definite integral:

$$
\int_0^1 xe^{-x^2} \, dx
$$

#### Solution

Using [reverse differentiation of composite functions](/materials/analysis2/integrals-indefinite-1#reverse-of-differentiation-of-composite-functions)

$$
(-x^2)' = -2x
$$

$$
\begin{aligned}
\int xe^{-x^2} \, dx &= -\frac{1}{2} \int (-2x) e^{-x^2} \, dx =\\
&= -\frac{1}{2} e^{-x^2} + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_0^1 xe^{-x^2} \, dx &= -\frac{1}{2} \left[ e^{-x^2} \right]_0^1 =\\
&= -\frac{1}{2} \left( e^{-1} - e^0 \right) =\\
&= -\frac{1}{2} \left( \frac{1}{e} - 1 \right) = \frac{e - 1}{2e}
\end{aligned}
$$

## Example 5 (basic)

Find the following definite integral:

$$
\int_0^\pi x \cos x \, dx.
$$

#### Solution

Using [integration by parts](/materials/analysis2/integrals-indefinite-2#integration-by-parts)

Let $f(x) = x \implies f'(x) = 1$.

Let $g'(x) = \cos x \implies g(x) = \sin x$.

Then

$$
\begin{aligned}
\int x \cos x \, dx &= x \sin x - \int \sin x \, dx =\\
&= x \sin x + \cos x + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_0^\pi x \cos x \, dx &= \left[ x \sin x + \cos x \right]_0^\pi =\\
&= \left( \pi \sin \pi + \cos \pi \right) - \left( 0 \sin 0 + \cos 0 \right) =\\
&= -1 - 1 = -2
\end{aligned}
$$

## Example 6 (basic)

Find the following definite integral:

$$
\int_e^{e^2} x\ln x \, dx
$$

#### Solution

Using [integration by parts](/materials/analysis2/integrals-indefinite-2#integration-by-parts)

Let $f(x) = \ln x \implies f'(x) = \frac{1}{x}$.

Let $g'(x) = x \implies g(x) = \frac{1}{2}x^2$.

Then

$$
\begin{aligned}
\int x \ln x \, dx &= \frac{1}{2}x^2 \ln x - \frac{1}{2} \int x \, dx =\\
&= \frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_e^{e^2} x \ln x \, dx &= \left[ \frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 \right]_e^{e^2} =\\
&= \left( \frac{1}{2}e^4 \ln e^2 - \frac{1}{4}e^4 \right) - \left( \frac{1}{2}e^2 \ln e - \frac{1}{4}e^2 \right) =\\
&= \left( \frac{1}{2}e^4 \cdot 2 - \frac{1}{4}e^4 \right) - \left( \frac{1}{2}e^2 - \frac{1}{4}e^2 \right) =\\
&= \frac{3}{4}e^4 - \frac{1}{4}e^2
\end{aligned}
$$

## Example 7 (basic)

Find the following definite integral:

$$
\int_{\ln 4}^{\ln 8} \frac{e^x}{e^{2x} - 4} \, dx
$$

#### Solution

Using [substitution rule](/materials/analysis2/integrals-indefinite-2#substitution-rule)

Let $t = e^x \implies x = \ln t =: g(t)$.

$$
\ln 4 \leq x \leq \ln 8 \implies 4 = e^{\ln 4} \leq t \leq e^{\ln 8} = 8
$$

The function $g$ is differentiable and

$$
g'(t) = \frac{1}{t} > 0 \quad (4 \leq t \leq 8)
$$

So $g$ is strictly increasing, therefore invertible.

$$
g^{-1}(x) = e^x = t \quad (\ln 4 \leq x \leq \ln 8)
$$

Then

$$
\begin{aligned}
\int \frac{e^x}{e^{2x} - 4} \, dx &= \int \frac{t}{t^2 - 4} \cdot \frac{1}{t} \, dt =\\
&= \int \frac{1}{t^2 - 4} \, dt = \int \frac{1}{(t - 2)(t + 2)} \, dt
\end{aligned}
$$

Decompose into a sum of elementary fractions:

$$
\begin{aligned}
\frac{1}{(t - 2)(t + 2)} &= \frac{A}{t - 2} + \frac{B}{t + 2} =\\
&= \frac{A(t + 2) + B(t - 2)}{(t - 2)(t + 2)}
\end{aligned}
$$

$$
\begin{aligned}
x = 2 &\implies 1 = 4A \implies A = \frac{1}{4}\\
x = -2 &\implies 1 = -4B \implies B = -\frac{1}{4}
\end{aligned}
$$

Then

$$
\begin{aligned}
\int \frac{1}{(t - 2)(t + 2)} \, dt &= \frac{1}{4} \int \frac{1}{t - 2} \, dt - \frac{1}{4} \int \frac{1}{t + 2} \, dt =\\
&= \frac{1}{4} \ln |t - 2| - \frac{1}{4} \ln |t + 2| + C =\\
&= \frac{1}{4} \ln (t - 2) - \frac{1}{4} \ln (t + 2) + C =\\
&= \frac{1}{4} \ln \left( \frac{t - 2}{t + 2} \right) + C
\end{aligned}
$$

Substitute back $t = e^x$:

$$
\begin{aligned}
\int \frac{e^x}{e^{2x} - 4} \, dx &= \frac{1}{4} \ln \left( \frac{e^x - 2}{e^x + 2} \right) + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_{\ln 4}^{\ln 8} \frac{e^x}{e^{2x} - 4} \, dx &= \frac{1}{4} \left[ \ln \left( \frac{e^x - 2}{e^x + 2} \right) \right]_{\ln 4}^{\ln 8} =\\
&= \frac{1}{4} \left( \ln \left( \frac{e^{\ln 8} - 2}{e^{\ln 8} + 2} \right) - \ln \left( \frac{e^{\ln 4} - 2}{e^{\ln 4} + 2} \right) \right) =\\
&= \frac{1}{4} \left( \ln \left( \frac{8 - 2}{8 + 2} \right) - \ln \left( \frac{4 - 2}{4 + 2} \right) \right) =\\
&= \frac{1}{4} \left( \ln \frac{6}{10} - \ln \frac{2}{6} \right) =\\
&= \frac{1}{4} \ln \frac{6 \cdot 6}{10 \cdot 2} = \frac{1}{4} \ln \frac{36}{20} = \frac{1}{4} \ln \frac{9}{5}
\end{aligned}
$$

## Example 8 (basic)

Find the following definite integral:

$$
\int_{1/2}^1 \frac{\sqrt{1 - x^2}}{x^2} \, dx
$$

#### Solution

Using [substitution rule](/materials/analysis2/integrals-indefinite-2#substitution-rule)

Let $t = \arcsin x \implies x = \sin t =: g(t)$.

$$
\frac{1}{2} \leq x \leq 1 \implies \frac{\pi}{6} = \arcsin \frac{1}{2} \leq t \leq \arcsin 1 = \frac{\pi}{2}
$$

The function $g$ is differentiable and

$$
g'(t) = \cos t > 0 \quad \left( \frac{\pi}{6} < t < \frac{\pi}{2} \right)
$$

So $g$ is strictly increasing, therefore invertible.

$$
g^{-1}(x) = \sin^{-1} x = t \quad \left( \frac{1}{2} \leq x \leq 1 \right)
$$

Then

$$
\begin{aligned}
\int \frac{\sqrt{1 - x^2}}{x^2} \, dx &= \int \frac{\cos t}{\sin^2 t} \cdot \cos t \, dt = \int \frac{\cos^2 t}{\sin^2 t} \, dt =\\
&= \int \frac{1 - \sin^2 t}{\sin^2 t} \, dt = \int \left( \frac{1}{\sin^2 t} - 1 \right) \, dt =\\
&= \int \csc^2 t \, dt - \int dt = -\cot t - t + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_{1/2}^1 \frac{\sqrt{1 - x^2}}{x^2} \, dx &= \left[ -\cot t - t \right]_{\pi/6}^{\pi/2} =\\
&= \left( -\cot \frac{\pi}{2} - \frac{\pi}{2} \right) - \left( -\cot \frac{\pi}{6} - \frac{\pi}{6} \right) =\\
&= \left( 0 - \frac{\pi}{2} \right) - \left( -\sqrt{3} - \frac{\pi}{6} \right) =\\
&= -\frac{\pi}{2} + \sqrt{3} + \frac{\pi}{6} = \sqrt{3} - \frac{\pi}{3}
\end{aligned}
$$

## Example 9 (improper)

Find the following improper integral:

$$
\int_1^2 \frac{1}{\sqrt{x - 1}} \, dx
$$

#### Solution

Integral is not bounded at $x = 1$, but it is continuous on $(1, 2]$, so it is integrable on $[t, 2]\ \forall t \in (1, 2)$.

Then

$$
\begin{aligned}
\int_1^2 \frac{1}{\sqrt{x - 1}} \, dx &= \lim_{t \to 1^+} \int_t^2 \frac{1}{\sqrt{x - 1}} \, dx =\\
&= \lim_{t \to 1^+} \left[ 2\sqrt{x - 1} \right]_t^2 =\\
&= \lim_{t \to 1^+} \left( 2\sqrt{2 - 1} - 2\sqrt{t - 1} \right) =\\
&= 2\sqrt{1} - 2\sqrt{0} = 2
\end{aligned}
$$

## Example 10 (improper)

Find the following improper integral:

$$
\int_0^{\infty} xe^{-2x} \, dx
$$

#### Solution

Integral is continuous on $[0, \infty)$, so it is integrable on $[0, t]\ \forall t \in (0, \infty)$.

But to solve the integral we need to use integration by parts:

Let $f(x) = x \implies f'(x) = 1$.

Let $g'(x) = e^{-2x} \implies g(x) = -\frac{1}{2}e^{-2x}$.

Then

$$
\begin{aligned}
\int xe^{-2x} \, dx &= -\frac{1}{2}xe^{-2x} - \int -\frac{1}{2}e^{-2x} \, dx =\\
&= -\frac{1}{2}xe^{-2x} + \frac{1}{4}e^{-2x} + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_0^{\infty} xe^{-2x} \, dx &= \lim_{t \to \infty} \int_0^t xe^{-2x} \, dx =\\
&= \lim_{t \to \infty} \left[ -\frac{1}{2}xe^{-2x} + \frac{1}{4}e^{-2x} \right]_0^t =\\
&= \lim_{t \to \infty} \left( -\frac{t}{2e^{2t}} + \frac{1}{4e^{2t}} - 0 + \frac{1}{4} \right) =\\
&= (-0 + 0 - 0 + \frac{1}{4}) = \frac{1}{4}
\end{aligned}
$$

## Example 11 (improper)

Find the following improper integral:

$$
\int_0^2 \frac{1}{\sqrt{x(2 - x)}} \, dx
$$

#### Solution

Since the integral is not bounded at $x = 0$ and $x = 2$, we need to split the integral into two parts.

Let's select a convenient point within the interval $(0, 2)$, for example $1$.

Then

$$
\begin{aligned}
\int_0^2 \frac{1}{\sqrt{x(2 - x)}} \, dx &= \int_0^1 \frac{1}{\sqrt{x(2 - x)}} \, dx + \int_1^2 \frac{1}{\sqrt{x(2 - x)}} \, dx
\end{aligned}
$$

The first integral is not bounded at $x = 0$, but it is continuous on $(0, 1]$, so it is integrable on $[t, 1]\ \forall t \in (0, 1)$.

$$
\begin{aligned}
\int_0^1 \frac{1}{\sqrt{x(2 - x)}} \, dx &= \lim_{t \to 0^+} \int_t^1 \frac{1}{\sqrt{x(2 - x)}} \, dx =\\
&= \lim_{t \to 0^+} \int_t^1 \frac{1}{\sqrt{1 - (x - 1)^2}} \, dx \overset{(a = 1, b = -1)}{=} \\
&= \lim_{t \to 0^+} [\arcsin(t - 1)]_t^1 =\\
&= \lim_{t \to 0^+} [\arcsin(1 - 1) - \arcsin(t - 1)]_t^1 =\\
&= \lim_{t \to 0^+} [0 - \arcsin(t - 1)]_t^1 =\\
&= -\arcsin (-1) = \frac{\pi}{2}
\end{aligned}
$$

The second integral is not bounded at $x = 2$, but it is continuous on $[1, 2)$, so it is integrable on $[1, t]\ \forall t \in (1, 2)$.

$$
\begin{aligned}
\int_1^2 \frac{1}{\sqrt{x(2 - x)}} \, dx &= \lim_{t \to 2^-} \int_1^t \frac{1}{\sqrt{x(2 - x)}} \, dx =\\
&= \lim_{t \to 2^-} \int_1^t \frac{1}{\sqrt{1 - (x - 1)^2}} \, dx \overset{(a = 1, b = -1)}{=} \\
&= \lim_{t \to 2^-} [\arcsin(x - 1)]_1^t =\\
&= \lim_{t \to 2^-} [\arcsin(t - 1) - \arcsin(1 - 1)] =\\
&= \lim_{t \to 2^-} [\arcsin(t - 1) - 0] =\\
&= \arcsin(2 - 1) = \frac{\pi}{2}
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_0^2 \frac{1}{\sqrt{x(2 - x)}} \, dx &= \int_0^1 \frac{1}{\sqrt{x(2 - x)}} \, dx + \int_1^2 \frac{1}{\sqrt{x(2 - x)}} \, dx =\\
&= \frac{\pi}{2} + \frac{\pi}{2} = \pi
\end{aligned}
$$

## Example 12 (improper)

Find the following improper integral:

$$
\int_0^1 \ln x \, dx
$$

#### Solution

Integral is not bounded at $x = 0$, but it is continuous on $(0, 1]$, so it is integrable on $[t, 1]\ \forall t \in (0, 1)$.

Using [integration by parts](/materials/analysis2/integrals-indefinite-2#integration-by-parts)

Let $f(x) = \ln x \implies f'(x) = \frac{1}{x}$.

Let $g'(x) = 1 \implies g(x) = x$.

Then

$$
\begin{aligned}
\int \ln x \, dx &= x \ln x - \int x \cdot \frac{1}{x} \, dx = x \ln x - \int dx = x \ln x - x + C
\end{aligned}
$$

Then

$$
\begin{aligned}
\int_0^1 \ln x \, dx &= \lim_{t \to 0^+} \int_t^1 \ln x \, dx =\\
&= \lim_{t \to 0^+} \left[ x \ln x - x \right]_t^1 =\\
&= \lim_{t \to 0^+} \left( 1 \ln 1 - 1 - t \ln t + t \right) =\\
&= 0 - 1 - 0 + 0 = -1
\end{aligned}
$$

Since

$$
\begin{aligned}
\lim_{t \to 0^+} t\ln t = \lim_{t \to 0^+} \frac{\ln t}{\frac{1}{t}} \overset{\text{LH}}{=} \lim_{t \to 0^+} \frac{\frac{1}{t}}{-\frac{1}{t^2}} = \lim_{t \to 0^+} -t = 0
\end{aligned}
$$

## Example 13 (area)
