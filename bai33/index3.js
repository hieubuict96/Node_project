var obj = {
    name: "Mai Hoa", 
    sayHello: function (param1, param2) {
    console.log(`Hello ${ this.name }`);
    console.log("Params: ", param1, param2);
    }
}

obj.sayHello("Xin chào", "2016");
obj.sayHello.call({ name: "Yến Phượng" }, "Xin chào", "2017");
obj.sayHello.apply({ name: "Yến Phượng" }, ["Xin chào", "2018"]);
