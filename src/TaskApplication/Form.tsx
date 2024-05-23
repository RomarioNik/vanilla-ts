import { useState } from "react";

type FormProps = {
  addTask: (text: string) => void;
};

export const Form = ({ addTask }: FormProps): JSX.Element => {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const text = formData.get("text") as string;

    if (!text) {
      alert("Please, field the form");
      return;
    }

    addTask(text);
    e.currentTarget.reset();
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
};
