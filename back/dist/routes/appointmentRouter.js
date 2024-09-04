"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentRouter = (0, express_1.Router)();
// Define las rutas y vincúlalas a los controladores correspondientes
appointmentRouter.get('/getAllAppointments', appointmentsController_1.getAllAppointments); // LISTO Ruta para obtener todos los usuarios
appointmentRouter.get('/getAppointmentById/:turnId', appointmentsController_1.getAppointmentById); // LISTO Ruta para obtener un usuario por su ID
appointmentRouter.post('/schedule', appointmentsController_1.schedule); // LISTO Ruta para registrar un nuevo usuario
appointmentRouter.put('/cancel/:turnId', appointmentsController_1.cancel); //LISTO
exports.default = appointmentRouter;
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
