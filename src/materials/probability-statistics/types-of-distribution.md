---
title: '[ISP] Types of Distribution'
---

# Types of Distribution

## Random variable

A random variable is a function $X : \Omega → \mathbb{R}$ such that for every $t \in \mathbb{R}$

$$
\{ \omega \in \Omega : X(\omega) \leq t \} = \{ X \leq t \}
$$

is an event, meaning it is part of the $\sigma$-algebra $\mathcal{A}$.

A random variable is discrete if its range is finite or countably infinite.

## Expectation

The expectation of a discrete random variable is defined by

$$
\mathbb{E}(X) = \sum_{j=1}^{\infty} x_j \cdot \mathbb{P}(X = x_j), \text{ provided that } \sum_{j=1}^{\infty} |x_j| \cdot \mathbb{P}(X = x_j) < \infty
$$

where $x_1, x_2, \ldots$ are the possible values of $X$.

## Variance and Standard Deviation

The variance of a random variable is defined by

$$
\text{Var}(X) = \mathbb{E}((X - \mathbb{E}(X))^2) = \mathbb{E}(X^2) - (\mathbb{E}(X))^2,
$$

provided that $\mathbb{E}(X^2)$ is finite (there exist random variables with finite expectation but not well-defined variance).

The square root of $\text{Var}(X)$ is called the standard deviation.

## Binomial distribution

A random variable has binomial distribution with parameters $n \geq 1$ and $0 < p < 1$, if

$$
\mathbb{P}(X = k) = \binom{n}{k} p^k (1 - p)^{n-k} \quad \text{for all } k = 0, 1, \ldots, n.
$$

Then the expectation of $X$ is $np$, and its variance is $np(1 - p)$.

Key Characteristics:
- Fixed number of trials ((n)).
- Two possible outcomes per trial (success or failure).
- Probability of success ((p)) is constant across trials.
- Trials are independent.

Random Variable: Number of successes in (n) trials.

Example: Number of heads in 10 coin flips.

## Poisson distribution

A random variable has Poisson distribution with parameter $\lambda > 0$, if

$$
\mathbb{P}(X = k) = \frac{\lambda^k}{k!} e^{-\lambda} \quad \text{for all } k = 0, 1, 2, \ldots
$$

Then $\mathbb{E}(X) = \text{Var}(X) = \lambda$.

Key Characteristics:
- Events occur in a fixed interval of time or space (e.g., hours, area).
- Events are rare relative to the interval, with no fixed number of trials.
- Average rate of occurrence ($\lambda$) is constant.
- Events are independent of each other.

Random Variable: Number of events in the interval.

Example: Number of cars passing a point in an hour.

## Example 1

**Problem**

We organize a party, and we know in advance that the number of participants is eight with probability
1/4, nine with probability 1/3 and ten otherwise. Calculate the expected number and the variance of the
number of participants.

**Solution**

Let X be the number of guests. The expectation is as follows by definition:

$$
\mathbb{E}(X) = 8 \cdot \frac{1}{4} + 9 \cdot \frac{1}{3} + 10 \cdot \frac{5}{12} = 9.17
$$

The variance is as follows:

$$
\mathbb{E}(X^2) − \mathbb{E}(X)^2 = \frac{1}{4} · 8^2 + \frac{1}{3} · 9^2 + \frac{5}{12} · 10^2 − 9.17^2 = 84.67 − 9.17^2 = 0.58
$$

The standard deviation: $\sqrt{0.58} = 0.76$

## Example 2

**Problem**

Suppose that the number of downloads of a webpage within an hour has Poisson distribution, and the
probability that there are $0$ downloads is $1/e^2$. Suppose furthermore that the number of downloads
independent for disjoint time intervals.

a) What is the variance of the number of downloads within an hour?

b) Given that the number of downloads within an hour is at most 1, what is the probability that there
are 0 downloads within this hour?

**Solution**

a) By the definition of the Poisson distribution, we have

$$\mathbb{P}(X = 0) = e^{-\lambda} \Rightarrow \lambda = 2$$

By the properties of the Poisson distribution, we have $Var(X) = \lambda = 2$.

b) The question is the following conditional probability, which we can calculate by using the definition of
this and the definition of the Poisson distribution:

$$
P(X = 0|X ≤ 1) = \frac{P(X = 0, X ≤ 1)}{P(X ≤ 1)} = \frac{P(X = 0)}{P(X = 0) + P(X = 1)} = \frac{e^{-2}}{e^{-2} + e^{-2} \cdot 2} = \frac{1}{3}
$$
