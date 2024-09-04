"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../utils/users");
let userId = 10;
exports.default = (req, res) => {
    const { username, email, birthdate, nDni, credentialsId } = req.body;
    if (!username || !email || !birthdate || !nDni || !credentialsId) {
        res.status(400).json({ message: "Faltan datos" });
        return;
    }
    const newUser = {
        id: userId++,
        username,
        email,
        birthdate,
        nDni,
        credentialsId,
    };
    users_1.users.push(newUser);
    res.status(200).json(users_1.users);
};
