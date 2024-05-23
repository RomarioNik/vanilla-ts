type Basic = {
  type: "basic";
  name: string;
};

type Advanced = {
  type: "advanced";
  name: string;
  email: string;
};

type User = Basic | Advanced;

export const Plan = (props: User) => {
  const { type, name } = props;

  if (type === "basic") {
    return (
      <div className="alert alert-success">
        <p>User : {name}</p>
      </div>
    );
  }

  return (
    <div className="alert alert-danger">
      <p>User : {name}</p>
      <p>Email : {props.email}</p>
    </div>
  );
};
