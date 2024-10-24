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

## Example 2

Let

$$
f(x) = \ln(1 + x) \quad (x > -1)
$$

$(a)$ Find the second Taylor polynomial of $f$ at $a = 0$.

$(b)$ Estimate the error of the approximation of $f(x) \approx T_2(x)$ for $x > 0$ and for $-1 < x < 0$.

$(c)$ Approximate $\ln 2$ by means of $T_2(1)$, and estimate the error.

### Solution

$(a)$

$$
\begin{aligned}
f'(x) &= \frac{1}{1 + x} \implies f'(0) = 1\\
f''(x) &= -\frac{1}{(1 + x)^2} \implies f''(0) = -1\\
f'''(x) &= \frac{2}{(1 + x)^3} \implies f'''(c) = \frac{2}{(1 + c)^3}
\end{aligned}
$$

$$
\begin{aligned}
T_2(x) &= f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 =\\
&= 0 + x - \frac{x^2}{2} = x - \frac{1}{2} x^2 \quad (x \in \mathbb{R})
\end{aligned}
$$

$(b)$

$$
|f(x) - T_2(x)| = \left|\frac{f'''(c)}{3!}x^3\right| = \frac{1}{6} \cdot \frac{2}{|(1 + c)^3|}|x|^3
$$

With $c$ between $0$ and $x$.

So if $x > 0 \implies 0 < c < x$

$$
|f(x) - T_2(x)| \leq \frac{1}{3} \cdot \frac{1}{(1 + 0)^3} \cdot |x|^3 = \frac{1}{3}x^3
$$

If $-1 < x < c < 0$

$$
|f(x) - T_2(x)| \leq \frac{1}{3} \cdot \frac{1}{(\underbrace{1 + x}_{+})^3} \cdot \overbrace{|x|^3}^{< 1} < \frac{1}{3(1 + x)^3}
$$

$(c)$

$$
\ln 2 = \ln(1 + 1) \implies x = 1
$$

$$
\ln 2 = f(1) \approx T_2(1) = 1 - \frac{1}{2} = \frac{1}{2}
$$

To estimate error let $a = 0,\ x = 1 \implies 0 < c < 1$

$$
|f(x) - T_2(x)| = \frac{1}{6} \cdot \frac{2}{(1 + c)^3} \cdot 1^3 = \frac{1}{3(1 + c)^3}
$$

$$
\frac{1}{6} \cdot \frac{2}{(1 + c)^3} \leq \frac{1}{6} \cdot \frac{2}{(1 + 0)^3} = \frac{1}{3}
$$
