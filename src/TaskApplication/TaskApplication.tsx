import { useState, useEffect } from "react";
import { type Task } from "./types";
import { Form } from "./Form";
import { List } from "./List";

const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export const TaskApplication = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string): void => {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string): void => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(newTasks);
  };

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
};
