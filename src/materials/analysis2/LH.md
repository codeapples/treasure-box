---
title: "[A2] L'Hopital's rule"
---

# L'Hôpital's rule

## Theorem

Let $-\infty \leq a < b \leq +\infty$ and $f, g : (a, b) \to \mathbb{R},\ f, g \in C((a, b)),\ f, g \in D((a, b)),\ g'(x) \neq 0\ \forall x \in (a, b)$.

Suppose that

$$
\text{either }\lim_{a + 0} f(x) = \lim_{a + 0} g(x) = 0 \text{ or }\lim_{a + 0} f(x) = \lim_{a + 0} g(x) = \pm\infty
$$

$$
\text{and that } \exists \lim_{a + 0} \frac{f'(x)}{g'(x)} = A \in \overline{\mathbb{R}}
$$

Then

$$
\lim_{a + 0} \frac{f(x)}{g(x)} = \lim_{a + 0} \frac{f'(x)}{g'(x)}
$$

## Example 1

Determine the following limit

$$
\lim_{x \to 0} \frac{a^x - a^{\sin x}}{x^2} \quad (a > 0)
$$

### Solution

$$
\begin{aligned}
\lim_{x \to 0} \frac{a^x - a^{\sin x}}{x^2} &= \frac{0}{0}\\
\lim_{x \to 0} \frac{a^x - a^{\sin x}}{x^2} &= \lim_{x \to 0} \frac{(a^x - a^{\sin x})'}{(x^2)'} = \lim_{x \to 0} \frac{a^x \ln a - a^{\sin x} \ln a \cos x}{2x} =\\
&= \lim_{x \to 0} \frac{\ln a}{2} \cdot \frac{a^x - a^{\sin x} \cos x}{x} = \frac{\ln a}{2} \cdot \lim_{x \to 0} \frac{a^x - a^{\sin x} \cos x}{x} =\\
&= \frac{\ln a}{2} \cdot \lim_{x \to 0} \frac{(a^x - a^{\sin x} \cos x)'}{(x)'} =\\
&= \frac{\ln a}{2} \cdot \lim_{x \to 0} \frac{a^x \ln a - a^{\sin x} \cos x \ln a - a^{\sin x} \sin x}{1} =\\
&= \frac{\ln a}{2} \cdot (a^0 \ln a - a^0 \ln a - a^0 \cdot 0 - a^0 \cdot 0) = 0
\end{aligned}
$$

## Example 2

Determine the following limit

$$
\lim_{x \to 0} \frac{\tan x - x}{x - \sin x}
$$

### Solution

$$
\begin{aligned}
\lim_{x \to 0} \frac{\tan x - x}{x - \sin x} &= \frac{0}{0}\\
\lim_{x \to 0} \frac{\tan x - x}{x - \sin x} &= \lim_{x \to 0} \frac{(\tan x - x)'}{(x - \sin x)'} = \lim_{x \to 0} \frac{\frac{1}{\cos^2 x} - 1}{1 - \cos x} =\\
&= \lim_{x \to 0} \frac{1 - \cos^2 x}{\cos^2 x (1 - \cos x)} = \lim_{x \to 0} \frac{(1 - \cos x)(1 + \cos x)}{\cos^2 x (1 - \cos x)} =\\
&= \lim_{x \to 0} \frac{1 + \cos x}{\cos^2 x} = \frac{1 + 1}{1} = 2
\end{aligned}
$$

## Example 3

Determine the following limit

$$
\lim_{x \to 1} \ln x \cdot \ln \left(1 - x\right)
$$

### Solution

$$
\lim_{x \to 1} \ln x \cdot \ln \left(1 - x\right) = 0 \cdot \infty \implies \text{ L'H cannot be used in this form}
$$

Rewrite the limit as

$$
\lim_{x \to 1} \frac{\ln (1 - x)}{\frac{1}{\ln x}} = \frac{-\infty}{\infty}
$$

$$
\begin{aligned}
\lim_{x \to 1} \frac{\ln (1 - x)}{\frac{1}{\ln x}} &= \lim_{x \to 1} \frac{(\ln (1 - x))'}{(\frac{1}{\ln x})'} = \lim_{x \to 1} \frac{(-1) \cdot \frac{1}{1 - x}}{(-1) \cdot \ln^{-2} x \cdot \frac{1}{x}} =\\
&= \lim_{x \to 1} \frac{x \cdot \ln^2 x}{1 - x} = \lim_{x \to 1} x \cdot \lim_{x \to 1} \frac{\ln^2 x}{1 - x} =\\
&= 1 \cdot \lim_{x \to 1} \frac{2 \ln x \cdot \frac{1}{x}}{-1} = \frac{2 \cdot 0 \cdot 1}{-1} = 0
\end{aligned}
$$

## Example 4

Determine the following limit

$$
\lim_{x \to 1} \frac{x^2 - 1}{2x^2 - x - 1}
$$

### Solution

$$
\begin{aligned}
\lim_{x \to 1} \frac{x^2 - 1}{2x^2 - x - 1} &= \frac{0}{0}\\
\lim_{x \to 1} \frac{x^2 - 1}{2x^2 - x - 1} &= \lim_{x \to 1} \frac{(x^2 - 1)'}{(2x^2 - x - 1)'} = \lim_{x \to 1} \frac{2x}{4x - 1} = \frac{2}{4 - 1} = \frac{2}{3}
\end{aligned}
$$

## Example 5

Determine the following limit

$$
\lim_{x \to \infty} (x \cdot e^{\frac{1}{x}} - x)
$$

### Solution

$$
\lim_{x \to \infty} (x \cdot e^{\frac{1}{x}} - x) = \infty - \infty \implies \text{ L'H cannot be used in this form}
$$

$$
\lim_{x \to \infty} x \cdot (e^{\frac{1}{x}} - 1) = \lim_{x \to \infty} \frac{e^{\frac{1}{x}} - 1}{\frac{1}{x}} = \frac{0}{0}
$$

$$
\begin{aligned}
\lim_{x \to \infty} \frac{e^{\frac{1}{x}} - 1}{\frac{1}{x}} &= \lim_{x \to \infty} \frac{(e^{\frac{1}{x}} - 1)'}{(\frac{1}{x})'} = \lim_{x \to \infty} \frac{e^{\frac{1}{x}} \cdot (-\frac{1}{x^2})}{-\frac{1}{x^2}} =\\
&= \lim_{x \to \infty} e^{\frac{1}{x}} = e^0 = 1
\end{aligned}
$$

## Example 6

Determine the following limit

$$
\lim_{x \to -\infty} x^2 \cdot e^{-x}
$$

### Solution

$$
\lim_{x \to -\infty} x^2 \cdot e^{-x} = \lim_{x \to -\infty} \frac{x^2}{e^x} = \frac{\infty}{\infty}
$$

$$
\begin{aligned}
\lim_{x \to -\infty} \frac{x^2}{e^x} &= \lim_{x \to -\infty} \frac{(x^2)'}{(e^x)'} = \lim_{x \to -\infty} \frac{2x}{e^x} = \lim_{x \to -\infty} \frac{2}{e^x} = 0
\end{aligned}
$$

## Example 7

Determine the following limit

$$
\lim_{x \to 0} e^{-x} \cdot \ln x
$$

### Solution

$$
\lim_{x \to 0} e^{-x} \cdot \ln x = \lim_{x \to 0} \frac{\ln x}{e^x} = \frac{-\infty}{\infty}
$$

$$
\begin{aligned}
\lim_{x \to 0} \frac{\ln x}{e^x} &= \lim_{x \to 0} \frac{(\ln x)'}{(e^x)'} = \lim_{x \to 0} \frac{\frac{1}{x}}{e^x} = \lim_{x \to 0} \frac{1}{x \cdot e^x} = \frac{1}{0 \cdot 1} = \infty
\end{aligned}
$$

## Example 8

Determine the following limit

$$
\lim_{x \to +\infty} \left(\frac{2x - 3}{2 x + 5}\right)^{2x + 1}
$$

### Solution

$$
\begin{aligned}
\lim_{x \to +\infty} \left(\frac{2x - 3}{2 x + 5}\right)^{2x + 1} &= \lim_{x \to +\infty} e^{(2x + 1) \cdot \ln (\frac{2x - 3}{2 x + 5})} = \lim_{x \to +\infty} e^{(2x + 1) \cdot \ln \left(\frac{2x - 3}{2 x + 5}\right)} =\\
=& e^{\lim_{x \to +\infty} (2x + 1) \cdot \ln \left(\frac{2x - 3}{2 x + 5}\right)} = e^L
\end{aligned}
$$

$$
\begin{aligned}
L &= \lim_{x \to +\infty} (2x + 1) \cdot \ln \left(\frac{2x - 3}{2 x + 5}\right) = \lim_{x \to +\infty} \frac{\ln \left(\frac{2x - 3}{2 x + 5}\right)}{\frac{1}{2x + 1}} = \frac{0}{0}\\
L &= \lim_{x \to +\infty} \frac{(\ln \left(\frac{2x - 3}{2 x + 5}\right))'}{(\frac{1}{2x + 1})'} = \lim_{x \to +\infty} \frac{\frac{1}{\frac{2x - 3}{2 x + 5}} \cdot \frac{2(2x + 5) - 2(2x - 3)}{(2x + 5)^2}}{-\frac{1}{(2x + 1)^2 \cdot 2}} =\\
&= \lim_{x \to +\infty} \frac{2x + 5}{2x - 3} \cdot \frac{-8}{(2x + 5)^2} \cdot (2x + 1)^2 = (-8) \cdot \lim_{x \to +\infty} \frac{(2x + 1)^2}{(2x - 3)(2x + 5)} =\\
&= (-8) \cdot \frac{4}{4} = -8
\end{aligned}
$$

$$
\lim_{x \to +\infty} \left(\frac{2x - 3}{2 x + 5}\right)^{2x + 1} = e^{-8}
$$
