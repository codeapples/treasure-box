---
title: '[ISP] Basic Probability'
---

# Basic Probability

$\Omega$ - Set of all outcomes ($\Omega$ = 1)

$A$ - Event $A$ ($A \in \mathcal{A}$)

$\mathbb{P} : \mathcal{A} \mapsto [0, 1]$ - Probability function

The triple $(\Omega, \mathcal{A}, \mathbb{P})$ is a **probability field** if:

- The **sample set** $\Omega$ is a non-empty set.
- $\mathcal{A} \subseteq \mathcal{P}(\Omega)$ (where $\mathcal{P}(\Omega)$ is the power set of $\Omega$) is the set of **events** (or **$\sigma$-algebra of events**), meaning:
  - (i) $\Omega \in \mathcal{A}$
  - (ii) If $A_1, A_2, \ldots \in \mathcal{A}$, then $\bigcup_{n=1}^{\infty} A_n \in \mathcal{A}$ (closed under countable unions)
  - (iii) If $A \in \mathcal{A}$, then $\Omega \setminus A \in \mathcal{A}$ (closed under complements)
- The **probability** $\mathbb{P}: \mathcal{A} \to [0,1]$ is a function such that:
  - (i) $\mathbb{P}(\Omega) = 1$ (the probability of the entire sample space is 1)
  - (ii) If $A_1, A_2, \ldots \in \mathcal{A}$ are pairwise disjoint (i.e., $A_i \cap A_j = \emptyset$ for all $1 \leq i < j$), then

$$
\mathbb{P}\left( \bigcup_{n=1}^{\infty} A_n \right) = \sum_{n=1}^{\infty} \mathbb{P}(A_n)
$$

This means the probability of the union of countably many pairwise disjoint sets is the sum of their individual probabilities.

## Simple probability formula

When we have finitely many possible outcomes and we may assume that they are equiprobable, probability is calculated as follows:

$$
p = \frac{\text{number of favorable outcomes}}{\text{total number of possible outcomes}}
$$

## Independence (intersection of two independent events)

Events $A, B \in \mathcal{A}$ are independent if:

$$
\mathbb{P}(A \cap B) = \mathbb{P}(A) \cdot \mathbb{P}(B)
$$

The events $A_1, A_2, \ldots, A_n \in \mathcal{A}$ are independent if for every $k \geq 1$ and $1 \leq i_1 < i_2 < \ldots < i_k \leq n$ we have:

$$
\mathbb{P}(A_{i_1} \cap A_{i_2} \cap \ldots \cap A_{i_k}) = \mathbb{P}(A_{i_1}) \mathbb{P}(A_{i_2}) \ldots \mathbb{P}(A_{i_k})
$$

## Conditional Probability

For $A, B \in \mathcal{A}$ with $\mathbb{P}(B) > 0$

Given that $B$ occurs, what is the probability that $A$ also occurs?

$$
\mathbb{P}(A \mid B) = \frac{\text{probability of the intersection}}{\text{probability of condition}} = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)}
$$

If $A$ and $B$ are independent:

$$
\mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \frac{\mathbb{P}(A) \mathbb{P}(B)}{\mathbb{P}(B)} = \mathbb{P}(A)
$$

## Law of Total Probability

For an event $A \in \mathcal{A}$ and a partition $B_1, B_2, \ldots, B_n$ of the sample space, we have:

$$
\mathbb{P}(A) = \mathbb{P}(A \mid B_1) \mathbb{P}(B_1) + \ldots + \mathbb{P}(A \mid B_n) \mathbb{P}(B_n) = \sum_{j=1}^n \mathbb{P}(A \mid B_j) \mathbb{P}(B_j).
$$

## Bayes' Theorem

For an event $A \in \mathcal{A}$ with $\mathbb{P}(A) > 0$ and a partition $B_1, B_2, \ldots, B_n$:

$$
\mathbb{P}(B_k \mid A) = \frac{\mathbb{P}(A \mid B_k) \mathbb{P}(B_k)}{\mathbb{P}(A \mid B_1) \mathbb{P}(B_1) + \cdots + \mathbb{P}(A \mid B_n) \mathbb{P}(B_n)} = \frac{\mathbb{P}(A \mid B_k) \mathbb{P}(B_k)}{\sum_{j=1}^n \mathbb{P}(A \mid B_j) \mathbb{P}(B_j)}.
$$

## Inclusion-Exclusion Formula

For $n$ events $A_1, A_2, \ldots, A_n$:

$$
\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) = \sum_{k=1}^n (-1)^{k+1} \sum_{1 \leq i_1 < i_2 < \ldots < i_k \leq n} \mathbb{P}(A_{i_1} \cap A_{i_2} \cap \ldots \cap A_{i_k})
$$


Example for two events $(n = 2)$: Probability that at least A or B occurs:

$$
\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)
$$

Example for three events $(n = 3)$: Probability that at least A, B or C occurs:

$$
\mathbb{P}(A \cup B \cup C) = \mathbb{P}(A) + \mathbb{P}(B) + \mathbb{P}(C) - \mathbb{P}(A \cap B) - \mathbb{P}(A \cap C) - \mathbb{P}(B \cap C) + \mathbb{P}(A \cap B \cap C)
$$
