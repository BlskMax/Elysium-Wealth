import Appointment from "../entities/Appointment";
import User from "../entities/User";
import IScheduleAppointmentDto from "../interfaces/IScheduleAppointmenDtot";
import { appointmentModel, userModel } from "../repositories/index ";

export const scheduleAppointmentService = async (
scheduleTurnDto: IScheduleAppointmentDto
): Promise<Appointment> => {
    const newAppointment: Appointment =
    appointmentModel.create(scheduleTurnDto);
    await appointmentModel.save(newAppointment);
    const user: User | null = await userModel.findOneBy({
        id: scheduleTurnDto.userId,
    });
    if (!user) throw Error ("Usuario inexistente");
    newAppointment.user = user;
    await appointmentModel.save(newAppointment);
    return newAppointment
};

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await appointmentModel.find();
    return allAppointments;
};

export const getAppointmentByIdService = async (
    turnId: number
): Promise<Appointment> => {
    const appointment: Appointment | null = await
    appointmentModel.findOneBy({
        id: turnId,
    });
    if(!appointment) throw Error("Turno inexistente");
    return appointment;
}

export const cancelAppointmentService = async (
    turnId: number
): Promise<void> => {
    const appointment: Appointment | null = await appointmentModel.findOneBy({
        id: turnId,
    });
    if (!appointment) throw Error ("Turno inexistente");
    appointment.status= "cancelled";
    await appointmentModel.save(appointment);
}