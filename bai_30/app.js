var person = {
    firstName: "",
    lastName: "",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var hoa = Object.create(person);
hoa.firstName = "Lê";
hoa.lastName = "Hoa";

console.log(hoa.getFullName());

