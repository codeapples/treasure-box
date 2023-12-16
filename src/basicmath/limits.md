---
title: \[BM\] Limits
---

# Proving limits by definition

## Bounded functions
Function $f$ is called **bounded** if $f(x)$ has a minimum and/or maximum value for every $x$ in the domain of $f$.

#### Bounded from above
Function $f$ is called **bounded from above** if
$$ \exists K \in \mathbb{R}\ \forall x \in D_{f}\ \Rightarrow\ f(x) \leq K $$

#### Bounded from below
Function $f$ is called **bounded from below** if
$$ \exists K \in \mathbb{R}\ \forall x \in D_{f}\ \Rightarrow\ f(x) \geq K $$

#### Minimum and maximum
Another way to state this is to say that $f \in \mathbb{R} \rightarrow \mathbb{R}$:
- has a *minimum value* if the set $R_{f}$ has a minimum value:
  $$ \exists a \in D_{f}:\ \forall x \in D_{f}\ \Rightarrow\ f(x) \geq f(a) $$
- has a *maximum value* if the set $R_{f}$ has a maximum value:
  $$ \exists b \in D_{f}:\ \forall x \in D_{f}\ \Rightarrow\ f(x) \leq f(b) $$

## Limits
To define a limit of a function $f$ we need to consider three possible cases:
- limit of $f$ at $+\infty$:
  $$ \lim_{x \to +\infty} f(x) = L $$
- limit of $f$ at $-\infty$:
  $$ \lim_{x \to -\infty} f(x) = L $$
- limit of $f$ at a finite number $x_{0}$:
  $$ \lim_{x \to x_{0}} f(x) = L $$

At this point we're only interested in the first two cases.

## Infinite limit at infinity
Function $f$ has an **infinite limit at infinity**
$$ \lim_{x \to +\infty} f(x) = +\infty$$
if the following is true:
$$ \forall P \gt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ f(x) \gt P $$

**Rule of thumb**<br>
Find lower bound, substitute into K => done.

### Prove by definition
<br>

#### Example 1
Let's prove that
$$ \lim_{x \to +\infty} x^2 = +\infty $$

$$ \forall P \gt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ x^2 \gt P $$
$$ f(x) = x^2 \gt P \gt 0 $$
Since $P \gt 0$  and $x \gt 0$ then
$$ x \gt \sqrt{P} $$
So $K := \sqrt{P} + 1$ is a good lower bound (+1 is arbitrary).

Therefore
$$ \forall P \gt 0\ \exists K := \sqrt{P} + 1 \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ x^2 \gt P $$
To say it simply, this means we can pick any value of $P \gt 0$ and still $f(x)$ will always be greater than $\sqrt{P} + 1$ within the specified domain. Which means $f(x)$ will grow infinitely.

#### Example 2
Let's prove that
$$ \lim_{x \to +\infty} 2x^5 − 7x^4 + 3x^3 + 11x − 37 = +\infty $$

$$ \forall P \gt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ 2x^5 − 7x^4 + 3x^3 + 11x − 37 \gt P $$

We need to find a lower bound for $f(x)$ (OPL).

$$ 2x^5 − 7x^4 + 3x^3 + 11x − 37 \ge 2x^5 - 7x^4 - 37x^4 = x^5 + x^5 - 44x^4 = x^5 - x^4(x - 44) $$

Therefore
$$ x^5 \gt P \gt 0 \leftrightarrow x \gt \sqrt[5]{P} $$
So $K := \sqrt[5]{P} + 44$ is a good lower bound.

$$ \forall P \gt 0\ \exists K := \sqrt[5]{P} + 44 \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ 2x^5 − 7x^4 + 3x^3 + 11x − 37 \gt P $$

#### Example 3
Let's prove that
$$ \lim_{x \to +\infty} \frac{3x^4 + x^2 - 3x + 5}{2x^3 + 2x + 1} = +\infty $$

$$ \forall P \gt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ \frac{3x^4 + x^2 - 3x + 5}{2x^3 + 2x + 1} \gt P $$
To find the lower bound we need to find the lower bound for the numerator and the upper bound for the denominator.

$$ \frac{P(x)}{Q(x)} \ge \frac{3x^4 - 3x^3}{2x^3 + 2x^3 + 1x^3} \ge \frac{2x^4 - x^3(x - 3)}{5x^3} \ge \frac{2x^4}{5x^3} \ge \frac{2}{5}x$$

Therefore
$$ \frac{2}{5}x \gt P \gt 0 \leftrightarrow x \gt \frac{5}{2}P $$

So $K := \frac{5}{2}P + 3$ is a good lower bound.

$$ \forall P \gt 0\ \exists K := \frac{5}{2}P + 3 \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ \frac{3x^4 + x^2 - 3x + 5}{2x^3 + 2x + 1} \gt P $$

## Negative infinite limit at infinity
Function $f$ has a **negative infinite limit at infinity**
$$ \lim_{x \to +\infty} f(x) = -\infty$$
if the following is true:
$$ \forall p \lt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ f(x) \lt p $$

**Rule of thumb**<br>
Find upper bound, substitute into K => done.
Or multiply by -1 and find lower bound => done.

### Prove by definition
<br>

#### Example 1
Let's prove that
$$ \lim_{x \to +\infty} (2 - \sqrt{x - 5}) = -\infty $$
$$ \forall p \lt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ 2 - \sqrt{x - 5} \lt p $$
We need to find an upper bound for $f(x)$ (OPU).
$$ f(x) = 2 - \sqrt{x - 5} \lt p | \cdot (-1)\ \Leftrightarrow\ \sqrt{x - 5} - 2 \gt -p $$
$$ \sqrt{x - 5} \gt -p + 2\ \Leftrightarrow\ x - 5 \gt (-p + 2)^2\ \Leftrightarrow\ x \gt (-p + 2)^2 + 5 $$
So $K := (-p + 2)^2 + 6$ is a good upper bound.

$$ \forall p \lt 0\ \exists K := (-p + 2)^2 + 6 \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ 2 - \sqrt{x - 5} \lt p $$
To say it simply, this means we can pick any value of $p \lt 0$ and still $f(x)$ will always be less than $(-p + 2)^2 + 6$ within the specified domain. Which means $f(x)$ will decrease infinitely.

#### Example 2
Let's prove that
$$ \lim_{x \to +\infty} \frac{-2x^7 + 3x^5 - x^3 +2x^4 + x + 5}{3x^5 + 4x^2 + x + 3} = -\infty $$
$$ \forall p \lt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ \frac{-2x^7 + 3x^5 - x^3 +2x^4 + x + 5}{3x^5 + 4x^2 + x + 3} \lt p $$

Multiply by -1 and find lower bound.

$$ \frac{P(x)}{Q(x)} \lt \frac{-2x^7 + 3x^5 - x^3 +2x^4 + x + 5}{3x^5 + 4x^2 + x + 3}\ |\ \cdot (-1)$$
$$ \frac{P(x)}{Q(x)} \ge \frac{2x^7 - 3x^5 + x^3 -2x^4 - x - 5}{3x^5 + 4x^2 + x + 3} \ge \frac{x^7 + x^7 - 11x^5}{11x^5}$$
$$ \frac{P(x)}{Q(x)} \ge \frac{x^7 + x^5(x^2 - 11)}{11x^5} \ge\ if\ (x \gt 11) \ge \frac{1}{11}x^2$$

Therefore
$$ \frac{1}{11}x^2 \lt p\ \Leftrightarrow\ x \gt \sqrt{-11p} $$
So $K := \sqrt{-11p} + 11$ is a good lower bound.

$$ \forall p \lt 0\ \exists K := \sqrt{-11p} + 11 \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ \frac{-2x^7 + 3x^5 - x^3 +2x^4 + x + 5}{3x^5 + 4x^2 + x + 3} \lt p $$

## Finite limit at infinity
Function $f$ has a **finite limit at infinity**
$$ \lim_{x \to +\infty} f(x) = L$$
if the following is true:
$$ \forall \varepsilon \gt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ |f(x) - L| \lt \varepsilon $$

### Prove by definition
<br>

#### Example 1
Let's prove that
$$ \lim_{x \to +\infty} \frac{x^2 + 3x - 1 - 2x^3}{3x^3 + x^2 + x + 5} = -\frac{2}{3} $$
$$ \forall \varepsilon \gt 0\ \exists K \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ \left|\frac{x^2 + 3x - 1 - 2x^3}{3x^3 + x^2 + x + 5} + \frac{2}{3}\right| \lt \varepsilon $$

We need to find the upper bound for $|f(x) - L|$.

$$ \left| f(x) + \frac{2}{3} \right| = \left| \frac{x^2 + 3x - 1 - 2x^3}{3x^3 + x^2 + x + 5} + \frac{2}{3} \right| = \frac{|3x^2 + 9x - 3 - 6x^3 + 6x^3 + 2x^2 + 2x + 10|}{|9x^3 + 3x^2 + 3x + 15|}$$
$$\text{for $x \gt 0$ }\ : \frac{5x^2 + 11x + 2}{9x^3 + 3x^2 + 3x + 15} \le \frac{18x^2}{9x^3} \le \frac{2}{x}$$

Therefore
$$ \frac{2}{x} \lt \varepsilon\ \Leftrightarrow\ x \gt \frac{2}{\varepsilon}\ |\ x \ge 1$$

So $K := \frac{2}{\varepsilon} + 1 > 0$

$$ \forall \varepsilon \gt 0\ \exists K := \frac{2}{\varepsilon} + 1 \gt 0\ \forall x \in \mathopen(K; +\infty\mathclose) \cap D_{f}\ \Rightarrow\ \left|\frac{x^2 + 3x - 1 - 2x^3}{3x^3 + x^2 + x + 5} + \frac{2}{3}\right| \lt \varepsilon $$
