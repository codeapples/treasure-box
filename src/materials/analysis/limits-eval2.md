---
title: '[A-1] Evaluating limits II'
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
