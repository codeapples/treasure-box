---
title: '[A1-T] Functions'
---

# Functions

## Limits of functions

### Neighborhoods

- The neighborhood of a finite number:

$$
B(a, r) = \{ x \in \mathbb{R} \mid |x - a| < r \} = (a - r, a + r) \subset \mathbb{R}
$$

- The neighborhood of $+\infty$:

$$
B(+\infty, r) = \{ x \in \mathbb{R} \mid x > \frac{1}{r} \} = (\frac{1}{r}, +\infty) \subset \mathbb{R}
$$

- The neighborhood of $-\infty$:

$$
B(-\infty, r) = \{ x \in \mathbb{R} \mid x < -\frac{1}{r} \} = (-\infty, -\frac{1}{r}) \subset \mathbb{R}
$$

### Accumulation point and Isolated point

Let $\emptyset \neq H \subseteq \mathbb{R}$ and $a \in \mathbb{\overline{R}}$. The point $a$ is called an accumulation point of $H$ if

$$
\forall r > 0 : (B(a, r) \setminus \{a\}) \cap H \neq \emptyset
$$

The set of all accumulation points of $H$ is denoted by $H'$, that is

$$
H' = \{ a \in \mathbb{R} \mid a \text{ is an accumulation point of } H \}
$$

The points of $H \setminus H'$ are called isolated points of $H$.

### Definition using neighborhoods (Limit of a function)

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D'_f$. We say that $f$ has a limit in point $a$ if

$$
\exists A \in \mathbb{\overline{R}}\ \forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in (B(a, \delta) \setminus \{a\}) \cap D_f : f(x) \in B(A, \varepsilon)
$$

In this case, we write

$$
\lim_{x \to a} f = A
$$

Thus the fact $\lim_{x \to a} f = A$ can be expressed with neighborhood as

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in (B(a, \delta) \setminus \{a\}) \cap D_f : f(x) \in B(A, \varepsilon)
$$

### Definition using inequalities (Limit of a function)

- Finite limit at a finite point:

$$
\lim_{x \to a} f = A \iff \forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D_f,\ 0 < |x - a| < \delta : |f(x) - A| < \varepsilon
$$

- $+\infty$ limit at a finite point:

$$
\lim_{x \to a} f = +\infty \iff \forall P > 0\ \exists \delta > 0\ \forall x \in D_f,\ 0 < |x - a| < \delta : f(x) > P
$$

- $-\infty$ limit at a finite point:

$$
\lim_{x \to a} f = -\infty \iff \forall P < 0\ \exists \delta > 0\ \forall x \in D_f,\ 0 < |x - a| < \delta : f(x) < P
$$

- Finite limit at $+\infty$:

$$
\lim_{x \to +\infty} f = A \iff \forall \varepsilon > 0\ \exists R > 0\ \forall x \in D_f,\ x > R : |f(x) - A| < \varepsilon
$$

- $+\infty$ limit at $+\infty$:

$$
\lim_{x \to +\infty} f = +\infty \iff \forall P > 0\ \exists R > 0\ \forall x \in D_f,\ x > R : f(x) > P
$$

- $-\infty$ limit at $+\infty$:

$$
\lim_{x \to +\infty} f = -\infty \iff \forall P < 0\ \exists R > 0\ \forall x \in D_f,\ x > R : f(x) < P
$$

- Finite limit at $-\infty$:

$$
\lim_{x \to -\infty} f = A \iff \forall \varepsilon > 0\ \exists R < 0\ \forall x \in D_f,\ x < R : |f(x) - A| < \varepsilon
$$

- $+\infty$ limit at $-\infty$:

$$
\lim_{x \to -\infty} f = +\infty \iff \forall P > 0\ \exists R < 0\ \forall x \in D_f,\ x < R : f(x) > P
$$

- $-\infty$ limit at $-\infty$:

$$
\lim_{x \to -\infty} f = -\infty \iff \forall P < 0\ \exists R < 0\ \forall x \in D_f,\ x < R : f(x) < P
$$
