"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../utils/users");
exports.default = (req, res) => {
    res.status(200).json(users_1.users);
};
