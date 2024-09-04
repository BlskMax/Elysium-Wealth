

import { Router } from 'express';
import { getAllusers, getUserById, register, login } from '../controllers/userController'; // Importa las funciones necesarias del controlador
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from '../services/userService';

const userRouter = Router();

// Define las rutas y vincúlalas a los controladores correspondientes
userRouter.get('/getAllUsers', getAllusers); // LISTO Ruta para obtener todos los usuarios
userRouter.get('/getUserById/:id', getUserById); // LISTO Ruta para obtener un usuario por su ID
userRouter.get('/getUserByCredential:id', findUserByCredentialId)
userRouter.post('/register', register); // LISTO Ruta para registrar un nuevo usuario
userRouter.post('/login', login); // Ruta para iniciar sesión

export default userRouter;
