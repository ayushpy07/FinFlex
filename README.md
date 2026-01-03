# FinFlex: DSA-Based Financial Optimization Suite

**FinFlex** is a specialized backend system designed to solve complex financial problems using advanced Data Structures and Algorithms. The system focuses on debt reduction, transaction optimization, and budget forecasting.

## 🚀 Key Features & DSA Implementation

* **Debt Repayment Scheduler**: Implements a **Min-Heap** data structure to prioritize high-interest loans, ensuring the most expensive debt is settled first to minimize total interest outflow.
* **Cash Flow Minimizer**: Utilizes a **Greedy Algorithm** to simplify complex peer-to-peer transaction networks, calculating net balances and reducing the total number of required payments.
* **Budget Analysis Engine**: Employs a **Binary Search Tree (BST)** to store and search transaction descriptions efficiently, identifying recurring expense patterns with $O(\log n)$ efficiency.
* **Tax Forecasting**: A modular engine for multi-slab tax calculations and automated deduction management.

## 📂 Project Structure

* **/backend**: Core Node.js and Express.js server implementation.
* **/backend/routes**: Modular API endpoints for Loan, Tax, Budget, and Cashflow logic.
* **package.json**: Project metadata and dependency management.
* **vercel.json**: Configuration for automated cloud deployment via Vercel.

## 🛠 Tech Stack

* **Language**: JavaScript (Node.js)
* **Framework**: Express.js
* **Data Structures**: Min-Heap, Binary Search Tree (BST)
* **Deployment**: Vercel
