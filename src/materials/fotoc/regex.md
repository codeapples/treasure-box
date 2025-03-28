---
title: '[FOTOC] Regular expressions'
---

# Regular Expressions

## Introduction to Regular Expressions

In the theory of computation, **regular expressions** are a powerful formal tool used to describe regular languages, which are the simplest class of languages in the Chomsky Hierarchy (Type 3 languages). Regular expressions provide a concise way to define patterns in strings, making them essential for tasks like pattern matching, lexical analysis in compilers, and defining the behavior of finite automata. They are built from basic elements using operations that correspond to the properties of regular languages, such as union, concatenation, and iterative closure (Kleene star).

## Motivation for Regular Expressions

Regular languages have a special property: all finite languages are regular. For example, consider the language $L = \{ab, b, bab\}$. This finite language can be generated by the Type 3 (regular) grammar with the start symbol $S$ and production rules $S \to ab \mid b \mid bab$. Since $L$ is finite, it is inherently regular.

Moreover, the class of regular languages ($L_3$) is closed under three key operations:

- **Union**: If $L_1$ and $L_2$ are regular, then $L_1 \cup L_2$ is regular.
- **Concatenation**: If $L_1$ and $L_2$ are regular, then $L_1 L_2$ (the set of strings formed by concatenating a string from $L_1$ with a string from $L_2$) is regular.
- **Kleene Star**: If $L$ is regular, then $L^*$ (the set of all strings formed by concatenating zero or more strings from $L$, including the empty string $\varepsilon$) is regular.

These operations allow us to build new regular languages from existing ones. For example, starting with finite languages (which are regular), we can apply union, concatenation, and Kleene star to generate more complex regular languages. This leads to a natural question: can we describe _all_ regular languages using a formal tool based on these operations? The answer is yes, and that tool is the **regular expression**. Regular expressions are designed to capture all regular languages, providing a way to define them algebraically.

## Definition of Regular Expressions

To define regular expressions formally, we need two alphabets:

- $V$: A finite alphabet of **symbols** (e.g., $V = \{a, b\}$), which are the basic building blocks of the language.
- $V' = \{\emptyset, \varepsilon, \cdot, +, *, (, )\}$: A set of **operator symbols** used to construct regular expressions. This set is disjoint from $V$ (i.e., $V \cap V' = \emptyset$).

The **set of regular expressions over $V$** is defined recursively as the smallest set satisfying the following rules:

1. $\emptyset$ is a regular expression (representing the empty language).
2. $\varepsilon$ is a regular expression (representing the language containing only the empty string).
3. $a$ is a regular expression for every $a \in V$ (representing the language containing only the single symbol $a$).
4. If $R$ is a regular expression, then $R^*$ is a regular expression (Kleene star, representing zero or more repetitions).
5. If $Q$ and $R$ are regular expressions, then $(Q \cdot R)$ is a regular expression (concatenation, representing strings formed by a string from $Q$ followed by a string from $R$).
6. If $Q$ and $R$ are regular expressions, then $(Q + R)$ is a regular expression (union, representing strings from either $Q$ or $R$).

### Alternative Notations

In practice, regular expressions are often written with simplified notations for readability:

- **Union**: Instead of $(Q + R)$, you might see $(Q \mid R)$ or $(Q \cup R)$.
- **Concatenation**: Instead of $(Q \cdot R)$, you might see $(Q;R)$ or simply $QR$ (omitting the dot). For example, $ab$ means $a \cdot b$.
- These notations are equivalent and used interchangeably depending on the context.

### Language Defined by a Regular Expression

Every regular expression $R$ over $V$ defines a language $L(R) \subseteq V^*$, which is the set of strings generated by $R$. The language $L(R)$ is defined recursively based on the structure of $R$:

1. $L(\emptyset) := \emptyset$ (the empty language, containing no strings).
2. $L(\varepsilon) := \{\varepsilon\}$ (the language containing only the empty string).
3. $L(a) := \{a\}$ for $a \in V$ (the language containing only the single symbol $a$).
4. $L(R^*) := L(R)^*$ (the Kleene star of the language $L(R)$, i.e., zero or more concatenations of strings from $L(R)$).
5. $L(Q \cdot R) := L(Q)L(R)$ (the concatenation of languages $L(Q)$ and $L(R)$, i.e., all strings of the form $uv$ where $u \in L(Q)$ and $v \in L(R)$).
6. $L(Q + R) := L(Q) \cup L(R)$ (the union of languages $L(Q)$ and $L(R)$, i.e., all strings that are in $L(Q)$, $L(R)$, or both).

### Correspondence Between Operations

The operations in regular expressions directly correspond to the operations on regular languages:

- The $+$ operation corresponds to union ($\cup$).
- The $\cdot$ operation corresponds to concatenation.
- The $*$ operation corresponds to the Kleene star ($^*$).

### Remark on Notation

In practice, we often blur the distinction between a regular expression $R$ and the language it defines $L(R)$ for simplicity. For example, we might say $ab^* = \{ab^n \mid n \in \mathbb{N}\}$ instead of the more precise $L(ab^*) = \{ab^n \mid n \in \mathbb{N}\}$. Here, $ab^*$ is the regular expression, and $\{ab^n \mid n \in \mathbb{N}\}$ is the language it defines, which includes strings like $a$, $ab$, $abb$, etc. This shorthand is common but should be understood as a simplification.

## Properties of Regular Expressions

Regular expressions satisfy several algebraic properties that make them easier to manipulate. Let $P$, $Q$, and $R$ be regular expressions. The following properties hold for the languages they define:

1. **Associativity of Union**: $P + (Q + R) = (P + Q) + R$
   The order of grouping in unions does not matter.
2. **Associativity of Concatenation**: $P \cdot (Q \cdot R) = (P \cdot Q) \cdot R$
   The order of grouping in concatenations does not matter.
3. **Commutativity of Union**: $P + Q = Q + P$
   Union is order-independent.
4. **Distributivity of Concatenation over Union (Left)**: $P \cdot (Q + R) = P \cdot Q + P \cdot R$
   Concatenating $P$ with a union of $Q$ and $R$ is the same as concatenating $P$ with $Q$ and $P$ with $R$, then taking the union.
5. **Distributivity of Concatenation over Union (Right)**: $(P + Q) \cdot R = P \cdot R + Q \cdot R$
   Similar to the left distributivity, but on the right side.
6. **Kleene Star Expansion**: $P^* = \varepsilon + P \cdot P^*$
   The Kleene star includes the empty string plus one or more repetitions of $P$.
7. **Identity for Concatenation**: $\varepsilon \cdot P = P \cdot \varepsilon = P$
   Concatenating with the empty string does not change the language.
8. **Alternative Kleene Star Form**: $P^* = (\varepsilon + P)^*$
   The Kleene star can be expressed as zero or more repetitions of $\varepsilon$ or $P$.
9. **Zero for Concatenation**: $P \cdot \emptyset = \emptyset \cdot P = \emptyset$
   Concatenating with the empty language yields the empty language.

### Simplifications and Notational Conventions

To make regular expressions more concise, we use the following conventions based on their properties:

- **Operator Precedence**: The operations have a priority order (from strongest to weakest): $^*$, $\cdot$, $+$. This means:
  - $^*$ binds most tightly: In $ab^*$, the $^*$ applies to $b$, not $ab$, so it means $a(b^*)$.
  - $\cdot$ is next: In $ab+c$, the concatenation $ab$ is evaluated first, so it means $(ab) + c$.
  - $+$ is weakest: In $a+b+c$, parentheses are needed to specify grouping, but associativity allows us to write it without them as $a + b + c$.
- **Omitting Parentheses**: If a regular expression is enclosed in parentheses and the outermost operation matches the intended grouping, the outer parentheses can be omitted. For example, $(a + b)$ can be written as $a + b$.
- **Chains of Operations**: Due to associativity, chains of $\cdot$ or $+$ do not need parentheses. For example, $a \cdot b \cdot c$ can be written without parentheses as $abc$, and $a + b + c$ does not need grouping.
- **Additional Notations**:
  - $R^+$: Shorthand for $R R^*$, meaning one or more repetitions of $R$. For example, $a^+$ means one or more $a$'s.
  - Specific Powers: We can write $(a^*b)^3$ to mean $a^*b a^*b a^*b$, representing exactly three repetitions of the pattern $a^*b$.

These simplifications make regular expressions easier to write and understand while preserving their meaning.

## Example: Constructing and Interpreting Regular Expressions

Let’s construct a regular expression and determine the language it defines. Consider $V = \{a, b\}$, and the regular expression $R = a^*b + ab^*$.

- **Break Down the Expression**:

  - $a^*$: Zero or more $a$'s, so $L(a^*) = \{\varepsilon, a, aa, aaa, \ldots\}$.
  - $a^*b$: Concatenation of $a^*$ and $b$, so $L(a^*b) = \{\varepsilon b, ab, aab, aaab, \ldots\} = \{a^n b \mid n \geq 0\}$.
  - $b^*$: Zero or more $b$'s, so $L(b^*) = \{\varepsilon, b, bb, bbb, \ldots\}$.
  - $ab^*$: Concatenation of $a$ and $b^*$, so $L(ab^*) = \{a\varepsilon, ab, abb, abbb, \ldots\} = \{ab^n \mid n \geq 0\}$.
  - $a^*b + ab^*$: Union of $a^*b$ and $ab^*$, so $L(a^*b + ab^*) = \{a^n b \mid n \geq 0\} \cup \{ab^n \mid n \geq 0\}$.

- **Simplify the Language**:
  - $\{a^n b \mid n \geq 0\}$ includes strings like $b$, $ab$, $aab$, etc.
  - $\{ab^n \mid n \geq 0\}$ includes strings like $a$, $ab$, $abb$, etc.
  - Their union includes strings that have at least one $b$, with $a$'s either before or after: $b$, $ab$, $aab$, $abb$, etc.
  - Notice that $a \in \{ab^n \mid n \geq 0\}$ (when $n=0$), and $b \in \{a^n b \mid n \geq 0\}$ (when $n=0$), so the language can be described as all strings with at least one $b$, and any number of $a$'s before or after the $b$'s.

Thus, $L(a^*b + ab^*)$ can be written as $a^* b a^* b^* \cup a^* b^* b a^*$, but a simpler form is to recognize that it includes all strings with at least one $b$, which can be written as $a^* b (a + b)^*$.

## Regular Expressions and Type 3 Grammars

Regular expressions are closely tied to Type 3 (regular) grammars, as both describe regular languages. We can construct Type 3 grammars that correspond to the regular operations (union, concatenation, and Kleene star) applied to regular languages. This demonstrates that regular expressions can indeed describe all regular languages, as they can be translated into equivalent Type 3 grammars.

### Union of Regular Languages

Given two Type 3 grammars $G_1 = (N_1, \Sigma, P_1, S_1)$ and $G_2 = (N_2, \Sigma, P_2, S_2)$ with $N_1 \cap N_2 = \emptyset$, we can construct a grammar for their union $L(G_1) \cup L(G_2)$:

- **Grammar for Union**: $G_{\text{union}} = (N_1 \cup N_2 \cup \{S\}, \Sigma, \{S \to S_1 \mid S_2\} \cup P_1 \cup P_2, S)$
- **Explanation**: The new start symbol $S$ can derive either $S_1$ (leading to strings in $L(G_1)$) or $S_2$ (leading to strings in $L(G_2)$). The rule $S \to S_1 \mid S_2$ is of Type 3 form ($A \to u B$), and since $G_1$ and $G_2$ are Type 3, the resulting grammar remains Type 3.
- **Language Generated**: $L(G_{\text{union}}) = L(G_1) \cup L(G_2)$.

### Concatenation of Regular Languages

Given two Type 3 grammars $G_1 = (N_1, \Sigma, P_1, S_1)$ and $G_2 = (N_2, \Sigma, P_2, S_2)$ with $N_1 \cap N_2 = \emptyset$, we can construct a grammar for their concatenation $L(G_1)L(G_2)$:

- **Identify Terminal Rules in $G_1$**: Let $P_{1,\text{term}} = \{A \to u \mid A \to u \in P_1, A \in N_1, u \in \Sigma^*\}$ be the rules in $G_1$ that produce terminal strings.
- **Modify Terminal Rules**: Create $P'_{1,\text{term}} = \{A \to u S_2 \mid A \to u \in P_{1,\text{term}}, A \in N_1, u \in \Sigma^*\}$ by replacing each terminal-producing rule with one that starts $G_2$’s derivation.
- **Grammar for Concatenation**: $G_{\text{concatenation}} = (N_1 \cup N_2, \Sigma, (P_1 \setminus P_{1,\text{term}}) \cup P'_{1,\text{term}} \cup P_2, S_1)$
- **Explanation**: When $G_1$ reaches a terminal string $u$, instead of stopping, it now produces $u S_2$, allowing $G_2$ to generate a string $v$ from $S_2$, resulting in $uv$. The modified rules are still of Type 3 form ($A \to u B$ or $A \to u$), so the grammar remains Type 3.
- **Language Generated**: $L(G_{\text{concatenation}}) = L(G_1)L(G_2)$.

### Kleene Star of a Regular Language

Given a Type 3 grammar $G = (N, \Sigma, P, S)$, we can construct a grammar for its Kleene star $L(G)^*$:

- **Identify Terminal Rules**: Let $P_{\text{term}} = \{A \to u \mid A \to u \in P, A \in N, u \in \Sigma^*\}$ be the rules that produce terminal strings.
- **Modify Terminal Rules**: Create $P'_{\text{term}} = \{A \to u S \mid A \to u \in P_{\text{term}}, A \in N, u \in \Sigma^*\}$ to allow restarting the derivation.
- **Grammar for Kleene Star**: $G_{\text{Kleene-star}} = (N \cup \{S'\}, \Sigma, \{S' \to S \mid \varepsilon\} \cup (P \setminus P_{\text{term}}) \cup P'_{\text{term}}, S')$
- **Explanation**: The new start symbol $S'$ can either produce $\varepsilon$ (for zero repetitions) or start a derivation with $S$. Each time $G$ produces a terminal string $u$, the modified rule $A \to u S$ allows restarting the derivation to produce another string, enabling zero or more repetitions. The rules are of Type 3 form, and the grammar remains Type 3.
- **Language Generated**: $L(G_{\text{Kleene-star}}) = L(G)^*$.

### Computational Model

Regular languages, as defined by regular expressions or Type 3 grammars, correspond to languages accepted by **finite automata** (the simplest computational model in the Chomsky Hierarchy). This connection makes regular expressions a practical tool for designing and understanding finite state machines in computer science applications.

## Notable Regular Expressions

- arbitrary string constructed with two symbols:

$$
(a + b)^*
$$

- arbitrary string constructed with three symbols, which doesn't allow certain substrings:

$$
\begin{align}
ab &\nsubseteq (b + a^*c)^*a^*\\
ac &\nsubseteq (c + a^*b)^*a^*\\
aa &\nsubseteq (b + c + a(b + c))^*(a + \varepsilon)
\end{align}
$$

- arbitrary string constructed with two symbols, with even number of $a$'s:

$$
(b^*ab^*a)^*b^*
$$

- arbitrary string constructed with two symbols, with odd number of $a$'s:

$$
(b^*ab^*a)^*b^*ab^*
$$

## Example 1

Determine the language described by the following regular expression.

$$
0(0 + 1)^*1
$$

#### Solution

**Break Down the Expression**:

- $0$: The string must start with a $0$.
- $(0 + 1)^*$: After the initial $0$, there can be any combination of $0$'s and $1$'s (including none).
- $1$: The string must end with a $1$.

**Language Generated**:

$$
L(0(0 + 1)^*1) = \{0w1 \mid w \in \{0, 1\}^*\}
$$

## Example 2

Determine the language described by the following regular expression.

$$
((a + b)^*a(a + b)^*)^+
$$

#### Solution

**Break Down the Expression**:

- $((a + b)^*a(a + b)^*)^+$: The outer $^+$ indicates one or more repetitions of the inner expression.
- $(a + b)^*$: Any combination of $a$'s and $b$'s (including none).
- $a$: The string must contain at least one $a$.

**Language Generated**:

$$
L(((a + b)^*a(a + b)^*)^+) = \{w \in \{a, b\}^* \mid N_a(w) \geq 1\}
$$

## Example 3

Determine the language described by the following regular expression.

$$
(\varepsilon + 1)^*0^*001(111)*
$$

#### Solution

**Break Down the Expression**:

- $(\varepsilon + 1)^*$: The string can start with any number of $1$'s (including none).
- $0^*$: After the $1$'s, there can be any number of $0$'s (including none).
- $001$: The string must contain the substring $001$.
- $(111)^*$: After $001$, there may be a number of $1$'s divisible by 3 (including none).

**Language Generated**:

$$
L((\varepsilon + 1)^*0^*001(111)^*) = \{1^n0^m001(111)^l \mid n, m, l \in \mathbb{N}\}
$$

## Example 4

Make regular expressions decribing the following languages.

$$
\{ u \in \{0, 1\}^* \mid u \text{ contains at least one } 1 \}
$$

#### Solution

**Regular Expression**:

$$
(0^*10^*)^+
$$

**Explanation**: The expression captures strings that contain at least one $1$ surrounded by any number of $0$'s. The outer $^+$ ensures that there is at least one occurrence of the pattern.

## Example 5

Make regular expressions decribing the following languages.

$$
\{ u \in \{c, d\}^* \mid \text{ either the second letter of u is c, or u contains exactly two d's} \}
$$

#### Solution

**Regular Expression**:

$$
(c + d)c(c + d)^* + c^*dc^*dc^*
$$

**Explanation**: The first part $(c + d)c(c + d)^*$ captures strings where the second letter is $c$, while the second part $c^*dc^*dc^*$ captures strings with exactly two $d$'s. The union of these two parts gives the desired language.

## Example 6

Make regular expressions decribing the following languages.

$$
\{ a^{2n+1}b \mid n \in \mathbb{N} \}
$$

#### Solution

**Regular Expression**:

$$
(aa)^*a b
$$

**Explanation**: The expression captures strings with an odd number of $a$'s followed by a single $b$. The outer $(aa)^*$ ensures that there are pairs of $a$'s, and the final $a$ ensures that the total count is odd.

## Example 7

Make regular expressions decribing the following languages.

$$
\{ u \in \{0, 1\}^* \mid u \text{ contains an even number of 1's } \}
$$

#### Solution

**Regular Expression**:

$$
(0^*10^*1)^*0^*
$$

**Explanation**: The expression captures strings with pairs of $1$'s, ensuring an even count. The outer $(0^*10^*1)^*$ allows for any number of pairs with $0$'s in between, and the final $0^*$ allows for any number of trailing $0$'s or $0$'s alone.

## Example 8

Make a type 3 grammar generating the language described by the regular expression.

$$
(\varepsilon + 1)^*0^*001(111)^*
$$

#### Solution

**Type 3 Grammar**:

$G = (N, \Sigma, P, S)$

$\Sigma = \{0, 1\}$

$P = \{S \to 1S \mid 0A, A \to 0A \mid 0B, B \to 1C, C \to 1C_1 \mid \varepsilon, C_1 \to 1C_2, C_2 \to 1C \}$

$N = \{S, A, B, C, C_1, C_2\}$

$S$ is the start symbol.

** Explanation**: The grammar generates strings that start with any number of $1$'s (including none), followed by any number of $0$'s (including none), then the substring $001$, and finally any number of $111$'s (including none). The rules are of Type 3 form, ensuring the grammar is valid.

## Example 9

Make a type 3 grammar generating the language described by the regular expression.

$$
(ba(a + bb)^* + aa)^*ab^*
$$

#### Solution

**Type 3 Grammar**:

$G = (N, \Sigma, P, S)$

$\Sigma = \{a, b\}$

$\begin{align}
P &= \{\\
& S \to aA \mid bB \mid aE \\
& A \to aS \\
& B \to aC \mid aS \\
& C \to aC \mid aS \mid bC \\
& D \to bC \mid bS \\
& E \to bE \mid \varepsilon \\
\}
\end{align}$

$N = \{S, A, B, C, D, E\}$

$S$ is the start symbol.
