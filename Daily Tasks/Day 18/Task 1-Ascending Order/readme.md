
 # Task 1 - Ascending Order Using JavaScript

## 📌 Project Overview

The Ascending Order program is a simple JavaScript task that arranges a collection of numbers from the smallest value to the largest value. This task helps beginners understand array manipulation, numerical sorting, and basic JavaScript programming concepts.

This project is developed using HTML and JavaScript. HTML provides the webpage structure, while JavaScript handles the sorting logic and displays the result.

## 🎯 Objective

The main objective of this task is to sort a given set of numbers in ascending order and display the sorted result.

For example, if the input numbers are `5, 2, 8, 1, 3`, the program arranges them as `1, 2, 3, 5, 8`.

## 🛠️ Technologies Used

- **HTML5** – Used to create the webpage structure.
- **JavaScript** – Used to process and sort the numbers.
- **Web Browser** – Used to execute the program and view the output.

## ⚙️ How It Works

1. The user enters a set of numbers.
2. JavaScript receives the input values.
3. The values are stored in an array.
4. The sorting logic arranges the numbers from smallest to largest.
5. The sorted numbers are displayed as output.

## 💻 Example Input and Output

### Example 1

**Input:**
```text
5, 2, 8, 1, 3
```

**Output:**
```text
1, 2, 3, 5, 8
```

### Example 2

**Input:**
```text
10, 4, 7, 2, 15
```

**Output:**
```text
2, 4, 7, 10, 15
```

### Example 3

**Input:**
```text
25, 5, 40, 10, 15
```

**Output:**
```text
5, 10, 15, 25, 40
```

## 📸 Output Screenshot

The following screenshot shows the output of the Ascending Order program.
<img width="643" height="439" alt="Output_1" src="https://github.com/user-attachments/assets/31d156e5-9464-417e-b794-0e7e8f713190" />


## 🧠 JavaScript Concept Used

### Array

An array is used to store multiple values in a single variable. In this program, an array stores the numbers that need to be sorted.

### Sorting

JavaScript provides the `sort()` method to arrange array elements.

For numerical sorting in ascending order, a comparison function can be used:

```javascript
numbers.sort((a, b) => a - b);
```

**Explanation:**

- If `a - b` is negative, `a` is placed before `b`.
- If `a - b` is positive, `b` is placed before `a`.
- If the result is zero, the values are equal for sorting purposes.

The comparison function ensures that numbers are sorted numerically rather than alphabetically.

## ✨ Key Features

- Arranges numbers in ascending order.
- Demonstrates JavaScript array manipulation.
- Uses numerical sorting logic.
- Provides practical experience in handling numerical values.
- Helps beginners understand basic problem-solving techniques.

## 📂 Project Structure

```text
Task 1-Ascending Order/
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
2. Navigate to the `Task 1-Ascending Order` folder.
3. Open `index.html` in a web browser.
4. Enter the numbers as required by the program.
5. Execute the sorting operation.
6. View the numbers arranged in ascending order.

## 📚 Learning Outcomes

By completing this task, I learned:

- How to store multiple values using arrays.
- How to sort numerical values in ascending order.
- How to use JavaScript's `sort()` method.
- How to apply a comparison function.
- How to connect JavaScript functionality with an HTML webpage.
- How to test a program using different input values.

## 🏁 Conclusion

This task provided practical experience in sorting numbers using JavaScript. It improved my understanding of arrays, sorting methods, and numerical comparison logic. This exercise also helped strengthen my basic JavaScript programming and problem-solving skills.

---

**Day:** 18  
**Task:** 1  
**Topic:** Ascending Order  
**Technologies:** HTML5 and JavaScript

**Repository:** [JavaScript-Daily-Task](https://github.com/Vidhyak02/JavaScript-Daily-Task)
