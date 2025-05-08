---
title: '[IPS] Normal Distribution'
---

# Normal Distribution

A random variable has normal distribution with mean $m$ and variance $\sigma^2$ if its density function is defined by

$$ f(x) = \frac{1}{\sqrt{2\pi} \cdot \sigma} \cdot \exp \left( -\frac{(x - m)^2}{2\sigma^2} \right). $$

This is denoted by $X \sim N(m, \sigma^2)$.

## Standard normal distribution

A random variable $Z$ has standard normal distribution if it has normal distribution with mean $m = 0$ and variance $\sigma = 1$, that is, $Z \sim N(0, 1)$. Its density function is given by

$$ \varphi(x) = \frac{1}{\sqrt{2\pi}} \cdot \exp \left( -\frac{x^2}{2} \right). $$

That is, for every $a < b$ we have

$$ P(a \leq X \leq b) = \int*{a}^{b} f(x) \, dx = \int*{a}^{b} \frac{1}{\sqrt{2\pi} \cdot \sigma} \cdot \exp \left( -\frac{(x - m)^2}{2\sigma^2} \right) dx. $$

The cumulative distribution function of the standard normal distribution is denoted by $\Phi$:

$$ \Phi(t) = P(Z \leq t) = \int\_{-\infty}^{t} \frac{1}{\sqrt{2\pi}} \cdot \exp \left( -\frac{x^2}{2} \right) dx. $$

We can use that $\Phi(-x) = 1 - \Phi(x)$, and $\Phi(0.5) = 0.6915$, $\Phi(1) = 0.8413$, $\Phi(2) = 0.9772$, $\Phi(3) = 0.9987$.

## Independent random variables

Random variables $X_1, \ldots, X_n$ are independent if

$$ P(X_1 \leq t_1, X_2 \leq t_2, \ldots, X_n \leq t_n) =$$
$$= P(X_1 \leq t_1) \cdot P(X_2 \leq t_2) \cdots P(X_n \leq t_n) $$

holds for all real numbers $t_1, t_2, \ldots, t_n$.

### Properties of independent random variables

Let $X$ and $Y$ be independent random variables with normal distribution. Then

a) for real numbers $c \neq 0$ and $d$, the random variable $cX + d$ has normal distribution with mean $c \cdot \mathbb{E}(X) + d$ and variance $c^2 \operatorname{Var}(X)$;

b) for every real number $t$ we have $(X - m)/\sigma$ has standard normal distribution, and

$$ P(X \leq t) = P \left( \frac{X - m}{\sigma} \leq \frac{t - m}{\sigma} \right) = \Phi \left( \frac{t - m}{\sigma} \right). $$

c) $X + Y$ has the normal distribution, and $\mathbb{E}(X + Y) = \mathbb{E}(X) + \mathbb{E}(Y)$, and $\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$;

d) If $X_1, X_2, \ldots, X_n$ are independent normal variables with mean $m$ and variance $\sigma^2$, then their mean also has a normal distribution:

$$ \overline{X} = \frac{X_1 + \cdots + X_n}{n} \sim N \left( m, \frac{\sigma^2}{n} \right). $$
