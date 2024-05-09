---
title: '[A-1] Evaluating limits I'
---

# Evaluating limits I

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

- $\lim_{n \to \infty} \sqrt[n]{k} = 1$, where $k \in \mathbb{R}$
- $\lim_{n \to \infty} \sqrt[n]{n} = 1$
- $\lim_{n \to \infty} \sqrt[n]{a_n} = \sqrt[n]{\lim_{n \to \infty} a_n} = \sqrt[n]{A} = 1$, where $a_n > 0$
- $\lim_{n \to \infty} \sqrt[n]{n!} = \infty$
- $\lim_{n \to \infty} \sqrt[n]{\frac{k^n}{n!}} = 0$, where $k \in \mathbb{R}$
- $\lim_{n \to \infty} \frac{n!}{n^n} = 0$
- $\lim_{n \to \infty} (n^k \cdot q^n) = 0$, where $k \in \mathbb{N}$ and $q \in \mathopen(-1; 1\mathclose)$
- $\lim_{n \to \infty} (1 + \frac{1}{n})^{n} = e$
- $\lim_{n \to \infty} (1 - \frac{1}{n})^{n} = \frac{1}{e}$
- $\lim_{n \to \infty} (1 + \frac{1}{a_n})^{a_n} = e$, where $a_n \in \mathbb{N}^+$ and $\lim_{n \to \infty} a_n = \infty$
- $\lim_{n \to \infty} (1 - \frac{1}{a_n})^{a_n} = \frac{1}{e}$, where $a_n \in \mathbb{N}^+$ and $\lim_{n \to \infty} a_n = \infty$

### Squeeze principle (Sandwich theorem)

Let $(a_n)$, $(b_n)$, and $(c_n)$ be three sequences of real numbers such that $a_n \leq b_n \leq c_n$ for all $n \in \mathbb{N}^+$.

$$
if \lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = A \implies \lim_{n \to \infty} b_n = A.
$$

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

## Example 9

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{5^{n + 1} + 2^n}{3 \cdot 5^n - 5^{-n}}
$$

$$
\lim_{n \to \infty} \frac{5^{n + 1} + 2^n}{3 \cdot 5^n - 5^{-n}} = \frac{\infty + \infty}{\infty - 0} = \text{indeterminate}
$$

Transform/simplify and take out dominant terms:

$$
\lim_{n \to \infty} \frac{5^{n + 1} + 2^n}{3 \cdot 5^n - 5^{-n}} = \lim_{n \to \infty} \frac{5 \cdot 5^n + 2^n}{3 \cdot 5^n - \frac{1}{5^n}} =
$$

$$
= \lim_{n \to \infty} \frac{5^n(5 + \frac{2^n}{5^n})}{5^n(3 - \frac{1}{5^{2n}})} = \lim_{n \to \infty} \frac{5 + 0}{3 - 0} = \frac{5}{3}
$$

## Example 10

Determine the limit of the sequence

$$
\lim_{n \to \infty} \sqrt[n]{3n^5 + 2n + 1}
$$

### Solution 1 - Sandwich theorem

$$
\sqrt[n]{3n^5} \leq \sqrt[n]{3n^5 + 2n + 1} \leq \sqrt[n]{3n^5 + 2n^5 + n^5} = \sqrt[n]{6n^5} \quad (n \in \mathbb{N}^+)
$$

$$
\underbrace{\sqrt[n]{3} \cdot (\sqrt[n]{n})^5}_{1} \leq \underbrace{\sqrt[n]{3n^5 + 2n + 1}}_{(\text{sandwich})} \leq \underbrace{\sqrt[n]{6} \cdot (\sqrt[n]{n}^5)}_{1}
$$

So

$$
\lim_{n \to \infty} \sqrt[n]{3n^5 + 2n + 1} = 1
$$

### Solution 2 - Using $\lim_{n \to \infty} \sqrt[n]{x_n}$

$$
\sqrt[n]{3n^5 + 2n + 1} = \sqrt[n]{n^5 \cdot (3 + \frac{2}{n^4} + \frac{1}{n^5})} = (\sqrt[n]{n})^5 \cdot \underbrace{\sqrt[n]{3 + \frac{2}{n^4} + \frac{1}{n^5}}}_{=: x_n}
$$

where

$$
\lim_{n \to \infty} x_n = \lim_{n \to \infty} (3 + \frac{2}{n^4} + \frac{1}{n^5}) = 3 \implies \lim_{n \to \infty} \sqrt[n]{x_n} = 1
$$

So

$$
\lim_{n \to \infty} \sqrt[n]{3n^5 + 2n + 1} = 1^5 \cdot 1 = 1
$$

## Example 11

Determine the limit of the sequence

$$
\lim_{n \to \infty} \sqrt[n]{\frac{n + 1}{2n + 3}}
$$

### Solution 1 - Sandwich theorem

$$
\sqrt[n]{\frac{n}{5n}} \leq \sqrt[n]{\frac{n + 1}{2n + 3}} \leq \sqrt[n]{\frac{2n}{2n}} \quad (n \in \mathbb{N}^+)
$$

$$
\underbrace{\sqrt[n]{\frac{1}{5}}}_{= 1} \leq \underbrace{\sqrt[n]{\frac{n + 1}{2n + 3}}}_{(sandwhich)} \leq \underbrace{\sqrt[n]{1}}_{= 1}
$$

So

$$
\lim_{n \to \infty} \sqrt[n]{\frac{n + 1}{2n + 3}} = 1
$$

### Solution 2 - Using $\lim_{n \to \infty} \sqrt[n]{x_n}$

$$
\sqrt[n]{\frac{n + 1}{2n + 3}} = \sqrt[n]{\frac{n(1 + \frac{1}{n})}{n(2 + \frac{3}{n})}} = \sqrt[n]{\frac{1 + \frac{1}{n}}{2 + \frac{3}{n}}} = \sqrt[n]{\frac{1}{2}} = 1
$$

## Example 12

Determine the limit of the sequence

$$
\lim_{n \to \infty} \sqrt[n]{2 \cdot 5^n + 7^n}
$$

### Solution 1 - Sandwich theorem

$$
\sqrt[n]{7^n} \leq \sqrt[n]{2 \cdot 5^n + 7^n} \leq \sqrt[n]{2 \cdot 7^n + 7^n} = \sqrt[n]{3 \cdot 7^n}
$$

$$
\underbrace{7}_{= 7} \leq \underbrace{\sqrt[n]{2 \cdot 5^n + 7^n}}_{(sandwhich)} \leq \underbrace{7 \cdot \sqrt[n]{3}}_{= 7}
$$

So

$$
\lim_{n \to \infty} \sqrt[n]{2 \cdot 5^n + 7^n} = 7
$$

### Solution 2 - Using $\lim_{n \to \infty} \sqrt[n]{x_n}$

$$
\sqrt[n]{2 \cdot 5^n + 7^n} = \sqrt[n]{7^n \cdot (2 \cdot (\frac{5}{7})^n + 1)} = 7 \cdot \underbrace{\sqrt[n]{2 \cdot (\frac{5}{7})^n + 1}}_{= 1} = 7
$$

## Example 13

Determine the limit of the sequence

$$
\lim_{n \to \infty} \sqrt[n]{\frac{6^n + 2^n \cdot n!}{n!}}
$$

$$
\sqrt[n]{\frac{6^n + 2^n \cdot n!}{n!}} = \sqrt[n]{\frac{6^n}{n!} + \frac{2^n \cdot n!}{n!}} = \sqrt[n]{\frac{6^n}{n!} + 2^n} =
$$

$$
= \sqrt[n]{2^n \cdot (\frac{3^n}{n!} + 1)} = 2 \cdot \underbrace{\sqrt[n]{\frac{3^n}{n!} + 1}}_{= 1 \text{ , because } \frac{3^n}{n!} = 0} = 2
$$

## Example 14

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{n^2 \cdot 3^n + 2^{2n}}{4^{n+1} + 2^n}
$$

$$
\frac{n^2 \cdot 3^n + 4^n}{4 \cdot 4^n + 2^n} = \frac{4^n}{4^n} \cdot \frac{n^2 \cdot (\frac{3}{4})^n + 1}{4 + (\frac{1}{2})^n} = \frac{n^2 \cdot (\frac{3}{4})^n + 1}{4 + (\frac{1}{2})^n} = \frac{0 + 1}{4 + 0} = \frac{1}{4}
$$

Using $\lim_{n \to \infty} n^k \cdot q^n = 0$: where $k = 2$ and $q = \frac{3}{4} \in \mathopen(-1; 1\mathclose)$

and $\lim_{n \to \infty} q^n = 0$: where $q = \frac{1}{2} \in \mathopen(-1; 1\mathclose)$

## Example 15

Determine the limit of the sequence

$$
\lim_{n \to \infty} \sqrt{\frac{(-5)^n + 7^n}{7^{n + 1} + n^7}}
$$

$$
\sqrt{\frac{(-5)^n + 7^n}{7 \cdot 7^n + n^7}} = \sqrt{\frac{7^n (1 + (\frac{-5}{7})^n)}{7^n (7 + n^7 \cdot (\frac{1}{7})^n)}} = \sqrt{\frac{1 + (\frac{-5}{7})^n}{7 + n^7 \cdot (\frac{1}{7})^n}} = \sqrt{\frac{1 + 0}{7 + 0}} = \sqrt{\frac{1}{7}} = \frac{1}{\sqrt{7}}
$$

Using $\lim_{n \to \infty} q^n = 0$: where $q = \frac{-5}{7} \in \mathopen(-1; 1\mathclose)$

and $\lim_{n \to \infty} n^k \cdot q^n = 0$: where $k = 7$ and $q = \frac{1}{7} \in \mathopen(-1; 1\mathclose)$

## Example 16

Determine the limit of the sequence

$$
\lim_{n \to \infty} \frac{(-2)^n + n}{n! + 3^n}
$$

$$
\frac{(-2)^n + n}{n! + 3^n} = \frac{(-2)^n \cdot (1 + n \cdot (\frac{1}{-2})^n)}{n! \cdot (1 + \frac{3^n}{n!})} = \frac{(-2)^n}{n!} \cdot \frac{1 + n \cdot (\frac{1}{-2})^n}{1 + \frac{3^n}{n!}} =
$$

$$
= 0 \cdot \frac{1 + 0}{1 + 0} = 0
$$
