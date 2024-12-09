---
title: '[A-2] Multivariable function integration'
---

# Multivariable function integration

## Multiple integrals

A **multiple integral** is a generalization of the definite integral to functions of several variables. It allows us to compute the accumulated "quantity" (such as area, volume, or mass) over a region in multidimensional space.

Let

$$
I = [a_1, b_1] \times [a_2, b_2] \times \cdots \times [a_n, b_n]
$$

be a hyperrectangular region in $\mathbb{R}^n$, and let $f: I \to \mathbb{R}$ be a bounded function such that $f \in R(I)$, meaning $f$ is **integrable** on $I$. The **n-dimensional integral** of $f$ over $I$ is written as:

$$
\int_{a_1}^{b_1} \int_{a_2}^{b_2} \cdots \int_{a_n}^{b_n} f(x_1, x_2, \dots, x_n) \, dx_n \cdots dx_2 dx_1.
$$

This integral represents the total accumulation of the values of $f$ over $I$, and possesses the same
properties as those observed in the single-variable case.

The computation of the integral of a function defined on an $n$-dimensional interval can be reduced to the successive calculation of integrals of real-valued functions.

## Iterated integrals

Let $I = [a, b] \times [c, d]$ be a rectangular region in $\mathbb{R}^2$, and $f : I \to \mathbb{R}$. Assume that

1. $f \in R(I)$,
2. $\forall x \in [a, b]$, $f_x \in R([c, d])$,
3. $\forall y \in [c, d]$, $f_y \in R([a, b])$.

Then

$$
\iint_I f(x, y) \, dx \, dy = \int_a^b \left( \int_c^d f(x, y) \, dy \right) \, dx = \int_c^d \left( \int_a^b f(x, y) \, dx \right) \, dy.
$$

If the function $f$ is continuous on the rectangle $I$, then $f \in R(I)$, and section functions $f_x\ (x \in [a, b])$ and $f_y\ (y \in [c, d])$ are also continuous on $[c, d]$ and $[a, b]$, respectively, and consequently, integrable.

Then, the integral of a two-variable function over a rectangular region can be computed by first fixing one arbitrary variable and integrating the function with respect to the other variable, and then integrating the result with respect to the first variable. This is called an **iterated integral**.

### Separable functions and double integrals

If the variables $x$ and $y$ in the integrand are separable in the form

$$
f(x, y) = g(x)h(y), \quad (a \leq x \leq b, \, c \leq y \leq d),
$$

where $g : [a, b] \to \mathbb{R}$ and $h : [c, d] \to \mathbb{R}$ are continuous functions, then the conditions of Fubini's theorem are satisfied, and the double integral can be decomposed as:

$$
\begin{aligned}
\int_a^b \int_c^d f(x, y) \, dy \, dx &= \int_a^b g(x) \left( \int_c^d h(y) \, dy \right) dx =\\
&= \left( \int_a^b g(x) \, dx \right) \cdot \left( \int_c^d h(y) \, dy \right).
\end{aligned}
$$

This decomposition simplifies the double integral into the product of two separate integrals.

### Order of integration in iterated integrals

Iterated integration guarantees that the order of integration does not affect the final result:

$$
\int_a^b \int_c^d f(x, y) \, dy \, dx = \int_c^d \int_a^b f(x, y) \, dx \, dy.
$$

However, the difficulty of computation may vary depending on the order of integration.

## Example 1 (iterated double)

Integrate the function

$$
f(x, y) = xy^2 + 3x^2y
$$

over the rectangle whose vertices are

$$
A(1, -1),\ B(4, -1),\ C(4, 2),\ D(1, 2).
$$

#### Solution

Interval (rectangle) can be also written as

$$
I = [1, 4] \times [-1, 2].
$$

The integrand is continuous on $I$, so $f \in R(I)$.

We can decide to integrate with respect to any variable first. Let's fix $x$ and integrate with respect to $y$ first:

$$
\begin{aligned}
\iint_I f(x, y) \, dx \, dy &= \int_1^4 \left( \int_{-1}^2 (xy^2 + 3x^2y) \, dy \right) \, dx =\\
&= \int_1^4 \left( \left[ \frac{1}{3}xy^3 + \frac{3}{2}x^2y^2 \right]_{-1}^2 \right) \, dx =\\
&= \int_1^4 \left( \frac{8}{3}x + \frac{12}{2}x^2 + \frac{1}{3}x - \frac{3}{2}x^2 \right) \, dx =\\
&= \int_1^4 \left( 3x + \frac{9}{2}x^2 \right) \, dx =\\
&= \left[ \frac{3}{2}x^2 + \frac{9}{6}x^3 \right]_1^4 =\\
&= \left( 3 \cdot 8 + 3 \cdot 32 \right) - \left( \frac{3}{2} + \frac{9}{6} \right) =\\
&= 24 + 96 - \frac{3}{2} - \frac{3}{2} = 120 - 3 = 117.
\end{aligned}
$$

## Example 2 (iterated double)

Evaluate the double integral

$$
\iint_I x^3\sqrt{y} \, dx \, dy
$$

where $I := [0, 1] \times [0, 2]$.

#### Solution

The integrand is continuous on $I$, so $f \in R(I)$.

Variables $x$ and $y$ are separable in the integrand, so we can [decompose](/materials/analysis2/multivariate-integration#separable-functions-and-double-integrals) the double integral:

$$
\begin{aligned}
\iint_I x^3\sqrt{y} \, dx \, dy &= \left( \int_0^1 x^3 \, dx \right) \cdot \left( \int_0^2 \sqrt{y} \, dy \right) =\\
&= \left[ \frac{1}{4}x^4 \right]_0^1 \cdot \left[ \frac{2}{3}y^{3/2} \right]_0^2 =\\
&= \frac{1}{4} \cdot 1^4 \cdot \frac{2}{3} \cdot 2^{3/2} =\\
&= \frac{4\sqrt{2}}{12} = \frac{\sqrt{2}}{3}.
\end{aligned}
$$

## Example 3 (iterated double)

Evaluate the double integral

$$
\iint_I x\sin (xy) \, dx \, dy
$$

where $I := [1, 3] \times [0, \frac{\pi}{2}]$.

#### Solution

The integrand is continuous on $I$, so $f \in R(I)$.

Fixing $x$ and integrating with respect to $y$ first:

$$
\begin{aligned}
\iint_I x\sin (xy) \, dx \, dy &= \int_1^3 \left( \int_0^{\frac{\pi}{2}} x\sin (xy) \, dy \right) \, dx =\\
&= \int_1^3 \left( \left[ -\cos (xy) \right]_0^{\frac{\pi}{2}} \right) \, dx =\\
&= \int_1^3 \left( -\cos \left( \frac{\pi}{2}x \right) + \cos (0) \right) \, dx =\\
&= \int_1^3 \left( -\cos \left( \frac{\pi}{2}x \right) + 1 \right) \, dx =\\
&= \left[ -\frac{2}{\pi}\sin \left( \frac{\pi}{2}x \right) + x \right]_1^3 =\\
&= -\frac{2}{\pi}\sin \left( \frac{3\pi}{2} \right) + 3 - \left( -\frac{2}{\pi}\sin \left( \frac{\pi}{2} \right) + 1 \right) =\\
&= \frac{2}{\pi} + 3 + \frac{2}{\pi} - 1 = \frac{4}{\pi} + 2.
\end{aligned}
$$

## Example 4 (iterated triple)

Integrate the function

$$
f(x, y) = xy + xz
$$

over the cuboid $I = [0, 2] \times [1, 2] \times [1, 3]$.

#### Solution

The integrand is continuous on $I$, so $f \in R(I)$.

$$
\begin{aligned}
\iiint_I f(x, y, z) \, dx \, dy \, dz &= \int_1^3 \left( \int_1^2 \left( \int_0^2 (xy + xz) \, dx \right) \, dy \right) \, dz =\\
&= \int_1^3 \left( \int_1^2 \left( \int_0^2 x(y + z) \, dx \right) \, dy \right) \, dz =\\
&= \int_1^3 \left( \int_0^2 x \, dx \cdot \int_1^2 (y + z) \, dy \right) \, dz =\\
&= \int_1^3 \left( \left[ \frac{1}{2}x^2 \right]_0^2 \cdot \left[ \frac{1}{2}y^2 + zy \right]_1^2 \right) \, dz =\\
&= \int_1^3 2 \cdot \left( \frac{4}{2} + 2z - \frac{1}{2} - z \right) \, dz =\\
&= 2 \int_1^3  \left( \frac{3}{2} + z \right) \, dz =\\
&= 2 \left[ \frac{3}{2}z + \frac{1}{2}z^2 \right]_1^3 =\\
&= 2 \left( \frac{9}{2} + \frac{9}{2} - \frac{3}{2} - \frac{1}{2} \right) = 2 \cdot 7 = 14.
\end{aligned}
$$

## Example 5
