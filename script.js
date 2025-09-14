// 🎯 Part 2: Functions, Parameters & Scope

// Global variable
let taskCount = 0;

// Function with parameter & return value
function createTaskMessage(taskName) {
  return `✅ Task Added: ${taskName}`;
}

// Function to add a task
function addTask(taskName) {
  let message = createTaskMessage(taskName); // local scope variable
  document.getElementById("taskText").innerText = message;
  taskCount++; // modifies global variable
  triggerAnimation(); // call CSS animation
}

// Function to clear tasks
function clearTask() {
  document.getElementById("taskText").innerText = "All tasks cleared!";
  taskCount = 0;
  triggerAnimation();
}

// 🎯 Part 3: Combining CSS + JS
// Trigger CSS animation by toggling a class
function triggerAnimation() {
  const card = document.getElementById("taskCard");
  card.classList.add("animate");
  setTimeout(() => {
    card.classList.remove("animate");
  }, 500); // remove after animation ends
}

// 🎯 Event Listeners
document.getElementById("addTaskBtn").addEventListener("click", function() {
  addTask("Finish Assignment");
});

document.getElementById("clearTaskBtn").addEventListener("click", function() {
  clearTask();
});
