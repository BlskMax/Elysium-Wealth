"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.schedule = exports.getAppointmentById = exports.getAllAppointments = void 0;
const appointmentService_1 = require("../services/appointmentService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield (0, appointmentService_1.getAllAppointmentService)();
    res.status(200).json(allAppointments);
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { turnId } = req.params;
        const appointmentId = Number(turnId);
        // Verifica si el id es un número válido
        if (isNaN(appointmentId)) {
            return res.status(400).json({ error: "El ID proporcionado no es un número válido." });
        }
        const appointment = yield (0, appointmentService_1.getAppointmentByIdService)(appointmentId);
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAppointmentById = getAppointmentById;
//POST /appointments/schedule
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, description } = req.body;
    console.log("User ID in request body:", userId);
    try {
        const newAppointment = yield (0, appointmentService_1.scheduleAppointmentService)({
            date,
            time,
            userId,
            description,
        });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.schedule = schedule;
//PUT/appointments/cancel
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { turnId } = req.params;
        const appointmentId = Number(turnId);
        // Verifica si el id es un número válido
        if (isNaN(appointmentId)) {
            return res.status(400).json({ error: "El ID proporcionado no es un número válido." });
        }
        const appointment = yield (0, appointmentService_1.cancelAppointmentService)(appointmentId);
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.cancel = cancel;
