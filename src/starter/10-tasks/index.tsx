import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import { type Task } from "./types";

function loadTasks() {
  const storedTsaks = localStorage.getItem("tasks");
  return storedTsaks ? JSON.parse(storedTsaks) : [];
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task): void => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleTask = (id: string) => {
    const newTask: Task[] = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(newTask);
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
