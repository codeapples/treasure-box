---
title: \[BM\] Inverse Functions
---
# Inverse of functions

## Introduction
First we need to acknowledge that if we have a function
$$ f(x) = y $$
then domain of this function
$$ D_{f} = \{ x \in \mathbb{K} \} $$
is a set of all possible values of $x$ that can be used as an input for $f$,<br>
while range of this function
$$ R_{f} = \{ y \in \mathbb{K} \} $$
is a set of all possible values of $y$ that $f$ provides as an output

Domain $D_{f}$ is usually specified in the problem statement.

## Injective functions
A function $f$ is called **injective** if for every $y \in R_{f}$ there is exactly one $x \in D_{f}$ such that
$$ f(x) = y $$

The formula to check function injectivity property is:
$$ f(x_{1}) = f(x_{2}) \Rightarrow x_{1} = x_{2} $$

## Inverse functions
Let $f$ be an injective function. Then the inverse function of $f$ is a function $f^{-1}$ such that
$$ f^{-1}(y) = x \Leftrightarrow f(x) = y $$

Also the important property of inverse functions is that
$$ D_{f^{-1}} = R_{f}\ \text{ and }\ R_{f} = D_{f^{-1}} $$

## Example 1
Let
$$ f(x) = x^{2} + 2 : x \in \mathopen[2; \infty \mathclose) $$
be a function.

Let's calculate the inverse function of $f$ and find range of $f$ by using inverse function.

#### Check injectivity

$$ f(x_{1}) = f(x_{2}) \Rightarrow x_{1} = x_{2} $$
$$ x_{1}^{2} + 2 = x_{2}^{2} + 2\ \Rightarrow\ x_{1}^{2} = x_{2}^{2} $$
$$ \Downarrow $$
$$ x_{1} = x_{2}\ \text{ or }\ x_{1} = -x_{2} $$

But since the domain of $f$ does not include negative numbers, then
$$ x_{1} = - x_{2} $$
is impossible.

Therefore, $f$ is **injective** within $D_{f}$.

#### Calculate inverse function

$$ f(x) = x^{2} + 2 $$
$$ y = x^{2} + 2 $$
$$ x^{2} = y - 2 $$
$$ x = \sqrt{y - 2} $$
$$ f^{-1}(y) = \sqrt{y - 2} $$

Now we need to determine $D_{f^{-1}}$ which would be same as $R_{f}$.
For this we need to consider the domain of $f$ and any restrictions of the inverse function.

In order for $f^{-1}$ to make sense, $y - 2$ must be non-negative, so
$$ y - 2 \geq 0\ \Rightarrow\ y \geq 2 $$
also since $D_{f} \in \mathopen[2; \infty \mathclose)$, then
$$ 2 \le \sqrt{y - 2} \lt \infty $$
$$ 4 \le y - 2 \lt \infty $$
$$ 6 \le y \lt \infty $$
Therefore
$$ D_{f^{-1}} = R_{f} = \mathopen[6; \infty \mathclose) $$

## Example 2
Let
$$ f(x) = \frac{3x + 2}{x - 1} : x \in \mathopen(1; \infty \mathclose) $$
be a function.

Let's calculate the inverse function of $f$ and find range of $f$ by using inverse function.

#### Check injectivity

$$ f(x_{1}) = f(x_{2}) \Rightarrow x_{1} = x_{2} $$
$$ \frac{3x_{1} + 2}{x_{1} - 1} = \frac{3x_{2} + 2}{x_{2} - 1} $$
$$ \frac{3x_{1} + 2}{x_{1} - 1} - \frac{3x_{2} + 2}{x_{2} - 1} = 0 $$
$$ \frac{(3x_{1} + 2)(x_{2} - 1) - (3x_{2} + 2)(x_{1} - 1)}{(x_{1} - 1)(x_{2} - 1)} = 0 $$
Only possible if numerator is equal to zero
$$ (3x_{1} + 2)(x_{2} - 1) - (3x_{2} + 2)(x_{1} - 1) = 0 $$
$$ 3x_{1}x_{2} - 3x_{1} + 2x_{2} - 2 - 3x_{1}x_{2} + 3x_{2} + 2x_{1} - 2 = 0 $$
$$ 5x_{2} - 5x_{1} = 0 $$
$$ x_{2} = x_{1} $$

Therefore, $f$ is **injective** within $D_{f}$.

#### Calculate inverse function

$$ f(x) = \frac{3x + 2}{x - 1} $$
$$ y = \frac{3x + 2}{x - 1} $$
$$ y(x - 1) = 3x + 2 $$
$$ yx - y = 3x + 2 $$
$$ yx - 3x = y + 2 $$
$$ x(y - 3) = y + 2 $$
$$ x = \frac{y + 2}{y - 3} $$
$$ f^{-1}(y) = \frac{y + 2}{y - 3} $$

Now we need to determine $D_{f^{-1}}$ which would be same as $R_{f}$.
For this we need to consider the domain of $f$ and any restrictions of the inverse function.

In order for $f^{-1}$ to make sense, $y - 3$ must be non-zero, so
$$ y - 3 \neq 0\ \Rightarrow\ y \neq 3 $$
also since $D_{f} \in \mathopen(1; \infty \mathclose)$, then
$$ \frac{y + 2}{y - 3} \gt 1 $$
$$ \frac{y + 2}{y - 3} - 1 \gt 0 $$
$$ \frac{y + 2 - (y - 3)}{y - 3} \gt 0 $$
$$ \frac{5}{y - 3} \gt 0 $$
$$ y - 3 \gt 0 $$
$$ y \gt 3 $$
Therefore
$$ D_{f^{-1}} = R_{f} = \mathopen(3; \infty \mathclose) $$

## Example 3
Let
$$ f(x) = x^{2} - 2x + 2 : x \in \mathopen(-\infty; 1 \mathclose) $$
be a function.

Let's calculate the inverse function of $f$ and find range of $f$ by using inverse function.

#### Check injectivity

$$ f(x_{1}) = f(x_{2}) \Rightarrow x_{1} = x_{2} $$
$$ x_{1}^{2} - 2x_{1} + 2 = x_{2}^{2} - 2x_{2} + 2 $$
$$ x_{1}^{2} - x_{2}^{2} - 2x_{1} + 2x_{2} = 0 $$
$$ (x_{1} - x_{2})(x_{1} + x_{2}) - 2(x_{1} - x_{2}) = 0 $$
$$ (x_{1} - x_{2})(x_{1} + x_{2} - 2) = 0 $$
$$ \Downarrow $$
$$ x_{1} = x_{2}\ \text{ or }\ x_{1} + x_{2} - 2 = 0 $$

The only possible value of $x$ within $D_{f}$ that satisfies $x_{1} + x_{2} - 2 = 0$ is $x = 1$. And if $x_{1} = x_{2} = 1$, then $f(x_{1}) = f(x_{2}) \Rightarrow x_{1} = x_{2}$ holds.

Therefore, $f$ is **injective** within $D_{f}$.

#### Calculate inverse function

$$ f(x) = x^{2} - 2x + 2 $$
$$ y = x^{2} - 2x + 2 $$
$$ x^{2} - 2x + 2 - y = 0 $$
$$ x = \frac{2 \pm \sqrt{4 - 4(1)(2 - y)}}{2} $$
$$ x = \frac{2 \pm \sqrt{4 - 8 + 4y}}{2} $$
$$ x = \frac{2 \pm \sqrt{4y - 4}}{2} $$
$$ x = \frac{2 \pm 2\sqrt{y - 1}}{2} $$
$$ x = 1 \pm \sqrt{y - 1} $$
$$ f^{-1}(y) = 1 \pm \sqrt{y - 1} $$

Now we need to determine $D_{f^{-1}}$ which would be same as $R_{f}$.
For this we need to consider the domain of $f$ and any restrictions of the inverse function.

In order for $f^{-1}$ to make sense, $y - 1$ must be non-negative, so
$$ y - 1 \geq 0\ \Rightarrow\ y \geq 1 $$
also since $D_{f} \in \mathopen(-\infty; 1 \mathclose)$, then:

Checking first root
$$ 1 - \sqrt{y - 1} \lt 1 $$
$$ -\sqrt{y - 1} \lt 0 $$
$$ \sqrt{y - 1} \gt 0 $$
$$ y - 1 \gt 0 $$
$$ y \gt 1 $$

Checking second root
$$ 1 + \sqrt{y - 1} \lt 1 $$
$$ \sqrt{y - 1} \lt 0 $$
$$ y - 1 \lt 0 $$
$$ y \lt 1 $$

$y \lt 1$ does not satisfy $y \geq 1$, therefore
$$ D_{f^{-1}} = R_{f} = \mathopen(1; \infty \mathclose) $$
