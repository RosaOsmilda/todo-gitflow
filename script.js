// Cargar tareas guardadas al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const anio = date.getFullYear();
  return dia + "/" + mes + "/" + anio;
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
    li.textContent = task.text + " (" + formatDate(task.id) + ")";
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
