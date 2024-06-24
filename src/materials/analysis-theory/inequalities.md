---
title: '[A1-T] Inequalities'
---

# Inequalities

## Triangle inequalities

### Theorem

For any $x, y \in \mathbb{R}$, the following inequalities hold:

_first triangle inequality_

1. $|x + y| \leq |x| + |y|$

_second triangle inequality_

2. $|x - y| \geq ||x| - |y||$

### Proof

#### First triangle inequality

Since $|x| \geq x$ for all $x$, we have $xy \leq |x||y|$. Thus we have

$$
x^2 + 2xy + y^2 \leq |x|^2 + 2|x||y| + |y|^2
$$

Since both sides are perfect squares, the above is equivalent to

$$
(x + y)^2 \leq (|x| + |y|)^2
$$

Taking the square root of both sides, we get

$$
|x + y| \leq |x| + |y|
$$

#### Second triangle inequality

We can rewrite $|x|$ in form of

$$
|x| = |(x - y) + y|
$$

Then, by the first triangle inequality, we have

$$
|x| \leq |x - y| + |y|
$$

$$
|x| - |y| \leq |x - y|
$$

Similarly, we can rewrite $|y|$ in form of

$$
|y| = |(y - x) + x|
$$

Then, by the first triangle inequality, we have

$$
|y| \leq |y - x| + |x|
$$

$$
|y| - |x| \leq |y - x|
$$

Since $|y - x| = |x - y|$, we have

$$
|y| - |x| \leq |x - y|
$$

Combining the two inequalities, we get

$$
||x| - |y|| \leq |x - y|
$$

## Bernoulli's inequality

### Theorem

Let $n \in \mathbb{N}$, $h \in \mathbb{R}$ and $h > -1$. Then

$$
(1 + h)^n \geq 1 + nh
$$

## Inequality of arithmetic and geometric means

### Definitions

#### Arithmetic mean

Let $n \in \mathbb{N}$ and $x_1, x_2, \ldots, x_n \in \mathbb{R}$. The arithmetic mean of $x_1, x_2, \ldots, x_n$ is defined as

$$
A_n = \frac{x_1 + x_2 + \ldots + x_n}{n}
$$

#### Geometric mean

Let $n \in \mathbb{N}$ and $x_1, x_2, \ldots, x_n \in \mathbb{R_0^+}$. The geometric mean of $x_1, x_2, \ldots, x_n$ is defined as

$$
G_n = \sqrt[n]{x_1 \cdot x_2 \cdot \ldots \cdot x_n}
$$

### Theorem

Let $n \in \mathbb{N}, n \geq 2$ and $x_1, x_2, \ldots, x_n \in \mathbb{R^+}$. Then

$$
G_n \leq A_n \quad \Leftrightarrow \quad \sqrt[n]{x_1 \cdot x_2 \cdot \ldots \cdot x_n} \leq \frac{x_1 + x_2 + \ldots + x_n}{n}
$$

or equivalently

$$
x_1 \cdot x_2 \cdot \ldots \cdot x_n \leq \left(\frac{x_1 + x_2 + \ldots + x_n}{n}\right)^n
$$
