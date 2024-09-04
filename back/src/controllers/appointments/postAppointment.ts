import {Request, Response } from "express";
import { appointments } from "../../utils/appointments";
import IAppointment from "../../interfaces/IAppointment";

let appointmentId: number = 10;


export default (req: Request<{}, {}, IAppointment>, res: Response): void => {
    const { date, time, userId, status } = req.body;
    if (!date || !time || !userId|| !status) {
        res.status(400).json ({message: "Faltan datos"});
        return;
    }

    const newAppointment: IAppointment = {
        id: appointmentId++,
        date,
        time,
        userId,
        status,
    };

    appointments.push(newAppointment);
    res.status(200).json(appointments);
} 