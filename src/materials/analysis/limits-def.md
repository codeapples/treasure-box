---
title: \[A-1\] Proving limits by definition
---

# Proving limits by definition

## Limit definition for convergent sequences

Let $(a_n)$ be a sequence of real numbers. We say that $(a_n)$ converges to a real number $L$ if for every $\varepsilon > 0$ there exists a natural number $N$ such that for all $n \geq N$ we have $|a_n - L| < \varepsilon$.

#### Notation
$$ \lim_{n \to \infty} a_n = L $$

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : |a_n - L| < \varepsilon
$$

#### General steps
- Simplify the inequality $|a_n - L| < \varepsilon$, get rid of the absolute value.
- Use order preserving estimates to simplify further.
- Find a suitable $N$ for which $|a_n - L| < \varepsilon$ holds for all $n \geq N$.

## Limit definition for divergent sequences

### Positive infinity

Let $(a_n)$ be a sequence of real numbers. We say that $(a_n)$ diverges to $+\infty$ if for every $P > 0$ there exists a natural number $N$ such that for all $n \geq N$ we have $a_n > P$.

Notation:

$$ \lim_{n \to \infty} a_n = +\infty $$

$$
\forall P > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : a_n > P
$$

### Negative infinity

Let $(a_n)$ be a sequence of real numbers. We say that $(a_n)$ diverges to $-\infty$ if for every $P < 0$ there exists a natural number $N$ such that for all $n \geq N$ we have $a_n < P$.

Notation:

$$ \lim_{n \to \infty} a_n = -\infty $$

$$
\forall P < 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : a_n < P
$$

## Example 1

Let's prove that

$$
\lim_{n \to \infty} \frac{n}{2n - 3} = \frac{1}{2}
$$

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : \left| \frac{n}{2n - 3} - \frac{1}{2} \right| < \varepsilon
$$

Fix $\varepsilon > 0$.

$$
\left| \frac{n}{2n - 3} - \frac{1}{2} \right| < \varepsilon
$$

$$
\left| \frac{2n - 2n - 3}{2(2n - 3)} \right| < \varepsilon
$$

$$
\left| \frac{-3}{4n - 6} \right| < \varepsilon
$$

While $4n - 6 > 0$ for all $n \in \mathbb{N}$, we can simplify the inequality:

$$
\frac{3}{4n - 6} < \varepsilon\ \text{ where } n \geq 2
$$

Find order preserving upper bound (OPU) for $\frac{3}{4n - 6}$:

$$
\frac{3}{4n - 6} = \frac{3}{3n + (n - 6)} < \frac{3}{3n} = \frac{1}{n} \text{ where } n \geq 6
$$

$$
\frac{1}{n} < \varepsilon\ \Leftrightarrow\ n > \frac{1}{\varepsilon} \text{ where } n \geq 2, n \geq 6 \implies n \geq 6
$$

Now we can fix $N$, and since $N \in \mathbb{N}$ we need to take the integer part of $\frac{1}{\varepsilon}$.

$$
N := \left\lceil \frac{1}{\varepsilon} \right\rceil + 6
$$

So

$$
\forall \varepsilon > 0\ \exists N := \left\lceil \frac{1}{\varepsilon} \right\rceil + 6\ \forall n \in \mathbb{N}\ n \geq N : \left| \frac{n}{2n - 3} - \frac{1}{2} \right| < \varepsilon
$$

## Example 2

Let's prove that

$$
\lim_{n \to \infty} \frac{2n^3 + 10}{n^3 + n^2 + n + 1} = 2
$$

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : \left| \frac{2n^3 + 10}{n^3 + n^2 + n + 1} - 2 \right| < \varepsilon
$$

Fix $\varepsilon > 0$.

$$
\left| \frac{2n^3 + 10}{n^3 + n^2 + n + 1} - 2 \right| < \varepsilon
$$

$$
\left| \frac{2n^3 + 10 - 2n^3 - 2n^2 - 2n - 2}{n^3 + n^2 + n + 1} \right| < \varepsilon
$$

$$
\left| \frac{-2n^2 - 2n + 8}{n^3 + n^2 + n + 1} \right| < \varepsilon
$$

$$
\frac{2n^2 + 2n - 8}{n^3 + n^2 + n + 1} < \varepsilon\ |\ \text{ where } n \geq 2
$$

Find order preserving upper bound (OPU) for $\frac{2n^2 + 2n - 8}{n^3 + n^2 + n + 1}$:

$$
\frac{2n^2 + 2n - 8}{n^3 + n^2 + n + 1} = \frac{4n^2}{n^3} = \frac{4}{n} \text{ where } n \geq 2
$$

$$
\frac{4}{n} < \varepsilon\ \Leftrightarrow\ n > \frac{4}{\varepsilon} \text{ where } n \geq 2
$$

Now we can fix $N$, and since $N \in \mathbb{N}$ we need to take the integer part of $\frac{4}{\varepsilon}$.

$$
N := \left\lceil \frac{4}{\varepsilon} \right\rceil + 2
$$

So

$$
\forall \varepsilon > 0\ \exists N := \left\lceil \frac{4}{\varepsilon} \right\rceil + 2\ \forall n \in \mathbb{N}\ n \geq N : \left| \frac{2n^3 + 10}{n^3 + n^2 + n + 1} - 2 \right| < \varepsilon
$$

## Example 3

Let's prove that

$$
\lim_{n \to \infty} \frac{1 + n^2}{2 + n - 2n^2} = -\frac{1}{2}
$$

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : \left| \frac{1 + n^2}{2 + n - 2n^2} + \frac{1}{2} \right| < \varepsilon
$$

Fix $\varepsilon > 0$.

$$
\left| \frac{1 + n^2}{2 + n - 2n^2} + \frac{1}{2} \right| < \varepsilon
$$

$$
\left| \frac{2 + 2n^2 + 2 + n - 2n^2}{4 + 2n - 4n^2} \right| < \varepsilon
$$

$$
\left| \frac{n + 4}{4 + 2n - 4n^2} \right| < \varepsilon
$$

$$
\frac{n + 4}{4n^2 - 2n - 4} < \varepsilon\ |\ \text{ where } n \geq 2
$$

Find order preserving upper bound (OPU) for $\frac{n + 4}{4n^2 - 2n - 4}$:

$$
\frac{n + 4}{4n^2 - 2n - 4} < \frac{5n}{4n^2 - 6n} = \frac{5n}{3n^2 + n(n - 6)}
$$

$$
\frac{5}{3n} \text{ where } n \geq 6
$$

$$
\frac{5}{3n} < \varepsilon\ \Leftrightarrow\ n > \frac{5}{3\varepsilon} \text{ where } n \geq 2, n \geq 6 \implies n \geq 6
$$

Now we can fix $N$, and since $N \in \mathbb{N}$ we need to take the integer part of $\frac{5}{3\varepsilon}$.

$$
N := \left\lceil \frac{5}{3\varepsilon} \right\rceil + 6
$$

So

$$
\forall \varepsilon > 0\ \exists N := \left\lceil \frac{5}{3\varepsilon} \right\rceil + 6\ \forall n \in \mathbb{N}\ n \geq N : \left| \frac{1 + n^2}{2 + n - 2n^2} + \frac{1}{2} \right| < \varepsilon
$$

## Example 4

Let's prove that

$$
\lim_{n \to \infty} \sqrt{n^2 + 1} - n = 0
$$

$$
\forall \varepsilon > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : \left| \sqrt{n^2 + 1} - n \right| < \varepsilon
$$

Fix $\varepsilon > 0$.

$$
\left| \sqrt{n^2 + 1} - n \right| < \varepsilon
$$

$$
\left| \frac{(\sqrt{n^2 + 1} - n)(\sqrt{n^2 + 1} + n)}{\sqrt{n^2 + 1} + n} \right| < \varepsilon
$$

$$
\left| \frac{n^2 + 1 - n^2}{\sqrt{n^2 + 1} + n} \right| < \varepsilon
$$

$$
\left| \frac{1}{\sqrt{n^2 + 1} + n} \right| < \varepsilon
$$

$$
\frac{1}{\sqrt{n^2 + 1} + n} < \varepsilon\ |\ \text{ where } n \geq 0
$$

Find order preserving upper bound (OPU) for $\frac{1}{\sqrt{n^2 + 1} + n}$:

$$
\frac{1}{\sqrt{n^2 + 1} + n} < \frac{1}{n} \text{ where } n \geq 1
$$

$$
\frac{1}{n} < \varepsilon\ \Leftrightarrow\ n > \frac{1}{\varepsilon} \text{ where } n \geq 0, n \geq 1 \implies n \geq 1
$$

Now we can fix $N$, and since $N \in \mathbb{N}$ we need to take the integer part of $\frac{1}{\varepsilon}$.

$$
N := \left\lceil \frac{1}{\varepsilon} \right\rceil + 1
$$

So

$$
\forall \varepsilon > 0\ \exists N := \left\lceil \frac{1}{\varepsilon} \right\rceil + 1\ \forall n \in \mathbb{N}\ n \geq N : \left| \sqrt{n^2 + 1} - n \right| < \varepsilon
$$

## Example 5

Let's prove that

$$
\lim_{n \to \infty} \frac{n^4 + 5n^3 + 11n^2 -3n -7}{15n^3 + 7n^2 - 21n + 5} = +\infty
$$

$$
\forall P > 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : \frac{n^4 + 5n^3 + 11n^2 -3n -7}{15n^3 + 7n^2 - 21n + 5} > P
$$

Fix $P > 0$.

$$
\frac{n^4 + 5n^3 + 11n^2 -3n -7}{15n^3 + 7n^2 - 21n + 5} > P
$$

Find order preserving lower bound (OPL) for $\frac{n^4 + 5n^3 + 11n^2 -3n -7}{15n^3 + 7n^2 - 21n + 5}$:

$$
\frac{n^4 + 5n^3 + 11n^2 -3n -7}{15n^3 + 7n^2 - 21n + 5} > \frac{n^4 - 10n}{27n^3} = \frac{\frac{1}{2}n^4 + \frac{1}{2}n(n^3 - 20)}{27n^3} > \frac{n}{54} \text{ where } n \geq 3
$$

$$
\frac{n}{54} > P\ \Leftrightarrow\ n > 54P \text{ where } n \geq 3
$$

Now we can fix $N$, and since $N \in \mathbb{N}$ we need to take the integer part of $54P$.

$$
N := \left\lceil 54P \right\rceil + 3
$$

So

$$
\forall P > 0\ \exists N := \left\lceil 54P \right\rceil + 3\ \forall n \in \mathbb{N}\ n \geq N : \frac{n^4 + 5n^3 + 11n^2 -3n -7}{15n^3 + 7n^2 - 21n + 5} > P
$$

## Example 6

Let's prove that

$$
\lim_{n \to \infty} \frac{n^4 - 5n^3 + 8n + 3}{7 - 3n^2 - 5n^3} = -\infty
$$

$$
\forall P < 0\ \exists N \in \mathbb{N}\ \forall n \in \mathbb{N}\ n \geq N : \frac{n^4 - 5n^3 + 8n + 3}{7 - 3n^2 - 5n^3} < P
$$

Fix $P < 0$.

$$
\frac{n^4 - 5n^3 + 8n + 3}{7 - 3n^2 - 5n^3} < P
$$

Because $a_n < P \Leftrightarrow -a_n > -P$, we can multiply by $-1$, to avoid negative dominant terms:

$$
\frac{n^4 - 5n^3 + 8n + 3}{5n^3 + 3n^2 - 7} > -P
$$

Find order preserving lower bound (OPL) for $\frac{n^4 - 5n^3 + 8n + 3}{5n^3 + 3n^2 - 7}$:

$$
\frac{n^4 - 5n^3 + 8n + 3}{5n^3 + 3n^2 - 7} > \frac{\frac{1}{2}n^4 + \frac{1}{2}n^3(n - 10)}{8n^3} > \frac{n}{16} \text{ where } n \geq 10
$$

$$
\frac{n}{16} > -P\ \Leftrightarrow\ n > -16P \text{ where } n \geq 10
$$

Now we can fix $N$, and since $N \in \mathbb{N}$ we need to take the integer part of $-16P$.

$$
N := \left\lceil -16P \right\rceil + 10
$$

So

$$
\forall P < 0\ \exists N := \left\lceil -16P \right\rceil + 10\ \forall n \in \mathbb{N}\ n \geq N : \frac{n^4 - 5n^3 + 8n + 3}{7 - 3n^2 - 5n^3} < P
$$
