document.addEventListener("DOMContentLoaded", () => {
  const myTask = new Task();

  const existingTasks = myTask.getTasks();

  const taskWrapper = document.getElementById("taskWrapper");
  const taskWrapperEmpty = document.getElementById("taskWrapperEmpty");

  function displayAllTasks() {
    if (existingTasks.length === 0) {
      console.log("task tidak tersedia");
    }
  }
});
