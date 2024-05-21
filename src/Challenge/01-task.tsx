export const TypeGuard = () => {
  //   type ValueType = string | number | boolean;

  //   let value: ValueType;
  //   const random = Math.random();
  //   value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

  //   function checkValue(value: ValueType): void {
  //     if (typeof value === "string") {
  //       console.log(value.toLocaleUpperCase());
  //       return;
  //     }
  //     if (typeof value === "number") {
  //       console.log(value.toFixed(2));
  //       return;
  //     }
  //     console.log(`boolean: ${value}`);
  //   }
  //   checkValue(value);

  //=====// Equality Narrowing
  //   type Dog = { type: "dog"; name: string; bark: () => void };
  //   type Cat = { type: "cat"; name: string; meow: () => void };
  //   type Animal = Dog | Cat;

  //   function makeSound(animal: Animal): void {
  //     if (animal.type === "dog") {
  //       animal.bark();
  //       return;
  //     } else {
  //       animal.meow();
  //     }

  //     animal.meow();
  //   }

  //   function makeSound(animal: Animal): void {
  //     if ("bark" in animal) {
  //       animal.bark();
  //     } else {
  //       animal.meow();
  //     }
  //   }

  //=====// "Truthy"/"Falsy" guard
  //   function printLength(str: string | null | undefined): void {
  //     if (str && typeof str === "string") {
  //       console.log(str.length);
  //     } else {
  //       console.log("No string provided");
  //     }
  //   }
  //   printLength("jhjhg");

  //=====// "instanceof" type guard
  //   try {
  //     // Some code that may throw an error
  //     throw new Error("This is an error");
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log("Caught an Error object: " + error.message);
  //     } else {
  //       console.log("Caught an unknown error");
  //     }
  //   }

  //   function checkInput(input: Date | string): string {
  //     if (input instanceof Date) {
  //       return input.getFullYear().toString();
  //     }
  //     return input;
  //   }
  //   const year = checkInput(new Date());
  //   const random = checkInput("2020-05-05");
  //   console.log(year);
  //     console.log(random);

  //=====// Type Predicate
  //   type Student = {
  //     name: string;
  //     study: () => void;
  //   };

  //   type User = {
  //     name: string;
  //     login: () => void;
  //   };

  //   type Person = Student | User;

  //   const randomPerson = (): Person => {
  //     return Math.random() > 0.5
  //       ? { name: "john", study: () => console.log("Studying") }
  //       : { name: "mary", login: () => console.log("Logging in") };
  //   };

  //   const person = randomPerson();

  //   function isStudent(person: Person): person is Student {
  //     // return 'study' in person;
  //     return (person as Student).study !== undefined;
  //   }

  //   if (isStudent(person)) {
  //     person.study(); // This is safe because TypeScript knows that 'person' is a Student.
  //   } else {
  //     person.login();
  //   }

  //=====//  Discriminated Unions and exhaustive check using the never type
  type IncrementAction = {
    type: "increment";
    amount: number;
    timestamp: number;
    user: string;
  };

  type DecrementAction = {
    type: "decrement";
    amount: number;
    timestamp: number;
    user: string;
  };

  type Action = IncrementAction | DecrementAction;

  function reducer(state: number, action: Action): number {
    switch (action.type) {
      case "increment":
        return state + action.amount;

      case "decrement":
        return state - action.amount;

      default:
        const unexpectedAction: never = action;
        throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
  }

  const newState = reducer(15, {
    user: "john",
    type: "increment",
    amount: 5,
    timestamp: 123456,
  });

  return <div>01-task</div>;
};
