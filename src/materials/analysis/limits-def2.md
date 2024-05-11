---
title: '[A-1] Proving limits by definition II'
---

# Proving limits by definition II

## Limit of functions

Limit of functions is a concept that is used to describe the behavior of a function as it approaches a certain point.

### General definition

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D_f, 0 < |x - a| < \delta: |f(x) - L| < \varepsilon
$$

Which means that for every positive number $\varepsilon$, there is a positive number $\delta$ such that for every $x$ in the domain of $f$, if $0 < |x - a| < \delta$, then $|f(x) - L| < \varepsilon$.

#### Specific cases

| $A = \lim_a f$     | $A \in \mathbb{R}$                | $A = +\infty$                                         | $A = -\infty$                                  |
| ------------------ | --------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| $a \in \mathbb{R}$ | finite limit at a finite point    | positively infinite limit at a finite point           | negatively infinite limit at a finite point    |
| $a = +\infty$      | finite limit at positive infinity | positively infinite limit at positive infinity        | negatively infinite limit at positive infinity |
| $a = -\infty$      | finite limit at negative infinity | positively infinite limit at positive infinity oxygen | negatively infinite limit at negative infinity |

For each of these cases, the definition of the limit is the same, but the way we write it is different.

## Limits at finite points

#### Finite limit at a finite point

$$
\lim_{x \to a} f(x) = A
$$

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D_f, 0 < |x - a| < \delta: |f(x) - A| < \varepsilon
$$

#### Positively infinite limit at a finite point

$$
\lim_{x \to a} f(x) = +\infty
$$

$$
\forall P > 0\ \exists \delta > 0\ \forall x \in D_f, 0 < |x - a| < \delta: f(x) > P
$$

#### Negatively infinite limit at a finite point

$$
\lim_{x \to a} f(x) = -\infty
$$

$$
\forall P < 0\ \exists \delta > 0\ \forall x \in D_f, 0 < |x - a| < \delta: f(x) < P
$$

## Limits at positive infinity

#### Finite limit at positive infinity

$$
\lim_{x \to +\infty} f(x) = A
$$

$$
\forall \varepsilon > 0\ \exists R > 0\ \forall x \in D_f, x > R: |f(x) - A| < \varepsilon
$$

#### Positively infinite limit at positive infinity

$$
\lim_{x \to +\infty} f(x) = +\infty
$$

$$
\forall P > 0\ \exists R > 0\ \forall x \in D_f, x > R: f(x) > P
$$

#### Negatively infinite limit at positive infinity

$$
\lim_{x \to +\infty} f(x) = -\infty
$$

$$
\forall P < 0\ \exists R > 0\ \forall x \in D_f, x > R: f(x) < P
$$

## Limits at negative infinity

#### Finite limit at negative infinity

$$
\lim_{x \to -\infty} f(x) = A
$$

$$
\forall \varepsilon > 0\ \exists R < 0\ \forall x \in D_f, x < R: |f(x) - A| < \varepsilon
$$

#### Positively infinite limit at negative infinity

$$
\lim_{x \to -\infty} f(x) = +\infty
$$

$$
\forall P > 0\ \exists R < 0\ \forall x \in D_f, x < R: f(x) > P
$$

#### Negatively infinite limit at negative infinity

$$
\lim_{x \to -\infty} f(x) = -\infty
$$

$$
\forall P < 0\ \exists R < 0\ \forall x \in D_f, x < R: f(x) < P
$$

## One-sided limits

One-sided limits are used to describe the behavior of a function as it approaches a certain finite point from one side.

Some functions may have different limits from the left and from the right, depending on whether the function is continuous at that point.

#### Example

![](/assets/limit-one-sided-example.png)
<br>

#### Regular limit

$$
\exists \lim_{x \to a} f = A \Leftrightarrow \exists \lim_{x \to a^{+-}} f = A \Leftrightarrow \lim_{x \to a^-} f = \lim_{x \to a^+} f = A
$$

#### One-sided limit

$$
\lim_{x \to a^-} f = A \neq \lim_{x \to a^+} f = B
$$

## Example 1 with extra commentary

Prove by the definition of the limit that:

$$
\lim_{x \to 0} \frac{1}{1 + x} = 1
$$

$$
f(x) = \frac{1}{1 + x}
$$

$$
D_f = \mathbb{R} \setminus \{-1\}
$$

By definition

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D_f = \mathbb{R} \setminus \{-1\}, 0 < |x - 0| < \delta: \left|\frac{1}{1 + x} - 1\right| < \varepsilon
$$

We need to prove that for every positive number $\varepsilon$, there exists such a positive number $\delta$ that if the distance between $x$ and $0$ is less than $\delta$, then the distance between $f(x)$ and $1$ is less than $\varepsilon$.

#### Proof

Fix $\varepsilon > 0$.

Find $\delta > 0$ such that $\left|\frac{1}{1 + x} - 1\right| < \varepsilon$ when $0 < |x - 0| < \delta$.

So we have this implication

$$
0 < |x - 0| < \delta \implies \left|\frac{1}{1 + x} - 1\right| < \varepsilon
$$

To figure out what $\delta$ we need, let's try to transform $\varepsilon$ inequality so that $|x - 0|$ is factored out, then we would see the connection between $\delta$ and $\varepsilon$.

$$
\left|\frac{1}{1 + x} - 1\right| = \left|\frac{1 - 1 - x}{1 + x}\right| = \left|\frac{-x}{1 + x}\right| = |x| \cdot \frac{1}{|1 + x|} < \varepsilon
$$

Now we can see that essentially, what we want to achieve is

$$
|x| \cdot \frac{1}{|1 + x|} < \delta \cdot \underbrace{\frac{1}{|1 + x|}}_{g(x)}
$$

But we cannot make $\delta$ be dependant on $x$, since delta is always a function of $\varepsilon$ only.

Therefore, if we can find some constant $C$ such that $\frac{1}{|1 + x|} < C$ then $\delta \leq \frac{\varepsilon}{C}$ would work.

Since $\delta$ is going to be close to $0$ (since $x \to 0$), $\frac{1}{|1 + x|}$ cannot be arbitrarily large, so we can find such $C$.

So let's put an arbitrary small restriction on $\delta$ and say that $\delta \leq \frac{1}{2}$. (We would usually choose $1$ for simplicity, but since $-1$ is not in the domain, let's take a smaller number).

Now if $\delta \leq \frac{1}{2}$, then

$$
0 < |x - 0| < \delta \implies 0 < |x| < \frac{1}{2}
$$

Or in another form

$$
-\frac{1}{2} < x < \frac{1}{2}
$$

Now let's make this inequality work for $g(x) = \frac{1}{|1 + x|}$.

$$
-\frac{1}{2} < x < \frac{1}{2} \implies \frac{1}{2} < 1 + x < \frac{3}{2} \implies
$$

$$
\implies \frac{1}{2} < |1 + x| < \frac{3}{2} \implies \frac{2}{3} < \frac{1}{|1 + x|} < 2
$$

So within our constraints, we found that $g(x)$ is at most $2$.

Then

$$
2 \cdot |x| < \varepsilon \implies |x| < \frac{\varepsilon}{2}
$$

We need delta to satisfy two conditions:

- $\delta \leq \frac{1}{2}$
- $\delta \leq \frac{\varepsilon}{2}$

So we can just choose $\delta = \min\left\{\frac{1}{2}, \frac{\varepsilon}{2}\right\}$.

And now we can finally state that

$$
\forall \varepsilon > 0\ \exists \delta = \min\left\{\frac{1}{2}, \frac{\varepsilon}{2}\right\}\ \forall x \in D_f = \mathbb{R} \setminus \{-1\}, 0 < |x - 0| < \delta: \left|\frac{1}{1 + x} - 1\right| < 2 \cdot |x - 0| \leq \varepsilon
$$

Or in short

$$
\delta = \min\left\{\frac{1}{2}, \frac{\varepsilon}{2}\right\} \implies \left|\frac{1}{1 + x} - 1\right| < \varepsilon \quad \text{when} \quad 0 < |x - 0| < \delta
$$

## Example 2

Prove by the definition of the limit that:

$$
\lim_{x \to 1} \frac{x^4 + 2x^2 - 3}{x^2 - 3x + 2} = -8
$$

$$
f(x) = \frac{x^4 + 2x^2 - 3}{x^2 - 3x + 2} = \frac{x^4 + 2x^2 - 3}{(x - 1)(x - 2)}
$$

$$
D_f = \mathbb{R} \setminus \{1, 2\}
$$

Note that $x \to 1$, numerator might also have a factor of $(x - 1)$, try to divide by it using Horner's method.

$$
f(x) = \frac{x^4 + 2x^2 - 3}{(x - 1)(x - 2)} = \frac{\cancel{(x - 1)}(x^3 + x^2 + 3x + 3)}{\cancel{(x - 1)}(x - 2)} = \frac{x^3 + x^2 + 3x + 3}{x - 2}
$$

By definition

$$
\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D_f = \mathbb{R} \setminus \{1, 2\}, 0 < |x - 1| < \delta: \left|\frac{x^3 + x^2 + 3x + 3}{x - 2} + 8\right| < \varepsilon
$$

Transform $\varepsilon$ inequality

$$
\left|\frac{x^3 + x^2 + 3x + 3}{x - 2} + 8\right| = \left|\frac{x^3 + x^2 + 3x + 3 + 8x - 16}{x - 2}\right| =
$$

$$
= \left|\frac{x^3 + x^2 + 11x - 13}{x - 2}\right| = |x - 1| \cdot \frac{|x^2 + 2x + 13|}{|x - 2|} < \varepsilon
$$

$$
g(x) = \frac{|x^2 + 2x + 13|}{|x - 2|}
$$

Assume that $0 < |x - 1| < \frac{1}{2}$.

$$
-\frac{1}{2} < |x - 1| < \frac{1}{2} \implies \frac{1}{2} < x < \frac{3}{2}
$$

Then for denominator of $g(x)$

$$
-\frac{3}{2} < x - 2 < -\frac{1}{2} \implies \frac{1}{2} < |x - 2| < \frac{3}{2} \implies
$$

$$
\implies \frac{2}{3} < \frac{1}{|x - 2|} < 2
$$

Then for numerator of $g(x)$

$$
x^2 + 2x + 13 < \left(\frac{3}{2}\right)^2 + 2 \cdot \frac{3}{2} + 13 = \frac{9}{4} + 3 + 13 = 18 + \frac{1}{4} < 19
$$

So

$$
|x - 1| \cdot \frac{|x^2 + 2x + 13|}{|x - 2|} < |x - 1| \cdot 19 \cdot 2 = 38 \cdot |x - 1|
$$

$$
38 \cdot |x - 1| < \varepsilon \implies |x - 1| < \frac{\varepsilon}{38}
$$

So we can choose $\delta = \min\left\{\frac{1}{2}, \frac{\varepsilon}{38}\right\}$.

$$
\forall \varepsilon > 0\ \exists \delta = \min\left\{\frac{1}{2}, \frac{\varepsilon}{38}\right\}\ \forall x \in D_f = \mathbb{R} \setminus \{1, 2\},
$$

$$
0 < |x - 1| < \delta: \left|\frac{x^3 + x^2 + 3x + 3}{x - 2} + 8\right| < 38 \cdot |x - 1| < \varepsilon
$$
