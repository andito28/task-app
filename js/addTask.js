document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
    };

    const result = taskManager.saveTask(taskData);

    if (result.success) {
      alert("Data berhasil di simpan");
      return (window.location.href = "../tasks.html");
    }
  });
});
