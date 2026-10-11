# Task 2 - Descending Order Using JavaScript

## 📌 Project Overview

The Descending Order program is a JavaScript task that arranges a collection of numbers from the largest value to the smallest value. This task helps beginners understand arrays, sorting techniques, numerical comparisons, and basic JavaScript programming concepts.

This project is developed using HTML and JavaScript. HTML provides the webpage structure, while JavaScript handles the sorting logic and displays the result.

## 🎯 Objective

The main objective of this task is to sort a given set of numbers in descending order and display the sorted result.

For example, if the input numbers are `5, 2, 8, 1, 3`, the program arranges them as `8, 5, 3, 2, 1`.

## 🛠️ Technologies Used

- **HTML5** – Used to create the webpage structure.
- **JavaScript** – Used to process and sort the numbers.
- **Web Browser** – Used to execute the program and view the output.

## ⚙️ How It Works

1. The user enters a set of numbers.
2. JavaScript receives the input values.
3. The values are stored in an array.
4. The sorting logic arranges the numbers from largest to smallest.
5. The sorted numbers are displayed as output.

## 💻 Example Input and Output

### Example 1

**Input:**
```text
5, 2, 8, 1, 3
```

**Output:**
```text
8, 5, 3, 2, 1
```

### Example 2

**Input:**
```text
10, 4, 7, 2, 15
```

**Output:**
```text
15, 10, 7, 4, 2
```

### Example 3

**Input:**
```text
25, 5, 40, 10, 15
```

**Output:**
```text
40, 25, 15, 10, 5
```

## 📸 Output Screenshot

The following screenshot shows the output of the Descending Order program.
<img width="654" height="509" alt="Output_1" src="https://github.com/user-attachments/assets/22a02640-f4dc-4971-b44c-1909a69a472c" />


## 🧠 JavaScript Concepts Used

### 1. Arrays

An array is used to store multiple values in a single variable. In this program, the array stores the numbers that need to be sorted.

### 2. Array Sorting

JavaScript provides the `sort()` method to arrange array elements. For numerical sorting in descending order, a comparison function can be used.

```javascript
numbers.sort((a, b) => b - a);
```

**Explanation:**

- If `b - a` is negative, `a` is placed before `b`.
- If `b - a` is positive, `b` is placed before `a`.
- If the result is zero, the values are equal for sorting purposes.

The comparison function ensures that numbers are sorted numerically from largest to smallest.

## ✨ Key Features

- Arranges numbers in descending order.
- Demonstrates JavaScript array manipulation.
- Uses numerical sorting logic.
- Supports different sets of input numbers.
- Helps beginners understand sorting and comparison functions.

## 📂 Project Structure

```text
Task 2-Descending Order/
│
├── index.html
├── script.js
├── README.md
└── Output/
    └── output.png
```

- **index.html** – Contains the webpage structure.
- **script.js** – Contains the JavaScript sorting logic.
- **README.md** – Provides the project description, examples, and documentation.
- **Output/** – Contains the output screenshot.

## 🚀 How to Run the Project

1. Download or clone the repository.
2. Navigate to the `Task 2-Descending Order` folder.
3. Open `index.html` in a web browser.
4. Enter the numbers as required by the program.
5. Execute the sorting operation.
6. View the numbers arranged in descending order.

## 📚 Learning Outcomes

By completing this task, I learned:

- How to store multiple values using arrays.
- How to sort numbers in descending order.
- How to use JavaScript's `sort()` method.
- How to apply a comparison function.
- How to handle numerical data using JavaScript.
- How to test a program with different input values.

## 🏁 Conclusion

This task provided practical experience in sorting numerical values using JavaScript. It improved my understanding of arrays, sorting methods, and comparison logic. This exercise also helped strengthen my JavaScript programming and problem-solving skills.

---

**Day:** 18  
**Task:** 2  
**Topic:** Descending Order  
**Technologies:** HTML5 and JavaScript

**Repository:** [JavaScript-Daily-Task](https://github.com/Vidhyak02/JavaScript-Daily-Task)
