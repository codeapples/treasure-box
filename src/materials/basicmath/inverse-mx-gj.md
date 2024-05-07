---
title: '[BM] Matrices'
---

# Inversion of matrices<br>using Gauss-Jordan elimination

## Introduction

Square matrices

$$
A \in \mathbb{K}^{n \times n}
$$

are invertible **if and only if** their determinant is **not zero**.

$$
\det(A) \neq 0 \Leftrightarrow A^{-1} \text{ exists}
$$

The inverse of a matrix is a matrix that when multiplied with the original matrix produces the identity matrix.

$$
I = A \cdot A^{-1} = A^{-1} \cdot A
$$

## Inverse calculation

Let

$$
A = \begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix}
$$

be a square matrix. The inverse of A is calculated using the following steps:

1. Create an augmented matrix
2. Transform the matrix into a reduced row echelon form
3. Extract the inverse matrix from the augmented matrix
4. Check the result

### Augmented matrix

The augmented matrix is created by appending the identity matrix to the right of the original matrix.

$$
\begin{bmatrix}
    a_{11} & a_{12} & \cdots & a_{1n} & 1 & 0 & \cdots & 0 \\
    a_{21} & a_{22} & \cdots & a_{2n} & 0 & 1 & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
    a_{n1} & a_{n2} & \cdots & a_{nn} & 0 & 0 & \cdots & 1
\end{bmatrix}
$$

### Reduced row echelon form

The augmented matrix is transformed into a reduced row echelon form using the Gauss-Jordan elimination method.

$$
\begin{bmatrix}
    1 & 0 & \cdots & 0 & b_{11} & b_{12} & \cdots & b_{1n} \\
    0 & 1 & \cdots & 0 & b_{21} & b_{22} & \cdots & b_{2n} \\
    \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & 1 & b_{n1} & b_{n2} & \cdots & b_{nn}
\end{bmatrix}
$$

The inverse matrix is extracted from the augmented matrix.

$$
A^{-1} = \begin{bmatrix}
    b_{11} & b_{12} & \cdots & b_{1n} \\
    b_{21} & b_{22} & \cdots & b_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    b_{n1} & b_{n2} & \cdots & b_{nn}
\end{bmatrix}
$$

The result is checked by multiplying the original matrix with the inverse matrix.

$$
A \cdot A^{-1} = I
$$

### Notes

- The inverse matrix is calculated only if the original matrix is invertible.
- The inverse matrix is calculated only for square matrices.

## Example

Let

$$
A = \begin{bmatrix}
    5 & 2 & -3 \\
    3 & 1 & -2 \\
    2 & -3 & -4
\end{bmatrix}
$$

be a square matrix. Let's calculate the inverse of A.

### Augmented matrix

The augmented matrix is created by appending the identity matrix to the right of the original matrix.

$$
\begin{bmatrix}
    5 & 2 & -3 & 1 & 0 & 0 \\
    3 & 1 & -2 & 0 & 1 & 0 \\
    2 & -3 & -4 & 0 & 0 & 1
\end{bmatrix}
$$

### Reduced row echelon form

Getting reduced row echelon form using Gauss-Jordan elimination method step-by-step:

$$
\begin{bmatrix}
    5 & 2 & -3 & 1 & 0 & 0 \\
    3 & 1 & -2 & 0 & 1 & 0 \\
    2 & -3 & -4 & 0 & 0 & 1
\end{bmatrix} \xrightarrow[R_3 + 3R_2]{R_1 - 2R_2} \begin{bmatrix}
    -1 & 0 & 1 & 1 & -2 & 0 \\
    3 & 1 & -2 & 0 & 1 & 0 \\
    11 & 0 & -10 & 0 & 3 & 1
\end{bmatrix} \xrightarrow[R_3 + 10R_1]{R_2 + 2R_1}
$$

$$
\xrightarrow[R_3 + 10R_1]{R_2 + 2R_1} \begin{bmatrix}
    -1 & 0 & 1 & 1 & -2 & 0 \\
    1 & 1 & 0 & 2 & -3 & 0 \\
    1 & 0 & 0 & 10 & -17 & 1
\end{bmatrix} \xrightarrow[R_2 - R_3]{R_1 + R_3} \begin{bmatrix}
    0 & 0 & 1 & 11 & -19 & 1 \\
    0 & 1 & 0 & -8 & 14 & -1 \\
    1 & 0 & 0 & 10 & -17 & 1
\end{bmatrix}
$$

To extract the inverse matrix from reduced row echelon form, we need to transform the matrix into a diagonal form.

$$
\begin{bmatrix}
    0 & 0 & 1 & 11 & -19 & 1 \\
    0 & 1 & 0 & -8 & 14 & -1 \\
    1 & 0 & 0 & 10 & -17 & 1
\end{bmatrix} \xrightarrow{R_1 \leftrightarrow R_3} \begin{bmatrix}
    1 & 0 & 0 & 10 & -17 & 1 \\
    0 & 1 & 0 & -8 & 14 & -1 \\
    0 & 0 & 1 & 11 & -19 & 1
\end{bmatrix}
$$

Now inverse matrix can be extracted from the augmented matrix.

$$
A^{-1} = \begin{bmatrix}
    10 & -17 & 1 \\
    -8 & 14 & -1 \\
    11 & -19 & 1
\end{bmatrix}
$$

The result is checked by multiplying the original matrix with the inverse matrix.

$$
A \cdot A^{-1} = \begin{bmatrix}
    5 & 2 & -3 \\
    3 & 1 & -2 \\
    2 & -3 & -4
\end{bmatrix} \cdot \begin{bmatrix}
    10 & -17 & 1 \\
    -8 & 14 & -1 \\
    11 & -19 & 1
\end{bmatrix} =
$$

$$
= \begin{bmatrix}
    5 \cdot 10 + 2 \cdot (-8) + (-3) \cdot 11 & 5 \cdot (-17) + 2 \cdot 14 + (-3) \cdot (-19) & 5 \cdot 1 + 2 \cdot (-1) + (-3) \cdot 1 \\
    3 \cdot 10 + 1 \cdot (-8) + (-2) \cdot 11 & 3 \cdot (-17) + 1 \cdot 14 + (-2) \cdot (-19) & 3 \cdot 1 + 1 \cdot (-1) + (-2) \cdot 1 \\
    2 \cdot 10 + (-3) \cdot (-8) + (-4) \cdot 11 & 2 \cdot (-17) + (-3) \cdot 14 + (-4) \cdot (-19) & 2 \cdot 1 + (-3) \cdot (-1) + (-4) \cdot 1
\end{bmatrix} =
$$

$$
= \begin{bmatrix}
    50 - 16 - 33 & -85 + 28 + 57 & 5 - 4 - 3 \\
    30 - 8 - 22 & -51 + 14 + 38 & 3 - 1 - 2 \\
    20 + 24 - 44 & -34 - 42 + 76 & 2 + 3 - 4
\end{bmatrix} = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
\end{bmatrix} = I
$$
