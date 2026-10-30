
// Get HTML Elements

const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

const message = document.getElementById("message");

const emptyMessage = document.getElementById("emptyMessage");

const filterButtons = document.querySelectorAll(".filter-btn");


// Get Tasks from Local Storage

let tasks = [];

try {
    tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
} catch (error) {
    tasks = [];
}

let currentFilter = "all";


// Save Tasks to Local Storage

function saveTasks() {

    localStorage.setItem("myTasks", JSON.stringify(tasks));

}


// Add New Task

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        message.textContent = "Please enter a task!";
        return;
    }

    const newTask = {
        id: Date.now(),
        name: taskName,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    message.textContent = "";

    displayTasks();

});


// Display Tasks

function displayTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    // Filter Tasks

    if (currentFilter === "pending") {

        filteredTasks = tasks.filter(task => !task.completed);

    }

    else if (currentFilter === "completed") {

        filteredTasks = tasks.filter(task => task.completed);

    }


    // Empty Message

    if (filteredTasks.length === 0) {

        emptyMessage.hidden = false;

        if (tasks.length === 0) {
            emptyMessage.querySelector("h3").textContent = "No Tasks Yet!";
            emptyMessage.querySelector("p").textContent =
                "Add your first task and start organizing your day.";
        }

        else {
            emptyMessage.querySelector("h3").textContent = "No Tasks Found!";
            emptyMessage.querySelector("p").textContent =
                "There are no tasks in this category.";
        }

    }

    else {

        emptyMessage.hidden = true;

    }


    // Create Task Elements

    filteredTasks.forEach(function (task) {

        const li = document.createElement("li");

        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = task.id;


        // Checkbox

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className = "task-checkbox";

        checkbox.checked = task.completed;

        checkbox.setAttribute("aria-label", "Mark task as completed");


        // Task Name

        const span = document.createElement("span");

        span.className = "task-text";

        span.textContent = task.name;


        // Action Buttons

        const actions = document.createElement("div");

        actions.className = "task-actions";


        // Edit Button

        const editButton = document.createElement("button");

        editButton.type = "button";

        editButton.className = "action-btn edit-btn";

        editButton.textContent = "✏️";

        editButton.dataset.action = "edit";

        editButton.setAttribute("aria-label", "Edit task");


        // Delete Button

        const deleteButton = document.createElement("button");

        deleteButton.type = "button";

        deleteButton.className = "action-btn delete-btn";

        deleteButton.textContent = "🗑️";

        deleteButton.dataset.action = "delete";

        deleteButton.setAttribute("aria-label", "Delete task");


        // Append Elements

        actions.append(editButton, deleteButton);

        li.append(checkbox, span, actions);

        taskList.appendChild(li);

    });


    // Update Statistics

    updateStatistics();

}


// Update Task Statistics

function updateStatistics() {

    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;

    document.getElementById("pendingTasks").textContent = pending;

    document.getElementById("completedTasks").textContent = completed;

}


// Handle Checkbox and Action Buttons

taskList.addEventListener("click", function (event) {

    const li = event.target.closest(".task-item");

    if (!li) return;

    const taskId = Number(li.dataset.id);

    const task = tasks.find(task => task.id === taskId);

    if (!task) return;


    // Edit Task

    if (event.target.dataset.action === "edit") {

        const updatedName = prompt("Enter the updated task:", task.name);

        if (updatedName === null) return;

        if (updatedName.trim() === "") {
            message.textContent = "Task name cannot be empty!";
            return;
        }

        task.name = updatedName.trim();

        message.textContent = "";

        saveTasks();

        displayTasks();

    }


    // Delete Task

    else if (event.target.dataset.action === "delete") {

        const confirmDelete = confirm("Are you sure you want to delete this task?");

        if (confirmDelete) {

            tasks = tasks.filter(task => task.id !== taskId);

            message.textContent = "";

            saveTasks();

            displayTasks();

        }

    }

});


// Mark Task as Completed

taskList.addEventListener("change", function (event) {

    if (event.target.classList.contains("task-checkbox")) {

        const li = event.target.closest(".task-item");

        const taskId = Number(li.dataset.id);

        const task = tasks.find(task => task.id === taskId);

        if (task) {

            task.completed = event.target.checked;

            saveTasks();

            displayTasks();

        }

    }

});


// Filter Tasks

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        displayTasks();

    });

});


// Initial Display

displayTasks();
