const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");
// const formBUtton = document.querySelector<HTMLButtonElement>(".btn");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTasks);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(task: Task) {
  const newElement = document.createElement("li");
  newElement.textContent = task.description;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  newElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(newElement);
}

function createTask(text: string): void {
  const newTask: Task = {
    description: text,
    isCompleted: false,
  };

  tasks.push(newTask);
  updateStorage();
  renderTasks(newTask);
}

taskForm?.addEventListener("submit", handleSubmit);

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const taskDescription = formInput?.value;

  if (!taskDescription) {
    alert("Please, enter  a task description");
    return;
  }

  createTask(taskDescription);
  formInput.value = "";
  //   const formData = new FormData(e.currentTarget);
}
