"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
(0, user_1.addUser)({ id: 1, name: 'Jeema', email: 'jeema@example.com' });
(0, user_1.addUser)({ id: 2, name: 'Ali', email: 'ali@example.com' });
console.log((0, user_1.getUser)(1));
console.log((0, user_1.getUser)(3)); // Should return 'User not found'
