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

## Example 1

**Problem**

In a country the number plates are labelled by five digit numbers from 00000 to 99999. We randomly pick
one number plate. What is the probability of the event that

a) there's a six among digits on the plate?

b) the digits on the plate are different?

**Solution**

a) $p = 1 - \frac{9^5}{10^5} = 0.41$, as only those plates are bad that do not contain the digit 6.

b) $p = \frac{10 \cdot 9 \cdot 8 \cdot 7 \cdot 6}{10^5} = 0.3$

## Example 2

**Problem**

At a soccer training session 20 players participate, two of them are Simon and Garfunkel. We divide the
participants randomly into two groups of 10 persons. What is the probability that Simon and Garfunkel
play against each other?

**Solution**

Let us fix the team of Simon. There are 9 spaces left in it, while there are 19 spots left altogether. So for
Garfunkel 10 out of the 19 choices result in being in a different team than Simon.

## Example 3

Peter fires at a target with his gun. The first shot has a 60% chance of hitting the target, the second one
has 70%, and the last one has 80%. The shots are independent. What is the probability of the following
events:

a) Peter not hitting the target?

b) Peter hits the target only at the third shot?

c) Does not hit that target at all, given that the first shot was a miss?

**Solution**

a) A, B, C: hitting the target for the first, second, third shot. Notice that if certain events are independent, then we get independent events if we replace any of the events with its complement.

$$
P(\overline{A} \cap \overline{B} \cap \overline{C}) = P(\overline{A}) \cdot P(\overline{B}) \cdot P(\overline{C}) = 0.4 \cdot 0.3 \cdot 0.2 = 0.024
$$

b)

$$
 P(\overline{A} \cap \overline{B} \cap C) = P(\overline{A}) \cdot P(\overline{B}) \cdot P(C) = 0.4 \cdot 0.3 \cdot 0.8 = 0.096
$$

c)

$$
 P(\overline{A} \cap \overline{B} \cap \overline{C} \mid \overline{A}) = \frac{P(\overline{A} \cap \overline{B} \cap \overline{C})}{P(\overline{A})} = \frac{0.4 \cdot 0.3 \cdot 0.2}{0.4} = 0.3 \cdot 0.2 = 0.06
$$

## Example 4

**Problem**

Odesseus arrives at a junction while wandering on the road. One leads to Athens, one to Sparta and one to Mycenae. The athenians tell the truth every third time when asked, the mycanaeans every second time, while the spartans never lie. Odesseus does not know which way leads to which city so he chooses randomly. Arriving in the city he asks a person the question: How much is 2 × 2. The answer is 4. What is the probability that he is in Athens?

**Solution**

T : the answer is true; A: Athens; M : Mycenae. S: Sparta

By using Bayes's theorem for the partition A.M.S and the event T we obtain that

$$
\mathbb{P}(A \mid T) = \frac{\mathbb{P}(A \cap T)}{\mathbb{P}(T)} = \frac{\mathbb{P}(A) \cdot \mathbb{P}(T \mid A)}{\mathbb{P}(T)} = \frac{\frac{1}{3} \cdot \frac{1}{3}}{\frac{1}{3} \cdot \frac{1}{3} + \frac{1}{3} \cdot \frac{1}{2} + \frac{1}{3} \cdot 1} = 0.182
$$

## Example 5

**Problem**

There is a disease which affects 2% of the population. There is a blood test which is positive with probability 95% for people who have the disease, and it is positive with probability 1% for healthy people.

a) What is the probability that Peter's test will be positive? (Peter is a randomly chosen person.)

b) Given that the test of Peter is positive, what is the conditional probability that he has the disease?

c) Now suppose that the test was repeated $k$ times independently for a randomly chosen person, and all results were positive. What is the conditional probability that this person has the disease? Calculate this probability for $k = 2$ and $k = 3$

**Solution**

a) Let $A$ be the event that the test is positive, and $B$ be the event that Peter has the disease. Then $B$ and its complement $\overline{B}$ is a partition of the sample space, such that both probabilities are positive. By the law of total probability we obtain

$$
P(A) = P(A \cap B) + P(A \cap \overline{B}) = P(A|B)P(B) + P(A|\overline{B})P(\overline{B}) =
$$
$$
= 0.95 \cdot 0.02 + 0.01 \cdot 0.98 = 0.028.
$$

Remark: If we repeat the test $k$ times:

$$
P(A) = P(A|B)P(B) + P(A|\overline{B})P(\overline{B}) = 0.95^k \cdot 0.02 + 0.01^k \cdot 0.98.
$$

The values: 2.8% for $k = 1$, 1.8% for $k = 2$, and 1.7% for $k = 3$.

b) We apply Bayes' theorem with the above notation. The probability of $A$ is also positive. Hence

$$
P(B|A) = \frac{P(A|B)P(B)}{P(A|B)P(B) + P(A|\overline{B})P(\overline{B})} = \frac{0.95 \cdot 0.02}{0.95 \cdot 0.02 + 0.01 \cdot 0.98} = 66\%.
$$

c) Similarly, by using independence of the tests:

$$
P(B|A) = \frac{P(A|B)P(B)}{P(A|B)P(B) + P(A|\overline{B})P(\overline{B})} = \frac{0.95^k \cdot 0.02}{0.95^k \cdot 0.02 + 0.01^k \cdot 0.98}.
$$

For $k = 1$, we have 66%, for $k = 2$ we have 99.5%, for $k = 3$ we have 99.99%.

## Example 6

**Problem**

(Monty Hall problem) In a television show there are 3 doors, such that there is a present behind one of
them, and there is nothing behind the other two. The participant of the game chooses one of the doors.
Then, the presenter opens one of the other doors, and shows that there is nothing behind it. Then he asks
the participant whether he would like to stay with his original choice, or he would like to chose the other
door which has not been opened yet. Is it worth changing?

[https://randomservices.org/random/apps/MontyHall.html](https://randomservices.org/random/apps/MontyHall.html)

**Solution**

It is worth changing.

First strategy: the player does not change his initial choice. He wins if and only if he has chosen the door
with the present in the beginning. which has probability 1/3.
Second strategy: the player changes his initial choice. Notice that if he had chosen an empty door in the
beginning, then he would win for sure: among the two other doors, the empty was chosen. and he has
chosen the other one. In the other case, if he had chosen the door with the present in the beginning, then
he will find an empty door after changing.

Let A be the event that the player wins, and B be the event that he had chosen the door with the present in the
beginning. Then $\{B.\overline{B}\}$ is a partition of the sample space, with both events having positive probability.
We apply the law of total probability:

$$
\mathbb{P}(A) = \mathbb{P}(A|B)\mathbb{P}(B) + \mathbb{P}(A|\overline{B})\mathbb{P}(\overline{B}) = 0 · \frac{1}{3} + 1 · \frac{2}{3} = \frac{2}{3}.
$$

$\frac{2}{3} > \frac{1}{3}$, therefore it is worth changing the door.
