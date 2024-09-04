"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autenticacion = (req, res, next) => {
    const token = req.headers["token"];
    if (!token) {
        res.status(400).json({ message: "Token requerido" });
        return;
    }
    if (token !== "TokenInvalido") {
        res.status(400).json({ message: "Token invalido!" });
        return;
    }
    next();
};
exports.default = autenticacion;
