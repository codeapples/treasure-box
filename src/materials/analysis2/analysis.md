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

If $f(-1) = -1$ and $f(-2) = 2 \implies$ by $IVT$ the function intersects the $x$-axis in the interval $(-2, -1)$.

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

```graph
{
  "width": 700,
  "height": 600,
  "grid": true,
  "disableZoom": "true",

  "xAxis": {
    "domain": [-3, 3]
  },
  "yAxis": {
    "domain": [-3, 3]
  },
  "data": [
    {
      "fn": "2 - 2x^2 - x^3",
      "graphType": "polyline",
      "derivative": {
        "fn": "-4x - 3x^2",
        "updateOnMouseMove": true
      },
      "attr": {
        "data-fn": "2-2x^2-x^3"
      }
    },
    {
      "fnType": "points",
      "graphType": "scatter",
      "points": [
        [0, 2]
      ],
      "attr": {
        "r": 4,
        "fill": "red",
        "stroke": "red",
        "data-point": "(0,2)"
      }
    },
    {
      "fnType": "text",
      "graphType": "text",
      "location": [-0.9, 2.05],
      "text": "local maximum",
      "color": "#000"
    },

    {
      "fnType": "points",
      "graphType": "scatter",
      "points": [
        [-0.6666666667, 1.4074074074074074]
      ],
      "attr": {
        "r": 4,
        "fill": "red",
        "stroke": "red",
        "data-point": "(-2/3,1.4)"
      }
    },
    {
      "fnType": "text",
      "graphType": "text",
      "location": [-0.58, 1.37],
      "text": "inflection point",
      "color": "#000"
    },

    {
      "fnType": "points",
      "graphType": "scatter",
      "points": [
        [-1.3333333333, 0.8148148148148144]
      ],
      "attr": {
        "r": 4,
        "fill": "red",
        "stroke": "red",
        "data-point": "(-4/3,0.8)"
      }
    },
    {
      "fnType": "text",
      "graphType": "text",
      "location": [-1.5, 0.65],
      "text": "local minimum",
      "color": "#000"
    }
  ]
}
```
