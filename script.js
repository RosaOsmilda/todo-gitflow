// Cargar tareas guardadas al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleComplete(id) {
  tasks = tasks.map(function(task) {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  saveTasks();
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.style.cursor = "pointer";
    if (task.completed) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }
    li.addEventListener("click", function() {
      toggleComplete(task.id);
    });
    taskList.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

renderTasks();
