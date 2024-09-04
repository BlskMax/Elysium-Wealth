"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController"); // Importa las funciones necesarias del controlador
const userService_1 = require("../services/userService");
const userRouter = (0, express_1.Router)();
// Define las rutas y vincúlalas a los controladores correspondientes
userRouter.get('/getAllUsers', userController_1.getAllusers); // LISTO Ruta para obtener todos los usuarios
userRouter.get('/getUserById/:id', userController_1.getUserById); // LISTO Ruta para obtener un usuario por su ID
userRouter.get('/getUserByCredential:id', userService_1.findUserByCredentialId);
userRouter.post('/register', userController_1.register); // LISTO Ruta para registrar un nuevo usuario
userRouter.post('/login', userController_1.login); // Ruta para iniciar sesión
exports.default = userRouter;
