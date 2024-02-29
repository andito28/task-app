class Task {
  constructor() {
    this.tasks = this.getTasks() || [];
  }

  saveTask(taskData) {
    const newTask = {
      id: Date.now(),
      isCompleted: false,
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
}
