# Salary Calculator 💰

## 📌 About the Project
The Salary Calculator is a simple web application developed using HTML and JavaScript. It calculates an employee's gross salary and net salary based on basic salary, HRA percentage, DA percentage, and deductions.

## 🚀 Features
- Accepts basic salary as input
- Calculates HRA based on percentage
- Calculates DA based on percentage
- Calculates gross salary
- Subtracts deductions from gross salary
- Displays the final net salary
- Shows salary details dynamically

## 🛠️ Technologies Used
- HTML5
- JavaScript

## 📂 Folder Structure
```text
Task 1-Employee Salary Calculator/
│
├── index.html
├── script.js
└── Output/
    └── output.png
```

## 💻 Sample Input
| Field | Value |
|---|---:|
| Basic Salary | ₹30,000 |
| HRA | 20% |
| DA | 10% |
| Deduction | ₹2,000 |

## 📊 Calculation
- HRA = ₹30,000 × 20% = ₹6,000
- DA = ₹30,000 × 10% = ₹3,000
- Gross Salary = ₹30,000 + ₹6,000 + ₹3,000 = ₹39,000
- Net Salary = ₹39,000 − ₹2,000 = ₹37,000

## 📤 Sample Output
```text
Basic Salary: ₹30000.00
HRA: ₹6000.00
DA: ₹3000.00
Gross Salary: ₹39000.00
Deduction: ₹2000.00
Net Salary: ₹37000.00
```

## 🖼️ Output Screenshot
<img width="701" height="554" alt="Output_1" src="https://github.com/user-attachments/assets/de15809d-1342-4cb1-a8de-6924c0d521f0" />


## ▶️ How to Run
1. Download or clone the repository.
2. Open the `Task 1-Employee Salary Calculator` folder.
3. Open `index.html` in a web browser.
4. Enter the basic salary, HRA percentage, DA percentage, and deduction.
5. Click the **Calculate Salary** button.
6. View the calculated salary details.

## 📚 What I Learned
- Accessing HTML input values using `getElementById()`
- Converting input values into numbers using `Number()`
- Performing percentage calculations
- Using JavaScript variables and arithmetic operators
- Displaying results dynamically using `innerText`
- Formatting salary values using `toFixed(2)`

## ⚠️ Note
This is a beginner-level JavaScript practice project. The calculation is for learning purposes and may not reflect actual company payroll rules.
