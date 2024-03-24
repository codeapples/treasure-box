---
title: \[A-1\] Bounded sets
---

# Bounded sets

## Boundedness

Let $H$ be an arbitrary set of real numbers.

1. $H$ is **bounded above** if it has an upper bound, that is $\exists M \in \mathbb{R}\ \forall x \in H: x \leq M$.
2. $H$ is **bounded below** if it has a lower bound, that is $\exists m \in \mathbb{R}\ \forall x \in H: x \geq m$.
3. $H$ is **bounded** if it is bounded above and below.

## Upper bound of sets, the least upper bound (supremum)

Consider $H$ a set of real numbers.

$H$ is **bounded above** if there is a number $M$ so that any $x \in H$ is less that, or equal to, $M$: $x \leq M$.
The number M is called an **upper bound** of $H$.

Note that if $M$ is an upper bound of $H$, then any number $M' > M$ is also an upper bound of $H$.

Not all sets have an upper bound, e.x. set of all natural numbers does not.

A number $B$ is called the **least upper bound** (or **supremum**) of the set $H$ if:

1. $B$ is an upper bound of $H$: $\forall x \in H: x \leq B$.
2. $B$ is the smallest upper bound. In other words, any smaller number than $B$ is not an upper bound of $H$:

$$
if\ t < B \text{ then there is } x \in H \text{ so that } x > t
$$

Least upper bound is denoted as $\sup H$.

If set is not bounded above (**unbounded above**), it can be denoted as $\sup H = +\infty$.

Least upper bound (**supremum**) may, or may not belong to the set $H$.

When the supremum of set $H$ belongs to $H$, then it is also called the **maximum** of $H$.

Maximum of set $H$ is denoted as $\max H$.

## Lower bound of sets, the greatest lower bound (infimum)

Consider $H$ a set of real numbers.

$H$ is **bounded below** if there is a number $m$ so that any $x \in H$ is greater that, or equal to, $m$: $x \geq m$.

The number $m$ is called a **lower bound** of $H$.

Note that if $m$ is a lower bound of $H$, then any number $m' < m$ is also a lower bound of $H$.

Not all sets have a lower bound, e.x. set of all natural numbers does not.

A number $b$ is called the **greatest lower bound** (or **infimum**) of the set $H$ if:

1. $b$ is a lower bound of $H$: $\forall x \in H: x \geq b$.
2. $b$ is the greatest lower bound. In other words, any greater number than $b$ is not a lower bound of $H$:

$$
if\ t > b \text{ then there is } x \in H \text{ so that } x < t
$$

Greatest lower bound is denoted as $\inf H$.

If set is not bounded below (**unbounded below**), it can be denoted as $\inf H = -\infty$.

Greatest lower bound (**infimum**) may, or may not belong to the set $H$.

When the infimum of set $H$ belongs to $H$, then it is also called the **minimum** of $H$.

Minimum of set $H$ is denoted as $\min H$.

## Example 1

Consider set

$$
H = \{\ \frac{n + 1}{2n + 3}\ |\ x \in \mathbb{N}\ \}
$$

Find $\sup H$, $\inf H$, $\max H$ and $\min H$.

First, try to transform the equation, so that it becomes easier to comprehend how the function behaves, especially with very large or very small values of $n$.

$$
\frac{n + 1}{2n + 3} = \frac{1}{2} \cdot \frac{2n + 2}{2n + 3} = \frac{1}{2} \cdot \frac{2n + 3 - 1}{2n + 3} =
$$

$$
= \frac{1}{2} \cdot \left(1 - \frac{1}{2n + 3}\right) = \frac{1}{2} - \frac{1}{4n + 6}
$$

Now, using this form

$$
\frac{1}{2} - \frac{1}{4n + 6}
$$

we can see that when the denominator $4n + 6$ becomes very large, the function grows and approaches $\frac{1}{2}$.

On the opposite, when the denominator $4n + 6$ is smallest, the function is also smallest.

Since $n \in \mathbb{N}$, the smallest value of $n$ is $0$ $\implies$ the smallest denominator is $4 \cdot 0 + 6 = 6$, then the function would look like

$$
\frac{1}{2} - \frac{1}{4n + 6} \geq \frac{1}{2} - \frac{1}{4 \cdot 0 + 6}
$$

$$
\frac{1}{2} - \frac{1}{4n + 6} \geq \frac{1}{2} - \frac{1}{6} = \frac{3}{6} - \frac{1}{6} = \frac{2}{6} = \frac{1}{3}
$$

Therefore, the lower bound of the set $H$ is $\frac{1}{3}$.

$$
\inf H = \frac{1}{3}
$$

And since $\frac{1}{3} \in H$ (when $n = 0$), then

$$
\min H = \frac{1}{3}
$$

It is also clear that when $n$ grows, the function approaches $\frac{1}{2}$. So the $\sup H = \frac{1}{2}$.

But we need to prove that $\frac{1}{2}$ is the least upper bound of the set $H$:

$$
\forall \epsilon > 0\ \exists n \in H: \frac{1}{2} - \frac{1}{4n + 6} > \frac{1}{2} - \epsilon
$$

Fix $\epsilon > 0$.

$$
\frac{1}{2} - \frac{1}{4n + 6} > \frac{1}{2} - \epsilon
$$

While $n > 0$

$$
\epsilon > \frac{1}{4n + 6}
$$

We need $\epsilon > \frac{1}{4n + 6}$, we can simplify and take $\epsilon > \frac{1}{4n}$.

$$
\frac{1}{4n + 6} < \frac{1}{4n} < \epsilon
$$

$$
x > \frac{1}{4\epsilon}
$$

Since $n \in \mathbb{N}$, we need to round up the value of $\frac{1}{4\epsilon}$ to closest higher integer.

So

$$
n := \left\lceil \frac{1}{4\epsilon} \right\rceil
$$

guarantees that

$$
\frac{1}{2} - \frac{1}{4n + 6} > \frac{1}{2} - \epsilon
$$

So, we proved that

$$
\sup H = \frac{1}{2}
$$

and since

$$
\frac{1}{2} - \frac{1}{4n + 6} < \frac{1}{2} \implies \frac{1}{2} \notin H \implies
$$

$$
\implies \nexists \max H
$$

## Example 2

Consider set

$$
H = \{\ \sqrt{x + 1} - \sqrt{x}\ |\ x \geq 0 \}
$$

Find $\sup H$, $\inf H$, $\max H$ and $\min H$.

First, try to transform the equation, so that it becomes easier to comprehend how the function behaves, especially with very large or very small values of $x$.

$$
\sqrt{x + 1} - \sqrt{x} = \frac{(\sqrt{x + 1} - \sqrt{x})(\sqrt{x + 1} + \sqrt{x})}{\sqrt{x + 1} + \sqrt{x}} =
$$

$$
= \frac{(x + 1) - x}{\sqrt{x + 1} + \sqrt{x}} = \frac{1}{\sqrt{x + 1} + \sqrt{x}}
$$

Now, using this form

$$
\frac{1}{\sqrt{x + 1} + \sqrt{x}}
$$

we can see that when the denominator is smallest, the function is largest, while if the denominator grows, the function decreases and approaches $0$.

Since $x \geq 0$, the smallest value of $x$ is $0$ $\implies$ the smallest denominator is $\sqrt{0 + 1} + \sqrt{0} = 1 + 0 = 1$, then the function would look like

$$
\frac{1}{\sqrt{x + 1} + \sqrt{x}} \geq \frac{1}{\sqrt{0 + 1} + \sqrt{0}} = \frac{1}{1} = 1
$$

Therefore, the upper bound of the set $H$ is $1$.

$$
\sup H = 1
$$

And since $1 \in H$ (when $x = 0$), then

$$
\max H = 1
$$

It is also clear that when $x$ grows, the function approaches $0$. So the $\inf H = 0$.

But we need to prove that $0$ is the greatest lower bound of the set $H:

$$
\forall \epsilon > 0\ \exists x \in H: \frac{1}{\sqrt{x + 1} + \sqrt{x}} < \epsilon
$$

Fix $\epsilon > 0$.

$$
\frac{1}{\sqrt{x + 1} + \sqrt{x}} < \epsilon
$$

While $x > 0$

$$
\epsilon > \frac{1}{\sqrt{x + 1} + \sqrt{x}}
$$

We need $\epsilon > \frac{1}{\sqrt{x + 1} + \sqrt{x}}$, we can simplify and take $\epsilon > \frac{1}{\sqrt{x}}$.

$$
\frac{1}{\sqrt{x + 1} + \sqrt{x}} < \frac{1}{\sqrt{x}} < \epsilon
$$

$$
x > \frac{1}{\epsilon^2}
$$

So letting

$$
x := \frac{1}{\epsilon^2} + 1
$$

guarantees that

$$
\frac{1}{\sqrt{x + 1} + \sqrt{x}} < \epsilon
$$

So, we proved that

$$
\inf H = 0
$$

and since

$$
\frac{1}{\sqrt{x + 1} + \sqrt{x}} > 0 \implies 0 \notin H \implies
$$

$$
\implies \nexists \min H
$$

## Example 3

Consider set

$$
H = \{\ \frac{1}{x}\ |\ x \in \mathopen(0; 1\mathclose) \}
$$

Find $\sup H$, $\inf H$, $\max H$ and $\min H$.

It is obvious that as $x$ approaches $0$, the function grows and approaches $+\infty$.

And as $x$ approaches $1$, the function decreases and approaches $1$.

Lets start with the lower bound $\inf H = 1$, and prove that $1$ is the greatest lower bound of the set $H$:

$$
\forall \epsilon > 0\ \exists x \in H: \frac{1}{x} < 1 + \epsilon
$$

Fix $\epsilon > 0$.

$$
\frac{1}{x} < 1 + \epsilon
$$

While $x > 0$

$$
x > \frac{1}{1 + \epsilon}
$$

Since we need a value greater than $\frac{1}{1 + \epsilon}$ but we still need to stay within range $\mathopen(0; 1\mathclose)$, we can choose

$$
x := \frac{\frac{1}{1 + \epsilon} + 1}{2} = \frac{2 + \epsilon}{2 + 2\epsilon}
$$

which guarantees that

$$
\frac{1}{x} < 1 + \epsilon
$$

So, we proved that

$$
\inf H = 1
$$

and since

$$
\frac{1}{x} > 1 \implies 1 \notin H \implies
$$

$$
\implies \nexists \min H
$$

For the upper bound, it is clear that as $x$ approaches $0$, the function becomes arbitrarily large.

So the claim is that $H$ is not bounded from above:

$$
\forall K > 0\ \exists x \in \mathopen(0; 1\mathclose): \frac{1}{x} > K
$$

If we fix $K > 0$

$$
\frac{1}{x} > K \Leftrightarrow x < \frac{1}{K}
$$

So letting

$$
x := \frac{1}{2K}\ \in \mathopen(0; 1\mathclose)
$$

guarantees that

$$
\frac{1}{x} > K
$$

So, we proved that $H$ is not bounded from above.

$$
\sup H = +\infty
$$

$$
\nexists \max H
$$

## Example 4

Consider set

$$
H = \{\ \frac{2x^2 + 1}{5x^2 + 2}\ |\ x \in \mathbb{R} \}
$$

Find $\sup H$, $\inf H$, $\max H$ and $\min H$.

First, try to transform the equation, so that it becomes easier to comprehend how the function behaves, especially with very large or very small values of $x$.

$$
\frac{2x^2 + 1}{5x^2 + 2} = \frac{2}{5} \cdot \frac{\frac{5}{2} \cdot (2x^2 + 1)}{5x^2 + 2} = \frac{2}{5} \cdot \frac{5x^2 + \frac{5}{2}}{5x^2 + 2} = \frac{2}{5} \cdot \frac{5x^2 + 2 + \frac{5}{2} - 2}{5x^2 + 2} =
$$

$$
= \frac{2}{5} \cdot \left(1 + \frac{\frac{5}{2} - 2}{5x^2 + 2}\right) = \frac{2}{5} + \frac{2}{5} \cdot \frac{\frac{5}{2} - 2}{5x^2 + 2} = \frac{2}{5} + \frac{5 - 4}{25x^2 + 10} = \frac{2}{5} + \frac{1}{25x^2 + 10}
$$

Now, using this form

$$
\frac{2}{5} + \frac{1}{25x^2 + 10}
$$

we can see that when the denominator $25x^2 + 10$ grows, the function becomes smaller and approaches $\frac{2}{5}$.

And when the denominator $25x^2 + 10$ is smallest, the function is largest.

Since $x \in \mathbb{R}$, the denominator is smallest when $x = 0$ $\implies$ the smallest denominator is $25 \cdot 0^2 + 10 = 10$, then the function would look like

$$
\frac{2}{5} + \frac{1}{25x^2 + 10} \geq \frac{2}{5} + \frac{1}{25 \cdot 0^2 + 10} = \frac{2}{5} + \frac{1}{10} = \frac{4}{10} + \frac{1}{10} = \frac{5}{10} = \frac{1}{2}
$$

Therefore, the upper bound of the set $H$ is $\frac{1}{2}$.

$$
\sup H = \frac{1}{2}
$$

And since $\frac{1}{2} \in H$ (when $x = 0$), then

$$
\max H = \frac{1}{2}
$$

It is also clear that when $x$ grows, the function approaches $\frac{2}{5}$. So the $\inf H = \frac{2}{5}$.

But we need to prove that $\frac{2}{5}$ is the greatest lower bound of the set $H$:

$$
\forall \epsilon > 0\ \exists x \in H: \frac{2}{5} + \frac{1}{25x^2 + 10} < \frac{2}{5} + \epsilon
$$

Fix $\epsilon > 0$.

$$
\frac{2}{5} + \frac{1}{25x^2 + 10} < \frac{2}{5} + \epsilon
$$

While $x \neq 0$

$$
\epsilon > \frac{1}{25x^2 + 10}
$$

We need $\epsilon > \frac{1}{25x^2 + 10}$, we can simplify and take $\epsilon > \frac{1}{25x^2}$.

$$
\frac{1}{25x^2 + 10} < \frac{1}{25x^2} < \epsilon
$$

$$
x > \frac{1}{5\sqrt{\epsilon}}
$$

So letting

$$
x := \frac{1}{5\sqrt{\epsilon}} + 1
$$

guarantees that

$$
\frac{2}{5} + \frac{1}{25x^2 + 10} < \frac{2}{5} + \epsilon
$$

So, we proved that

$$
\inf H = \frac{2}{5}
$$

and since

$$
\frac{2}{5} + \frac{1}{25x^2 + 10} > \frac{2}{5} \implies \frac{2}{5} \notin H \implies
$$

$$
\implies \nexists \min H
$$
