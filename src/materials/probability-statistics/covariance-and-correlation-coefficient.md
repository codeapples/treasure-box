---
title: '[IPS] Covariance and Correlation Coefficient'
---

# Covariance and Correlation Coefficient

## Markov-inequality

Let $g : \mathbb{R} \rightarrow \mathbb{R}$ be a monotonically increasing, positive function, $X \geq 0$ a random variable, for which $E(X) < \infty$ and $\epsilon > 0$. Then

$$ P(X \geq \epsilon) \leq \frac{E(g(X))}{g(\epsilon)}. $$

Especially, if $g(x) = x$, then

$$ P(X \geq \epsilon) \leq \frac{E(X)}{\epsilon}. $$

## Chebyshev-inequality

Let $X$ be an arbitrary random variable, for which $Var(X) < \infty$ and $\epsilon > 0$. Then

$$ P(|X - E(X)| \geq \epsilon) \leq \frac{Var(X)}{\epsilon^2}. $$

## Covariance

Covariance of two random variables:

$$ \text{cov}(X, Y) = E(XY) - E(X)E(Y). $$

The joint density function of $(X, Y)$ is $f(x, y)$ if for every appropriate subset $A \subseteq \mathbb{R}^2$ we have

$$ P(X \in A) = \int_A f(x, y) \, dx \, dy. $$

Calculation of covariance if the joint density function is $f(x, y)$:

$$ \text{cov}(X, Y) = \int*{-\infty}^{\infty} \int*{-\infty}^{\infty} xy \cdot f(x, y) \, dx \, dy - \left( \int*{-\infty}^{\infty} x \cdot f_X(x) \, dx \right) \cdot \left( \int*{-\infty}^{\infty} y \cdot f_Y(y) \, dy \right), $$

where $f_X(x)$ and $f_Y(y)$ are the marginal densities that can be computed as $f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy$ and $f_Y(y) = \int_{-\infty}^{\infty} f(x, y) \, dx$.

If random variables $X$ and $Y$ are independent, then $\text{cov}(X, Y) = 0$. On the other hand, it may happen that $\text{cov}(X, Y) = 0$, but $X$ and $Y$ are not independent.

## Correlation coefficient

The (Pearson) correlation coefficient of two random variables $X$ and $Y$

$$ R(X, Y) = \frac{\text{cov}(X, Y)}{\text{sd}(X)\text{sd}(Y)}. $$

(this is always at least $-1$ and at most 1)

$R(X, Y) = 1$ means that $Y = aX + b$ for some $a, b$, with $a > 0$.
