var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userJs = "Jane User";
var invalidUserArray = [0, 1, 2];
var userInterface = { firstName: "Jane", lastName: "User" };
var userClass = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(userClass);
