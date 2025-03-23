---
title: '[A2] Function analysis'
---

# Function analysis

## General steps

1. Initial (domain, oddness/evenness, etc)
2. Intersections with the axes
3. Monotonicity and extreme values
4. Convexity and inflection points
5. Limits and asymptotes
6. Information table
7. Graph

## Example 1

Discuss and sketch the graph of the following function

$$
f(x) = 2 - 2x^2 - x^3 (x \in \mathbb{R})
$$

### Solution

1. Domain of the function

$$
D_f = \mathbb{R}
$$

2. Intersections with the axes

$$
f(0) = 2,\ f(x) = 0 ?
$$

Easy to see that

If $f(0) = 2$ and $f(1) = -1 \implies$ by $IVT$ the function intersects the $x$-axis in the interval $(0, 1)$.

3. Monotonicity and extreme values

$$
f'(x) = -4x - 3x^2 = -x(4 + 3x) \implies x = 0 \text{ and } x = -\frac{4}{3}
$$

So

$$
\begin{aligned}
x < -\frac{4}{3}&: f'(x) < 0\\
x > 0&: f'(x) < 0\\
x \in (-\frac{4}{3}, 0)&: f'(x) > 0
\end{aligned}
$$

4. Concavity and inflection points

$$
f''(x) = -4 - 6x = -2(2 + 3x) \implies x = -\frac{2}{3}
$$

So

$$
\begin{aligned}
x < -\frac{2}{3}&: f''(x) > 0\\
x > -\frac{2}{3}&: f''(x) < 0
\end{aligned}
$$

Therefore $x = -\frac{2}{3}$ is an inflection point, and the function is concave up on $(-\infty, -\frac{2}{3})$ and concave down on $(-\frac{2}{3}, \infty)$.

5. Limits and asymptotes

$$
\lim_{x \to \infty} f(x) = -\infty
$$

$$
\lim_{x \to -\infty} f(x) = +\infty
$$

6. Information table

| Interval  | $(-\infty, -\frac{4}{3})$ | $(-\frac{4}{3}, -\frac{2}{3})$ | $(-\frac{2}{3}, 0)$ | $(0, \infty)$ |
| --------- | ------------------------- | ------------------------------ | ------------------- | ------------- |
| $f'(x)$   | $-$                       | $-$                            | $+$                 | $-$           |
| $f''(x)$  | $+$                       | $+$                            | $-$                 | $-$           |
| $f(x)$    | $\searrow$                | $\searrow$                     | $\nearrow$          | $\searrow$    |
| convexity | $\cup$                    | $\cup$                         | $\cap$              | $\cap$        |

7. Graph

TODO: make markdown render functions :\

```graph
{
  "title": "f(x) = 2 - 2x^2 - x^3",
  "x-axis": true,
  "y-axis": true,
  "x-min": -3,
  "x-max": 3,
  "y-min": -3,
  "y-max": 3,
  "data": [
    {
      "fn": "2 - 2x^2 - x^3",
      "color": "red"
    }
  ]
}
```
