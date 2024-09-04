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
exports.cancelAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentService = exports.scheduleAppointmentService = void 0;
const index_1 = require("../repositories/index ");
const scheduleAppointmentService = (scheduleTurnDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = index_1.appointmentModel.create(scheduleTurnDto);
    yield index_1.appointmentModel.save(newAppointment);
    const user = yield index_1.userModel.findOneBy({
        id: scheduleTurnDto.userId,
    });
    if (!user)
        throw Error("Usuario inexistente");
    newAppointment.user = user;
    yield index_1.appointmentModel.save(newAppointment);
    return newAppointment;
});
exports.scheduleAppointmentService = scheduleAppointmentService;
const getAllAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield index_1.appointmentModel.find();
    return allAppointments;
});
exports.getAllAppointmentService = getAllAppointmentService;
const getAppointmentByIdService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield index_1.appointmentModel.findOneBy({
        id: turnId,
    });
    if (!appointment)
        throw Error("Turno inexistente");
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const cancelAppointmentService = (turnId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield index_1.appointmentModel.findOneBy({
        id: turnId,
    });
    if (!appointment)
        throw Error("Turno inexistente");
    appointment.status = "cancelled";
    yield index_1.appointmentModel.save(appointment);
});
exports.cancelAppointmentService = cancelAppointmentService;
