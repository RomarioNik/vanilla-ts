export class Book {
  public title: string;
  readonly author: string;
  private checkedOut: boolean = false; //default property
  //   checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  checkOut() {
    this.checkedOut = true;
  }
}

const deepWork = new Book("Deep Work", "Cal Network");
console.log(deepWork);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const hipster = new Person("shakeAndBake", 100);
hipster.greet();
