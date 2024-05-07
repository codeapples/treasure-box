---
title: '[A-1] Limits of recursive sequences'
---

# Limits of recursive sequences

## General steps

In order to prove that a recursive sequence $(a_n)$ converges to a limit $A$, we need to show that:

1. $(a_n)$ is monotonically increasing or decreasing.
2. $(a_n)$ is bounded.
3. Find the limit $A$.

## Example 1

Determine the limit of the recursive sequence

$$
a_1 = 0 \quad a_{n+1} = \sqrt{2 + a_n}
$$

Is $a_2 > a_1$?

$$
a_2 = \sqrt{2 + a_1} = \sqrt{2}
$$

$a_2 > a_1 \quad \checkmark$

Is $(a_n)$ monotonically increasing? Proving by induction:

1. $n = 1 \implies a_2 > a_1$
2. Assume that $a_{n+1} > a_n$ for some $n \in \mathbb{N}^+$
3. Need to prove that $a_{n+2} > a_{n+1}$

$$
\sqrt{2 + a_{n+1}} > \sqrt{2 + a_n} \Leftrightarrow 2 + a_{n+1} > 2 + a_n \Leftrightarrow
$$

$$
\Leftrightarrow a_{n+1} > a_n
$$

Which is what we assumed.

Therefore $(a_n)$ is monotonically increasing. $\checkmark$

Is $(a_n)$ bounded?

$$
\forall n \in \mathbb{N}\ a_n \geq 0 = a_1
$$

$$
\min(a_n) = 0
$$

Therefore $(a_n)$ is bounded from below.

Is $(a_n)$ bounded from above?

Possible limits?

Assume that $(a_n)$ converges to some limit $A$.

$$
\lim_{n \to \infty} a_n = A
$$

$$
\lim_{n \to \infty} a_{n+1} = A
$$

$$
\lim_{n \to \infty} \sqrt{2 + a_n} = A
$$

$$
\lim_{n \to \infty} \sqrt{2 + \lim_{n \to \infty} a_n} = A
$$

$$
\sqrt{2 + A} = A \Leftrightarrow A^2 - A - 2 = 0
$$

$$
A = 2 \lor A = -1
$$

But $A = -1$ is not possible because $a_n \geq 0$ and sequence is monotonically increasing.

Prove that $A = 2$ is the upper bound by induction:

1. $n = 1 \implies a_1 = 0 < 2$
2. Assume that $a_n < 2$ for some $n \in \mathbb{N}^+$
3. Need to prove that for $(n + 1) \implies a_{n+1} < 2 \Leftrightarrow \sqrt{2 + a_n} < 2$

$$
2 + a_n < 4
$$

$$
a_n < 2
$$

Which is what we assumed.

Therefore $(a_n)$ is bounded from above. $\checkmark$

So $(a_n)$ is monotonically increasing $\checkmark$ and bounded $\checkmark$, therefore $(a_n)$ is convergent.

$$
\lim_{n \to \infty} a_n = 2
$$

## Example 2

Determine the limit of the recursive sequence

$$
a_1 = \frac{1}{4} \quad a_{n+1} = 1 - \sqrt{1 - a_n}
$$

Is $a_2 > a_1$?

$$
a_2 = 1 - \sqrt{1 - a_1} = 1 - \sqrt{1 - \frac{1}{4}} = 1 - \frac{\sqrt{3}}{2} = \frac{2 - \sqrt{3}}{2}
$$

$$
\frac{1}{4} < \frac{2 - \sqrt{3}}{2} \Leftrightarrow 1 < 4 - 2\sqrt{3} \Leftrightarrow 2\sqrt{3} < 3 \Leftrightarrow 12 < 9
$$

Therefore $a_2 < a_1$.

Is $(a_n)$ monotonically decreasing? Proving by induction:

1. $n = 1 \implies a_1 > a_2$
2. Assume that $a_n > a_{n+1}$ for some $n \in \mathbb{N}^+$
3. Need to prove that $a_{n+1} > a_{n+2}$

$$
1 - \sqrt{1 - a_{n}} > 1 - \sqrt{1 - a_{n + 1}} \Leftrightarrow \sqrt{1 - a_n} < \sqrt{1 - a_{n+1}} \Leftrightarrow
$$

$$
\Leftrightarrow 1 - a_n < 1 - a_{n+1} \Leftrightarrow a_n > a_{n+1}
$$

Which is what we assumed.

Therefore $(a_n)$ is monotonically decreasing. $\checkmark$

Is $(a_n)$ bounded?

$$
\forall n \in \mathbb{N} \quad a_n \leq \frac{1}{4}
$$

$$
\max(a_n) = \frac{1}{4}
$$

Therefore $(a_n)$ is bounded from above.

Is $(a_n)$ bounded from below?

Possible limits?

Assume that $(a_n)$ converges to some limit $A$.

$$
\lim_{n \to \infty} a_n = A
$$

$$
\lim_{n \to \infty} a_{n+1} = A
$$

$$
\lim_{n \to \infty} 1 - \sqrt{1 - a_n} = A
$$

$$
1 - \sqrt{1 - A} = A \Leftrightarrow 1 - A = \sqrt{1 - A} \Leftrightarrow (1 - A)^2 - (1 - A) = 0
$$

$$
(1 - A)(1 - A - 1) = 0 \Leftrightarrow A = 1 \lor A = 0
$$

But $A = 1$ is not possible because $a_n \leq \frac{1}{4}$ and sequence is monotonically decreasing.

Prove that $A = 0$ is the lower bound by induction:

1. $n = 1 \implies a_1 = \frac{1}{4} > 0$
2. Assume that $a_n > 0$ for some $n \in \mathbb{N}^+$
3. Need to prove that for $(n + 1) \implies a_{n+1} > 0 \Leftrightarrow 1 - \sqrt{1 - a_n} > 0$

$$
1 > \sqrt{1 - a_n} \Leftrightarrow 1 > 1 - a_n \Leftrightarrow a_n > 0
$$

Which is what we assumed.

Therefore $(a_n)$ is bounded from below. $\checkmark$

So $(a_n)$ is monotonically decreasing $\checkmark$ and bounded $\checkmark$, therefore $(a_n)$ is convergent.

$$
\lim_{n \to \infty} a_n = 0
$$
