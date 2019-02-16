class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let userJs = "Jane User";
let invalidUserArray = [0, 1, 2];
let userInterface = { firstName: "Jane", lastName: "User" };
let userClass = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(userClass);
