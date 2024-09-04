"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../utils/users");
exports.default = (req, res) => {
    const { id } = req.params;
    const index = users_1.users.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        res.status(404).json({ message: `El id: ${id} no existe!` });
        return;
    }
    users_1.users.splice(index, 1);
    res.json({ message: `Usuario con el id: ${id} ha sido eliminado` });
};
