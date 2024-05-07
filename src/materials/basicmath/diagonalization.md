---
title: '[BM] Diagonalization'
---

# Diagonalization of matrices

## Introduction

Matrix diagonalization is the process of taking a square matrix and converting it into a special type of matrix - a so-called _diagonal matrix_ - that shares the same fundamental properties of the underlying matrix. The diagonal matrix is a matrix where all the elements are zero except for the elements along the diagonal.

The diagonal matrix is a special case of a triangular matrix, which is a matrix where all the elements above or below the diagonal are zero.

The diagonal matrix is also a special case of a symmetric matrix, which is a matrix where the elements above the diagonal are the same as the elements below the diagonal.

## Calculation

Let

$$
A \in \mathbb{K}^{n \times n}
$$

be a square matrix.

$\lambda_{i}$ - are the eigenvalues of $A$.
$v_{i}$ - are the eigenvectors of $A$.

The diagonalization of A is calculated using the following steps:

1. Calculate the eigenvalues of A
2. Calculate the eigenvectors of A
3. Calculate the diagonal matrix

Calculation of eigenvalues and eigenvectors is described in [Eigenvalues and eigenvectors](/materials/basicmath/eigen.md).

### Diagonal matrix

The formula for diagonal matrix is:

$$
D = C^{-1} \cdot A \cdot C
$$

where

$$
C = \begin{bmatrix}
    v_{1} & v_{2} & \cdots & v_{n}
\end{bmatrix}
$$

is the matrix of eigenvectors of $A$.

$C$ is called similarity matrix.

Resulting diagonal matrix is comprised of eigenvalues of $A$ on the diagonal and zeros elsewhere:

$$
D = \begin{bmatrix}
    \lambda_{1} & 0 & \cdots & 0 \\
    0 & \lambda_{2} & \cdots & 0 \\
    \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & \cdots & \lambda_{n}
\end{bmatrix}
$$

## Example

Let

$$
A = \begin{bmatrix}
    1 & -1 & 1 \\
    1 & 1 & -1 \\
    2 & -1 & 0
\end{bmatrix}
$$

be a square matrix.

### Eigenvalues

Characteristic polynomial of $A$ is:

$$
\det(A - \lambda I) = 0
$$

where $\lambda$ is the eigenvalue of $A$.

$$
\lambda I = \begin{bmatrix}
    \lambda & 0 & 0 \\
    0 & \lambda & 0 \\
    0 & 0 & \lambda
\end{bmatrix}
$$

$$
\det(A - \lambda I) = \begin{vmatrix}
    1 - \lambda & -1 & 1 \\
    1 & 1 - \lambda & -1 \\
    2 & -1 & -\lambda
\end{vmatrix} = 0
$$

Using diagonal rule:

$$
-\lambda \cdot (1 - 2\lambda + \lambda^{2}) - 1 + 2 - (1 - \lambda) - (1 - \lambda) - 1 = 0
$$

$$
-\lambda + 2\lambda^{2} - \lambda^{3} - 2 + 2\lambda = 0
$$

$$
-\lambda^{3} + 2\lambda^{2} + \lambda - 2 = 0
$$

$$
(\lambda - 1) \cdot (\lambda + 1) \cdot (\lambda - 2) = 0
$$

So, the eigenvalues of $A$ are:

$$
\lambda_{1} = 1
$$

$$
\lambda_{2} = -1
$$

$$
\lambda_{3} = 2
$$

### Eigenvectors

Calculate for
$\lambda_{1} = 1$:

$$
(A - \lambda*{1} I) \cdot v*{1} = 0
$$

$$
\begin{bmatrix}
    1 - 1 & -1 & 1 \\
    1 & 1 - 1 & -1 \\
    2 & -1 & 0 - 1
\end{bmatrix} \cdot v_{1} = 0
$$

$$
\begin{bmatrix}
    0 & -1 & 1 \\
    1 & 0 & -1 \\
    2 & -1 & -1
\end{bmatrix} \cdot v_{1} = 0
$$

$$
\begin{bmatrix}
    0 & -1 & 1 \\
    1 & 0 & -1 \\
    2 & -1 & -1
\end{bmatrix} \xrightarrow[R_{3} + R_{1}]{R_{2} + R_{1}} \begin{bmatrix}
    0 & -1 & 1 \\
    1 & -1 & 0 \\
    2 & -2 & 0
\end{bmatrix} \xrightarrow{R_{3} - 2R_{2}} \begin{bmatrix}
    0 & -1 & 1 \\
    1 & -1 & 0 \\
    0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{cases}
    - y + z = 0 \\
    x - y = 0
\end{cases}\ \rightarrow\ \begin{cases}
    z = y \\
    x = y
\end{cases}\ \rightarrow\ x = y = z
$$

Eigenspace $E_{\lambda_{1}}$ is:

$$
E_{\lambda_{1}} = \left( y \cdot \begin{bmatrix}
    1 \\
    1 \\
    1
\end{bmatrix} |\ y \in \mathbb{K} \right)
$$

$$
\dim(E*{\lambda*{1}}) = 1
$$

$$
E_{\lambda_{1}} = \text{Span} \left( \begin{bmatrix}
    1 \\
    1 \\
    1
\end{bmatrix} \right)
$$

Therefore

$$
v_{1} = \begin{bmatrix}
    1 \\
    1 \\
    1
\end{bmatrix}
$$

Calculate for
$\lambda_{2} = -1$:

$$
(A - \lambda*{2} I) \cdot v*{2} = 0
$$

$$
\begin{bmatrix}
    1 - (-1) & -1 & 1 \\
    1 & 1 - (-1) & -1 \\
    2 & -1 & 0 - (-1)
\end{bmatrix} \cdot v_{2} = 0
$$

$$
\begin{bmatrix}
    2 & -1 & 1 \\
    1 & 2 & -1 \\
    2 & -1 & 1
\end{bmatrix} \cdot v_{2} = 0
$$

$$
\begin{bmatrix}
    2 & -1 & 1 \\
    1 & 2 & -1 \\
    2 & -1 & 1
\end{bmatrix} \xrightarrow[R_{3} - R_{1}]{R_{2} + R_{1}} \begin{bmatrix}
    2 & -1 & 1 \\
    3 & 1 & 0 \\
    0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{cases}
    2x - y + z = 0 \\
    3x + y = 0
\end{cases}\ \rightarrow\ \begin{cases}
    z = -2x + y \\
    y = -3x
\end{cases}\ \rightarrow\ \begin{cases}
    z = -5x \\
    y = -3x
\end{cases}
$$

Eigenspace $E_{\lambda_{2}}$ is:

$$
E_{\lambda_{2}} = \left( x \cdot \begin{bmatrix}
    1 \\
    -3 \\
    -5
\end{bmatrix} |\ x \in \mathbb{K} \right)
$$

$$
\dim(E*{\lambda*{2}}) = 1
$$

$$
E_{\lambda_{2}} = \text{Span} \left( \begin{bmatrix}
    1 \\
    -3 \\
    -5
\end{bmatrix} \right)
$$

Therefore

$$
v_{2} = \begin{bmatrix}
    1 \\
    -3 \\
    -5
\end{bmatrix}
$$

Calculate for
$\lambda_{3} = 2$:

$$
(A - \lambda*{3} I) \cdot v*{3} = 0
$$

$$
\begin{bmatrix}
    1 - 2 & -1 & 1 \\
    1 & 1 - 2 & -1 \\
    2 & -1 & 0 - 2
\end{bmatrix} \cdot v_{3} = 0
$$

$$
\begin{bmatrix}
    -1 & -1 & 1 \\
    1 & -1 & -1 \\
    2 & -1 & -2
\end{bmatrix} \cdot v_{3} = 0
$$

$$
\begin{bmatrix}
    -1 & -1 & 1 \\
    1 & -1 & -1 \\
    2 & -1 & -2
\end{bmatrix} \xrightarrow[R_{3} + 2R_{1}]{R_{2} + R_{1}} \begin{bmatrix}
    -1 & -1 & 1 \\
    0 & -2 & 0 \\
    0 & -3 & 0
\end{bmatrix} \xrightarrow[R_{3} - \frac{3}{2}R_{2}]{R_{2} \cdot \frac{1}{-2}} \begin{bmatrix}
    -1 & -1 & 1 \\
    0 & 1 & 0 \\
    0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{cases}
    -x - y + z = 0 \\
    y = 0
\end{cases}\ \rightarrow\ \begin{cases}
    z = x + y \\
    y = 0
\end{cases}\ \rightarrow\ \begin{cases}
    z = x \\
    y = 0
\end{cases}
$$

Eigenspace $E_{\lambda_{3}}$ is:

$$
E_{\lambda_{3}} = \left( x \cdot \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix} |\ x \in \mathbb{K} \right)
$$

$$
\dim(E_{\lambda_{3}}) = 1
$$

$$
E_{\lambda_{3}} = \text{Span} \left( \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix} \right)
$$

Therefore

$$
v_{3} = \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix}
$$

### Diagonal matrix

Eigenbasis $B$ is:

$$
B = \left( v_{1}, v_{2}, v_{3} \right) = \left( \begin{bmatrix}
    1 \\
    1 \\
    1
\end{bmatrix}, \begin{bmatrix}
    1 \\
    -3 \\
    -5
\end{bmatrix}, \begin{bmatrix}
    1 \\
    0 \\
    1
\end{bmatrix} \right)
$$

$A$ is diagonalizable because $\exists B \in \mathbb{K}^{3}$

$$
C = \begin{bmatrix}
    1 & 1 & 1 \\
    1 & -3 & 0 \\
    1 & -5 & 1
\end{bmatrix}
$$

and

$$
C^{-1} \cdot A \cdot C = D = \begin{bmatrix}
    1 & 0 & 0 \\
    0 & -1 & 0 \\
    0 & 0 & 2
\end{bmatrix}
$$
