import { Router } from 'express';
import { getAllusers, getUserById, register, login } from '../controllers/userController'; // Importa las funciones necesarias del controlador
import { cancel, getAllAppointments, getAppointmentById, schedule } from '../controllers/appointmentsController';

const appointmentRouter = Router();

// Define las rutas y vincúlalas a los controladores correspondientes
appointmentRouter.get('/getAllAppointments', getAllAppointments); // LISTO Ruta para obtener todos los usuarios
appointmentRouter.get('/getAppointmentById/:turnId', getAppointmentById); // LISTO Ruta para obtener un usuario por su ID
appointmentRouter.post('/schedule', schedule); // LISTO Ruta para registrar un nuevo usuario
appointmentRouter.put('/cancel/:turnId', cancel); //LISTO

export default appointmentRouter;



// import { Router, request } from "express";
// import { Request, Response } from "express";
// import { User } from "../entities/User";
// import {Appointment} from "../entities/Appointment"

// const userRouter = Router();

// userRouter.post("/", async (req: Request, res: Response) => {
//     try {
//         const { date, time, userId, status, description} = req.body;

//         const appointment = new Appointment();
//         appointment.date = date;
//         appointment.time = time;
//         appointment.userId = userId;
//         appointment.status = status;
//         appointment.description = description;
//         // user.credentialsId = credentialsId;
//     } catch (error) {}
// });

// export default appointmentRouter;
