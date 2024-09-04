export default interface IAppointment {
    id?: number;
    date: Date;
    time: number;
    userId: number;
    status: boolean;
}