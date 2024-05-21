import { TypeGuard } from "./01-task";

export const Challenge = () => {
  // interface Computer {
  //   readonly id: string;
  //   brand: string;
  //   ram: number;
  //   storage?: number;
  //   upgradeRam(amount: number): number;
  // }

  // const Computer: Computer = {
  //   id: "1",
  //   brand: "Lenovo",
  //   ram: 64,
  //   storage: 256,
  //   upgradeRam(amount) {
  //     return this.ram + amount;
  //   },
  // };

  // interface Person {
  //   name: string;
  // }

  // interface DogOwner extends Person {
  //   dogName: string;
  // }

  // interface Manager extends Person {
  //   managePeople(): void;
  //   deleteTasks(): void;
  // }

  // function getEmployee(): Person | DogOwner | Manager {
  //   const random = Math.random();
  //   if (random < 0.33) return { name: "John" };
  //   if (random < 0.66) return { name: "John", dogName: "Rex" };
  //   return {
  //     name: "Clara",
  //     managePeople() {
  //       console.log("Managing...");
  //     },
  //     deleteTasks() {
  //       console.log("Task was deleted");
  //     },
  //   };
  // }

  // const employee: Person | DogOwner | Manager = getEmployee();

  // function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  //   return "managePeople" in obj;
  // }

  // if (isManager(employee)) {
  //   employee.deleteTasks();
  // }

  enum UserRole {
    Admin,
    Manager,
    Employee,
  }

  type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
  };

  function createUser(user: User): User {
    return user;
  }

  const newUser = createUser({
    id: 1,
    name: "bob",
    role: UserRole.Admin,
    contact: ["email@mail.com", "123456789"],
  });

  // console.log(newUser);

  return (
    <div>
      <h5>Challenge</h5>
      <TypeGuard />
    </div>
    // <div>
    //   <h5>Challenge</h5>
    //   <p>{processData(2)}</p>
    //   <p>{processData(4, { reverse: true })}</p>
    //   <p>{processData("Nata", { reverse: true })}</p>
    //   <p>{processData("Nata")}</p>
    // </div>
  );
};
