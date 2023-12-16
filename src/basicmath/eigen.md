---
title: \[BM\] Eigenvalues & eigenvectors
---

# Eigenvalues and eigenvectors

## Introduction
Eigenvalues are special scalars associated with a linear system of equations (i.e., a matrix equation) that are sometimes also known as characteristic roots, characteristic values, proper values, or latent roots.

Eigenvectors are special vectors associated with a linear system of equations (i.e., a matrix equation) that are sometimes also known as characteristic vectors, proper vectors, or latent vectors.

## Calculation
Let
$$ A \in \mathbb{K}^{n \times n} $$
be a square matrix. The eigenvalues and eigenvectors of A are calculated using the following steps:

1. Calculate the characteristic polynomial
2. Calculate the roots of the characteristic polynomial
3. Calculate the eigenvectors
4. Check the result

### Characteristic polynomial
The characteristic polynomial of a matrix is calculated using the following formula:
$$ \det(A - \lambda I) = 0 $$
where
$\lambda$
is the eigenvalue of A.

### Roots of the characteristic polynomial
The roots of the characteristic polynomial are calculated using the following formula:
$$ \lambda_{i} = \frac{1}{2} \left( -b \pm \sqrt{b^{2} - 4ac} \right) $$
where
$a$, $b$, $c$
are the coefficients of the characteristic polynomial.

### Eigenvectors
The eigenvectors are calculated using the following formula:
$$ (A - \lambda_{i} I) \cdot v_{i} = 0 $$
where
$v_{i}$
is the eigenvector of A.

## Example
Let
$$ A = \begin{bmatrix}
    2 & -1 & -1 \\
    3 & -2 & -3 \\
    -1 & 1 & 2
\end{bmatrix} $$
be a square matrix. The eigenvalues and eigenvectors of A are calculated using the following steps:

1. Calculate the characteristic polynomial
2. Calculate the roots of the characteristic polynomial
3. Calculate the eigenvectors

### Characteristic polynomial
The characteristic polynomial of A is calculated using the following formula:
$$ \det(A - \lambda I) = 0 $$
where
$\lambda$
is the eigenvalue of A.
$$ \lambda I = \begin{bmatrix}
    \lambda & 0 & 0 \\
    0 & \lambda & 0 \\
    0 & 0 & \lambda
\end{bmatrix} $$
$$ \det(A - \lambda I) = \begin{vmatrix}
    2 - \lambda & -1 & -1 \\
    3 & -2 - \lambda & -3 \\
    -1 & 1 & 2 - \lambda
\end{vmatrix} = 0 $$
Use diagonal rule to calculate the determinant.
$$ \det(A - \lambda I) = (2 - \lambda) \cdot (-2 - \lambda) \cdot (2 - \lambda) + 3 \cdot 1 \cdot (-1) + (-1) \cdot (-3) \cdot (-1)\ \rangle$$
$$-\ (-1) \cdot (-2 - \lambda) \cdot (-1) - 3 \cdot (-1) \cdot (2 - \lambda) - (2 - \lambda) \cdot 1 \cdot (-3) = $$
$$ = (2 - \lambda) \cdot (-2 - \lambda) \cdot (2 - \lambda) - 6 + (2 + \lambda) + 3 \cdot (2 - \lambda) + 3 \cdot (2 - \lambda) = $$
$$ = (2 - \lambda) \cdot (-2 - \lambda) \cdot (2 - \lambda) - 6 + 2 + \lambda + 6 - 3\lambda + 6 - 3\lambda = $$
$$ = (2 - \lambda) \cdot (-2 - \lambda) \cdot (2 - \lambda) + 8 - 5\lambda = $$
$$ = (2 - \lambda) \cdot (-4 - 2\lambda + 2\lambda + \lambda^{2}) + 8 - 5\lambda = $$
$$ = (2 - \lambda) \cdot (-4 + \lambda^{2}) + 8 - 5\lambda = $$
$$ = -8 + 2\lambda^{2} + 4\lambda - \lambda^{3} + 8 - 5\lambda = $$
$$ = -\lambda^{3} + 2\lambda^{2} - \lambda = $$
$$ = -\lambda \cdot (\lambda^{2} - 2\lambda + 1) = $$
$$ = -\lambda \cdot (\lambda - 1)^{2} = 0 $$
The characteristic polynomial of A is:
$$ \lambda \cdot (\lambda - 1)^{2} = 0 $$
### Roots of the characteristic polynomial
The roots of the characteristic polynomial are:
$$ \lambda_{1} = 1,\ \lambda_{2} = 0,\ \lambda_{3} = 0 $$
You can also say that the **eigenvalues** of A are:
$$ \lambda_{1} = 1,\ \lambda_{2} = 0,\ \lambda_{3} = 0 $$

### Eigenvectors
The eigenvectors are calculated using the following formula:
$$ (A - \lambda_{i} I) \cdot v_{i} = 0 $$
where
$v_{i}$
is the eigenvector of A.

So we put eigenvalues one-by-one into the formula:

Calculate
${v_{1}}$
:
$$ (A - \lambda_{1} I) \cdot v_{1} = 0 $$
$$ (A - 1 \cdot I) \cdot v_{1} = 0 $$
$$ \begin{bmatrix}
    2 - 1 & -1 & -1 \\
    3 & -2 - 1 & -3 \\
    -1 & 1 & 2 - 1
\end{bmatrix} \cdot v_{1} = 0 $$
$$ \begin{bmatrix}
    1 & -1 & -1 \\
    3 & -3 & -3 \\
    -1 & 1 & 1
\end{bmatrix} \cdot v_{1} = 0 $$
$$ \begin{bmatrix}
    1 & -1 & -1 \\
    3 & -3 & -3 \\
    -1 & 1 & 1
\end{bmatrix} \xrightarrow[R_2 - 3R_1]{R_3 + R_1} \begin{bmatrix}
    1 & -1 & -1 \\
    0 & 0 & 0 \\
    0 & 0 & 0
\end{bmatrix} $$
$$ \begin{cases}
    x - y - z = 0 \\
    0 = 0 \\
    0 = 0
\end{cases}\ \rightarrow\ x = y + z $$
$$ v_{1} = \begin{bmatrix}
    x \\
    y \\
    z
\end{bmatrix} = \begin{bmatrix}
    y + z \\
    y \\
    z
\end{bmatrix} : y,z \in \mathbb{K} $$
$$ v_{1} = y \cdot \begin{bmatrix}
    1 \\
    1 \\
    0
\end{bmatrix} + z \cdot \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix} : y, z \in \mathbb{K}$$

Calculate
${v_{2}}$
:
$$ (A - \lambda_{2} I) \cdot v_{2} = 0 $$
$$ (A - 0 \cdot I) \cdot v_{2} = 0 $$
$$ \begin{bmatrix}
    2 & -1 & -1 \\
    3 & -2 & -3 \\
    -1 & 1 & 2
\end{bmatrix} \cdot v_{2} = 0 $$
$$ \begin{bmatrix}
    2 & -1 & -1 \\
    3 & -2 & -3 \\
    -1 & 1 & 2
\end{bmatrix} \xrightarrow[R_2 + 2R_3]{R_1 + R_3} \begin{bmatrix}
    1 & 0 & 1 \\
    1 & 0 & 1 \\
    -1 & 1 & 2
\end{bmatrix} \xrightarrow[R_3 + R_1]{R_2 - R_1} \begin{bmatrix}
    1 & 0 & 1 \\
    0 & 0 & 0 \\
    0 & 1 & 3
\end{bmatrix} $$
$$ \begin{cases}
    x + z = 0 \\
    0 = 0 \\
    y + 3z = 0
\end{cases}\ \rightarrow\ \begin{cases}
    x = -z \\
    y = -3z
\end{cases}$$
$$ v_{2} = \begin{bmatrix}
    x \\
    y \\
    z
\end{bmatrix} = \begin{bmatrix}
    -z \\
    -3z \\
    z
\end{bmatrix} : z \in \mathbb{K} $$
$$ v_{2} = z \cdot \begin{bmatrix}
    -1 \\
    -3 \\
    1
\end{bmatrix} : z \in \mathbb{K} $$

There is no need to calculate
${v_{3}}$,
because characteristic polynomial has a double root, therefore
${v_{3}} = {v_{2}}$.

## Eigenspace
Eigenspace is a set of all eigenvectors of a matrix corresponding to a certain eigenvalue.

If we consider previous example, then
$$ E_{\lambda_{1}} = \left( y \cdot \begin{bmatrix}
    1 \\
    1 \\
    0
\end{bmatrix} + z \cdot \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix} |\ y, z \in \mathbb{K} \right)$$
$$ \dim(E_{\lambda_{1}}) = 2 $$
$$ E_{\lambda_{1}} = \text{Span} \left( \begin{bmatrix}
    1 \\
    1 \\
    0
\end{bmatrix}, \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix} \right) $$
Where
$E_{\lambda_{1}}$
is the eigenspace of
$\lambda_{1}$.

$$ E_{\lambda_{2}} = \left( z \cdot \begin{bmatrix}
    -1 \\
    -3 \\
    1
\end{bmatrix} |\ z \in \mathbb{K} \right)$$
$$ \dim(E_{\lambda_{2}}) = 1 $$
$$ E_{\lambda_{2}} = \text{Span} \left( \begin{bmatrix}
    -1 \\
    -3 \\
    1
\end{bmatrix} \right) $$
Where
$E_{\lambda_{2}}$
is the eigenspace of
$\lambda_{2}$.

## Eigenbasis
Eigenbasis is a basis consisting of eigenvectors of a matrix.

If we consider previous example, then
$$ B = \left( \begin{bmatrix}
    1 \\
    1 \\
    0
\end{bmatrix}, \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix}, \begin{bmatrix}
    -1 \\
    -3 \\
    1
\end{bmatrix} \right) $$
is an eigenbasis of A, assuming that vectors are linearly independent.
