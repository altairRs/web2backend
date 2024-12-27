const users = []; // In-memory storage for demonstration

const getUsers = (req, res) => res.json(users);
const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};
const createUser = (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
};
const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    Object.assign(user, req.body);
    res.json(user);
};
const deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "User not found" });
    users.splice(index, 1);
    res.status(204).send();
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
