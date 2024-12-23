"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@deepkit/type");
const __ΩUser = ['id', 'username', 'User', 'P(!4!&4"Mw#y'];
const ui = { id: 123, username: 'pet', c: 123 };
console.log(ui);
(type_1.validate.Ω = [[() => __ΩUser, 'n!']], (0, type_1.validate)(ui)); //?
var ui2 = {
    id: 1.1,
    username: "13"
};
//const c = cast<User>(ui2);
(type_1.validate.Ω = [[() => __ΩUser, 'n!']], (0, type_1.validate)(ui2)); //?
ui2; //?
(type_1.cast.Ω = [[() => __ΩUser, 'n!']], (0, type_1.cast)(ui2)); //?
//const d:integer = 1.5;
