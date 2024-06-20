---
title: '[A1-T] Sets'
---

# Sets

## Upper and lower bounds of a set in $\mathbb{R}$

### Definition

Let $\emptyset \neq H \subseteq \mathbb{R}$ be a set and $K, L \in \mathbb{R}$. We say that

- $K$ is an **upper bound** of $H$ if $\forall x \in H: x \leq K$.
- $L$ is a **lower bound** of $H$ if $\forall x \in H: x \geq L$.

## Set boundedness

### Definition

Let $\emptyset \neq H \subseteq \mathbb{R}$ be a set. We say that

- $H$ is **bounded above** if it has an upper bound, that is $\exists K \in \mathbb{R}\ \forall x \in H: x \leq K$.
- $H$ is **bounded below** if it has a lower bound, that is $\exists L \in \mathbb{R}\ \forall x \in H: x \geq L$.
- $H$ is **bounded** if it is bounded above and below.

## Minimal and maximal elements of a set

### Definition

Let $\emptyset \neq H \subseteq \mathbb{R}$ be a set and $a \in \mathbb{R}$. We say that

- $a$ is a **minimal element** of $H$ if $a \in H$ and $\forall x \in H: a \leq x$.

  _Notation:_ $a = \min H$.

- $a$ is a **maximal element** of $H$ if $a \in H$ and $\forall x \in H: a \geq x$.

  _Notation:_ $a = \max H$.

It follows from definition that $\min H$ is the lower bound of $H$ and $\max H$ is the upper bound of $H$.

## Supremum and infimum of a set

Least upper bound of a set is called the _supremum_ and greatest lower bound of a set is called the _infimum_ of the set.

### Definition

Let $\emptyset \neq H \subseteq \mathbb{R}$ be a set. We say that

- Suppose that $H$ is bounded above. If $K \in \mathbb{R}$ is an upper bound of $H$ and $K \leq K'$ for any upper bound $K'$ of $H$, then $K$ is called the **supremum** of $H$.

  _Notation:_ $K = \sup H$.

- Suppose that $H$ is bounded below. If $L \in \mathbb{R}$ is a lower bound of $H$ and $L \geq L'$ for any lower bound $L'$ of $H$, then $L$ is called the **infimum** of $H$.

  _Notation:_ $L = \inf H$.

If $H$ is not bounded above, then $\sup H = +\infty$. If $H$ is not bounded below, then $\inf H = -\infty$.
