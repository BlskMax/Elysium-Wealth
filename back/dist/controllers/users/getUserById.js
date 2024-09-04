"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../utils/users");
exports.default = (req, res) => {
    const { id } = req.params;
    const index = users_1.users.findIndex((user) => user.id === Number(id));
    res.json("user");
};
