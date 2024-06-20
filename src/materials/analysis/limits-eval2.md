---
title: '[A1] Evaluating limits II'
---

# Evaluating limits II

## Indeterminate limits of functions

- $(+\infty) - (+\infty)$

- $(+\infty) + (-\infty)$

- $0 \cdot (\pm\infty)$

- $\frac{\pm\infty}{\pm\infty}$

- $\frac{0}{0}$

- $\frac{c}{0}$ - can be $+\infty$ or $-\infty$

When you have a limit of type $\frac{c}{0}$, you should also investigate one-sided limits possibility.

## Special limits

#### $\lim_{x \to 0} \frac{\sin x}{x}$

$$
\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{x - \frac{x^3}{3!} + \frac{x^5}{5!} - \ldots}{x} = \lim_{x \to 0} \left(1 - \frac{x^2}{3!} + \frac{x^4}{5!} - \ldots\right) = 1
$$

$$
lim_{x \to 0} \frac{\sin (ax)}{ax} \underset{t = ax}{=} \lim_{t \to 0} \frac{\sin t}{t} = 1
$$

#### $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$

$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{\frac{x^2}{2!} - \frac{x^4}{4!} + \ldots}{x^2} = \lim_{x \to 0} \left(\frac{1}{2!} - \frac{x^2}{4!} + \ldots\right) = \frac{1}{2}
$$

$$
\lim_{x \to 0} \frac{1 - \cos (ax)}{x^2} \underset{t = ax}{=} \lim_{t \to 0} \frac{1 - \cos t}{t^2} = \frac{1}{2}
$$

#### $\lim_{x \to 0} \frac{e^x - 1}{x}$

$$
\lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots - 1}{x} = \lim_{x \to 0} \left(1 + \frac{x}{2!} + \frac{x^2}{3!} + \ldots\right) = 1
$$

$$
\lim_{x \to 0} \frac{e^{ax} - 1}{ax} \underset{t = ax}{=} \lim_{t \to 0} \frac{e^t - 1}{t} = 1
$$

#### $\lim_{x \to 0} \frac{e^{-x} - 1}{x}$

$$
\lim_{x \to 0} \frac{e^{-x} - 1}{x} = \lim_{x \to 0} \frac{1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \ldots - 1}{x} = \lim_{x \to 0} \left(-1 + \frac{x}{2!} - \frac{x^2}{3!} + \ldots\right) = -1
$$

#### Some useful transformations

$\sin -x = -\sin x$

$\sinh -x = -\sinh x$

$\cos -x = \cos x$

$\cosh -x = \cosh x$

$e^x = \cosh x + \sinh x$

$e^{-x} = \cosh x - \sinh x$

$e^x + e^{-x} = 2 \cosh x$

$1 = \cos^2 x + \sin^2 x$

$1 = \cosh^2 x - \sinh^2 x$

$\cos (x + y) = \cos x \cos y - \sin x \sin y$

$\sin (x + y) = \sin x \cos y + \cos x \sin y$

$\cos (x - y) = \cos x \cos y + \sin x \sin y$

$\sin (x - y) = \sin x \cos y - \cos x \sin y$

$\sin 2x = 2 \sin x \cos x$

$\cos 2x = \cos^2 x - \sin^2 x$

## Example 1

Determine the following limit:

$$
\lim_{x \to 2} \frac{x^3 - 8}{x^2 + x - 6} = \frac{2^3 - 8}{2^2 + 2 - 6} = \frac{0}{0}
$$

The limit is indeterminate, so we can factorize the numerator and denominator:

$$
\lim_{x \to 2} \frac{x^3 - 8}{x^2 + x - 6} = \lim_{x \to 2} \frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 3)} = \lim_{x \to 2} \frac{x^2 + 2x + 4}{x + 3} =
$$

$$
= \frac{2^2 + 2 \cdot 2 + 4}{2 + 3} = \frac{12}{5}
$$

## Example 2

Determine the following limit:

$$
\lim_{x \to -1} \frac{x^2 + x - 3}{x^2 + 2x + 1} = \frac{(-1)^2 + (-1) - 3}{(-1)^2 + 2 \cdot (-1) + 1} = \frac{1 - 1 - 3}{1 - 2 + 1} = \frac{-3}{0}
$$

The limit is of type $\frac{c}{0}$, we only need to determine if it is $+\infty$ or $-\infty$:

$$
\lim_{x \to -1} \frac{x^2 + x - 3}{x^2 + 2x + 1} = \lim_{x \to -1} \underbrace{x^2 + x - 3}_{\to -3} \cdot \underbrace{\frac{1}{(x + 1)^2}}_{\to +\infty} =
$$

Limit $\lim_{x \to -1} \frac{1}{(x + 1)^2}$ is positive when approaching $-1$ from both sides.

$$
= -3 \cdot (+\infty) = -\infty
$$

## Example 3

Determine the following limit:

$$
\lim_{x \to \infty} \frac{x^3 + x - 3}{-x^2 + 2x + 1} = \frac{+\infty}{-\infty}
$$

Limit at infinity, so factor out dominant terms:

$$
\lim_{x \to \infty} \frac{x^3 + x - 3}{-x^2 + 2x + 1} = \lim_{x \to \infty} \frac{x^3(1 + \frac{1}{x^2} - \frac{3}{x^3})}{x^2(-1 + \frac{2}{x} + \frac{1}{x^2})} =
$$

$$
= \lim_{x \to \infty} \frac{x(1 + \frac{1}{x^2} - \frac{3}{x^3})}{-1 + \frac{2}{x} + \frac{1}{x^2}} = \frac{+\infty\cdot (1 + 0 - 0)}{-1 + 0 + 0} = \frac{+\infty}{-1} = -\infty
$$

## Example 4

Determine the following limit:

$$
\lim_{x \to \infty} \frac{x^2 + x - 3}{x^3 + 2x + 1} = \frac{+\infty}{+\infty}
$$

Limit at infinity, so factor out dominant terms:

$$
\lim_{x \to \infty} \frac{x^2 + x - 3}{x^3 + 2x + 1} = \lim_{x \to \infty} \frac{x^2(1 + \frac{1}{x} - \frac{3}{x^2})}{x^3(1 + \frac{2}{x^2} + \frac{1}{x^3})} =
$$

$$
= \lim_{x \to \infty} \frac{1 + \frac{1}{x} - \frac{3}{x^2}}{x(1 + \frac{2}{x^2} + \frac{1}{x^3})} = \frac{1 + 0 - 0}{+\infty \cdot (1 + 0 + 0)} = 0
$$

## Example 5

Determine the following limit:

$$
\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \frac{1^3 - 1}{1^2 - 1} = \frac{0}{0}
$$

The limit is indeterminate, so we can factorize the numerator and denominator:

Friendly reminder: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$

$$
\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \lim_{x \to 1} \frac{x^2 + x + 1}{x + 1} =
$$

$$
= \frac{1^2 + 1 + 1}{1 + 1} = \frac{3}{2}
$$

## Example 6

Determine the following limit:

$$
\lim_{x \to 2} \frac{x^2 + 2x - 7}{x^2 - 5x + 6} = \frac{2^2 + 2 \cdot 2 - 7}{2^2 - 5 \cdot 2 + 6} = \frac{1}{0}
$$

The limit is of type $\frac{c}{0}$, we only need to determine if it is $+\infty$ or $-\infty$:

$$
\lim_{x \to 2} \frac{x^2 + 2x - 7}{x^2 - 5x + 6} = \lim_{x \to 2} \frac{x^2 + 2x - 7}{(x - 3)(x - 2)} = \lim_{x \to 2} \underbrace{\frac{x^2 + 2x - 7}{x - 3}}_{\to -1} \cdot \frac{1}{(x - 2)} =
$$

Limit $\lim_{x \to 2} \frac{1}{(x - 2)} = \pm\infty$ is negative when approaching $2$ from the left side, and positive when approaching $2$ from the right side.

$$
= -1 \cdot \pm\inf = \pm\infty
$$

$$
\lim_{x \to 2^-} \frac{x^2 + 2x - 7}{x^2 - 5x + 6} = +\infty
$$

$$
\lim_{x \to 2^+} \frac{x^2 + 2x - 7}{x^2 - 5x + 6} = -\infty
$$

## Example 7

Determine the following limit:

$$
\lim_{x \to 2} \frac{x^2 + 2x - 8}{x^2 - 5x + 6} = \frac{2^2 + 2 \cdot 2 - 8}{2^2 - 5 \cdot 2 + 6} = \frac{0}{0}
$$

The limit is indeterminate, so we can factorize the numerator and denominator:

$$
\lim_{x \to 2} \frac{x^2 + 2x - 8}{x^2 - 5x + 6} = \lim_{x \to 2} \frac{(x - 2)(x + 4)}{(x - 3)(x - 2)} = \lim_{x \to 2} \frac{x + 4}{x - 3} =
$$

$$
= \frac{2 + 4}{2 - 3} = -6
$$

## Example 8

Determine the following limit:

$$
\lim_{x \to \infty} \frac{2x^3 + 3x^2 + 23}{-3x^3 - 5x^2 + 31x + 1} = \frac{+\infty}{+\infty}
$$

Limit at infinity, so factor out dominant terms:

$$
\lim_{x \to \infty} \frac{2x^3 + 3x^2 + 23}{-3x^3 - 5x^2 + 31x + 1} = \lim_{x \to \infty} \frac{x^3(2 + \frac{3}{x} + \frac{23}{x^3})}{x^3(-3 - \frac{5}{x} + \frac{31}{x^2} + \frac{1}{x^3})} =
$$

$$
= \lim_{x \to \infty} \frac{2 + \frac{3}{x} + \frac{23}{x^3}}{-3 - \frac{5}{x} + \frac{31}{x^2} + \frac{1}{x^3}} = \frac{2 + 0 + 0}{-3 - 0 + 0 + 0} = -\frac{2}{3}
$$

## Example 9

Determine the following limit:

$$
\lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{1 - x^2} = \frac{\sqrt{1 + 3} - 2}{1 - 1^2} = \frac{2 - 2}{1 - 1} = \frac{0}{0}
$$

$$
\lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{1 - x^2} = \lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{(1 - x)(1 + x)} = \lim_{x \to 1} \frac{(\sqrt{x + 3} - 2)(\sqrt{x + 3} + 2)}{(1 - x)(1 + x)(\sqrt{x + 3} + 2)} =
$$

$$
= \lim_{x \to 1} \frac{x - 1}{(-1)(x - 1)(x + 1)(\sqrt{x + 3} + 2)} = \lim_{x \to 1} \frac{1}{(-1)(x + 1)(\sqrt{x + 3} + 2)} =
$$

$$
= \frac{1}{(-1)(1 + 1)(\sqrt{1 + 3} + 2)} = \frac{1}{-2 \cdot 4} = -\frac{1}{8}
$$

## Example 10

Determine the following limit:

$$
\lim_{x \to 0} \frac{x^2}{\sqrt[3]{1 + 5x} - x - 1} = \frac{0^2}{\sqrt[3]{1 + 5 \cdot 0} - 0 - 1} = \frac{0}{0}
$$

Try to introduce a variable $t = \sqrt[3]{1 + 5x}$:

$$
\lim_{t \to 1} \frac{\left(\frac{t^3 - 1}{5}\right)^2}{t - \frac{t^3 - 1}{5} - 1} = \lim_{t \to 1} \frac{1}{5} \cdot \frac{(t^3 - 1)^2}{5(t - 1) + (t^3 - 1)} =
$$

$$
= \frac{1}{5} \lim_{t \to 1} \frac{(t - 1)(t^2 + t + 1)(t^3 - 1)}{5(t - 1) + (t - 1)(t^2 + t + 1)} = \frac{1}{5} \lim_{t \to 1} \frac{(t^2 + t + 1)(t^3 - 1)}{5 + t^2 + t + 1} =
$$

$$
= \frac{1}{5} \cdot \frac{(1^2 + 1 + 1)(1^3 - 1)}{5 + 1 + 1 + 1} = \frac{3 \cdot 0}{8} = 0
$$

## Example 11

Determine the following limit:

$$
\lim_{x \to \infty} \sqrt{x^2 -x + 1} - \sqrt{x^2 - 1} = \infty - \infty
$$

$$
\lim_{x \to \infty} \frac{(\sqrt{x^2 -x + 1} - \sqrt{x^2 - 1})(\sqrt{x^2 -x + 1} + \sqrt{x^2 - 1})}{\sqrt{x^2 -x + 1} + \sqrt{x^2 - 1}} =
$$

$$
= \lim_{x \to \infty} \frac{x^2 - x + 1 - x^2 + 1}{\sqrt{x^2 -x + 1} + \sqrt{x^2 - 1}} = \lim_{x \to \infty} \frac{2 - x}{x(\sqrt{1 - \frac{1}{x} + \frac{1}{x^2}} + \sqrt{1 - \frac{1}{x^2}})} =
$$

$$
= \lim_{x \to \infty} \frac{x(\frac{2}{x} - 1)}{x(\sqrt{1 - \frac{1}{x} + \frac{1}{x^2}} + \sqrt{1 - \frac{1}{x^2}})} =
$$

$$
= \lim_{x \to \infty} \frac{0 - 1}{\sqrt{1 - 0 + 0} + \sqrt{1 - 0}} = -\frac{1}{2}
$$

## Example 12

Determine the following limit:

$$
\lim_{x \to 0} \frac{e^{7x} - e^{5x}}{x} = \frac{e^{7 \cdot 0} - e^{5 \cdot 0}}{0} = \frac{1 - 1}{0} = \frac{0}{0}
$$

$$
\lim_{x \to 0} \frac{e^{7x} - e^{5x}}{x} = \lim_{x \to 0} \frac{e^{5x}(e^{2x} - 1)}{x} =
$$

$$
= \lim_{x \to 0} e^{5x} \cdot \lim_{x \to 0} 2 \cdot \frac{e^{2x} - 1}{2x} = 1 \cdot 2 \cdot \lim_{x \to 0} \frac{e^{2x} - 1}{2x} =
$$

$$
= 1 \cdot 2 \cdot 1 = 2
$$

## Example 13

Determine the following limit:

$$
\lim_{x \to 0} \frac{\sin 8x}{\sin 3x} = \frac{0}{0}
$$

$$
\lim_{x \to 0} \frac{\sin 8x}{\sin 3x} = \lim_{x \to 0} \frac{\frac{\sin 8x}{x}}{\frac{\sin 3x}{x}} =
$$

$$
= \lim_{x \to 0} \frac{8 \cdot \frac{\sin 8x}{8x}}{3 \cdot \frac{\sin 3x}{3x}} = \frac{8 \cdot 1}{3 \cdot 1} = \frac{8}{3}
$$

## Example 14

Determine the following limit:

$$
\lim_{x \to 0} \frac{\sin 5x - \sin 3x}{\sin x} = \frac{0}{0}
$$

$$
\lim_{x \to 0} \frac{\sin 5x - \sin 3x}{\sin x} = \lim_{x \to 0} \frac{\sin 5x}{\sin x} - \frac{\sin 3x}{\sin x} =
$$

$$
= \lim_{x \to 0} \frac{5 \cdot \frac{\sin 5x}{5x}}{\frac{\sin x}{x}} - \frac{3 \cdot \frac{\sin 3x}{3x}}{\frac{\sin x}{x}} = 5 \cdot 1 - 3 \cdot 1 = 2
$$

## Example 15

Determine the following limit:

$$
\lim_{x \to 0} \frac{1 - \cos x}{x} = \frac{1 - \cos 0}{0} = \frac{0}{0}
$$

$$
\lim_{x \to 0} \frac{1 - \cos x}{x} = \lim_{x \to 0} x \cdot \frac{1 - \cos x}{x^2} =
$$

$$
= 0 \cdot \frac{1}{2} = 0
$$

## Example 16

Determine the following limit:

$$
\lim_{x \to 0} \frac{x^2}{\sqrt{1 + x \cdot \sin x} - \sqrt{\cos x}} = \frac{0^2}{\sqrt{1 + 0 \cdot \sin 0} - \sqrt{\cos 0}} = \frac{0}{0}
$$

$$
\lim_{x \to 0} \frac{x^2}{\sqrt{1 + x \cdot \sin x} - \sqrt{\cos x}} = \lim_{x \to 0} \frac{x^2(\sqrt{1 + x \cdot \sin x} + \sqrt{\cos x})}{(\sqrt{1 + x \cdot \sin x} - \sqrt{\cos x})(\sqrt{1 + x \cdot \sin x} + \sqrt{\cos x})} =
$$

$$
= \lim_{x \to 0} \frac{x^2(\sqrt{1 + x \cdot \sin x} + \sqrt{\cos x})}{1 + x \cdot \sin x - \cos x} = \lim_{x \to 0} \frac{\frac{x^2(\sqrt{1 + x \cdot \sin x} + \sqrt{\cos x})}{x^2}}{\frac{1 - \cos x}{x^2} + \frac{x \cdot \sin x}{x^2}} =
$$

$$
= \lim_{x \to 0} \frac{\sqrt{1 + x \cdot \sin x} + \sqrt{\cos x}}{\frac{1 - \cos x}{x^2} + \frac{x \cdot \sin x}{x^2}} = \frac{\sqrt{1 + 0 \cdot \sin 0} + \sqrt{\cos 0}}{\frac{1}{2} + 1} = \frac{1 + 1}{\frac{1}{2} + 1} = \frac{2}{\frac{3}{2}} = \frac{4}{3}
$$

## Example 17

Determine the following limit:

$$
\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \frac{0 - 0}{0^3} = \frac{0}{0}
$$

$\tan x = \frac{\sin x}{\cos x}$

$$
\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \lim_{x \to 0} \frac{\frac{\sin x}{\cos x} - \sin x}{x^3} =
$$

$$
= \lim_{x \to 0} \frac{\sin x (\frac{1}{\cos x} - 1)}{x^3} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \lim_{x \to 0} \frac{1 - \cos x}{x^2 \cdot \cos x} =
$$

$$
= \lim_{x \to 0} \frac{\sin x}{x} \cdot \lim_{x \to 0} \frac{1}{\cos x} \cdot \lim_{x \to 0} \frac{1 - \cos x}{x^2} = 1 \cdot 1 \cdot \frac{1}{2} = \frac{1}{2}
$$

<!-- ## Example 18

Determine the following limit:

$$
\lim_{x \to \frac{\pi}{3}} \frac{\sin (x - \frac{\pi}{3})}{1 - 2 \cos x} = \frac{\sin (0)}{1 - 2 \cos \frac{\pi}{3}} = \frac{0}{1 - 2 \cdot \frac{1}{2}} = \frac{0}{0}
$$

$$
\lim_{x \to \frac{\pi}{3}} \frac{\sin (x - \frac{\pi}{3})}{1 - 2 \cos x} = \lim_{x \to \frac{\pi}{3}} \frac{\sin x \cos \frac{\pi}{3} - \cos x \sin \frac{\pi}{3}}{1 - 2 \cos x} =
$$ -->
