---
title: '[A-2] Multivariable function differentiation'
---

# Multivariable function differentiation

## Partial differentiation

Given a function $f(x, y)$, the partial derivative of $f$ with respect to $x$ at a point $a$ is denoted by $\partial_x f(a)$ or $\partial_1 f(a)$ is defined as the derivative of teh function $F_x$ at point $0$, provided that the derivative exists, i.e.

$$
\begin{aligned}
\partial_x f(a) &= \partial_1 f(a) := F_x'(0) =\\
&= \lim_{t \to 0} \frac{F_x(t) - F_x(0)}{t} = \lim_{t \to 0} \frac{f(a_1 + h, a_2) - f(a_1, a_2)}{t}
\end{aligned}
$$

$F_x'(0)$ represents the slope of the tangent line to the intersection curve at the point $P(a, f(a))$.

The partial derivative with respect to $y$ is defined similarly: $F_y(t) := f(a_1, a_2 + t)$, and

$$
\begin{aligned}
\partial_y f(a) &= \partial_2 f(a) := F_y'(0) =\\
&= \lim_{t \to 0} \frac{F_y(t) - F_y(0)}{t} = \lim_{t \to 0} \frac{f(a_1, a_2 + h) - f(a_1, a_2)}{t}
\end{aligned}
$$

#### General approach

To compute the partial derivative of a function $f \in \mathbb{R}^2 \to \mathbb{R}$ with respect to the variable $x$, we fix the variable $y$ as a constant, and differentiate the expression as a real-valued function which depends only on $x$ (if it is differentiable).

We proceed in a similar way for computing the partial derivative with respect to the variable $y$, but now we consider $x$ a constant and differentiate the expression with respect to $y$.

## Totally differentiable functions

A function $f: \mathbb{R}^2 \to \mathbb{R}$ is totally differentiable at a point $a \in int \mathcal{D}_f$ (denoted as $f \in D\{a\}$) if

$$
\exists A \in \mathbb{R}^{1 \times 2}: \lim_{h \to 0} \frac{|f(a + h) - f(a) - A \cdot h|}{||h||} = 0
$$

In this case, $f'(a) = A$ is the derivative matrix of $f$ at the point $a$.

If $f \in D\{a\}$, then the derivative matrix $f'(a)$ is uniquely determined.

#### Construction of the derivative matrix

Let $f: \mathbb{R}^2 \to \mathbb{R}$ be a function, $a \in int \mathcal{D}_f$. If $f \in D\{a\}$, then $\exists \partial_1 f(a), \partial_2 f(a)$, and

$$
f'(a) = \begin{bmatrix}
\partial_1 f(a) & \partial_2 f(a)
\end{bmatrix}
$$

is so-called Jacobian matrix of $f$ at the point $a$.

The existence of the partial derivatives at a point $a$ does not imply that the function is totally differentiable at that point. However, if we assume slightly more about the function, then the existence of the partial derivatives, we can guarantee the total differentiability of the function.

#### Sufficient condition for total differentiability

Let $f: \mathbb{R}^2 \to \mathbb{R}$ be a function, $a \in int \mathcal{D}_f$. Assume that there exists a neighborhood $K(a) \subset \mathcal{D}_f$ of the point $a$ such that the following conditions hold:

1. $\exists \partial_1 f(x, y)$ and $\exists \partial_2 f(x, y)$ for all $(x, y) \in K(a)$
2. the partial derivative functions $\partial_1 f(x, y)$ and $\partial_2 f(x, y)$ are continuous at the point $a$

Then, the function $f$ is totally differentiable at the point $a$.

## Continuously differentiable functions

A function $f: \mathbb{R}^2 \to \mathbb{R}$ is continuously differentiable at a point $a \in int \mathcal{D}_f$ (denoted as $f \in C^1\{a\}$) if

1. There exists a neighborhood $K(a) \subset \mathcal{D}_f$ such that $f \in D(K(a))$
2. every partial derivative is continuous at the point $a$

## Partial derivatives of second order

Let $f: \mathbb{R}^2 \to \mathbb{R}$ be a function, $a \in int \mathcal{D}_f$. If for a fixed $i = 1, 2$, the partial derivative $\partial_i f$ exists in a neighborhood of the point $a$, and the partial derivative of the function $\partial_i f$ with respect to the $j$-th variable ($j = 1,2$) exists at the point $a$, then the number

$$
\partial_{ij} f(a) := \partial_i \partial_j f(a) := \partial_j (\partial_i f)(a)
$$

is called the partial derivative of the second order of the function $f$ at the point $a$ with respect to $ij$.

## Twice differentiable functions

The function $f: \mathbb{R}^2 \to \mathbb{R}$ is twice differentiable at a point $a \in int \mathcal{D}_f$ (denoted as $f \in D^2\{a\}$) if

1. There exists a neighborhood $K(a) \subset \mathcal{D}_f$ such that $f \in D{x}$ at every point $x \in K(a)$
2. $\forall i = 1,2,\dots,n$ the partial derivative $\partial_i f$ is differentiable at the point $a$

Then the matrix

$$
f''(a) = \begin{bmatrix}
\partial_{11} f(a) & \partial_{12} f(a) \\
\partial_{21} f(a) & \partial_{22} f(a)
\end{bmatrix}
$$

is called the Hessian matrix of the function $f$ at the point $a$.

#### Young's theorem

If $f \in \mathbb{R}^2 \to \mathbb{R}$ and $f \in D^2\{a\}$, then the Hessian matrix $f''(a)$ is symmetric.

$$
\partial_{12} f(a) = \partial_{21} f(a)
$$

## Twice continuously differentiable functions

A function $f: \mathbb{R}^2 \to \mathbb{R}$ is twice continuously differentiable at a point $a \in int \mathcal{D}_f$ (denoted as $f \in C^2\{a\}$) if

1. There exists a neighborhood $K(a) \subset \mathcal{D}_f$ such that $f \in D^2(K(a))$
2. Every partial derivative of second order is continuous at the point $a$

## Local extrema of $\mathbb{R}^2 \to \mathbb{R}$ functions

We say that a function $f: \mathbb{R}^2 \to \mathbb{R}$ has a local maximum at a point $a \in int \mathcal{D}_f$ (or equivalently, $f$ has a local minimum at the point $a$) if there exists a neighborhood $K(a) \subset \mathcal{D}_f$ of the point $a$ such that

$$
\forall x \in K(a): f(x) \leq f(a)
$$

In this case, the point $a$ is called a local maximum of the function $f$.

Similarly, the notions of local minimum point and local minimum of the function $f$ are defined analogously.

#### Necessary condition for local extrema

Assume that $f \in \mathbb{R}^2 \to \mathbb{R}$ and $a \in int \mathcal{D}_f$. Additionally

- $f \in D\{a\}$
- the function $f$ has a local extremum at the point $a$

Then $f'(a) = 0$, i.e., $f'(a) = \begin{bmatrix} \partial_1 f(a) & \partial_2 f(a) \end{bmatrix} = \begin{bmatrix} 0 & 0 \end{bmatrix}$.

#### Sufficient condition for local extrema

Let $f \in \mathbb{R}^2 \to \mathbb{R}$, $a \in int \mathcal{D}_f$ and $f \in C^2\{a\}$. Assume that

$$
\partial_1 f(a) = 0 \quad \text{and} \quad \partial_2 f(a) = 0
$$

Define the discriminant

$$
D(a) := det \begin{bmatrix} \partial_{11} f(a) & \partial_{12} f(a) \\ \partial_{21} f(a) & \partial_{22} f(a) \end{bmatrix}
$$

Then

- If $D(a) > 0$ and $\partial_{11} f(a) < 0$, then $f$ has a local maximum at the point $a$
- If $D(a) > 0$ and $\partial_{11} f(a) > 0$, then $f$ has a local minimum at the point $a$
- If $D(a) < 0$, then $f$ has no local extremum at the point $a$ (saddle point)
- If $D(a) = 0$, then the test is inconclusive

## Global extrema of $\mathbb{R}^2 \to \mathbb{R}$ functions on compact sets

### Weierstrass theorem

Assume that $H$ is a bounded and closed set in $\mathbb{R}^2$ and $f: H \to \mathbb{R}$ is a continuous function. Then $f$ has a global maximum and a global minimum on the set $H$.

- $\exists x_1 \in H,\ \forall x \in H: f(x) \leq f(x_1)$ (global maximum)
- $\exists x_2 \in H,\ \forall x \in H: f(x) \geq f(x_2)$ (global minimum)

Let $H \subset \mathbb{R}^2$ be a compact set and $f: H \to \mathbb{R}$ be a continuous function, and $f$ is differentiable on the interior of the set $H$.

Then $f$ attains its largest (smallest) value either on the boundary of the set $H$ or at an stationary point $a$ ($\partial_1 f(a) = 0$ and $\partial_2 f(a) = 0$) in the interior of the set $H$.

## Example 1 (partial derivatives)

Find the partial derivatives of the following function:

$$
f(x, y) = \ln(xy^2) - x^3y^2\cos(x^2 + y^2) \quad (x > 0, y \neq 0)
$$

#### Solution

The partial derivative of $f$ with respect to $x$ is

$$
\begin{aligned}
\partial_x(x,y) &= \frac{y^2}{xy^2} - 3x^2y^2\cos(x^2 + y^2) + x^3y^2\sin(x^2 + y^2) \cdot 2x \\
&= \frac{1}{x} - 3x^2y^2\cos(x^2 + y^2) + 2x^4y^2\sin(x^2 + y^2)
\end{aligned}
$$

The partial derivative of $f$ with respect to $y$ is

$$
\begin{aligned}
\partial_y(x,y) &= \frac{2xy}{xy^2} - x^3 \cdot 2y\cos(x^2 + y^2) + x^3y^2\sin(x^2 + y^2) \cdot 2y \\
&= \frac{2}{y} - 2x^3y\cos(x^2 + y^2) + 2x^3y^3\sin(x^2 + y^2)
\end{aligned}
$$

## Example 2 (partial derivatives)

Find the partial derivatives of the following function:

$$
f(x, y) = \arctan\left( \frac{y}{x} \right) \quad (x \neq 0, y \in \mathbb{R})
$$

#### Solution

The partial derivative of $f$ with respect to $x$ is

$$
\begin{aligned}
\partial_x(x,y) &= \frac{1}{1 + \left( \frac{y}{x} \right)^2} \cdot \left(\frac{y}{x} \right)_x' = \frac{1}{1 + \left( \frac{y}{x} \right)^2} \cdot \left( -\frac{y}{x^2} \right) =-\frac{y}{x^2 + y^2}
\end{aligned}
$$

The partial derivative of $f$ with respect to $y$ is

$$
\begin{aligned}
\partial_y(x,y) &= \frac{1}{1 + \left( \frac{y}{x} \right)^2} \cdot \left(\frac{y}{x} \right)_y' = \frac{1}{1 + \left( \frac{y}{x} \right)^2} \cdot \frac{1}{x} = \frac{x}{x^2 + y^2}
\end{aligned}
$$

## Example 3 (local extrema)

Find the local extreme values and their points of the following function:

$$
f(x, y) = x^2 - 4xy + y^3 + 4y \quad ((x, y) \in \mathbb{R}^2)
$$

#### Solution

The partial derivatives of the function $f$ are

$$
\begin{aligned}
\partial_x f(x, y) &= 2x - 4y \\
\partial_y f(x, y) &= -4x + 3y^2 + 4
\end{aligned}
$$

**_Necessary condition for local extrema is_**

$$
\begin{aligned}
\partial_x f(x, y) &= 0 \\
\partial_y f(x, y) &= 0
\end{aligned}
$$

Solving the system of equations, we get

$$
\begin{aligned}
2x - 4y &= 0 \\
-4x + 3y^2 + 4 &= 0
\end{aligned}
$$

From the first equation, we get $x = 2y$. Substituting this into the second equation, we get

$$
-4 \cdot 2y + 3y^2 + 4 = 0 \implies 3y^2 - 8y + 4 = 0
$$

The solutions of the quadratic equation are $y_1 = 2$ and $y_2 = \frac{2}{3}$.

For $y = 2$, we get $x = 4$, and for $y = \frac{2}{3}$, we get $x = \frac{4}{3}$.

Therefore, possible points of local extrema

$$
P_1(4, 2) \quad \text{and} \quad P_2\left(\frac{4}{3}, \frac{2}{3}\right)
$$

**_Sufficient condition for local extrema_**

$$
\begin{aligned}
\partial_{11} f(x, y) &= 2 \\
\partial_{12} f(x, y) &= -4 \\
\partial_{21} f(x, y) &= -4 \\
\partial_{22} f(x, y) &= 6y
\end{aligned}
$$

The Hessian matrix of the function $f$ is

$$
f''(x, y) = \begin{bmatrix}
\partial_{11} f(x, y) & \partial_{12} f(x, y) \\
\partial_{21} f(x, y) & \partial_{22} f(x, y)
\end{bmatrix} = \begin{bmatrix}
2 & -4 \\
-4 & 6y
\end{bmatrix}
$$

The discriminant of the Hessian matrix is

$$
D(x, y) = det \begin{bmatrix}
2 & -4 \\
-4 & 6y
\end{bmatrix} = 12y - 16
$$

For the point $P_1(4, 2)$, we get $D(4, 2) = 8 > 0$ and $\partial_{11} f(4, 2) = 2 > 0$. Therefore, the function $f$ has a local minimum at the point $P_1(4, 2)$. Minimum value of the function is $f(4, 2) = 4^2 - 4 \cdot 4 \cdot 2 + 2^3 + 4 \cdot 2 = 0$.

For the point $P_2\left(\frac{4}{3}, \frac{2}{3}\right)$, we get $D\left(\frac{4}{3}, \frac{2}{3}\right) = -8 < 0$. Therefore, the function $f$ has no local extremum at the point $P_2\left(\frac{4}{3}, \frac{2}{3}\right)$.

## Example 4 (local extrema)

Find the local extreme values and their points of the following function:

$$
f(x, y) = x^4 - 4xy + y^4 \quad ((x, y) \in \mathbb{R}^2)
$$

#### Solution

The partial derivatives of the function $f$ are

$$
\begin{aligned}
\partial_x f(x, y) &= 4x^3 - 4y \\
\partial_y f(x, y) &= -4x + 4y^3
\end{aligned}
$$

**_Necessary condition for local extrema is_**

$$
\begin{aligned}
\partial_x f(x, y) &= 0 \\
\partial_y f(x, y) &= 0
\end{aligned}
$$

Solving the system of equations, we get

$$
\begin{aligned}
4x^3 - 4y &= 0 \\
-4x + 4y^3 &= 0
\end{aligned}
$$

From the first equation, we get $x^3 = y$. Substituting this into the second equation, we get

$$
-4 \cdot x + 4 \cdot x^9 = 0 \implies x(1 - x^8) = 0 \implies x = 0 \quad \text{or} \quad x = \pm 1
$$

For $x = 0$, we get $y = 0$, for $x = 1$, we get $y = 1$, and for $x = -1$, we get $y = -1$.

Therefore, possible points of local extrema

$$
P_1(0, 0), \quad P_2(1, 1),  \quad P_3(-1, -1)
$$

**_Sufficient condition for local extrema_**

$$
\begin{aligned}
\partial_{11} f(x, y) &= 12x^2 \\
\partial_{12} f(x, y) &= -4 \\
\partial_{21} f(x, y) &= -4 \\
\partial_{22} f(x, y) &= 12y^2
\end{aligned}
$$

The Hessian matrix of the function $f$ is

$$
f''(x, y) = \begin{bmatrix}
\partial_{11} f(x, y) & \partial_{12} f(x, y) \\
\partial_{21} f(x, y) & \partial_{22} f(x, y)
\end{bmatrix} = \begin{bmatrix}
12x^2 & -4 \\
-4 & 12y^2
\end{bmatrix}
$$

The discriminant of the Hessian matrix is

$$
D(x, y) = det \begin{bmatrix}
12x^2 & -4 \\
-4 & 12y^2
\end{bmatrix} = 144x^2y^2 - 16
$$

For the point $P_1(0, 0)$, we get $D(0, 0) = -16 < 0$. Therefore, the function $f$ has no local extremum at the point $P_1(0, 0)$.

For the point $P_2(1, 1)$, we get $D(1, 1) = 128 > 0$ and $\partial_{11} f(1, 1) = 12 > 0$. Therefore, the function $f$ has a local minimum at the point $P_2(1, 1)$. Minimum value of the function is $f(1, 1) = 1^4 - 4 \cdot 1 \cdot 1 + 1^4 = -2$.

For the point $P_3(-1, -1)$, we get $D(-1, -1) = 128 > 0$ and $\partial_{11} f(-1, -1) = 12 > 0$. Therefore, the function $f$ has a local minimum at the point $P_3(-1, -1)$. Minimum value of the function is $f(-1, -1) = (-1)^4 - 4 \cdot (-1) \cdot (-1) + (-1)^4 = -2$.

## Example 5 (global extrema)

Find the global extreme values and their points of the following function:

$$
f(x, y) = 2xy - 3y
$$

$$
H = \{(x, y) \in \mathbb{R}^2 \mid 0 \leq x \leq 2, 0 \leq y \leq x^2\}
$$

#### Solution

The function $f$ is continuous on the set $H$. The set $H$ is a compact set. Therefore, the function $f$ attains its largest and smallest values on the boundary of the set $H$ or at the stationary points in the interior of the set $H$.

**_Boundary of the set $H$_**

We can see that at $x = 0$ $y$ can only be $0$, an as $x$ increases, the range of $y$ increases.

Therefore, the set $H$ has triangle like shape, but with the top part of the triangle being a parabola.

Function of the parabola is $y = x^2$.

We are interested in vertices, namely $A(0, 0)$, $B(2, 0)$, and $C(2, 4)$.

1. Checking segment $AB$:

$$
g_1(x) := f(x, 0) = 2x \cdot 0 - 3 \cdot 0 = 0 \quad (x \in [0, 2])
$$

is constant, therefore, global extremum may occur at any point in the segment $AB$.

2. Checking segment $BC$:

$$
g_2(y) := f(2, y) = 2 \cdot 2 \cdot y - 3y = y \quad (y \in [0, 4])
$$

is increasing, therefore, global extremum may occur at the points $B$ or $C$.

3. Checking segment $AC$:

$$
g_3(x) := f(x, x^2) = 2x \cdot x^2 - 3x^2 = 2x^3 - 3x^2 \quad (x \in [0, 2])
$$

$$
g_3'(x) = 6x^2 - 6x = 6x(x - 1)
$$

So global extremum may occur at the point $A$ or at point $D(1, 1)$. We also need consider boundaries of the interval $[0, 2]$, but both points $A$ and $C$ are already considered.

**_Determine potential stationary points_**

The partial derivatives of the function $f$ are

$$
\begin{aligned}
\partial_x f(x, y) &= 2y \\
\partial_y f(x, y) &= 2x - 3
\end{aligned}
$$

**_Necessary condition for local extrema is_**

$$
\begin{aligned}
\partial_x f(x, y) &= 0 \\
\partial_y f(x, y) &= 0
\end{aligned}
$$

Solving the system of equations, we get

$$
\begin{aligned}
2y &= 0 \\
2x - 3 &= 0
\end{aligned}
$$

Simple solution $y = 0$, $x = \frac{3}{2}$.

Therefore, possible points of local extrema

$$
P_1\left(\frac{3}{2}, 0\right)
$$

However, the point $P_1$ is on the boundary of the set $H$. Therefore, there are no stationary points in the interior of the set $H$.

**_Determine global extrema_**

Totally, we have 4 points to check: $A(0, 0)$, $B(2, 0)$, $C(2, 4)$, and $D(1, 1)$.

$$
\begin{aligned}
f(0, 0) &= 2 \cdot 0 \cdot 0 - 3 \cdot 0 = 0 \\
f(2, 0) &= 2 \cdot 2 \cdot 0 - 3 \cdot 0 = 0 \\
f(2, 4) &= 2 \cdot 2 \cdot 4 - 3 \cdot 4 = 16 \\
f(1, 1) &= 2 \cdot 1 \cdot 1 - 3 \cdot 1 = -1
\end{aligned}
$$

Therefore, the global maximum of the function $f$ is $f(2, 4) = 16$ at the point $C(2, 4)$, and the global minimum of the function $f$ is $f(1, 1) = -1$ at the point $D(1, 1)$.

## Example 6 (global extrema)

Find the global extreme values and their points of the following function:

$$
f(x, y) = x^3 - 12x + y^3 - 3y \quad ((x, y) \in \mathbb{R}^2)
$$

$$
H = \{(x, y) \in \mathbb{R}^2 \mid -2 \leq x \leq 3, -x \leq y \leq 2\}
$$

#### Solution

The function $f$ is continuous on the set $H$. The set $H$ is a compact set. Therefore, the function $f$ attains its largest and smallest values on the boundary of the set $H$ or at the stationary points in the interior of the set $H$.

**_Boundary of the set $H$_**

We can see that on set $H$ at $x = -2$ $y$ can only be $2$, an as $x$ increases, the range of $y$ increases.

Therefore, the set $H$ has triangle shape, with line $y = -x$ as one of the boundaries.

Vertices of the triangle are $A(-2, 2)$, $B(3, 2)$, and $C(3, -3)$.

1. Checking segment $AB$:

$$
\begin{aligned}
g_1(x) := f(x, 2) &= x^3 - 12x + 2^3 - 3 \cdot 2 = x^3 - 12x + 8 - 6 =\\
&= x^3 - 12x + 2 \quad (x \in [-2, 3])
\end{aligned}
$$

$$
g_1'(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)
$$

We need to consider point $D(2, 2)$, and also boundaries of the interval $[-2, 3]$, points $A$ and $B$.

2. Checking segment $BC$:

$$
\begin{aligned}
g_2(y) := f(3, y) &= 3^3 - 12 \cdot 3 + y^3 - 3y = 27 - 36 + y^3 - 3y =\\
&= y^3 - 3y - 9 \quad (y \in [-3, 2])
\end{aligned}
$$

$$
g_2'(y) = 3y^2 - 3 = 3(y^2 - 1) = 3(y - 1)(y + 1)
$$

We need to consider point $E(3, 1)$, $F(3, -1)$, and also boundaries of the interval $[-3, 2]$, points $B$ and $C$.

3. Checking segment $AC$:

$$
\begin{aligned}
g_3(x) := f(x, -x) &= x^3 - 12x + (-x)^3 - 3 \cdot (-x) =\\
&=  x^3 - 12x - x^3 + 3x = -9x \quad (x \in [-2, 3])
\end{aligned}
$$

$$
g_3'(x) = -9
$$

Function is strictly decreasing, therefore, global extremum may occur at the point $A$ and $C$, which are already considered.

**_Determine potential stationary points_**

The partial derivatives of the function $f$ are

$$
\begin{aligned}
\partial_x f(x, y) &= 3x^2 - 12 \\
\partial_y f(x, y) &= 3y^2 - 3
\end{aligned}
$$

**_Necessary condition for local extrema is_**

$$
\begin{aligned}
\partial_x f(x, y) &= 0 \\
\partial_y f(x, y) &= 0
\end{aligned}
$$

Solving the system of equations, we get

$$
\begin{aligned}
3x^2 - 12 &= 0 \\
3y^2 - 3 &= 0
\end{aligned}
$$

Simple solution $x = \pm 2$, $y = \pm 1$.

Therefore, possible points of local extrema

$$
P_1(2, 1), \quad P_2(2, -1), \quad P_3(-2, 1), \quad P_4(-2, -1)
$$

However, only points $P_1$ and $P_2$ are in the interior of the set $H$.

**_Determine global extrema_**

Totally, we have 8 points to check: $A(-2, 2)$, $B(3, 2)$, $C(3, -3)$, $D(2, 2)$, $E(3, 1)$, $F(3, -1)$, and $P_1(2, 1)$, $P_2(2, -1)$.

$$
\begin{aligned}
f(A) &= (-2)^3 - 12 \cdot (-2) + 2^3 - 3 \cdot 2 = -8 + 24 + 8 - 6 = 18 \\
f(B) &= 3^3 - 12 \cdot 3 + 2^3 - 3 \cdot 2 = 27 - 36 + 8 - 6 = -7 \\
f(C) &= 3^3 - 12 \cdot 3 + (-3)^3 - 3 \cdot (-3) = 27 - 36 - 27 + 9 = -27 \\
f(D) &= 2^3 - 12 \cdot 2 + 2^3 - 3 \cdot 2 = 8 - 24 + 8 - 6 = -14 \\
f(E) &= 3^3 - 12 \cdot 3 + 1^3 - 3 \cdot 1 = 27 - 36 + 1 - 3 = -11 \\
f(F) &= 3^3 - 12 \cdot 3 + (-1)^3 - 3 \cdot (-1) = 27 - 36 - 1 + 3 = -7 \\
f(P_1) &= 2^3 - 12 \cdot 2 + 1^3 - 3 \cdot 1 = 8 - 24 + 1 - 3 = -18\\
f(P_2) &= 2^3 - 12 \cdot 2 + (-1)^3 - 3 \cdot (-1) = 8 - 24 - 1 + 3 = -14
\end{aligned}
$$

Therefore, the global maximum of the function $f$ is $f(A) = 18$ at the point $A(-2, 2)$, and the global minimum of the function $f$ is $f(C) = -27$ at the point $C(3, -3)$.
