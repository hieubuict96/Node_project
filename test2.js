function Person(name) {
    this.name = name;
}

function Per() 
{
    return this.names;
}

Per.prototype.level = "adminn"

Person.prototype.level = function () {
    return Per.prototype.level;
}



console.log(Person.prototype.level());
