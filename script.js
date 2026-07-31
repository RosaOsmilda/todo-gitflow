// Cargar tareas guardadas al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
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
  taskInput.value = "";
  console.log("Tarea agregada:", newTask);
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
}
});
