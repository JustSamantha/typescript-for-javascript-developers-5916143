"use strict";
var DataRole;
(function (DataRole) {
    DataRole["ADMIN"] = "admin";
    DataRole["USER"] = "user";
    DataRole["GUEST"] = "guest";
})(DataRole || (DataRole = {}));
// Sample data
const data = [
    { id: 1, name: 'Zia', role: DataRole.ADMIN },
    { id: 2, name: 'Gaia', role: DataRole.USER },
    { id: 3, name: 'Noora', role: DataRole.GUEST }
];
// Function to find a user by ID
function findUserById(id) {
    return data.find(user => user.id === id);
}
// Function to log user details
function logUserDetails(user) {
    console.log(`Name: ${user.name}, Role: ${user.role}`);
}
// Function to merge two objects: a user and an age key value pair { age: 22 }
function mergeObjects(user, age) {
    return Object.assign(Object.assign({}, user), age);
}
const user = findUserById(1);
if (user) {
    logUserDetails(user);
    const merged = mergeObjects(user, { age: 38 });
    console.log(merged);
}
else {
    console.log('User with id 1 not found');
}
