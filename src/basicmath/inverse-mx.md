---
title: \[BM\] Matrices
---

# Inversion of matrices

## Introduction
Square matrices
$$ A \in \mathbb{K}^{n \times n} $$
are invertible **if and only if** their determinant is **not zero**.
$$\det(A) \neq 0 \Leftrightarrow A^{-1} \text{ exists}$$
The inverse of a matrix is a matrix that when multiplied with the original matrix produces the identity matrix.
$$ I = A \cdot A^{-1} = A^{-1} \cdot A $$
Inverse matrix can be calculated using sub determinant matrixes.

## Inverse calculation
Let
$$ A = \begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix} $$
be a square matrix. The inverse of A is calculated using the following steps:

1. Calculate the determinant of the matrix
2. Calculate the sub determinant matrixes
3. Calculate the cofactor matrix
4. Calculate the adjugate matrix
5. Calculate the inverse matrix

### Determinant
The determinant of a matrix is calculated recursively using the following formula:
$$ \det(A) = \sum_{i=1}^{n} (-1)^{i+j} \cdot a_{ij} \cdot \det(A_{ij}) $$
where
$A_{ij}$
is the sub determinant matrix of A, which is calculated by removing the i-th row and the j-th column from A.

### Sub determinant matrixes
The sub determinant matrixes are calculated by removing the i-th row and the j-th column from the original matrix.

### Cofactor matrix
The cofactor matrix is calculated using the following formula:
$$ C = \begin{bmatrix}
    c_{11} & c_{12} & \cdots & c_{1n} \\
    c_{21} & c_{22} & \cdots & c_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    c_{n1} & c_{n2} & \cdots & c_{nn}
\end{bmatrix} $$
where
$$ c_{ij} = (-1)^{i+j} \cdot \det(A_{ij}) $$
is the cofactor of the i-th row and the j-th column.

### Adjugate matrix
The adjugate matrix is calculated by transposing the cofactor matrix.
$$ A^{*} = \begin{bmatrix}
    c_{11} & c_{21} & \cdots & c_{n1} \\
    c_{12} & c_{22} & \cdots & c_{n2} \\
    \vdots & \vdots & \ddots & \vdots \\
    c_{1n} & c_{2n} & \cdots & c_{nn}
\end{bmatrix} $$
The adjugate matrix is also called the classical adjoint matrix or the adjugate of A.

### Inverse matrix
The inverse matrix is calculated using the following formula:
$$ A^{-1} = \frac{1}{\det(A)} \cdot A^{*} $$
The result is checked by multiplying the original matrix with the inverse matrix.
$$ A \cdot A^{-1} = I $$

### Notes
- The inverse matrix is calculated only if the original matrix is invertible.
- The inverse matrix is calculated only for square matrices.

## Example
Let
$$ A = \begin{bmatrix}
    3 & 1 & -4 \\
    2 & 5 & 6 \\
    1 & 4 & 8
\end{bmatrix} $$
be a square matrix. The inverse of A is calculated using the following steps:

### Determinant

$$\det(A) = 3 \cdot \det \begin{bmatrix}
    5 & 6 \\
    4 & 8
\end{bmatrix} - 1 \cdot \det \begin{bmatrix}
    2 & 6 \\
    1 & 8
\end{bmatrix} - 4 \cdot \det \begin{bmatrix}
    2 & 5 \\
    1 & 4
\end{bmatrix} =$$
$$ = 3 \cdot (5 \cdot 8 - 6 \cdot 4) - 1 \cdot (2 \cdot 8 - 6 \cdot 1) - 4 \cdot (2 \cdot 4 - 5 \cdot 1) =$$
$$= 3 \cdot (40 - 24) - 1 \cdot (16 - 6) - 4 \cdot (8 - 5) =$$
$$= 3 \cdot 16 - 1 \cdot 10 - 4 \cdot 3 = 48 - 22 = 26$$

Determinant of A is 26. Since the determinant is not zero, the inverse matrix exists.

### Sub determinant matrixes

$A_{11} = \begin{bmatrix}
    5 & 6 \\
    4 & 8
\end{bmatrix}\ A_{12} = \begin{bmatrix}
    2 & 6 \\
    1 & 8
\end{bmatrix}\ A_{13} = \begin{bmatrix}
    2 & 5 \\
    1 & 4
\end{bmatrix}$

$A_{21} = \begin{bmatrix}
    1 & -4 \\
    4 & 8
\end{bmatrix}\ A_{22} = \begin{bmatrix}
    3 & -4 \\
    1 & 8
\end{bmatrix}\ A_{23} = \begin{bmatrix}
    3 & 1 \\
    1 & 4
\end{bmatrix}$

$A_{31} = \begin{bmatrix}
    1 & -4 \\
    5 & 6
\end{bmatrix}\ A_{32} = \begin{bmatrix}
    3 & -4 \\
    2 & 6
\end{bmatrix}\ A_{33} = \begin{bmatrix}
    3 & 1 \\
    2 & 5
\end{bmatrix}$

Sub determinants:

$\det(A_{11}) = 5 \cdot 8 - 6 \cdot 4 = 40 - 24 = 16$
$\det(A_{12}) = 2 \cdot 8 - 6 \cdot 1 = 16 - 6 = 10$
$\det(A_{13}) = 2 \cdot 4 - 5 \cdot 1 = 8 - 5 = 3$
$\det(A_{21}) = 1 \cdot 8 - (-4) \cdot 4 = 8 + 16 = 24$
$\det(A_{22}) = 3 \cdot 8 - (-4) \cdot 1 = 24 + 4 = 28$
$\det(A_{23}) = 3 \cdot 4 - 1 \cdot 1 = 12 - 1 = 11$
$\det(A_{31}) = 1 \cdot 6 - (-4) \cdot 5 = 6 + 20 = 26$
$\det(A_{32}) = 3 \cdot 6 - (-4) \cdot 2 = 18 + 8 = 26$
$\det(A_{33}) = 3 \cdot 5 - 1 \cdot 2 = 15 - 2 = 13$

### Cofactor matrix
$$ C = \begin{bmatrix}
    16 & -10 & 3 \\
    -24 & 28 & -11 \\
    26 & -26 & 13
\end{bmatrix} $$

### Adjugate matrix
$$ A^{*} = \begin{bmatrix}
    16 & -24 & 26 \\
    -10 & 28 & -26 \\
    3 & -11 & 13
\end{bmatrix} $$
The adjugate matrix is also called the classical adjoint matrix or the adjugate of A.

### Inverse matrix
$$ A^{-1} = \frac{1}{\det(A)} \cdot A^{*} = \frac{1}{26} \cdot \begin{bmatrix}
    16 & -24 & 26 \\
    -10 & 28 & -26 \\
    3 & -11 & 13
\end{bmatrix} $$
The result is checked by multiplying the original matrix with the inverse matrix.
$$ A \cdot A^{-1} = \begin{bmatrix}
    3 & 1 & -4 \\
    2 & 5 & 6 \\
    1 & 4 & 8
\end{bmatrix} \cdot \frac{1}{26} \cdot \begin{bmatrix}
    16 & -24 & 26 \\
    -10 & 28 & -26 \\
    3 & -11 & 13
\end{bmatrix} =$$
$$= \frac{1}{26} \cdot \begin{bmatrix}
  3 \cdot 16 + 1 \cdot (-24) + (-4) \cdot 3 & 3 \cdot (-24) + 1 \cdot 28 + (-4) \cdot 11 & 3 \cdot 26 + 1 \cdot (-26) + (-4) \cdot 13 \\
  2 \cdot 16 + 5 \cdot (-24) + 6 \cdot 3 & 2 \cdot (-24) + 5 \cdot 28 + 6 \cdot (-11) & 2 \cdot 26 + 5 \cdot (-26) + 6 \cdot 13 \\
  1 \cdot 16 + 4 \cdot (-24) + 8 \cdot 3 & 1 \cdot (-24) + 4 \cdot 28 + 8 \cdot (-11) & 1 \cdot 26 + 4 \cdot (-26) + 8 \cdot 13
\end{bmatrix} =$$
$$ = \frac{1}{26} \cdot \begin{bmatrix}
    26 & 0 & 0 \\
    0 & 26 & 0 \\
    0 & 0 & 26
\end{bmatrix} = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
\end{bmatrix} = I $$
