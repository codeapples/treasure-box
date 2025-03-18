---
title: '[ISP] Continuous Probability'
---

# Continuous Probability

## Cumulative distribution function

The cumulative distribution function of a random variable $X$ is a function $F : \mathbb{R} \rightarrow [0, 1]$, where

$$ F(t) = P(X \leq t) $$

holds for every real number $t$.

## Density function

A function $f : \mathbb{R} \rightarrow \mathbb{R}$ is density function of a random variable $X$ if

$$ P(a < X \leq b) = \int_{a}^{b} f(x) \, dx $$

holds for every real numbers $a < b$.

Then (only if the density function exists) we have

$$ F(t) = P(X \leq t) = \int_{-\infty}^{t} f(x) \, dx \quad \text{and} \quad f(t) = F'(t), $$

where the latter equation is for "almost all" real numbers $t$.

For every density function $f$ we have $\int_{-\infty}^{\infty} f(x) \, dx = 1$ and $f(x) \geq 0$ for "almost all" real numbers $t$.

## Expectation

Let $X$ be a random variable with density function $f$. Then the expectation of $X$ is given by

$$ E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx. $$

The variance of $X$:

$$ \text{Var}(X) = E(X^2) - (E(X))^2. $$

The standard deviation of $X$:

$$ s.d.(X) = \sqrt{E(X^2) - (E(X))^2}. $$

::: info Note: expectation of $X^2$
$$ E(X^2) = \int_{-\infty}^{\infty} x^2 \cdot f(x) \, dx. $$
:::

## Exponential distribution

A random variable $X$ has exponential distribution with parameter $\lambda$ if its density function is:

$$ f(x) = \begin{cases}
0, & x < 0, \\
\lambda e^{-\lambda x}, & x \geq 0.
\end{cases} $$

If $X$ has exponential distribution with parameter $\lambda$, then

$$ E(X) = s.d.(X) = \frac{1}{\lambda}. $$

## Example 1

**Problem**

We have ordered an item online, and we know that the delivery is between 8:00 and 10:00, at a
time which is uniformly distributed on the interval $[8, 10]$: the probability that it is between $a$ and $b$ is
proportional to $b − a$, if $8 \leq a \leq b \leq 10$. Let $X$ be the time of the delivery (it is a random element of $[8, 10]$, hence this is a random variable).

a) Calculate $P(X ≤ 9)$

b) $P(8.5 < X < 9)$

c) $P(X > 9.75)$

**Solution**

a) Since the probabilities are proportional to the length of the interval (a = 8, b = 9):
$$
P(X \leq 9) = \frac{9 − 8}{10 − 8} = \frac{1}{2}.
$$

b) Since the probabilities are proportional to the length of the interval (a = 8.5, b = 9):
$$
P(8.5 < X < 9) = \frac{9 − 8.5}{10 − 8} = \frac{1}{4}.
$$


c) Since the probabilities are proportional to the length of the interval (a = 9.75, b = 10):
$$
P(X > 9.75) = \frac{10 − 9.75}{10 − 8} = \frac{1}{8}.
$$

## Example 2

**Problem**

Let the cumulative distribution function of $X$ be given by:

$$ F(t) = P(X \leq t) = \begin{cases}
0, & \text{if } t \leq 0; \\
25t^2, & \text{if } 0 \leq t \leq 1/5; \\
1, & \text{if } t \geq 1/5.
\end{cases} $$

a) Determine the density function of $X$.

b) What is the probability that $X$ is between 0.1 and 0.15?

c) Determine the expectation of $X$.

d) Determine the standard deviation of $X$.

**Solution**

a) If it exists, the density function is the derivative of the cumulative distribution function:

$$ f(x) = \begin{cases}
0, & \text{if } x < 0; \\
50 \cdot x, & \text{if } 0 \leq x \leq 1/5; \\
0, & \text{if } x \geq 1/5.
\end{cases} $$

It is easy to check that $\int_{-\infty}^{t} f(x) \, dx = F(t)$ is satisfied for every $t$.

b) Based on the definition of the cumulative distribution function:

$$
P(0.1 \leq X \leq 0.15) = P(X \leq 0.15) - P(X \leq 0.1) =
$$
$$
= F(0.15) - F(0.1) = 25 \cdot 0.15^2 - 25 \cdot 0.1^2 = 31.25\%.
$$

Or:

$$ P(0.1 \leq X \leq 0.15) = \int_{0.1}^{0.15} f(x) \, dx. $$

c) Based on the definition of expectation:

$$ E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx = \int_{0}^{1/5} 50 \cdot x^2 \, dx = 50 \cdot \left[ \frac{x^3}{3} \right]_{x=0}^{1/5} = 50 \cdot \frac{1}{5^3 \cdot 3} = 0.13. $$

d) We first calculate the expectation of $X^2$:

$$ E(X^2) = \int_{-\infty}^{\infty} x^2 \cdot f(x) \, dx = \int_{0}^{1/5} 50 \cdot x^2 \, dx = 50 \cdot \left[ \frac{x^4}{4} \right]_{x=0}^{1/5} = 50 \cdot \frac{1}{5^4 \cdot 4} = 0.02. $$

And then calculate the standard deviation:

$$ s.d.(X) = \sqrt{E(X^2) - (E(X))^2} = \sqrt{0.02 - 0.13^2} = 0.06. $$

## Example 3

**Problem**

Suppose that X has uniform distribution on the interval $[0, 1]$, that is, its density function is $1$ within $[0, 1]$
and $0$ otherwise.

a) Find the cumulative distribution function and density function of $X^2$.

b) Find the cumulative distribution function and density function of $X^5$.

c) Determine the expectation and variance of $X$.

**Solution**

Since $X \sim \text{Uniform}[0, 1]$, its density function is:

$$ f_X(x) = \begin{cases}
1, & 0 \leq x \leq 1, \\
0, & \text{otherwise}.
\end{cases} $$

The CDF (cumulative distribution function) of $X$, which we'll need later, is:

$$ F_X(x) = P(X \leq x) = \int_{0}^{x} 1 \, dt = x \quad \text{for } 0 \leq x \leq 1, $$

so:

$$ F_X(x) = \begin{cases}
0, & x < 0, \\
x, & 0 \leq x \leq 1, \\
1, & x > 1.
\end{cases} $$

a) Find the cumulative distribution function and density function of $X2$:

$$ P(X^2 \leq t) = \begin{cases}
0, & t \leq 0; \\
\sqrt{t}, & 0 < t < 1; \\
1, & t \geq 1.
\end{cases} $$

The density function of $X^2$ can be determined by differentiating it:

$$ f_{X^2}(t) = \begin{cases}
0, & t \leq 0; \\
\frac{1}{2\sqrt{t}}, & 0 < t < 1; \\
0, & t \geq 1.
\end{cases} $$

b) Find the cumulative distribution function and density function of $X^5$:

$$ P(X^5 \leq t) = \begin{cases}
0, & t \leq 0; \\
t^{1/5}, & 0 < t < 1; \\
1, & t \geq 1.
\end{cases} $$

The density function of $X^5$ can be determined by differentiating it:

$$ f_{X^5}(t) = \begin{cases}
0, & t \leq 0; \\
\frac{1}{5} \cdot t^{-4/5}, & 0 < t < 1; \\
0, & t \geq 1.
\end{cases} $$

c) Because the primitive function of $x$ is $\frac{x^2}{2}$, and $b^2 - a^2 = (b - a)(b + a)$:

$$ E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx = $$
$$= \int_{a}^{b} x \cdot \frac{1}{b-a} \, dx = $$
$$= \frac{1}{b-a} \left[ \frac{x^2}{2} \right]_{x=a}^{b} = $$
$$= \frac{1}{b-a} \cdot \frac{b^2 - a^2}{2} =$$
$$= \frac{a + b}{2} $$

Because the primitive function of $x^2$ is $\frac{x^3}{3}$, and $b^3 - a^3 = (b - a)(a^2 + ab + b^2)$:

$$ E(X^2) = \int_{-\infty}^{\infty} x^2 \cdot f(x) \, dx =$$
$$= \int_{a}^{b} x^2 \cdot \frac{1}{b-a} \, dx = $$
$$= \frac{1}{b-a} \left[ \frac{x^3}{3} \right]_{x=a}^{b} =$$
$$ = \frac{1}{b-a} \cdot \frac{b^3 - a^3}{3} =$$
$$= \frac{a^2 + ab + b^2}{3} $$

And then we find the variance of $X$ is as follows:

$$ \text{Var}(X) = E(X^2) - [E(X)]^2 =$$
$$= \frac{a^2 + ab + b^2}{3} - \left( \frac{a + b}{2} \right)^2 =$$
$$= \frac{a^2 + ab + b^2}{3} - \frac{a^2 + 2ab + b^2}{4} =$$
$$= \frac{(b - a)^2}{12} $$
