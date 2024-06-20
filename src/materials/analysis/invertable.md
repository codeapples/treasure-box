---
title: '[A1] Invertable functions'
---

# Invertable functions

Most of the material for this topic was covered in previous semester's basic mathematics course. We will only briefly review the concept of invertible functions and their properties.

Link to basic bath materials: [Inverse functions](/materials/basicmath/inverse-fn.md)

## Determining invertability

Function $f$ is invertible if it is one-to-one or _injective_. This means that for every $y$ in the codomain of $f$, there is exactly one $x$ in the domain of $f$ such that $f(x) = y$.
::: details
![](/assets/injective-ex.svg)
<br>
![](/assets/non-injective-ex.svg)
:::

So to chech for invertablility, we need to check if the function is one-to-one.

$$
f(x_1) = f(x_2) \Rightarrow x_1 = x_2
$$

## Inverse function

If $f$ is invertible, then there exists a function $f^{-1}$ such that

$$
f^{-1}(f(x)) = x \quad \text{and} \quad f(f^{-1}(y)) = y
$$

## Example 1

Let

$$
f(x) = \frac{2x + 1}{3x - 2} : x \in \mathopen(-\infty; \frac{2}{3}\mathclose) \cup \mathopen(\frac{2}{3}; \infty\mathclose)
$$

be a function. Determine if $f$ is invertible and calculate the inverse function and its domain.

### Step 1: Check injectivity

Fix $x_1, x_2 \in D_f$ where $x_1 \neq x_2$ and consider if $f(x_1) - f(x_2) \neq 0$.

$$
f(x_1) - f(x_2) = \frac{2x_1 + 1}{3x_1 - 2} - \frac{2x_2 + 1}{3x_2 - 2} =
$$

$$
= \frac{6x_1x_2 - 4x_1 + 3x_2 - 2 - 6x_1x_2 - 3x_1 + 4x_2 + 2}{(3x_1 - 2)(3x_2 - 2)} =
$$

$$
= \frac{7(x_2 - x_1)}{(3x_1 - 2)(3x_2 - 2)} \neq 0
$$

So $f$ is **invertible**.

### Step 2: Calculate inverse function

We need to find $f^{-1}(y)$.

And determine $D_{f^{-1}} = R_{f}$, where

$$
R_{f} = \{\ y \in \mathbb{R}\ |\ \exists x \in D_{f} : y = f(x)\ \} =
$$

$$
= \{\ y \in \mathbb{R}\ |\ \exists x \in R \setminus \frac{2}{3} : y = \frac{2x + 1}{3x - 2}\ \}
$$

#### First

Solve for $x$.

$$
y = \frac{2x + 1}{3x - 2}
$$

$$
y(3x - 2) = 2x + 1
$$

$$
3xy - 2y = 2x + 1
$$

$$
3xy - 2x = 2y + 1
$$

$$
x(3y - 2) = 2y + 1
$$

$$
x = \frac{2y + 1}{3y - 2}
$$

So

$$
f^{-1}(y) = \frac{2y + 1}{3y - 2}
$$

#### Second

Determine $D_{f^{-1}}$.

In order for $f^{-1}$ to make sense, $3y - 2$ must be non-zero, so

$$
3y - 2 \neq 0\ \Rightarrow\ y \neq \frac{2}{3}
$$

But we also need to consider the domain of $f$.

$$
x \in \mathopen(-\infty; \frac{2}{3}\mathclose) \cup \mathopen(\frac{2}{3}; \infty\mathclose)
$$

So

$$
\frac{2y + 1}{3y - 2} \neq \frac{2}{3} \Leftrightarrow \frac{2y + 1}{3y - 2} - \frac{2}{3} \neq 0 \Leftrightarrow
$$

$$
\Leftrightarrow 3(2y + 1) - 2(3y - 2) \neq 0 \Leftrightarrow 6y + 3 - 6y + 4 \neq 0
$$

which is always true $\implies$ ignore it.

### Conclusion

$$
f^{-1}(y) = \frac{2y + 1}{3y - 2} : (\ y \in \mathbb{R} \setminus \frac{2}{3}\ )
$$

## Example 2

Let

$$
f(x) = \frac{x + 1}{3x - 2} : (x \in \mathopen[2; \infty \mathclose))
$$

be a function. Determine if $f$ is invertible and calculate the inverse function and its domain.

### Step 1: Check injectivity

Fix $x_1, x_2 \in D_f$ where $x_1 \neq x_2$ and consider if $f(x_1) - f(x_2) \neq 0$.

$$
f(x_1) - f(x_2) = \frac{x_1 + 1}{3x_1 - 2} - \frac{x_2 + 1}{3x_2 - 2} =
$$

$$
= \frac{3x_2 - 2 - 3x_1 + 2}{(3x_1 - 2)(3x_2 - 2)} =
$$

$$
= \frac{3(x_2 - x_1)}{(3x_1 - 2)(3x_2 - 2)} \neq 0
$$

So $f$ is **invertible**.

### Step 2: Calculate inverse function

We need to find $f^{-1}(y)$.

And determine $D_{f^{-1}} = R_{f}$, where

$$
R_{f} = \{\ y \in \mathbb{R}\ |\ \exists x \in D_{f} : y = f(x)\ \} =
$$

$$
= \{\ y \in \mathbb{R}\ |\ \exists x \in \mathopen[2; \infty \mathclose) : y = \frac{x + 1}{3x - 2}\ \}
$$

#### First

Solve for $x$.

$$
y = \frac{x + 1}{3x - 2}
$$

$$
y(3x - 2) = x + 1
$$

$$
3xy - 2y = x + 1
$$

$$
3xy - x = 2y + 1
$$

$$
x(3y - 1) = 2y + 1
$$

$$
x = \frac{2y + 1}{3y - 1}
$$

So

$$
f^{-1}(y) = \frac{2y + 1}{3y - 1}
$$

#### Second

Determine $D_{f^{-1}}$.

In order for $f^{-1}$ to make sense, $3y - 1$ must be non-zero, so

$$
3y - 1 \neq 0\ \Rightarrow\ y \neq \frac{1}{3}
$$

But we also need to consider the domain of $f$.

$$
x \in \mathopen[2; \infty \mathclose)
$$

So

$$
\frac{2y + 1}{3y - 1} \geq 2 \Leftrightarrow \frac{2y + 1}{3y - 1} - 2 \geq 0 \Leftrightarrow \frac{2y + 1 - 6y + 2}{3y - 1} \geq 0 \Leftrightarrow \frac{3 - 4y}{3y - 1} \geq 0
$$

In order for the fraction to be positive either both numerator and denominator are positive or both are negative.

Therefore we need to consider two cases:

**First case**

$$
\begin{cases}
3 - 4y \geq 0 \\
3y - 1 > 0
\end{cases}
$$

$$
\begin{cases}
y \leq \frac{3}{4} \\
y > \frac{1}{3}
\end{cases}
$$

$$
\frac{1}{3} < y \leq \frac{3}{4}
$$

**Second case**

$$
\begin{cases}
3 - 4y \leq 0 \\
3y - 1 < 0
\end{cases}
$$

$$
\begin{cases}
y \geq \frac{3}{4} \\
y < \frac{1}{3}
\end{cases}
$$

Second case is not possible $\implies$ ignore it.

Therefore, because $y \neq \frac{1}{3}$, and $y \in \mathopen(\frac{1}{3}; \frac{3}{4}\mathclose]$, final domain of $f^{-1}$ is

$$
D_{f^{-1}} = R_{f} = \mathopen(\frac{1}{3}; \frac{3}{4}\mathclose]
$$

### Conclusion

$$
f^{-1}(y) = \frac{2y + 1}{3y - 1} : (\ y \in \mathopen(\frac{1}{3}; \frac{3}{4}\mathclose]\ )
$$
