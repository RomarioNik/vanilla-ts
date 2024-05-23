import { type Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

export const List = ({ tasks, toggleTask }: ListProps): JSX.Element => {
  const handleChange = (id: string) => {
    toggleTask(id);
  };

  return (
    <ul className="list">
      {tasks.length > 0 &&
        tasks.map(({ id, description, isCompleted }) => (
          <li key={id}>
            <p className="task-text">{description}</p>
            <input
              type="checkbox"
              name="checkbox"
              checked={isCompleted}
              onChange={() => handleChange(id)}
            />
          </li>
        ))}
    </ul>
  );
};
