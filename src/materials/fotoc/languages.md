---
title: '[FOTOC] Languages'
---

# Languages

## Alphabet, Word

An **alphabet** $V$ is a finite non-empty set of symbols or letters.

A finite sequence of symbols or letters (string) is also called a **word** over $V$.

The set of all words over $V$ (including the empty word $\varepsilon$) is denoted by $V^*$.

The set of all non-empty words over $V$ is denoted by $V^+$.

### Length of a word

Let $u \in V^*$ be a word.

The **length** of $u$ is the number of symbols in $u$ and is denoted by $|u|$.

Note that $|\varepsilon| = 0$.

### Concatenation of words

Let $u, v \in V^*$ be words.

The **concatenation** of $u$ and $v$ is the word $uv$.

$V^*$ is a **monoid** with respect to concatenation, meaning that concatenation is associative and has an identity element, namely, $\varepsilon u = u = u \varepsilon$ for all $u \in V^*$.

### Subword

Two words over $V$ are equal if they have the same length and the same symbols at each position.

A word $u \in V^*$ is a **subword** or **part** of a word $v \in V^*$ if there exist words $x, y \in V^*$ such that $v = xuy$.

$u$ is a **proper subword** of $v$ if $u \neq v$, so at least one of $x$ and $y$ is non-empty.

### Prefix, Suffix

A word $u \in V^*$ is a **prefix** of a word $v \in V^*$ if there exists a word $x \in V^*$ such that $v = ux$.

A word $u \in V^*$ is a **suffix** of a word $v \in V^*$ if there exists a word $x \in V^*$ such that $v = xu$.

### Reversal (mirror image)

The **reversal** or **mirror image** of a word $u \in V^*$ is the word $u^R$ obtained by writing the symbols of $u$ in reverse order.

For $u = a_1 a_2 \ldots a_n$, we have $u^R = a_n \ldots a_2 a_1$, where $1 \leq i \leq n$.

### Power of a word

Let $i \in \mathbb{N^+}$ and $u \in V^*$ be a word.

The **power** of $u$ or the $i$-th time concatenation of $u$ is the word $u^i$, meaning that $i$ copies of $u$ are concatenated.

By convention, $u^0 = \varepsilon$.

## Language

For an alphabet $V$, a subset $L \subseteq V^*$ is called a **language** over $V$.

The empty language is denoted by $L = \emptyset$.

A language is **finite** if it contains a finite number of words, and **infinite** otherwise.

### Occurrence of symbols

Notation $N_a(u)$ denotes the number of occurrences of symbol $a$ in word $u$.

### Operations on languages

Let $L_1, L_2 \subseteq V^*$ be languages.

#### Union

The **union** of $L_1$ and $L_2$ is the language $L_1 \cup L_2 = \{u \mid u \in L_1 \lor u \in L_2\}$

Meaning that $L_1 \cup L_2$ contains words that are in either $L_1$ or $L_2$.

#### Intersection

The **intersection** of $L_1$ and $L_2$ is the language $L_1 \cap L_2 = \{u \mid u \in L_1 \land u \in L_2\}$

Meaning that $L_1 \cap L_2$ contains words that are in both $L_1$ and $L_2$.

#### Difference

The **difference** of $L_1$ and $L_2$ is the language $L_1 \setminus L_2 = \{u \mid u \in L_1 \land u \notin L_2\}$

Can also be denoted by $L_1 - L_2$.

Meaning that $L_1 \setminus L_2$ contains words that are in $L_1$ but not in $L_2$.

#### Complement

The **complement** of $L_1$ is the language $\overline{L_1} = V^* \setminus L_1 = \{u \mid u \in V^* \land u \notin L_1\}$

Meaning that $\overline{L_1}$ contains all words over $V$ that are not in $L_1$.

#### Reversal

The **reversal** of $L_1$ is the language $L_1^R = \{u^R \mid u \in L_1\}$

Meaning that $L_1^R$ contains the reversal of all words in $L_1$.

#### Concatenation

The **concatenation** of $L_1$ and $L_2$ is the language $L_1L_2 = \{uv \mid u \in L_1 \land v \in L_2\}$

Meaning that $L_1L_2$ contains words that represent all possible concatenations of words from $L_1$ and $L_2$.

#### Power

The **power** of $L_1$ is the language $L_1^i = \{u_1u_2\ldots u_i \mid u_1, u_2, \ldots, u_i \in L_1\}$

Meaning that $L_1^i$ contains words that represent all possible concatenations of $i$ words from $L_1$.

Note that $L_1^0 = \{\varepsilon\}$ and $L_1^i = L_1 L_1^{i-1}$ for $i \geq 1$.

#### Closure

The **closure** of $L_1$ is the language $L_1^* = \bigcup_{i=0}^{\infty} L_1^i$

Meaning that $L_1^*$ contains words that represent all possible concatenations of any number of words from $L_1$.

#### Positive closure

The **positive closure** of $L_1$ is the language $L_1^+ = \bigcup_{i=1}^{\infty} L_1^i$

Meaning that $L_1^+$ contains words that represent all possible concatenations of at least one word from $L_1$.

Note that $L_1^+ = L_1^*$ if $\varepsilon \in L_1$ and $L_1^+ = L_1^* - \{\varepsilon\}$ if $\varepsilon \notin L_1$.

#### Prefix

The **prefix** of $L_1$ is the language $\text{Pre}(L_1) = \{u \mid u \in V^* \land \exists v \in L_1 : v = ux\}$

Meaning that $\text{Pre}(L_1)$ contains all prefixes of words in $L_1$.

#### Suffix

The **suffix** of $L_1$ is the language $\text{Suf}(L_1) = \{u \mid u \in V^* \land \exists v \in L_1 : v = xu\}$

Meaning that $\text{Suf}(L_1)$ contains all suffixes of words in $L_1$.

### Homomorphism

A **homomorphism** is a function $h : V_1^* \to V_2^*$ that maps symbols of alphabet $V_1$ to words over alphabet $V_2$, given that $h(\varepsilon) = \varepsilon$ and $h(uv) = h(u)h(v)$ for all $u, v \in V_1^*$.

#### Image of a language

The **image** of a language $L_1$ under homomorphism $h$ is the language $h(L_1) = \{h(u) \mid u \in L_1\}$

Meaning that $h(L_1)$ contains all words that are obtained by applying $h$ to words in $L_1$.

## Example 1

Let $u = ababb$ and $v = cbb$.

Find $u^R$, $uv$, $vu$, list prefixes and suffixes of $u$, and find $u^0$, $u^1$, $u^2$, $u^3$.

### Solution

$$
u^R = bbaba
$$

$$
uv = ababbcbb
$$

$$
vu = cbbababb
$$

Prefixes of $u$:

- $\varepsilon$
- $\text{a}$
- $\text{ab}$
- $\text{aba}$
- $\text{abab}$
- $\text{ababb}$

Suffixes of $u$:

- $\varepsilon$
- $b$
- $bb$
- $abb$
- $babb$
- $ababb$

$$
u^0 = \varepsilon
$$

$$
u^1 = ababb
$$

$$
u^2 = ababbababb
$$

$$
u^3 = ababbababbababb
$$

## Example 2

Let $V = \{a, b\}$ and $L_1 = \{ {\color{red} ab, bb} \}$, $L_2 = \{ {\color{blue} \varepsilon, a, bba} \}$.

Find $L_1 L_2$.

### Solution

$$
\begin{align}
L_1 L_2 &= \{ {\color{red} ab} {\color{blue} \varepsilon}, {\color{red} bb} {\color{blue} \varepsilon}, {\color{red} ab} {\color{blue} a}, {\color{red} bb} {\color{blue} a}, {\color{red} ab} {\color{blue} bba}, {\color{red} bb} {\color{blue} bba} \} \\
&= \{ {\color{red} ab}, {\color{red} bb}, {\color{red} ab} {\color{blue} a}, {\color{red} bb} {\color{blue} a}, {\color{red} ab} {\color{blue} bba}, {\color{red} bb} {\color{blue} bba} \}
\end{align}
$$

## Example 3

Let $L = \{ {\color{red} a}, {\color{blue} bb} \}$.

Find $L^0$, $L^1$, $L^2$, $L^3$, $L^*$, $L^+$.

### Solution

$$
L^0 = \{ \varepsilon \}
$$

$$
L^1 = \{ {\color{red} a}, {\color{blue} bb} \}
$$

$$
L^2 = \{ {\color{red} a} {\color{red} a}, {\color{red} a} {\color{blue} bb}, {\color{blue} bb} {\color{red} a}, {\color{blue} bb} {\color{blue} bb} \}
$$

$$
L^3 = \{ {\color{red} a} {\color{red} a} {\color{red} a}, {\color{red} a} {\color{red} a} {\color{blue} bb}, {\color{red} a} {\color{blue} bb} {\color{red} a}, {\color{red} a} {\color{blue} bb} {\color{blue} bb}, {\color{blue} bb} {\color{red} a} {\color{red} a}, {\color{blue} bb} {\color{red} a} {\color{blue} bb}, {\color{blue} bb} {\color{blue} bb} {\color{red} a}, {\color{blue} bb} {\color{blue} bb} {\color{blue} bb} \}
$$

$$
L^* = \{ \varepsilon, {\color{red} a}, {\color{blue} bb}, {\color{red} a} {\color{red} a}, {\color{red} a} {\color{blue} bb}, {\color{blue} bb} {\color{red} a}, {\color{blue} bb} {\color{blue} bb}, {\color{red} a} {\color{red} a} {\color{red} a}, {\color{red} a} {\color{red} a} {\color{blue} bb}, {\color{red} a} {\color{blue} bb} {\color{red} a}, {\color{red} a} {\color{blue} bb} {\color{blue} bb}, {\color{blue} bb} {\color{red} a} {\color{red} a}, {\color{blue} bb} {\color{red} a} {\color{blue} bb}, {\color{blue} bb} {\color{blue} bb} {\color{red} a}, {\color{blue} bb} {\color{blue} bb} {\color{blue} bb}, \ldots \}
$$

$$
L^+ = \{ {\color{red} a}, {\color{blue} bb}, {\color{red} a} {\color{red} a}, {\color{red} a} {\color{blue} bb}, {\color{blue} bb} {\color{red} a}, {\color{blue} bb} {\color{blue} bb}, {\color{red} a} {\color{red} a} {\color{red} a}, {\color{red} a} {\color{red} a} {\color{blue} bb}, {\color{red} a} {\color{blue} bb} {\color{red} a}, {\color{red} a} {\color{blue} bb} {\color{blue} bb}, {\color{blue} bb} {\color{red} a} {\color{red} a}, {\color{blue} bb} {\color{red} a} {\color{blue} bb}, {\color{blue} bb} {\color{blue} bb} {\color{red} a}, {\color{blue} bb} {\color{blue} bb} {\color{blue} bb}, \ldots \}
$$

## Example 4

Let $V = \{a, b\}$ and $L = \{ba^{2n+1} \mid n \in \mathbb{N}\}$.

Find $L^R$.

### Solution

$$
L^R = \{ (ba^{2n+1})^R \mid n \in \mathbb{N} \} = \{ a^{2n+1}b \mid n \in \mathbb{N} \}
$$

## Example 5

Let $L = \{ {\color{red} cab}, {\color{blue} cbab} \}$.

Find $\text{Pre}(L)$ and $\text{Suf}(L)$.

### Solution

$$
\text{Pre}(L) = \{ \varepsilon, {\color{red} c}, {\color{red} ca}, {\color{red} cab}, \cancelto{\text{repeat}}{{\color{blue} c}}, {\color{blue} cb}, {\color{blue} cba}, {\color{blue} cbab} \} = \{ \varepsilon, c, ca, cab, cb, cba, cbab \}
$$

$$
\text{Suf}(L) = \{ \varepsilon, {\color{red} b}, {\color{red} ab}, {\color{red} cab}, \cancelto{\text{repeat}}{{\color{blue} b}}, \cancelto{\text{repeat}}{{\color{blue} ab}}, {\color{blue} bab}, {\color{blue} cbab} \} = \{ \varepsilon, b, ab, cab, bab, cbab \}
$$

## Example 6

Let $V_1 = \{a, b\}$, $V_2 = \{b, c\}$, $L = \{a^n b a^n \mid n \in \mathbb{N}\}$.

$h : V_1^* \to V_2^*$ be a homomorphism such that $h(a) = cc$ and $h(b) = cbb$.

Find $h(L)$.

### Solution

$$
\begin{align}
h(L) &= \{ h(a^n b a^n) \mid n \in \mathbb{N} \} =\\
&= \{ h(a^n) h(b) h(a^n) \mid n \in \mathbb{N} \} =\\
&= \{ (cc)^n cbb (cc)^n \mid n \in \mathbb{N} \} = \\
&= \{ c^{2n+1} b^2 c^{2n} \mid n \in \mathbb{N} \}
\end{align}
$$

## Example 7

Let $V = \{a, b\}$,

$L_1 = \{a^{2n+1}b \mid n \geq 0\} \quad L_2 = \{a^n b^n \mid n \geq 0\} \quad L_3 = \{a^{2n} \mid n \geq 0\}$

Find

- $L_1 \cap L_2$
- $L_2 \cap L_3$
- $L_1 \cap L_3$
- $L_1 \cup L_2$
- $L_1 L_2$
- $L_1^2$
- $L_1^*$
- $Pre(L_1)$
- $Suf(L_1)$
- $\overline{L_3}$

### Solution

- $L_1 \cap L_2$

$$
L_1 \cap L_2 = \{ a^{2n+1}b \mid n \geq 0\} \cap \{ a^n b^n \mid n \geq 0 \} = \{ ab \}
$$

- $L_2 \cap L_3$

$$
L_2 \cap L_3 = \{ a^n b^n \mid n \geq 0 \} \cap \{ a^{2n} \mid n \geq 0 \} = \{ \varepsilon \}
$$

- $L_1 \cap L_3$

$$
L_1 \cap L_3 = \{ a^{2n+1}b \mid n \geq 0 \} \cap \{ a^{2n} \mid n \geq 0 \} = \emptyset
$$

- $L_1 \cup L_2$

$$
L_1 \cup L_2 = \{ a^{2n+1}b \mid n \geq 0 \} \cup \{ a^n b^n \mid n \geq 0 \}
$$

- $L_1 L_2$

$$
L_1 L_2 = \{ a^{2n+1}b a^n b^n \mid n \geq 0 \}
$$

- $L_1^2$

$$
L_1^2 = \{ a^{2n+1}b a^{2m+1}b \mid n, m \geq 0 \}
$$

- $L_1^*$

$$
L_1^* = \{ a^{2n+1}b \mid n \geq 0 \}^* = \{ \varepsilon, ab, abab, \ldots, a^3b, a^3ba^3b, \ldots \}
$$

- $Pre(L_1)$

$$
\begin{align}
Pre(L_1) &= \{ \varepsilon, a, a^2, a^3, \ldots, a^{2n+1}, a^{2n+1}b \mid n \geq 0 \} =\\
&= \{ a^n \mid n \geq 0 \} \cup \{ a^{2n+1}b \mid n \geq 0 \}
\end{align}
$$

- $Suf(L_1)$

$$
\begin{align}
Suf(L_1) &= \{ \varepsilon, b, ab, a^2b, \ldots, a^{2n+1}b \mid n \geq 0 \} =\\
&= \{\varepsilon\} \cup \{ a^nb \mid n \geq 0 \}
\end{align}
$$

## Example 8

Let $L = \{(ab)^n b^{2n+1} \mid n \in \mathbb{N}\}$, $h(a) = xyy$, $h(b) = yy$.

Find $h(L)$.

### Solution

$$
\begin{align}
h(L) &= \{ h((ab)^n b^{2n+1}) \mid n \in \mathbb{N} \} =\\
&= \{ h(ab)^n h(b)^{2n+1} \mid n \in \mathbb{N} \} =\\
&= \{ (xyy yy)^n (yy)^{2n+1} \mid n \in \mathbb{N} \} =\\
&= \{ x^n y^{4n} y^{4n+2} \mid n \in \mathbb{N} \} =\\
&= \{ x^n y^{8n+2} \mid n \in \mathbb{N} \}
\end{align}
$$
