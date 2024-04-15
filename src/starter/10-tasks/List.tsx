import { type Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

const List = ({ tasks, toggleTask }: ListProps) => {
  const toggleTaskComplete = (id: string) => {
    // console.log(id);
    toggleTask(id);
  };

  return (
    <ul className="list">
      {tasks.map((task: Task) => {
        return (
          <li key={task.id}>
            <p className="task-text">{task.description}</p>
            <input
              type="checkbox"
              name="checkbox"
              onChange={() => toggleTaskComplete(task.id)}
              checked={task.isCompleted}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
