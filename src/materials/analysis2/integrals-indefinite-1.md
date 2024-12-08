---
title: '[A2] Indefinite integrals I'
---

# Indefinite integrals I

## Antiderivative

### Definition

Let $I \subseteq \mathbb{R}$ be an open interval, $f : I \to \mathbb{R}$, $F : I \to \mathbb{R}$.

The function $F$ is called an antiderivative of $f$ on $I$ if $F \in D$ and

$$
\forall x \in I: F'(x) = f(x)
$$

### Theorem (existence of antiderivative)

If $I \subseteq \mathbb{R}$ is an open interval, $f : I \to \mathbb{R}$ is continuous, then $f$ has an antiderivative on $I$.

### Theorem (set of all antiderivatives)

Let $I \subseteq \mathbb{R}$ be an open interval, $f : I \to \mathbb{R}$.

Let $F : I \to \mathbb{R}$ be an antiderivative of $f$ on $I$.

Then the set of all antiderivatives of $f$ on $I$ is

$$
\{I \ni x \mapsto F(x) + C: C \in \mathbb{R}\} = \{F + C: C \in \mathbb{R}\}
$$

## Indefinite integral

### Definition

The set of all antiderivatives of $f$ on $I$ is called the indefinite integral of $f$ on $I$ and is denoted by

$$
\int f(x) \, dx
$$

## Basic indefinite integrals

### 1. $\int x^n \, dx$

$$
D_f = \mathbb{R}
$$

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C
$$

### 2. $\int \frac{1}{x} \, dx$

$$
D_f = \mathbb{R} \setminus \{0\}
$$

$$
\int \frac{1}{x} \, dx = \ln |x| + C
$$

So,

$$
\int \frac{1}{x} \, dx =
\begin{cases}
\ln x + C & \text{if } x > 0\\
\ln (-x) + C & \text{if } x < 0
\end{cases}
$$

### 3. $\int x^{\alpha} \, dx$

$$
D_f = (0, \infty)
$$

$$
\int x^{\alpha} \, dx = \frac{x^{\alpha + 1}}{\alpha + 1} + C
$$

### 4. $\int e^x \, dx$

$$
D_f = \mathbb{R}
$$

$$
\int e^x \, dx = e^x + C
$$

### 5. $\int a^x \, dx$

$$
D_f = \mathbb{R}
$$

$$
a \in (0, 1) \cup (1, \infty)
$$

$$
\int a^x \, dx = \frac{a^x}{\ln a} + C
$$

### 6. $\int \sin x \, dx$

$$
D_f = \mathbb{R}
$$

$$
\int \sin x \, dx = -\cos x + C
$$

### 7. $\int \cos x \, dx$

$$
D_f = \mathbb{R}
$$

$$
\int \cos x \, dx = \sin x + C
$$

### 8. $\int \frac{1}{\cos^2 x} \, dx$

$$
D_f = (-\frac{\pi}{2}, \frac{\pi}{2})
$$

$$
\int \frac{1}{\cos^2 x} \, dx = \tan x + C
$$

### 9. $\int \frac{1}{\sin^2 x} \, dx$

$$
D_f = (0 , \pi)
$$

$$
\int \frac{1}{\sin^2 x} \, dx = -\cot x + C
$$

### 10. $\int \frac{1}{1 + x^2} \, dx$

$$
D_f = \mathbb{R}
$$

$$
\int \frac{1}{1 + x^2} \, dx = \arctan x + C
$$

### 11. $\int \frac{1}{\sqrt{1 - x^2}} \, dx$

$$
D_f = (-1, 1)
$$

$$
\int \frac{1}{\sqrt{1 - x^2}} \, dx = \arcsin x + C
$$

## Simple integration rules

### Linearity

Let $I \subseteq \mathbb{R}$ be an open interval, $f, g : I \to \mathbb{R}$.

If $f$ and $g$ have antiderivatives on $I$, then

$$
\int (f(x) + g(x)) \, dx = \int f(x) \, dx + \int g(x) \, dx
$$

### Scalar multiplication

Let $I \subseteq \mathbb{R}$ be an open interval, $f : I \to \mathbb{R}$, $\lambda \in \mathbb{R}$.

If $f$ has an antiderivative on $I$, then

$$
\int \lambda f(x) \, dx = \lambda \int f(x) \, dx \quad (\lambda \in \mathbb{R})
$$

## Reverse of differentiation of composite functions

$$
\int f(g(x)) \cdot g'(x) \, dx = F(g(x)) + C
$$

### Linear substitution

$$
\int f(ax + b) \, dx = \frac{F(ax + b)}{a} + C \quad (a \neq 0)
$$

### Integrals of type $f^\alpha \cdot f'$

$$
\int (f(x))^{\alpha} \cdot f'(x) \, dx = \frac{(f(x))^{\alpha + 1}}{\alpha + 1} + C \quad (\alpha \neq -1)
$$

### Integrals of type $\frac{f'}{f}$

$$
\int \frac{f'(x)}{f(x)} \, dx = \ln |f(x)| + C
$$

## Example 1 (basic)

Determine the indefinite integral

$$
\int 6x^2 - 8x + 3 \, dx
$$

#### Solution

$$
\begin{aligned}
\int 6x^2 - 8x + 3 \, dx &= \int 6x^2 \, dx - \int 8x \, dx + \int 3 \, dx =\\
&= 6 \int x^2 \, dx - 8 \int x \, dx + 3 \int 1 \, dx =\\
&= 6 \cdot \frac{x^3}{3} - 8 \cdot \frac{x^2}{2} + 3 \cdot x + C =\\
&= 2x^3 - 4x^2 + 3x + C \quad (x \in \mathbb{R})
\end{aligned}
$$

## Example 2 (basic)

Determine the indefinite integral

$$
\int \left(2x + \frac{5}{\sqrt{1 - x^2}}  \right) \, dx
$$

#### Solution

$$
\begin{aligned}
\int \left(2x + \frac{5}{\sqrt{1 - x^2}}  \right) \, dx &= \int 2x \, dx + 5 \int \frac{1}{\sqrt{1 - x^2}} \, dx =\\
&= 2 \int x \, dx + 5 \int \frac{1}{\sqrt{1 - x^2}} \, dx =\\
&= 2 \cdot \frac{x^2}{2} + 5 \cdot \arcsin x + C =\\
&= x^2 + 5 \arcsin x + C \quad (x \in (-1, 1))
\end{aligned}
$$

## Example 3 (basic)

Determine the indefinite integral

$$
\int \frac{x^2}{x^2 + 1} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{x^2}{x^2 + 1} \, dx &= \int \frac{x^2 + 1 - 1}{x^2 + 1} \, dx =\\
&= \int \left(1 - \frac{1}{x^2 + 1}\right) \, dx =\\
&= \int 1 \, dx - \int \frac{1}{x^2 + 1} \, dx =\\
&= x - \arctan x + C \quad (x \in \mathbb{R})
\end{aligned}
$$

## Example 4 (basic)

Determine the indefinite integral

$$
\int \frac{\cos^2 x - 5}{1 + \cos 2x} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{\cos^2 x - 5}{1 + \cos 2x} \, dx &= \int \frac{\cos^2 x - 5}{1 + \cos^2x - \sin^2x} \, dx =\\
&= \int \frac{\cos^2 x - 5}{2\cos^2x} \, dx =\\
&= \int \left(\frac{\cos^2 x}{2 \cos^2 x} - \frac{5}{2\cos^2x}\right) \, dx =\\
&= \int \left(\frac{1}{2} - \frac{5}{2\cos^2x}\right) \, dx =\\
&= \frac{1}{2} \int 1 \, dx - 5 \int \frac{1}{\cos^2x} \, dx =\\
&= \frac{1}{2} (x - 5 \tan x) + C \quad (x \in (-\frac{\pi}{2}, \frac{\pi}{2}))
\end{aligned}
$$

## Example 5 (basic)

Determine the indefinite integral

$$
\int \frac{1}{\sqrt{x}} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{1}{\sqrt{x}} \, dx &= \int x^{-\frac{1}{2}} \, dx =\\
&= \frac{x^{\frac{1}{2}}}{\frac{1}{2}} + C =\\
&= 2 \sqrt{x} + C \quad (x \in (0, \infty))
\end{aligned}
$$

## Example 6 (basic)

Determine the indefinite integral

$$
\int x \cdot \sqrt{x} \, dx
$$

#### Solution

$$
\begin{aligned}
\int x \cdot \sqrt{x} \, dx &= \int x^{\frac{3}{2}} \, dx =\\
&= \frac{x^{\frac{5}{2}}}{\frac{5}{2}} + C =\\
&= \frac{2}{5} x^{\frac{5}{2}} + C =\\
&= \frac{2}{5} \sqrt{x^5} + C \quad (x \in (0, \infty))
\end{aligned}
$$

## Example 7 (basic)

Determine the indefinite integral

$$
\int \frac{x^3 + 5x - 3}{x} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{x^3 + 5x - 3}{x} \, dx &= \int x^2 + 5 - \frac{3}{x} \, dx =\\
&= \int x^2 \, dx + 5 \int 1 \, dx - 3 \int \frac{1}{x} \, dx =\\
&= \frac{x^3}{3} + 5x - 3 \ln |x| + C \quad (x \in \mathbb{R} \setminus \{0\})
\end{aligned}
$$

If given $D_f$ we can get rid of the absolute value.

## Example 8 (basic)

Determine the indefinite integral

$$
\int \frac{(x + 1)^2}{\sqrt{x}} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{(x + 1)^2}{\sqrt{x}} \, dx &= \int \frac{x^2 + 2x + 1}{\sqrt{x}} \, dx =\\
&= \int x^{\frac{3}{2}} + 2x^{\frac{1}{2}} + x^{-\frac{1}{2}} \, dx =\\
&= \frac{x^{\frac{5}{2}}}{\frac{5}{2}} + 2 \frac{x^{\frac{3}{2}}}{\frac{3}{2}} + 2 \sqrt{x} + C =\\
&= \frac{2}{5} x^{\frac{5}{2}} + \frac{4}{3} x^{\frac{3}{2}} + 2 \sqrt{x} + C =\\
&= \frac{2}{5} \sqrt{x^5} + \frac{4}{3} \sqrt{x^3} + 2 \sqrt{x} + C \quad (x \in (0, \infty))
\end{aligned}
$$

## Example 9 (linear substitution)

Determine the indefinite integral

$$
\int (3x + 2)^4 \, dx
$$

#### Solution

$$
\begin{aligned}
\int (3x + 2)^4 \, dx &\overset{(a = 3,\ b = 2)}{=}\frac{(3x + 2)^5}{3 \cdot 5} + C \quad
\end{aligned}
$$

## Example 10 (linear substitution)

Determine the indefinite integral

$$
\int \frac{1}{1 - 2x} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{1}{1 - 2x} \, dx &\overset{(a = -2,\ b = 1)}{=} \frac{\ln |1 - 2x|}{-2} + C
\end{aligned}
$$

## Example 11 (linear substitution)

Determine the indefinite integral

$$
\int \frac{1}{\sqrt{1 - 2x}} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{1}{\sqrt{1 - 2x}} \, dx &= \int (1 - 2x)^{-\frac{1}{2}} \, dx \overset{(a = -2,\ b = 1)}{=}\\
&= \frac{(1 - 2x)^{\frac{1}{2}}}{\frac{1}{2} \cdot (-2)} + C =\\
&= -\sqrt{1 - 2x} + C \quad (x \in \left(-\infty, \frac{1}{2}\right))
\end{aligned}
$$

## Example 12 (linear substitution)

Determine the indefinite integral

$$
\int \frac{1}{\sqrt{1 - 2x^2}} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{1}{\sqrt{1 - 2x^2}} \, dx &\overset{(a = \sqrt{2},\ b = 0)}{=} \frac{\arcsin \sqrt{2}x}{\sqrt{2}} + C
\end{aligned}
$$

## Example 13 (linear substitution)

Determine the indefinite integral

$$
\int \frac{2}{3 + 2x^2}
$$

#### Solution

$$
\begin{aligned}
\int \frac{2}{3 + 2x^2} &= \frac{2}{3} \int \frac{1}{1 + \left(\sqrt{\frac{2}{3}}x\right)^2} \, dx \overset{(a = \sqrt{\frac{2}{3}},\ b = 0)}{=}\\
&= \frac{\frac{2}{3} \arctan \left(\sqrt{\frac{2}{3}}x\right)}{\sqrt{\frac{2}{3}}} + C =\\
&= \sqrt{\frac{2}{3}} \arctan \left(\sqrt{\frac{2}{3}}x\right) + C
\end{aligned}
$$

## Example 14 (linear substitution)

Determine the indefinite integral

$$
\int \frac{1}{4x^2 - 4x + 2} \, dx
$$

#### Solution

$$
\begin{aligned}
\int \frac{1}{4x^2 - 4x + 2} \, dx &= \int \frac{1}{(4x^2 - 4x + 1) + 1} \, dx =\\
&= \int \frac{1}{1 + (2x - 1)^2} \, dx \overset{(a = 2,\ b = -1)}{=}\\
&= \frac{\arcsin (2x - 1)}{2} + C
\end{aligned}
$$

## Example 15 (linear substitution)

Determine the indefinite integral

$$
\int 5^{2 - 3x} \, dx
$$

#### Solution

$$
\begin{aligned}
\int 5^{2 - 3x} \, dx &\overset{(a = -3,\ b = 2)}{=} \frac{5^{2 - 3x}}{-3 \cdot \ln 5} + C
\end{aligned}
$$

## Example 16 (linear substitution)

Determine the indefinite integral

$$
\int \sin^2 x \, dx
$$

#### Solution

$$
1 = \cos^2 x + \sin^2 x
$$

$$
\cos 2x = cos^2 x - \sin^2 x
$$

$$
\begin{aligned}
\int \sin^2 x \, dx &= \int \frac{1 - \cos 2x}{2} \, dx =\\
&= \frac{1}{2} \int 1 \, dx - \frac{1}{2} \int \cos 2x \, dx \overset{(a = 2,\ b = 0)}{=}\\
&= \frac{x}{2} - \frac{\sin 2x}{4} + C
\end{aligned}
$$

## Example 17 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int x^2(2x^3 + 4)^{10} \, dx
$$

#### Solution

$$
(2x^3 + 4)' = 6x^2
$$

$$
\begin{aligned}
\int x^2(2x^3 + 4)^{10} \, dx &= \frac{1}{6} \int 6x^2(2x^3 + 4)^{10} \, dx \overset{\alpha = 10}{=}\\
&= \frac{(2x^3 + 4)^{11}}{6 \cdot 11} + C
\end{aligned}
$$

## Example 18 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \frac{x^2}{\sqrt[3]{6x^3 + 1}} \, dx
$$

#### Solution

$$
(6x^3 + 1)' = 18x^2
$$

$$
\begin{aligned}
\int \frac{x^2}{\sqrt[3]{6x^3 + 1}} \, dx &= \frac{1}{18} \int 18x^2 (6x^3 + 1)^{-\frac{1}{3}} \, dx \overset{\alpha = -\frac{1}{3}}{=}\\
&= \frac{(6x^3 + 1)^{\frac{2}{3}}}{18 \cdot \frac{2}{3}} + C =\\
&= \frac{\sqrt[3]{(6x^3 + 1)^2}}{12} + C
\end{aligned}
$$

## Example 19 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \frac{x}{x^2 + 3} \, dx
$$

#### Solution

$$
(x^2 + 3)' = 2x
$$

$$
\begin{aligned}
\int \frac{x}{x^2 + 3} \, dx &= \frac{1}{2} \int \frac{2x}{x^2 + 3} \, dx \overset{\alpha = -1}{=}\\
&= \frac{1}{2} \ln |x^2 + 3| + C =\\
&= \frac{1}{2} \ln (x^2 + 3) + C
\end{aligned}
$$

## Example 20 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \frac{e^x}{1 - 2e^x} \, dx
$$

#### Solution

$$
(1 - 2e^x)' = -2e^x
$$

$$
\begin{aligned}
\int \frac{e^x}{1 - 2e^x} \, dx &= -\frac{1}{2} \int \frac{-2e^x}{1 - 2e^x} \, dx \overset{\alpha = -1}{=}\\
&= -\frac{1}{2} \ln |1 - 2e^x| + C =\\
&= -\frac{1}{2} \ln (2e^x - 1) + C
\end{aligned}
$$

## Example 21 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \frac{1}{x\ln x} \, dx
$$

#### Solution

$$
(\ln x)' = \frac{1}{x}
$$

$$
\begin{aligned}
\int \frac{1}{x\ln x} \, dx &= \int \frac{\frac{1}{x}}{\ln x} \, dx \overset{\alpha = -1}{=}\\
&= \ln |\ln x| + C = \ln (\ln x) + C
\end{aligned}
$$

## Example 22 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \frac{1}{x\ln^2 x} \, dx
$$

#### Solution

$$
(\ln x)' = \frac{1}{x}
$$

$$
\begin{aligned}
\int \frac{1}{x\ln^2 x} \, dx &= \int \frac{1}{x} \cdot (\ln x)^{-2} \, dx \overset{\alpha = -2}{=}\\
&= \frac{(ln x)^{-1}}{-1} + C = -\frac{1}{\ln x} + C
\end{aligned}
$$

## Example 23 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \tan x \, dx
$$

#### Solution

$$
\tan x = \frac{\sin x}{\cos x}
$$

$$
(\cos x)' = -\sin x
$$

$$
\begin{aligned}
\int \tan x \, dx &= \int \frac{\sin x}{\cos x} \, dx =\\
&= -\int \frac{(-\sin x)}{\cos x} \, dx =\\
&= -\ln |\cos x| + C
\end{aligned}
$$

## Example 24 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \sin^3 x \, dx
$$

#### Solution

$$
\sin^3 x = \sin^2 x \cdot \sin x = (1 - \cos^2 x) \cdot \sin x = \sin x - \cos^2 x \sin x
$$

$$
\begin{aligned}
\int \sin^3 x \, dx &= \int \sin x - \cos^2 x \sin x \, dx =\\
&= -\cos x + \frac{\cos^3 x}{3} + C
\end{aligned}
$$

## Example 25 ($f^\alpha \cdot f'$ or $\frac{f'}{f}$)

Determine the indefinite integral

$$
\int \sin^2 x \cos^3 x \, dx
$$

#### Solution

$$
\begin{aligned}
\sin^2 x \cos^3 x &= \sin^2 x \cos^2 x \cos x = (1 - \cos^2 x) \cos^2 x \sin x =\\
&=\cos^2 x \sin x - \cos^4 x \sin x
\end{aligned}
$$

$$
\begin{aligned}
\int \sin^2 x \cos^3 x \, dx &= \int \cos^2 x \sin x - \cos^4 x \sin x \, dx =\\
&= -\frac{\cos^3 x}{3} + \frac{\cos^5 x}{5} + C
\end{aligned}
$$
