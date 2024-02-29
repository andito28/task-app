class Task {
  constructor() {
    this.tasks = this.getTasks() || [];
  }

  saveTask(taskData) {
    //function dd-mm-yy
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const newTask = {
      id: Date.now(),
      isCompleted: false,
      createAt: `${year}-${month}-${day}`,
      ...taskData,
    };

    this.tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  completeTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id == taskId);

    if (index !== -1) {
      this.tasks.up;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id == taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
