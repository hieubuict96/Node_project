function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function () {
    console.log("Hello " + this.firstName + " " + this.lastName);
}

var p = new Person("Hoa", "Mai")
p.sayHello()
