"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointments_1 = require("../../utils/appointments");
let appointmentId = 10;
exports.default = (req, res) => {
    const { date, time, userId, status } = req.body;
    if (!date || !time || !userId || !status) {
        res.status(400).json({ message: "Faltan datos" });
        return;
    }
    const newAppointment = {
        id: appointmentId++,
        date,
        time,
        userId,
        status,
    };
    appointments_1.appointments.push(newAppointment);
    res.status(200).json(appointments_1.appointments);
};
