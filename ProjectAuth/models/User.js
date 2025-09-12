// models/User.js
const fs = require('fs');
const path = require('path');
const USERS_FILE = path.join(__dirname, '../data/users.json');

let users = [];
// Load users from file if exists
if (fs.existsSync(USERS_FILE)) {
    try {
        users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
    } catch (e) {
        users = [];
    }
}

function saveUsersToFile() {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function addUser({ name, email, password }) {
    const user = { name, email, password };
    users.push(user);
    saveUsersToFile();
    return user;
}

function getAllUsers() {
    return users;
}

function findUserByEmail(email) {
    return users.find(u => u.email === email);
}

module.exports = {
    addUser,
    getAllUsers,
    findUserByEmail,
    users
};
