---
title: "[A2] L'Hopital's rule"
---

# L'Hôpital's rule

## Theorem

Let $-\infty \leq a < b \leq +\infty$ and $f, g : (a, b) \to \mathbb{R},\ f, g \in C((a, b)),\ f, g \in D((a, b)),\ g'(x) \neq 0\ \forall x \in (a, b)$.

Suppose that

$$
\text{either }\lim_{a + 0} f(x) = \lim_{a + 0} g(x) = 0 \text{ or }\lim_{a + 0} f(x) = \lim_{a + 0} g(x) = \pm\infty
$$

$$
\text{and that } \exists \lim_{a + 0} \frac{f'(x)}{g'(x)} = A \in \overline{\mathbb{R}}
$$

Then

$$
\lim_{a + 0} \frac{f(x)}{g(x)} = \lim_{a + 0} \frac{f'(x)}{g'(x)}
$$
