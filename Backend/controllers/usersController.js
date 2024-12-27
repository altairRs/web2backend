const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../users.json');

const readUsersFromFile = () => {
    const data = fs.readFileSync(usersFilePath);
    return JSON.parse(data).users;
};

const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify({ users }, null, 2));
};

const getUsers = (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
};

const getUserById = (req, res) => {
    const users = readUsersFromFile();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};

const createUser = (req, res) => {
    const users = readUsersFromFile();
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    writeUsersToFile(users);
    res.status(201).json(user);
};

const updateUser = (req, res) => {
    const users = readUsersFromFile();
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    Object.assign(user, req.body);
    writeUsersToFile(users);
    res.json(user);
};

const deleteUser = (req, res) => {
    const users = readUsersFromFile();
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "User not found" });
    users.splice(index, 1);
    writeUsersToFile(users);
    res.status(204).send();
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };