---
title: '[A1] Evaluating sum of series'
---

# Evaluating sum of series

## Sum of an infinite series

Sum of the infinite series can only be determined if the series is convergent. See more about [convergence of series](/materials/analysis/series-conv.md).

The sum of an infinite series is the limit of the partial sum sequence

$$
\sum_{n=1}^{\infty} a_n = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \sum_{k=1}^{n} a_k
$$

where $S_n$ is the $n$-th partial sum of the series.

## Sum of geometric series

If the geometric series is [convergent](/materials/analysis/series-conv.md#convergence-of-geometric-series), the sum of the series is

$$
\sum_{n=0}^{\infty} q^n = 1 + q + q^2 + q^3 + \cdots = \frac{1}{1 - q}
$$

if the starting index is $p$, then the sum is

$$
\sum_{n=p}^{\infty} q^n = q^p + q^{p+1} + q^{p+2} + \cdots = q^p \cdot (1 + q + q^2 + \cdots) = \frac{q^p}{1 - q}
$$

## Sum of telescopic series

If the series is [telescopic](/materials/analysis/series-conv.md#telescopic-series), the sum of the series is the limit of it's partial sum sequence

$$
\sum_{n=1}^{\infty} (a_n - a_{n+1}) = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \sum_{k=1}^{n} (a_k - a_{k+1})
$$

## Theorems

Sum of two convergent series is also a convergent series of the sum of their sequences:

$$
\sum_{n=1}^{\infty} (a_n + b_n) = \sum_{n=1}^{\infty} a_n + \sum_{n=1}^{\infty} b_n
$$

Can also be written as

$$
\sum_{n=1}^{\infty} (c \cdot a_n + d \cdot b_n) = c \cdot \sum_{n=1}^{\infty} a_n + d \cdot \sum_{n=1}^{\infty} b_n
$$

where $c, d \in \mathbb{R}$.

## Example 1

Determine the sum of the series:

$$
\sum_{n=1}^{\infty} \frac{(-1)^n}{2^n}
$$

Simplify:

$$
\sum_{n=1}^{\infty} \frac{(-1)^n}{2^n} = \sum_{n=1}^{\infty} \left( -\frac{1}{2} \right)^n
$$

This is a geometric series with $q = -\frac{1}{2}$, so the sum is

$$
\sum_{n=1}^{\infty} \left( -\frac{1}{2} \right)^n = \frac{q^1}{1 - q} = \frac{-\frac{1}{2}}{1 - (-\frac{1}{2})} = \frac{-\frac{1}{2}}{1 + \frac{1}{2}} = -\frac{1}{2} \cdot \frac{2}{3} = -\frac{1}{3}
$$

## Example 2

Determine the sum of the series:

$$
\sum_{n=0}^{\infty} \frac{(-3)^n + 2^{n + 2}}{5 \cdot 5^{n + 1}}
$$

Simplify:

$$
\sum_{n=0}^{\infty} \frac{(-3)^n + 2^{n + 2}}{5 \cdot 5^{n + 1}} = \sum_{n=0}^{\infty} \frac{(-3)^n}{5 \cdot 5^{n + 1}} + \sum_{n=0}^{\infty} \frac{2^{n + 2}}{5 \cdot 5^{n + 1}} =
$$

$$
= \sum_{n=0}^{\infty} \frac{(-3)^n}{25 \cdot 5^n} + \sum_{n=1}^{\infty} \frac{4 \cdot 2^n}{25 \cdot 5^n} = \frac{1}{25} \sum_{n=0}^{\infty} \left( -\frac{3}{5} \right)^n + \frac{4}{25} \sum_{n=0}^{\infty} \left( \frac{2}{5} \right)^n =
$$

$\sum_{n=0}^{\infty} \left( -\frac{3}{5} \right)^n$ is a geometric series with $q = -\frac{3}{5}$

$\sum_{n=0}^{\infty} \left( \frac{2}{5} \right)^n$ is a geometric series with $q = \frac{2}{5}$

$$
= \frac{1}{25} \cdot \frac{1}{1 - (-\frac{3}{5})} + \frac{4}{25} \cdot \frac{1}{1 - \frac{2}{5}} = \frac{1}{25} \cdot \frac{5}{8} + \frac{4}{25} \cdot \frac{5}{3} = \frac{1}{40} + \frac{4}{15} = \frac{7}{24}
$$

## Example 3

Determine the sum of the series:

$$
\sum_{n=1}^{\infty} \left(\frac{5}{2^n} + \frac{1}{3^{2n}}\right)
$$

Simplify:

$$
\sum_{n=1}^{\infty} \left(\frac{5}{2^n} + \frac{1}{3^{2n}}\right) = \sum_{n=1}^{\infty} \frac{5}{2^n} + \sum_{n=1}^{\infty} \frac{1}{3^{2n}} = 5 \sum_{n=1}^{\infty} \frac{1}{2^n} + \sum_{n=1}^{\infty} \frac{1}{9^n} =
$$

$$
= 5 \cdot \sum_{n=1}^{\infty} \left(\frac{1}{2}\right)^n + \sum_{n=1}^{\infty} \left(\frac{1}{9}\right)^n =
$$

$\sum_{n=1}^{\infty} \left(\frac{1}{2}\right)^n$ is a geometric series with $q = \frac{1}{2}$

$\sum_{n=1}^{\infty} \left(\frac{1}{9}\right)^n$ is a geometric series with $q = \frac{1}{9}$

$$
= 5 \cdot \frac{\frac{1}{2}}{1 - \frac{1}{2}} + \frac{\frac{1}{9}}{1 - \frac{1}{9}} = 5 \cdot \frac{1}{2} \cdot 2 + \frac{1}{9} \cdot \frac{9}{8} = 5 + \frac{1}{8} = \frac{41}{8}
$$

## Example 4

Determine the sum of the series:

$$
\sum_{n=1}^{\infty} \frac{1}{n(n + 1)}
$$

We can guess that the series is telescopic, so we need to find a way to transform it into a telescopic series. We can try to split the fraction into two fractions:

$$
\frac{1}{n(n + 1)} = \frac{A}{n} + \frac{B}{n + 1} =
$$

$$
= \frac{A(n + 1) + Bn}{n(n + 1)} = \frac{An + A + Bn}{n(n + 1)} = \frac{(An + Bn) + A}{n(n + 1)} =
$$

$$
= \frac{n(A + B) + A}{n(n + 1)} = \frac{1}{n(n + 1)}
$$

From this we see that $A + B = 0$ and $A = 1$. So we can find that $B = -1$.

Therefore, the series can be written as

$$
\sum_{n=1}^{\infty} \frac{1}{n(n + 1)} = \sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n + 1} \right)
$$

Now, take a partial sum, try unpack it and see which terms cancel out:

$$
S_n = \sum_{k=1}^{n} \left( \frac{1}{k} - \frac{1}{k + 1} \right) =
$$

$$
= \left( \frac{1}{1} - \cancel{\frac{1}{2}} \right) +
$$

$$
+ \left( \cancel{\frac{1}{2}} - \cancel{\frac{1}{3}} \right) +
$$

$$
+ \left( \cancel{\frac{1}{3}} - \cancel{\frac{1}{4}} \right) +
$$

$$
+ \left( \cancel{\frac{1}{4}} - \cancel{\frac{1}{5}} \right) +
$$

$$
+ \quad \cdots \quad +
$$

$$
+ \left( \cancel{\frac{1}{n - 1}} - \cancel{\frac{1}{n}} \right) +
$$

$$
+ \left( \cancel{\frac{1}{n}} - \frac{1}{n + 1} \right)
$$

Therefore

$$
S_n = 1 - \frac{1}{n + 1}
$$

Now, take the limit of the partial sum sequence:

$$
\lim_{n \to \infty} S_n = \lim_{n \to \infty} \left( 1 - \frac{1}{n + 1} \right) = 1 - 0 = 1
$$

Therefore, the series is convergent and the sum of the series is **1**.

$$
\sum_{n=1}^{\infty} \frac{1}{n(n + 1)} = \lim_{n \to \infty} S_n = 1
$$

## Example 5

Determine the sum of the series:

$$
\sum_{n=1}^{\infty} \frac{1}{(2n - 1)(2n + 1)}
$$

Turn the series into a telescopic series:

$$
\frac{1}{(2n - 1)(2n + 1)} = \frac{A}{2n - 1} + \frac{B}{2n + 1} =
$$

$$
= \frac{A(2n + 1) + B(2n - 1)}{(2n - 1)(2n + 1)} = \frac{2An + A + 2Bn - B}{(2n - 1)(2n + 1)} =
$$

$$
= \frac{n(2A + 2B) + A - B}{(2n - 1)(2n + 1)} = \frac{1}{(2n - 1)(2n + 1)}
$$

From this we see that $2A + 2B = 0$ and $A - B = 1$.

So we can find that $A = \frac{1}{2}$ and $B = -\frac{1}{2}$.

Therefore, the series can be written as

$$
\sum_{n=1}^{\infty} \frac{1}{(2n - 1)(2n + 1)} = \sum_{n=1}^{\infty} \left( \frac{1}{2(2n - 1)} - \frac{1}{2(2n + 1)} \right) = \sum_{n=1}^{\infty} \frac{1}{2} \cdot \left( \frac{1}{2n - 1} - \frac{1}{2n + 1} \right)
$$

Now, take a partial sum, try unpack it and see which terms cancel out:

$$
S_n = \sum_{k=1}^{n} \frac{1}{2} \cdot \left( \frac{1}{2k - 1} - \frac{1}{2k + 1} \right) =
$$

$$
= \frac{1}{2} \cdot \left( \frac{1}{1} - \cancel{\frac{1}{3}} \right) +
$$

$$
+ \frac{1}{2} \cdot \left( \cancel{\frac{1}{3}} - \cancel{\frac{1}{5}} \right) +
$$

$$
+ \frac{1}{2} \cdot \left( \cancel{\frac{1}{5}} - \cancel{\frac{1}{7}} \right) +
$$

$$
+ \frac{1}{2} \cdot \left( \cancel{\frac{1}{7}} - \cancel{\frac{1}{9}} \right) +
$$

$$
+ \quad \cdots \quad +
$$

$$
+ \frac{1}{2} \cdot \left( \cancel{\frac{1}{2n - 3}} - \cancel{\frac{1}{2n - 1}} \right) +
$$

$$
+ \frac{1}{2} \cdot \left( \cancel{\frac{1}{2n - 1}} - \frac{1}{2n + 1} \right)
$$

Therefore

$$
S_n = \frac{1}{2} \cdot \left( 1 - \frac{1}{2n + 1} \right)
$$

Now, take the limit of the partial sum sequence:

$$
\lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{1}{2} \cdot \left( 1 - \frac{1}{2n + 1} \right) = \frac{1}{2} \cdot (1 - 0) = \frac{1}{2}
$$

Therefore, the series is convergent and the sum of the series is **1/2**.

$$
\sum_{n=1}^{\infty} \frac{1}{(2n - 1)(2n + 1)} = \lim_{n \to \infty} S_n = \frac{1}{2}
$$
