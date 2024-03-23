---
title: \[A-1\] Determining limits
---

# Determining limits

## Properties of infinity and zero

### Determinate form
- Infinity plus or minus a real number is infinity: $\pm\infty \pm k = \pm\infty \quad \forall k \in \mathbb{R}$
- Infinity plus infinity is infinity: $\infty + \infty = \infty$
- Infinity by a real number is plus or minus infinity: $\infty \cdot \pm k = \pm\infty \quad \forall k \in \mathbb{R \setminus \{0\}}$
- Infinity divided by a real number is plus or minus infinity: $\frac{\infty}{\pm k} = \pm\infty \quad \forall k \in \mathbb{R \setminus \{0\}}$
- Zero divided by a real number is zero: $\frac{0}{k} = 0 \quad \forall k \in \mathbb{R \setminus \{0\}}$
- Real number divided by zero is plus or minus infinity: $\frac{k}{0} = \pm\infty \quad \forall k \in \mathbb{R \setminus \{0\}}$
- Real number divided by infinity is zero: $\frac{k}{\pm\infty} = 0 \quad \forall k \in \mathbb{R}$
- Infinity divided by zero is infinity: $\frac{\pm\infty}{0} = \pm\infty$
- Zero divided by infinity is zero: $\frac{0}{\pm\infty} = 0$

### Indeterminate form

- Zero times infinity is indeterminate: $0 \cdot \infty$
- Infinity minus infinity is indeterminate: $\infty - \infty$
- Infinity divided by infinity is indeterminate: $\frac{\infty}{\infty}$
- Zero divided by zero is indeterminate: $\frac{0}{0}$
- Infinity multiplied by zero is indeterminate: $\infty \cdot 0$
- Infinity to the power of zero is indeterminate: $\infty^0$

## Limit theorems

### Basic theorems for convergent sequences

Let $(a_n)$ and $(b_n)$ be two sequences of real numbers that converge to real numbers $A$ and $B$ respectively. Then the following limits hold:

- $\lim_{n \to \infty} k = k$, where $k \in \mathbb{R}$ (Limit of a constant is the constant)
- $\lim_{n \to \infty} k \cdot a_n = k \cdot \lim_{n \to \infty} a_n = k \cdot A$, where $k \in \mathbb{R}$ (Multiplication by constant)
- $\lim_{n \to \infty} (a_n + b_n) = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n = A + B$ (Limit of sum)
- $\lim_{n \to \infty} (a_n - b_n) = \lim_{n \to \infty} a_n - \lim_{n \to \infty} b_n = A - B$ (Limit of difference)
- $\lim_{n \to \infty} (a_n \cdot b_n) = \lim_{n \to \infty} a_n \cdot \lim_{n \to \infty} b_n = A \cdot B$ (Limit of product)
- $\lim_{n \to \infty} (a_n^k) = (\lim_{n \to \infty} a_n)^k = A^k$, where $k \in \mathbb{N}$ (Limit of power)
- $\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{\lim_{n \to \infty} a_n}{\lim_{n \to \infty} b_n} = \frac{A}{B}$, if $B \neq 0$

- $\lim_{n \to \infty} \sqrt[k]{a_n} = \sqrt[k]{\lim_{n \to \infty} a_n} = \sqrt[k]{A}$, where $k \in \mathbb{N}$

## Example 1

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{n^3 - 3n^2 + n - 1}{1 - 2n^3 + n}
$$

$$
\lim_{n \to \infty} \frac{n^3 - 3n^2 + n - 1}{1 - 2n^3 + n} = \frac{\infty}{-\infty} = \text{indeterminate}
$$

Take out dominant terms:

$$
\lim_{n \to \infty} \frac{n^3(1 - \frac{3}{n} + \frac{1}{n^2} - \frac{1}{n^3})}{-2n^3(1 - \frac{1}{2n^2} - \frac{1}{2n^3})} = -\frac{1}{2} \cdot \lim_{n \to \infty} \frac{1 - \frac{3}{n} + \frac{1}{n^2} - \frac{1}{n^3}}{1 - \frac{1}{2n^2} - \frac{1}{2n^3}} =
$$

$$
= -\frac{1}{2} \cdot \frac{1 - 0 + 0 - 0}{1 - 0 + 0} = -\frac{1}{2}
$$

## Example 2

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{n^4 + n^2 + n + 1}{2n^5 + n - 4}
$$

$$
\lim_{n \to \infty} \frac{n^4 + n^2 + n + 1}{2n^5 + n - 4} = \frac{\infty}{\infty} = \text{indeterminate}
$$

Take out dominant terms:

$$
\lim_{n \to \infty} \frac{n^4(1 + \frac{1}{n^2} + \frac{1}{n^3} + \frac{1}{n^4})}{n^5(2 + \frac{1}{n^4} - \frac{4}{n^5})} = \lim_{n \to \infty} \frac{1 + \frac{1}{n^2} + \frac{1}{n^3} + \frac{1}{n^4}}{n(2 + \frac{1}{n^4} - \frac{4}{n^5})} = \frac{1 + 0 + 0 + 0}{\infty(2 + 0 - 0)} =
$$

$$
= \frac{1}{\infty} = 0
$$

## Example 3

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{(2 - n)^7 + (2 + n)^7}{(n^2 + n + 1) \cdot (2n + 1)^5}
$$

$$
\lim_{n \to \infty} \frac{(2 - n)^7 + (2 + n)^7}{(n^2 + n + 1) \cdot (2n + 1)^5} = \frac{(-\infty)^7 + (\infty)^7}{(\infty) \cdot (\infty)^5} = \frac{-\infty + \infty}{\infty} = \text{indeterminate}
$$

Transform/simplify and take out dominant terms:

$$
\lim_{n \to \infty} \frac{n^7(\frac{2}{n} - 1)^7 + n^7(\frac{2}{n} + 1)^7}{n^2(1 + \frac{1}{n} + \frac{1}{n^2}) \cdot n^5(2 + \frac{1}{n})^5} = \lim_{n \to \infty} \frac{n^7((\frac{2}{n} - 1)^7 + (\frac{2}{n} + 1)^7)}{n^7((1 + \frac{1}{n} + \frac{1}{n^2}) \cdot (2 + \frac{1}{n})^5)} =
$$

$$
= \lim_{n \to \infty} \frac{(\frac{2}{n} - 1)^7 + (\frac{2}{n} + 1)^7}{(1 + \frac{1}{n} + \frac{1}{n^2}) \cdot (2 + \frac{1}{n})^5} = \frac{(0 - 1)^7 + (0 + 1)^7}{(1 + 0 + 0) \cdot (2 + 0)^5} = \frac{-1 + 1}{1 \cdot 32} = \frac{0}{32} = 0
$$

## Example 4

Determine the limit of the sequence

$$
\lim_{n \to \infty} \sqrt{n + 1} - \sqrt{n}
$$

$$
\lim_{n \to \infty} \sqrt{n + 1} - \sqrt{n} = \infty - \infty = \text{indeterminate}
$$

Transform/simplify:

$$
\lim_{n \to \infty} \sqrt{n + 1} - \sqrt{n} = \lim_{n \to \infty} \frac{(\sqrt{n + 1} - \sqrt{n})(\sqrt{n + 1} + \sqrt{n})}{\sqrt{n + 1} + \sqrt{n}} =
$$

$$
\lim_{n \to \infty} \frac{n + 1 - n}{\sqrt{n + 1} + \sqrt{n}} = \lim_{n \to \infty} \frac{1}{\sqrt{n + 1} + \sqrt{n}} = \frac{1}{\infty + \infty} = 0
$$

## Example 5

Determine the limit of the sequence

$$
lim_{n \to \infty} (\sqrt{n^2 + n} - n)
$$

$$
\lim_{n \to \infty} (\sqrt{n^2 + n} - n) = \infty - \infty = \text{indeterminate}
$$

Transform/simplify:

$$
\lim_{n \to \infty} (\sqrt{n^2 + n} - n) = \lim_{n \to \infty} \frac{(\sqrt{n^2 + n} - n)(\sqrt{n^2 + n} + n)}{\sqrt{n^2 + n} + n} =
$$

$$
\lim_{n \to \infty} \frac{n^2 + n - n^2}{\sqrt{n^2 + n} + n} = \lim_{n \to \infty} \frac{n}{n (\sqrt{1 + \frac{1}{n}} + 1)} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n}} + 1} =
$$

$$
= \frac{1}{\sqrt{1 + 0} + 1} = \frac{1}{2}
$$

## Example 6

Determine the limit of the sequence

$$
\lim_{n \to \infty} (\sqrt{n^2 + 2n + 3} - \sqrt{n^2 - n + 1})
$$

$$
\lim_{n \to \infty} (\sqrt{n^2 + 2n + 3} - \sqrt{n^2 - n + 1}) = \infty - \infty = \text{indeterminate}
$$

Transform/simplify and take out dominant terms:

$$
\lim_{n \to \infty} (\sqrt{n^2 + 2n + 3} - \sqrt{n^2 - n + 1}) =
$$

$$
= \lim_{n \to \infty} \frac{(\sqrt{n^2 + 2n + 3} - \sqrt{n^2 - n + 1})(\sqrt{n^2 + 2n + 3} + \sqrt{n^2 - n + 1})}{\sqrt{n^2 + 2n + 3} + \sqrt{n^2 - n + 1}} =
$$

$$
= \lim_{n \to \infty} \frac{n^2 + 2n + 3 - n^2 + n - 1}{n\sqrt{1 + \frac{2}{n} + \frac{3}{n^2}} + n\sqrt{1 - \frac{1}{n} + \frac{1}{n^2}}} =
$$

$$
= \lim_{n \to \infty} \frac{3n + 2}{n\sqrt{1 + \frac{2}{n} + \frac{3}{n^2}} + n\sqrt{1 - \frac{1}{n} + \frac{1}{n^2}}} =
$$

$$
= \lim_{n \to \infty} \frac{n(3 + \frac{2}{n})}{n(\sqrt{1 + \frac{2}{n} + \frac{3}{n^2}} + \sqrt{1 - \frac{1}{n} + \frac{1}{n^2}})} =
$$

$$
= \frac{3 + 0}{\sqrt{1 + 0 + 0} + \sqrt{1 - 0 + 0}} = \frac{3}{2}
$$

## Example 7

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{\sqrt{3n^2 + n} - \sqrt{2n^2 + 3}}{\sqrt{n^2 + 9} - 2}
$$

$$
\lim_{n \to \infty} \frac{\sqrt{3n^2 + n} - \sqrt{2n^2 + 3}}{\sqrt{n^2 + 9} - 2} = \frac{\infty - \infty}{\infty} = \text{indeterminate}
$$

Transform/simplify and take out dominant terms:

$$
\lim_{n \to \infty} \frac{\sqrt{3n^2 + n} - \sqrt{2n^2 + 3}}{\sqrt{n^2 + 9} - 2} =
$$

$$
= \lim_{n \to \infty} \frac{n\sqrt{3 + \frac{1}{n}} - n\sqrt{2 + \frac{3}{n^2}}}{n\sqrt{1 + \frac{9}{n^2}} - 2} = \lim_{n \to \infty} \frac{n(\sqrt{3 + \frac{1}{n}} - \sqrt{2 + \frac{3}{n^2}})}{n(\sqrt{1 + \frac{9}{n^2}} - \frac{2}{n})} =
$$

$$
= \frac{\sqrt{3 + 0} - \sqrt{2 + 0}}{\sqrt{1 + 0} - 0} = \frac{\sqrt{3} - \sqrt{2}}{1 } = \sqrt{3} - \sqrt{2}
$$

## Example 8

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{\sqrt{3n^2 + 5} - \sqrt{3n^2 + 3}}{\sqrt{n^2 + 9} - n}
$$

$$
\lim_{n \to \infty} \frac{\sqrt{3n^2 + 5} - \sqrt{3n^2 + 3}}{\sqrt{n^2 + 9} - n} = \frac{\infty - \infty}{\infty - \infty} = \text{indeterminate}
$$

Transform/simplify and take out dominant terms:

$$
\lim_{n \to \infty} \frac{\sqrt{3n^2 + 5} - \sqrt{3n^2 + 3}}{\sqrt{n^2 + 9} - n} =
$$

$$
= \lim_{n \to \infty} \frac{(\sqrt{3n^2 + 5} - \sqrt{3n^2 + 3})(\sqrt{3n^2 + 5} + \sqrt{3n^2 + 3})}{(\sqrt{n^2 + 9} - n)(\sqrt{3n^2 + 5} + \sqrt{3n^2 + 3})} =
$$

$$
= \lim_{n \to \infty} \frac{3n^2 + 5 - 3n^2 - 3}{n(\sqrt{1 + \frac{9}{n^2}} - 1) \cdot n(\sqrt{3 + \frac{5}{n^2}} + \sqrt{3 + \frac{3}{n^2}})} =
$$

$$
= \lim_{n \to \infty} \frac{2}{n^2(\sqrt{1 + \frac{9}{n^2}} - 1)(\sqrt{3 + \frac{5}{n^2}} + \sqrt{3 + \frac{3}{n^2}})} =
$$

$$
= \lim_{n \to \infty} \frac{2 \cdot (\sqrt{1 + \frac{9}{n^2} } + 1)}{n^2(1 + \frac{9}{n^2} - 1)(\sqrt{3 + \frac{5}{n^2}} + \sqrt{3 + \frac{3}{n^2}})} =
$$

$$
= \lim_{n \to \infty} \frac{2 \cdot (\sqrt{1 + \frac{9}{n^2} } + 1)}{9(\sqrt{3 + \frac{5}{n^2}} + \sqrt{3 + \frac{3}{n^2}})} = \frac{2}{9} \lim_{n \to \infty} \frac{\sqrt{1 + \frac{9}{n^2} } + 1}{\sqrt{3 + \frac{5}{n^2}} + \sqrt{3 + \frac{3}{n^2}}} =
$$

$$
= \frac{2}{9} \cdot \frac{\sqrt{1 + 0} + 1}{\sqrt{3 + 0} + \sqrt{3 + 0}} = \frac{2}{9} \cdot \frac{1 + 1}{\sqrt{3} + \sqrt{3}} = \frac{2}{9} \cdot \frac{2}{2\sqrt{3}} = \frac{2}{9\sqrt{3}}
$$


