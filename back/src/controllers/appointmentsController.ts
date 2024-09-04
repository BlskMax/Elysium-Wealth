import Appointment from "../entities/Appointment"
import { Request, Response } from "express";
import { cancelAppointmentService, getAllAppointmentService, getAppointmentByIdService, scheduleAppointmentService } from "../services/appointmentService";


export const getAllAppointments = async (req: Request, res: Response) => {
    const allAppointments: Appointment[] = await getAllAppointmentService();
    res.status(200).json(allAppointments);
};

export const getAppointmentById = async (
    req: Request<{ turnId: string }, {}, {}>,
    res: Response
) => {
    try {
        const { turnId } = req.params;
        const appointmentId = Number(turnId);

        // Verifica si el id es un número válido
        if (isNaN(appointmentId)) {
            return res.status(400).json({ error: "El ID proporcionado no es un número válido." });
        }

        const appointment = await getAppointmentByIdService(appointmentId);
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}


//POST /appointments/schedule
export const schedule = async (req: Request, res: Response) => {
    const { date, time, userId, description} = req.body;
    console.log("User ID in request body:", userId);
    try {
    const newAppointment: Appointment = await scheduleAppointmentService({
        date,
        time,
        userId,
        description,
    });
    res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json ({error: error.message})
    }
};


//PUT/appointments/cancel
export const cancel = async (
    req: Request<{ turnId: string }, {}, {}>,
    res: Response 
) => {
    try {
        const { turnId } = req.params;
        const appointmentId = Number(turnId);

        // Verifica si el id es un número válido
        if (isNaN(appointmentId)) {
            return res.status(400).json({ error: "El ID proporcionado no es un número válido." });
        }

        const appointment = await cancelAppointmentService(appointmentId);
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}