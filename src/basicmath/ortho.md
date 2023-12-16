---
title: \[BM\] Orthogonal
---
# Orthogonal and orthonormal basis

## Introduction
An orthogonal basis is a basis of a vector space where all the vectors are linearly independent and orthogonal to each other (i.e., the dot product of any two vectors is 0).

An orthonormal basis is a basis of a vector space where all the vectors are orthogonal to each other and have a length of 1.

## Scalar product
The scalar product of two vectors is calculated using the following formula:
$$ \langle u, v \rangle = u \cdot v = \sum_{i=1}^{n} u_{i} \cdot v_{i} $$
where
$u$, $v$
are vectors.

### Example
Let
$$ u = \begin{bmatrix}
    1 \\
    2 \\
    3
\end{bmatrix},\ v = \begin{bmatrix}
    4 \\
    5 \\
    6
\end{bmatrix} $$
be vectors. The scalar product of $u$ and $v$ is calculated using the following formula:
$$ \langle u, v \rangle = u \cdot v = 1 \cdot 4 + 2 \cdot 5 + 3 \cdot 6 = 4 + 10 + 18 = 32 $$
The scalar product of $u$ and $v$ is 32.

## Orthogonal basis
Basis of vector space can be orthogonalized using the Gram-Schmidt process. To transform the basis into orthogonal basis we need to project each vector onto the subspace orthogonal to the previous vectors.

Given $v_{1}, v_{2}, v_{3}$ which are non orthogonal independent vectors, we can calculate the orthogonal basis $b_{1}, b_{2}, b_{3}$ following these steps:

So, let:
$$ v_{1}, v_{2}, v_{3}: \text{non orthogonal} $$
$$ W = span(v_{1}, v_{2}, v_{3}) : \text{vector space} $$
$$ B = \{v_{1}, v_{2}, v_{3}\} : \text{basis of $W$} $$
$$ \text{---} $$
$$ b_{1}, b_{2}, b_{3}: \text{orthogonal} $$
$$ B_{o} = \{b_{1}, b_{2}, b_{3}\} : \text{orthogonal basis of $W$} $$
We need to find $b_{1}, b_{2}, b_{3}$:

Let:
$$ b_{1} = v_{1}$$
$$\text{(assume that of the vectors is on the first orthogonal axis) } $$
then:
$$ v_{2}^{'} = b_{2} = v_{2} - horizontal\ correction  = v_{2} - \frac{\langle v_{2}, b_{1} \rangle}{\langle b_{1}, b_{1} \rangle} \cdot b_{1} $$
and therefore:
$$ v_{3}^{'} = b_{3} = v_{3} - \frac{\langle v_{3}, b_{1} \rangle}{\langle b_{1}, b_{1} \rangle} \cdot b_{1} - \frac{\langle v_{3}, b_{2} \rangle}{\langle b_{2}, b_{2} \rangle} \cdot b_{2} $$

### Example
Let
$$ v_{1} = \begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix},\ v_{2} = \begin{bmatrix}
    1 \\
    1 \\
    1 \\
    -1
\end{bmatrix},\ v_{3} = \begin{bmatrix}
    2 \\
    1 \\
    2 \\
    1
\end{bmatrix} $$
be vectors. The orthogonal basis of $v_{1}, v_{2}, v_{3}$ is calculated using the following steps:

$$ b_{1} = v_{1} = \begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix} $$
$$ \text{- - -} $$
$$ b_{2} = v_{2} - \frac{\langle v_{2}, b_{1} \rangle}{\langle b_{1}, b_{1} \rangle} \cdot b_{1} = \begin{bmatrix}
    1 \\
    1 \\
    1 \\
    -1
\end{bmatrix} - \frac{1 \cdot 1 + 1 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 0}{1 \cdot 1 + 1 \cdot 1 + (-1) \cdot (-1) + 0 \cdot 0} \cdot \begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix} =$$
$$= \begin{bmatrix}
    1 \\
    1 \\
    1 \\
    -1
\end{bmatrix} - \frac{1}{3} \cdot \begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix} = \begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix} $$
$$ b_{2} = \begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix} $$
$$ \text{- - -} $$
$$ b_{3} = v_{3} - \frac{\langle v_{3}, b_{1} \rangle}{\langle b_{1}, b_{1} \rangle} \cdot b_{1} - \frac{\langle v_{3}, b_{2} \rangle}{\langle b_{2}, b_{2} \rangle} \cdot b_{2} =$$
$$= \begin{bmatrix}
    2 \\
    1 \\
    2 \\
    1
\end{bmatrix} - \frac{1}{3} \cdot \begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix} - \frac{2 \cdot \frac{2}{3} + 1 \cdot \frac{2}{3} + 2 \cdot \frac{4}{3} + 1 \cdot (-1)}{\frac{2}{3} \cdot \frac{2}{3} + \frac{2}{3} \cdot \frac{2}{3} + \frac{4}{3} \cdot \frac{4}{3} + (-1) \cdot (-1)} \cdot \begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix} =$$
$$= \begin{bmatrix}
    2 \\
    1 \\
    2 \\
    1
\end{bmatrix} - \begin{bmatrix}
    \frac{1}{3} \\
    \frac{1}{3} \\
    -\frac{1}{3} \\
    0
\end{bmatrix} - \frac{\frac{11}{3}}{\frac{33}{9}} \cdot \begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix} = \begin{bmatrix}
    2 \\
    1 \\
    2 \\
    1
\end{bmatrix} - \begin{bmatrix}
    \frac{1}{3} \\
    \frac{1}{3} \\
    -\frac{1}{3} \\
    0
\end{bmatrix} - \begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix} = \begin{bmatrix}
    2 \\
    1 \\
    2 \\
    1
\end{bmatrix} - \begin{bmatrix}
    1 \\
    1 \\
    1 \\
    -1
\end{bmatrix}$$
$$ b_{3} = \begin{bmatrix}
    1 \\
    0 \\
    1 \\
    2
\end{bmatrix} $$
The orthogonal basis of $v_{1}, v_{2}, v_{3}$ is:
$$ B_{o} = \left\{ \begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix}, \begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix}, \begin{bmatrix}
    1 \\
    0 \\
    1 \\
    2
\end{bmatrix} \right\} $$

## Orthonormal basis
Orthogonal basis can be transformed into orthonormal basis by normalizing each vector in the basis.

Given $b_{1}, b_{2}, b_{3}$ which are orthogonal independent vectors, we can calculate the orthonormal basis $e_{1}, e_{2}, e_{3}$ following these steps:

So, if
$$ b_{1}, b_{2}, b_{3}: \text{orthogonal} $$
$$ B_{o} = \{b_{1}, b_{2}, b_{3}\} : \text{orthogonal basis of $W$} $$
then
$$ e_{1}, e_{2}, e_{3}: \text{orthonormal} $$
$$ B_{on} = \{e_{1}, e_{2}, e_{3}\} : \text{orthonormal basis of $W$} $$

Formula for vector normalization:
$$ e_{1} = \frac{b_{1}}{\|b_{1}\|},\ e_{2} = \frac{b_{2}}{\|b_{2}\|},\ e_{3} = \frac{b_{3}}{\|b_{3}\|} $$
where
$\|b_{1}\|$, $\|b_{2}\|$, $\|b_{3}\|$
are the lengths of $b_{1}$, $b_{2}$, $b_{3}$.

Length of a vector is calculated using the following formula:
$$ \|v\| = \sqrt{\langle v, v \rangle} = \sqrt{v \cdot v} = \sqrt{\sum_{i=1}^{n} v_{i}^{2}} $$

For example, given a vector $v$:
$$ v = \begin{bmatrix}
    1 \\
    2 \\
    3
\end{bmatrix} $$

$$ \|v\| = \sqrt{\langle v, v \rangle} = \sqrt{v \cdot v} = \sqrt{\sum_{i=1}^{n} v_{i}^{2}} = \sqrt{1^{2} + 2^{2} + 3^{2}} = \sqrt{14} $$

### Example
Using previous example, we can calculate the orthonormal basis of $v_{1}, v_{2}, v_{3}$:

$$ e_{1} = \frac{b_{1}}{\|b_{1}\|} = \frac{\begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix}}{\sqrt{1^{2} + 1^{2} + (-1)^{2} + 0^{2}}} = \frac{\begin{bmatrix}
    1 \\
    1 \\
    -1 \\
    0
\end{bmatrix}}{\sqrt{3}} = \begin{bmatrix}
    \frac{1}{\sqrt{3}} \\
    \frac{1}{\sqrt{3}} \\
    -\frac{1}{\sqrt{3}} \\
    0
\end{bmatrix} $$
$$ e_{2} = \frac{b_{2}}{\|b_{2}\|} = \frac{\begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix}}{\sqrt{\frac{2}{3}^{2} + \frac{2}{3}^{2} + \frac{4}{3}^{2} + (-1)^{2}}} = \frac{\begin{bmatrix}
    \frac{2}{3} \\
    \frac{2}{3} \\
    \frac{4}{3} \\
    -1
\end{bmatrix}}{\sqrt{\frac{22}{9}}} = \begin{bmatrix}
    \frac{2}{\sqrt{22}} \\
    \frac{2}{\sqrt{22}} \\
    \frac{4}{\sqrt{22}} \\
    -\frac{1}{\sqrt{22}}
\end{bmatrix} $$
$$ e_{3} = \frac{b_{3}}{\|b_{3}\|} = \frac{\begin{bmatrix}
    1 \\
    0 \\
    1 \\
    2
\end{bmatrix}}{\sqrt{1^{2} + 0^{2} + 1^{2} + 2^{2}}} = \frac{\begin{bmatrix}
    1 \\
    0 \\
    1 \\
    2
\end{bmatrix}}{\sqrt{6}} = \begin{bmatrix}
    \frac{1}{\sqrt{6}} \\
    0 \\
    \frac{1}{\sqrt{6}} \\
    \frac{2}{\sqrt{6}}
\end{bmatrix} $$
The orthonormal basis of $v_{1}, v_{2}, v_{3}$ is:
$$ B_{on} = \left\{ \begin{bmatrix}
    \frac{1}{\sqrt{3}} \\
    \frac{1}{\sqrt{3}} \\
    -\frac{1}{\sqrt{3}} \\
    0
\end{bmatrix}, \begin{bmatrix}
    \frac{2}{\sqrt{22}} \\
    \frac{2}{\sqrt{22}} \\
    \frac{4}{\sqrt{22}} \\
    -\frac{1}{\sqrt{22}}
\end{bmatrix}, \begin{bmatrix}
    \frac{1}{\sqrt{6}} \\
    0 \\
    \frac{1}{\sqrt{6}} \\
    \frac{2}{\sqrt{6}}
\end{bmatrix} \right\} $$


