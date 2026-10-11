# Task 3 - Count Even and Odd Numbers Using JavaScript

## 📌 Project Overview

The Count Even and Odd Numbers program is a simple JavaScript task that counts how many even and odd numbers are present in a given set of numbers.

This project is developed using HTML and JavaScript. HTML provides the webpage structure, while JavaScript processes the numbers, checks whether each number is even or odd, and calculates the total count.

## 🎯 Objective

The main objective of this task is to identify even and odd numbers in a collection and display the total count of each.

- **Even Number:** A number that is divisible by 2 without a remainder.
- **Odd Number:** A number that leaves a remainder when divided by 2.

For example, in the numbers `1, 2, 3, 4, 5, 6`, there are 3 even numbers and 3 odd numbers.

## 🛠️ Technologies Used

- **HTML5** – Used to create the webpage structure and input elements.
- **JavaScript** – Used to check numbers and count even and odd values.
- **Web Browser** – Used to run the program and view the output.

## ⚙️ How It Works

1. The user enters a set of numbers.
2. JavaScript receives the input values.
3. The numbers are stored in an array.
4. Each number is checked using the modulus (`%`) operator.
5. If the remainder after dividing by 2 is zero, the number is counted as even.
6. Otherwise, the number is counted as odd.
7. The total number of even and odd values is displayed.

## 💻 Example Input and Output

### Example 1

**Input:**
```text
1, 2, 3, 4, 5, 6
```

**Output:**
```text
Even Count: 3
Odd Count: 3
```

### Example 2

**Input:**
```text
10, 15, 20, 25, 30
```

**Output:**
```text
Even Count: 3
Odd Count: 2
```

### Example 3

**Input:**
```text
7, 9, 11, 13
```

**Output:**
```text
Even Count: 0
Odd Count: 4
```

## 📸 Output Screenshot

The following screenshot shows the output of the Count Even and Odd Numbers program.
<img width="686" height="537" alt="Output_1" src="https://github.com/user-attachments/assets/0356feea-5d28-4916-9570-c944439bd017" />


## 🧠 JavaScript Concepts Used

### 1. Arrays

An array is used to store multiple numbers in a single variable. It allows the program to process a collection of values.

### 2. For Loop

A `for` loop is used to visit each number in the array and check whether it is even or odd.

### 3. Modulus Operator (%)

The modulus operator returns the remainder after division.

```javascript
number % 2 === 0
```

If the condition is true, the number is even. Otherwise, it is odd.

### 4. Conditional Statements

The `if...else` statement is used to check the condition and update the appropriate count.

### 5. Counter Variables

Two variables are used to maintain the counts:

- `
