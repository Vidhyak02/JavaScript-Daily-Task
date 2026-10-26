# JavaScript Daily Tasks — Day 25
### 🛍️ Product Management Using JavaScript

> *Small steps every day build strong coding skills.*

## 📌 Overview

Day 25 focuses on practicing JavaScript DOM manipulation, event handling, and dynamic webpage updates by building simple product management applications.

In this set of tasks, I practiced adding products, deleting products, and performing basic CRUD operations using JavaScript. These exercises helped me understand how to handle user input and update webpage content dynamically without reloading the page.

## 🎯 Objectives

- Practice JavaScript DOM manipulation.
- Get user input using HTML input fields.
- Handle button clicks using event listeners.
- Add and display products dynamically.
- Delete selected products from a list.
- Update existing product information.
- Understand CRUD operations.
- Improve logical thinking and problem-solving skills.

## 🛠️ Technologies Used

- **HTML5** – To create the structure of the webpage.
- **JavaScript** – To implement functionality and handle user interactions.
- **DOM Manipulation** – To dynamically update webpage elements.

---

## Task 1 – Add Product

### 📖 Description

Create a simple product list application that allows users to enter a product name and add it to the displayed list.

When the user enters a product name and clicks the **Add Product** button, the product is added dynamically to the webpage without reloading the page.

### ✨ Features

- Enter a product name in the input field.
- Add products by clicking the Add Product button.
- Display added products under the Products heading.
- Add multiple products one after another.
- Update the webpage dynamically.

### 💡 Concepts Practiced

- DOM manipulation
- `document.getElementById()`
- Input `.value` property
- Event handling
- `document.createElement()`
- `appendChild()`

### 🧪 Sample Input

```text
Laptop
Mobile
Headphones
Keyboard
Mouse
```

### ✅ Expected Output

```text
Products:
1. Laptop
2. Mobile
3. Headphones
4. Keyboard
5. Mouse
```

### 📚 What I Learned

This task helped me understand how to get user input from an HTML form element and display the entered information dynamically using JavaScript.

---

## Task 2 – Delete Product

### 📖 Description

Create a product list application that allows users to delete a selected product from the displayed list.

Each product can have a delete button. When the user clicks the delete button, the selected product is removed from the webpage.

### ✨ Features

- Display a list of products.
- Provide a delete option for each product.
- Remove the selected product when the delete button is clicked.
- Update the product list dynamically.
- Handle user actions using JavaScript.

### 💡 Concepts Practiced

- DOM manipulation
- Event listeners
- Button click events
- The `remove()` method
- Dynamic webpage updates

### 🧪 Sample Input

**Initial Product List:**

```text
Products:
1. Laptop
2. Mobile
3. Headphones
4. Keyboard
```

**Action:**

```text
Delete: Mobile
```

### ✅ Expected Output

```text
Products:
1. Laptop
2. Headphones
3. Keyboard
```

### 📚 What I Learned

This task helped me understand how to select and remove a particular HTML element from the DOM. It also demonstrated how a webpage can respond immediately to user actions without requiring a page refresh.

---

## Task 3 – Product CRUD Operations

### 📖 Description

Build a product management application that demonstrates the four basic CRUD operations using JavaScript.

CRUD stands for **Create, Read, Update, and Delete**. These operations are commonly used in applications that manage information.

### 🔄 Understanding CRUD Operations

| Operation | Description | Example |
|---|---|---|
| **Create** | Add new information. | Add a new product. |
| **Read** | Display existing information. | View the product list. |
| **Update** | Modify existing information. | Change Mobile to Smartphone. |
| **Delete** | Remove information. | Delete Headphones. |

### ✨ Features

- Add new products to the list.
- Display all available products.
- Update existing product names.
- Delete selected products.
- Reflect changes dynamically on the webpage.

### 💡 Concepts Practiced

- CRUD operations
- DOM manipulation
- Event handling
- Input validation
- Updating HTML elements
- Adding and removing elements dynamically

### 🧪 Sample Workflow

**Initial Product List:**

```text
1. Laptop
2. Mobile
3. Headphones
```

**Actions Performed:**

```text
Create: Add Keyboard
Update: Rename Mobile to Smartphone
Delete: Remove Headphones
```

### ✅ Expected Output

```text
Products:
1. Laptop
2. Smartphone
3. Keyboard
```

### 📚 What I Learned

This task helped me understand how Create, Read, Update, and Delete operations work together in a simple application. These operations are important in real-world projects such as inventory systems, shopping websites, and employee management applications.

---

## 🧠 Key Learnings

By completing Day 25, I learned how to:

- Read values from HTML input fields.
- Handle user interactions using event listeners.
- Select and manipulate DOM elements.
- Add new elements dynamically to a webpage.
- Remove selected elements from the DOM.
- Update existing product information.
- Understand the four basic CRUD operations.
- Build interactive applications using HTML and JavaScript.
- Apply JavaScript concepts to practical problems.

## ▶️ How to Run the Tasks

1. Clone or download this repository.
2. Open the `Daily Tasks` folder.
3. Navigate to the `Day 25` folder.
4. Open the required task folder.
5. Open `index.html` in your web browser.
6. Test the application by adding, updating, or deleting products according to the task.

## 📂 Folder Structure

```text
Day 25/
│
├── Task 1-Add Product/
│   ├── index.html
│   └── script.js
│
├── Task 2-Delete Product/
│   ├── index.html
│   └── script.js
│
└── Task 3-Product CRUD/
    ├── index.html
    └── script.js
```

*Note: The folder structure above is an example. Keep the filenames consistent with your actual project files.*

## 🌍 Real-World Applications

The concepts practiced in these tasks can be used in:

- Shopping cart applications
- Product inventory systems
- Online shopping websites
- To-do list applications
- Student management systems
- Employee record management
- Admin dashboards

## 🚀 Conclusion

Day 25 provided practical experience in building interactive product management applications using JavaScript. Through the Add Product, Delete Product, and Product CRUD tasks, I improved my understanding of DOM manipulation, event handling, and dynamic webpage updates.

These exercises strengthened my JavaScript fundamentals and helped me understand how interactive web applications handle user data.

**Keep learning, keep practicing, and keep coding! 💻✨**

---

### 🏷️ Tags

`#JavaScript` `#WebDevelopment` `#DailyCoding` `#DOMManipulation` `#CRUDOperations` `#HTML5`
