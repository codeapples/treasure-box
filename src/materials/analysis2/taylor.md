---
title: '[A2] Taylor polynomials'
---

# Taylor polynomials

## Definition

Let $f \in \mathbb{R} \to \mathbb{R},\ f \in D^n(a)$.

The polynomial

$$
\begin{aligned}
T_n(x) &= f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \ldots + \frac{f^{(n)}(a)}{n!}(x - a)^n =\\
&= \sum_{k = 0}^n \frac{f^{(k)}(a)}{k!}(x - a)^k \quad (x \in \mathbb{R})
\end{aligned}
$$

is called the $n$-th Taylor polynomial of $f$ at $a$.

## Taylor's formula

Let $I \subseteq \mathbb{R}$ be an open interval, $f : I \to \mathbb{R},\ f \in D^{n+1},\ a \in I$.

Then $\forall x \in I \setminus \{a\}$ there exists $\xi = \xi(x) \in (a, x)$ such that

$$
f(x) - T_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}
$$

The right-hand side of this equation is called Lagrangian remainder term.

## Example 1

Use Taylor polynomials for writing the polynomial

$$
f(x) = (1 + 2x)^3
$$

by the powers of

$$
a.\ x + 1 \quad b.\ x - \frac{1}{2} \quad c.\ x + \frac{1}{2}
$$

### Solution

$$
\begin{aligned}
f'(x) &= 3(1 + 2x)^2 \cdot 2 = 6(1 + 2x)^2\\
f''(x) &= 6 \cdot 2(1 + 2x) \cdot 2 = 24(1 + 2x)\\
f'''(x) &= 24 \cdot 2 = 48\\
f^{(4)}(x) &= 0
\end{aligned}
$$

#### a.

$$
x - a = x + 1 \implies a = -1
$$

$$
\begin{aligned}
T_3(x) &= f(-1) + f'(-1)(x + 1) + \frac{f''(-1)}{2!}(x + 1)^2 + \frac{f'''(-1)}{3!}(x + 1)^3 =\\
&= (-1) + 6(x + 1) - 12(x + 1)^2 + 8(x + 1)^3
\end{aligned}
$$

#### b.

$$
x - a = x - \frac{1}{2} \implies a = \frac{1}{2}
$$

$$
\begin{aligned}
T_3(x) &= f(\frac{1}{2}) + f'(\frac{1}{2})(x - \frac{1}{2}) + \frac{f''(\frac{1}{2})}{2!}(x - \frac{1}{2})^2 + \frac{f'''(\frac{1}{2})}{3!}(x - \frac{1}{2})^3 =\\
&= 8 + 24(x - \frac{1}{2}) + 24(x - \frac{1}{2})^2 + 8(x - \frac{1}{2})^3
\end{aligned}
$$

#### c.

$$
x - a = x + \frac{1}{2} \implies a = -\frac{1}{2}
$$

$$
\begin{aligned}
T_3(x) &= f(-\frac{1}{2}) + f'(-\frac{1}{2})(x + \frac{1}{2}) + \frac{f''(-\frac{1}{2})}{2!}(x + \frac{1}{2})^2 + \frac{f'''(-\frac{1}{2})}{3!}(x + \frac{1}{2})^3 =\\
&= 0 + 0 + 0 + 8(x + \frac{1}{2})^3
\end{aligned}
$$
