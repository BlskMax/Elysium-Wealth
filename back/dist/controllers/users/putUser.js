"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../utils/users");
exports.default = (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    // if (!username && !email && !password && !password) {
    if (!username) {
        res.status(400).json({ message: "Faltan datos!" });
        return;
    }
    const userFound = users_1.users.find((user) => user.id === Number(id));
    if (!userFound) {
        res.status(400).json({ message: `No existe el Usuario con el id: ${id}` });
        return;
    }
    if (username)
        userFound.username = username;
    // if(password) userFound.username = password;
    res.json(userFound);
};
