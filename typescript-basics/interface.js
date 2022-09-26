"use strict";
exports.__esModule = true;
var _a = {
    name: "John",
    id: 1,
    email: ""
}, userName = _a.name, userLogin = _a.email;
var employee = { name: "John", id: 1, email: "", salary: 1000 };
var _b = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" },
], user1 = _b[0], user2 = _b[1], restUsers = _b.slice(2);
console.log(user1);
console.log(user2);
console.log(restUsers);
// let result = restUsers.filter(user => user.id > 3);
// @Component({})
// class Component {
//   constructor(public name: string) { }
// }
