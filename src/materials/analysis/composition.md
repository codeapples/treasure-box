---
title: \[A-1\] Function composition
---

# Function composition

## Introduction

The composition of two functions $f$ and $g$ is a new function that is obtained by applying $f$ to the output of $g$. The composition of $f$ and $g$ is denoted by $f \circ g$ and is defined by the formula

$$
(f \circ g)(x) = f(g(x)).
$$

In other words, the composition of $f$ and $g$ is the function that first applies $g$ to its input and then applies $f$ to the result.

## Order of composition

The composition of functions is not commutative, i.e., in general, $f \circ g \neq g \circ f$. In other words, the order in which functions are composed matters.

## Domains and ranges of composed functions

The domain of a composite function, such as $f \circ g$, is dependent on the domain of $g$ and the domain of $f$. The domain of $f \circ g$ is important because it tells us when we can apply a composite function and when we cannot.

The domain of a composite function $f(g(x))$ is the set of those inputs $x$ in the domain of $g$ for which $g(x)$ is in the domain of $f$.

::: details
Let us assume we know the domains of the functions $f$ and $g$ separately. We can write the composite function $f \circ g$ for an input $x$ as $f(g(x))$. Using the picture below, we can see that $x$ must be a member of the domain of $g$ in order for the expression to be meaningful, because otherwise we cannot complete the inner function evaluation. However, we also see that $g(x)$ must be a member of the domain of $f$, otherwise the second function evaluation in $f(g(x))$ cannot be completed, and the expression is still undefined. Thus the domain of $f \circ g$ consists of only those inputs in the domain of $g$ that produce outputs from $g$ belonging to the domain of $f$. Note that the domain of $f$ composed with $g$ is the set of all $x$ such that $x$ is in the domain of $g$ and $g(x)$ is in the domain of $f$.
:::
![](/assets/comp-domain.png)

### Determining the domain of a composite function

To find the domain of a composite function, $f \circ g$, you can follow these three steps:

1. Find the domain of $g$.
2. Find the domain of $f$.
3. Find those inputs $x$ in the domain of $g$ for which $g(x)$ is in the domain of $f$. That is, exclude those inputs $x$ from the domain of $g$ for which $g(x)$ is not in the domain of $f$. The resulting set is the domain of $f \circ g$.

## Example 1

Given functions

$$
f(x) = \sqrt{x + 1} : (x \geq -1)
$$

$$
g(x) = x^2 - 3x + 1 : (x \in \mathbb{R})
$$

find $f \circ g$, $g \circ f$, and their domains.

#### Determining for $f \circ g$
First, calculate the domain of $f \circ g$:

$$
D_{f \circ g} = \{\ x \in D_{g}\ |\ g(x) \in D_{f}\ \} =
$$

$$
= \{\ x \in \mathbb{R}\ |\ x^2 - 3x + 1 \geq -1\ \} =
$$

$$
= \{\ x \in \mathbb{R}\ |\ x^2 - 3x + 2 \geq 0\ \} =
$$

$$
= \{\ x \in \mathbb{R}\ |\ (x - 1)(x - 2) \geq 0\ \} =
$$

$$
= \{\ x \in \mathbb{R}\ |\ x \in (-\infty; 1] \cup [2; \infty)\ \} =
$$

$$
= (-\infty; 1] \cup [2; \infty)
$$

Since the domain of $f \circ g$ is not an empty set ($D_{f \circ g} \neq \emptyset$), then $f \circ g$ exists ($\exists f \circ g$).

Calculate $f \circ g$:

$$
(f \circ g)(x) = f(g(x)) = f(x^2 - 3x + 1) = \sqrt{x^2 - 3x + 1 + 1} = \sqrt{x^2 - 3x + 2}
$$

Therefore

$$
f \circ g = \sqrt{x^2 - 3x + 2} : (x \in (-\infty; 1] \cup [2; \infty))
$$

#### Determining for $g \circ f$
First, calculate the domain of $g \circ f$:

$$
D_{g \circ f} = \{\ x \in D_{f}\ |\ f(x) \in D_{g}\ \} =
$$

$$
= \{\ x \in [-1; \infty)\ |\ \sqrt{x + 1} \in \mathbb{R}\ \} =
$$

$$
= [-1; \infty)
$$

Since the domain of $g \circ f$ is not an empty set ($D_{g \circ f} \neq \emptyset$), then $g \circ f$ exists ($\exists g \circ f$).

Calculate $g \circ f$:

$$
(g \circ f)(x) = g(f(x)) = g(\sqrt{x + 1}) = (\sqrt{x + 1})^2 - 3\sqrt{x + 1} + 1 =
$$

$$
= x + 1 - 3\sqrt{x + 1} + 1 = x - 3\sqrt{x + 1} + 2
$$

Therefore

$$
g \circ f = x - 3\sqrt{x + 1} + 2 : (x \in [-1; \infty))
$$

## Example 2

Given functions

$$
f(x) = \frac{1}{x^2 - 4} : (x \in \mathbb{R} \setminus \{\pm 2\})
$$

$$
g(x) = \sqrt{x - 1} : (x \geq 1)
$$

find $f \circ g$, $g \circ f$, and their domains.

#### Determining for $f \circ g$
First, calculate the domain of $f \circ g$:

$$
D_{f \circ g} = \{\ x \in D_{g}\ |\ g(x) \in D_{f}\ \} =
$$

$$
= \{\ x \in [1; \infty)\ |\ \sqrt{x - 1} \neq \pm 2\ \} =
$$

$$
= \{\ x \in [1; \infty)\ |\ x - 1 \neq 4\ \} =
$$

$$
= \{\ x \in [1; \infty)\ |\ x \neq 5\ \} =
$$

$$
= [1; 5) \cup (5; \infty) \Leftrightarrow [1; \infty) \setminus \{5\}
$$

Since the domain of $f \circ g$ is not an empty set ($D_{f \circ g} \neq \emptyset$), then $f \circ g$ exists ($\exists f \circ g$).

Calculate $f \circ g$:

$$
(f \circ g)(x) = f(g(x)) = f(\sqrt{x - 1}) = \frac{1}{(\sqrt{x - 1})^2 - 4} = \frac{1}{x - 1 - 4} = \frac{1}{x - 5}
$$

Therefore

$$
f \circ g = \frac{1}{x - 5} : (x \in [1; \infty) \setminus \{5\})
$$

#### Determining for $g \circ f$
First, calculate the domain of $g \circ f$:

$$
D_{g \circ f} = \{\ x \in D_{f}\ |\ f(x) \in D_{g}\ \} =
$$

$$
= \{\ x \in \mathbb{R} \setminus \{\pm 2\}\ |\ \frac{1}{x^2 - 4} \geq 1\ \} =
$$

$$
= \{\ x \in \mathbb{R} \setminus \{\pm 2\}\ |\ \frac{1}{x^2 - 4} - 1 \geq 0\ \} =
$$

$$
= \{\ x \in \mathbb{R} \setminus \{\pm 2\}\ |\ \frac{1 - x^2 + 4}{x^2 - 4} \geq 0\ \}
$$

$$
= \{\ x \in \mathbb{R} \setminus \{\pm 2\}\ |\ \frac{5 - x^2}{x^2 - 4} \geq 0\ \}
$$

*Sign table*

| $x$ | $-\infty$ | | $-\sqrt{5}$ | | $-2$ | | $2$ | | $\sqrt{5}$ | | $+\infty$ |
|-----|-----------|-|-------------|-|------|-|-----|-|------------|-|-----------|
| $5 - x^2$ | - | - | 0 | + | + | + | + | + | 0 | - | - |
| $x^2 - 4$ | + | + | + | + | 0 | - | 0 | + | + | + | + |
| $\frac{5 - x^2}{x^2 - 4}$ | - | - | 0 | + | n\a | - | n\a | + | 0 | - | - |

Therefore

$$
D_{g \circ f} = \{\ x \in \mathbb{R} \setminus \{\pm 2\}\ |\ x \in [-\sqrt{5}; -2) \cup (2; \sqrt{5}]\ \} =
$$

$$
= [-\sqrt{5}; -2) \cup (2; \sqrt{5}]
$$

Since the domain of $g \circ f$ is not an empty set ($D_{g \circ f} \neq \emptyset$), then $g \circ f$ exists ($\exists g \circ f$).

Calculate $g \circ f$:

$$
(g \circ f)(x) = g(f(x)) = g\left(\frac{1}{x^2 - 4}\right) = \sqrt{\frac{1}{x^2 - 4} - 1} = \sqrt{\frac{1 - x^2 + 4}{x^2 - 4}} = \sqrt{\frac{5 - x^2}{x^2 - 4}}
$$

Therefore

$$
g \circ f = \sqrt{\frac{5 - x^2}{x^2 - 4}} : (x \in [-\sqrt{5}; -2) \cup (2; \sqrt{5}])
$$
