"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = addUser;
exports.getUser = getUser;
const users = [];
function addUser(user) {
    users.push(user);
}
function getUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
        return user;
    }
    else {
        return 'User not found';
    }
}
