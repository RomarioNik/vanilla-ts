import { type PropsWithChildren } from "react";

// type Props = { name: string; id: number; children?: React.ReactNode };
// type Props = { name: string; id: number };

// type ComponentsProps = Props & PropsWithChildren;

type ComponentsProps = PropsWithChildren<{ name: string; id: number }>;

function Component({ name, id, children }: ComponentsProps) {
  return (
    <div>
      <h2>My name is {name}</h2>
      <h2>ID: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
