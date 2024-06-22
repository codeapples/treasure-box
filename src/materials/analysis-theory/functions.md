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

## Transference principle for limits

The Transference Principle makes a contact between the limit of functions and the limit
of sequences.

### Theorem

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D'_f$ and $A \in \mathbb{\overline{R}}$. Then

$$
\lim_{x \to a} f = A \iff \forall (x_n) \in D_f \setminus \{a\}\ (n \in \mathbb{N}),\ \lim x_n = a : \lim f(x_n) = A
$$

A sequence $(x_n)$ with the properties

$$
x_n \in D_f \setminus \{a\},\ (n \in \mathbb{N}),\ \lim_{n \to \infty} x_n = a
$$

is called **allowed sequence** (allowed sequence of $f$ with respect to $a$).

## One-sided limits

In many cases the variable $x$ approaches the number $a \in \mathbb{R}$ only from one direction, namely

- $x \to a$, but $x < a$: $x$ approaches $a$ from the left-hand side. This case can be extended for $a = +\infty$, but it does not give any newness with respect to the common limit, because $+\infty$ can be approached only from the left.
- $x \to a$, but $x > a$: $x$ approaches $a$ from the right-hand side. This case can be extended for $a = -\infty$, but it does not give any newness with respect to the common limit, because $-\infty$ can be approached only from the right.

In these cases we speak about left-hand limits and right-hand limits respectively.
Their common names are: one-sided limits.

### Definition (right-hand limit)

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in \mathbb{\overline{R}}$, $-\infty < a < +\infty$. Suppose that $a$ is an accumulation point of the set $(a, +\infty) \cap D_f$ (we say that $a$ is right-hand accumulation point of $D_f$). Then the right-hand limit of $f$ at $a$ is denoted by $\lim_{x \to a^+} f$ and is defined as

$$
\lim_{x \to a^+} f = \lim_{x \to a} f_{|(a, +\infty) \cap D_f}
$$

### Definition (left-hand limit)

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in \mathbb{\overline{R}}$, $-\infty < a < +\infty$. Suppose that $a$ is an accumulation point of the set $(-\infty, a) \cap D_f$ (we say that $a$ is left-hand accumulation point of $D_f$). Then the left-hand limit of $f$ at $a$ is denoted by $\lim_{x \to a^-} f$ and is defined as

$$
\lim_{x \to a^-} f = \lim_{x \to a} f_{|(-\infty, a) \cap D_f}
$$

## Limits of monotone functions

### Definition (monotone functions)

Let $f \in \mathbb{R} \to \mathbb{R}$. We say that $f$ is

- **monotonically increasing** if

$$
\forall x_1, x_2 \in D_f,\ x_1 < x_2 : f(x_1) \leq f(x_2)
$$

- **strictly monotonically increasing** if

$$
\forall x_1, x_2 \in D_f,\ x_1 < x_2 : f(x_1) < f(x_2)
$$

- **monotonically decreasing** if

$$
\forall x_1, x_2 \in D_f,\ x_1 < x_2 : f(x_1) \geq f(x_2)
$$

- **strictly monotonically decreasing** if

$$
\forall x_1, x_2 \in D_f,\ x_1 < x_2 : f(x_1) > f(x_2)
$$

- **monotone** if it is monotonically increasing or monotonically decreasing
- **strictly monotone** if it is strictly monotonically increasing or strictly monotonically decreasing

### Theorem (one-sided limits of a monotonically increasing function)

Let $f \in \mathbb{R} \to \mathbb{R}$ be a monotonically increasing function and $a \in \mathbb{\overline{R}}$.

- If $a < +\infty$ and $a \in (a, +\infty) \cap D_f$, then

$$
\lim_{x \to a^+} f = \inf f[(a, +\infty) \cap D_f] = inf\ \{ f(x) \in \mathbb{R} \mid x \in D_f,\ x > a \}
$$

- If $a > -\infty$ and $a \in (-\infty, a) \cap D_f$, then

$$
\lim_{x \to a^-} f = \sup f[(-\infty, a) \cap D_f] = sup\ \{ f(x) \in \mathbb{R} \mid x \in D_f,\ x < a \}
$$

## Limits of Analytical functions ($x \to 0$)

### Limit of $\frac{sin(x)}{x}$

$$
\lim_{x \to 0} \frac{sin(x)}{x} = 1
$$

### Limit of $\frac{1 - cos(x)}{x}$

$$
\lim_{x \to 0} \frac{1 - cos(x)}{x^2} = \frac{1}{2}
$$

### Limit of $\frac{e^x - 1}{x}$

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = 1
$$

## Continuity of functions

### Definition (continuity at a point) using neighborhoods

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D_f$. We say that $f$ is continuous in point $a$ if

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in B(a, \delta) \cap D_f : f(x) \in B(f(a), \varepsilon)
$$

### Definition (continuity at a point) using inequalities

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D_f$. We say that $f$ is continuous in point $a$ if

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D_f,\ 0 < |x - a| < \delta : |f(x) - f(a)| < \varepsilon
$$

### Remarks

- We denote the set of functions that are continuous in point $a$ by $C(a)$.
- If $a$ is an isolated point of $D_f$, then $f$ is continuous in point $a$.
- If $a$ is an accumulation point of $D_f$, then $f$ is continuous in point $a$ if and only if

$$
\lim_{x \to a} f(x) = f(a)
$$

### Definition (continuous function)

Let $f \in \mathbb{R} \to \mathbb{R}$. We say that $f$ is continuous if it is continuous at every point of it's domain, that is

$$
\forall a \in D_f : f \in C(a)
$$

where $C(a)$ is the set of functions that are continuous in point $a$.

### Theorem (transference principle for continuity)

$$
f \in C(a) \iff \forall x_n \in D_f\ (n \in \mathbb{N}),\ \lim x_n = a : \lim f(x_n) = f(a)
$$

## Discontinuity of functions

### Definition (discontinuity at a point)

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D_f$. We say that $f$ is discontinuous in point $a$ if $f \notin C(a)$.

### Types of discontinuity

Let $f \in \mathbb{R} \to \mathbb{R}$, $a \in D_f$. We say that $a$ is a point of

- **removable discontinuity** $\iff \exists \lim_{x \to a} f$, but $\lim_{x \to a} f \neq f(a)$
- **jump discontinuity** $\iff \exists \lim_{x \to a^+} f$ and $\exists \lim_{x \to a^-} f$, but $\lim_{x \to a^+} f \neq \lim_{x \to a^-} f$
- **discontinuity of second kind** $\iff \nexists \lim_{x \to a^-} f$ or $\nexists \lim_{x \to a^+} f$

## Compact sets

Via the concept of neighborhood we can define important classes of points in connection
of a set.

### Definition

Let $\emptyset \neq H \subset R$, $x_0 \in \mathbb{R}$. Then

- $x_0$ is called an **interior point** of $H$ if

$$
\exists r > 0 : B(x_0, r) \subseteq H
$$

- $x_0$ is called an **exterior point** of $H$ if

$$
\exists r > 0 : B(x_0, r) \cap H = \emptyset \quad \text{or} \quad B(x_0, r) \subseteq \overline{H}
$$

where $\overline{H}$ is the complement of $H$ that is $\overline{H} = \mathbb{R} \setminus H$.

- $x_0$ is called a **boundary point** of $H$ if

$$
\forall r > 0 : B(x_0, r) \cap H \neq \emptyset \quad \text{and} \quad B(x_0, r) \cap \overline{H} \neq \emptyset
$$

#### Remark

Every interior point lies in $H$, every exterior point lies in $\overline{H}$. But a boundary point can belong to $H$ or to its complement.

### Definition ($int H$)

The set of interior points of $H$ is denoted by $int H$ and is called the **interior** of $H$.

$$
int H = \{ x_0 \in \mathbb{R} \mid \exists r > 0 : B(x_0, r) \subseteq H \} \subseteq H
$$

### Definition ($ext H$)

The set of exterior points of $H$ is denoted by $ext H$ and is called the **exterior** of $H$.

$$
ext H = \{ x_0 \in \mathbb{R} \mid \exists r > 0 : B(x_0, r) \subseteq \overline{H} \} \subseteq \overline{H}
$$

### Definition ($\partial H$)

The set of boundary points of $H$ is denoted by $\partial H$ and is called the **boundary** of $H$.

$$
\partial H = \{ x_0 \in \mathbb{R} \mid \forall r > 0 : B(x_0, r) \cap H \neq \emptyset \quad \text{and} \quad B(x_0, r) \cap \overline{H} \neq \emptyset \} \subset \mathbb{R}
$$

### Remark

$$
\mathbb{R} = int H \cup \partial H \cup ext H \quad \text{(union of disjoint sets)}
$$

### Definition (open and closed sets)

Let $H \subseteq \mathbb{R}$. We say that $H$ is

- **open set** $\overset{df}\iff \partial H \subseteq \overline{H}$
- **closed set** $\overset{df}\iff \partial H \subseteq H$

So, $H$ is open if and only if it does not contain any boundary point and is closed if and only if it contains all of its boundary points.

$\emptyset$ and $\mathbb{R}$ are open and closed sets at the same time. There is no other set in $\mathbb{R}$ that is open and closed at the same time.

- $H$ is open $\iff \overline{H}$ is closed, $H$ is closed $\iff$ $\overline{H}$ is open
- $H$ is open $\iff$ $H \subseteq intH \iff H = int H$

### Theorem (characterization of closed sets)

Let $\emptyset \neq H \subseteq \mathbb{R}$. Then $H$ is closed if and only if

$$
\forall (x_n) \in H\ (n \in \mathbb{N}) \text{ convergent sequence} : \lim x_n \in H
$$

### Definition (compact set)

Let $\emptyset \neq H \subseteq \mathbb{R}$. We say that $H$ is a **compact set** if

$$
\begin{aligned}
&\forall (x_n) \in H\ (n \in \mathbb{N}) \text{ sequence} \\
&\exists (x_{\nu_n}) \text{ subsequence} : \\
&(\nu_n) \text{ is convergent and } \lim_{n \to \infty} x_{\nu_n} \in H
\end{aligned}
$$

The $\emptyset$ set is compact by definition.

### Theorem (connection between compact sets, closed sets and bounded sets)

Let $\emptyset \neq H \subseteq \mathbb{R}$. Then $H$ is compact if and only if it is closed and bounded.

### Theorem (min-max elements of a compact set)

Let $\emptyset \neq H \subseteq \mathbb{R}$ be a compact set. Then $H$ has a minimal element $\min H$ and a maximal element $\max H$.

## Continuous functions on compact sets

### Theorem (compactness of the image)

Let $f \in \mathbb{R} \to \mathbb{R}$ be a continuous function $(f \in C)$ and suppose that $D_f$ is compact. Then $R_f$ is compact.

### Theorem (Weierstrass theorem)

Let $f \in \mathbb{R} \to \mathbb{R}$, $(f \in C)$, $D_f$ compact. Then $\exists \min f$ and $\exists \max f$.

### Definition (uniform continuity)

Let $f \in \mathbb{R} \to \mathbb{R}$. We say that $f$ is uniformly continuous if

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x, y \in D_f, |x - y| < \delta : |f(x) - f(y)| < \varepsilon
$$

Every uniformly continuous function is continuous, but not every continuous function is uniformly continuous.

#### Example

The function $f(x) = x^2$ is continuous, but not uniformly continuous.

### Theorem (Heine-Cantor theorem)

Let $f \in \mathbb{R} \to \mathbb{R}$ be a continuous function $(f \in C)$ and suppose that $D_f$ is compact. Then $f$ is uniformly continuous.

## Continuous functions on intervals

### Theorem (intermediate value theorem)

Let $f : [a, b] \to \mathbb{R}$ be a continuous function $(f \in C)$. Suppose that $f(a) \neq f(b)$, for example $f(a) < f(b)$. Then

$$
\forall c \in (f(a), f(b))\ \exists \xi \in (a, b) : f(\xi) = c
$$

### Theorem (continuous image of an interval is interval)

Let $f \in \mathbb{R} \to \mathbb{R}$ be a continuous function $(f \in C)$ and suppose that $D_f$ is an interval. Then $R_f$ is an interval.

### Theorem (continuous and monotonically increasing function on interval)

Let $I \subseteq \mathbb{R}$ be an interval with starting point $a$ and with terminal point $b$. Let $f : I \to \mathbb{R}$ be a continuous function $(f \in C)$. Suppose that $f$ is monotonically increasing. Then the starting point of $R_f$ is $\lim_{x \to a^+} f$ and the terminal point of $R_f$ is $\lim_{x \to b^-} f$.

## The real exponential and logarithm function

### Definition (logarithm function)

The inverse function of the real exponential function is called the **natural logarithm function** and is denoted by $\ln$. So

$$
\ln := exp^{-1}
$$

From this definition one can simply deduce the following basic properties of
the natural logarithmic function:

- $D_{\ln} = R_{\exp} = (0, +\infty)$
- $R_{\ln} = D_{\exp} = \mathbb{R}$
- $\ln(1) = 0$
- $\ln(xy) = \ln(x) + \ln(y)$

### Definition ($a^x$)

Let $a > 0$, $a \neq 1$. We define

$$
\forall r \in \mathbb{Q}: \exp_a r = a^r
$$

### Definition ($\log_a x$)

Let $a > 0$, $a \neq 1$. We define

$$
\log_a := \exp_a^{-1}
$$

### Definition ($x^{\mu}$)

$$
x^{\mu} = \exp_x \mu = \exp (\mu \cdot \ln x) \quad (x \in \mathbb{R}, x > 0)
$$
