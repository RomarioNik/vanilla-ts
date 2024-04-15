import { useState } from "react";
import { type Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;

    const task: Task = {
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    };

    addTask(task);
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim());
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        value={text}
        name="text"
        // onChange={(e) => setText(e.target.value)}
        onChange={handleChange}
      />
      <button className="btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
