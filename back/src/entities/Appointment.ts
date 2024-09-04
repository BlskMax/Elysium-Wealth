import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity ({ name: "APPOINTMENTS"})
export class Appointment {

    @PrimaryGeneratedColumn() 
    id!: number;

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column()
    userId!:number;

    @Column({
        default: "active"
    })
    status!: string;

    @Column()
    description!: string;

    //* Appointment N:1 User
    @ManyToOne(() => User, (user) => user.appointments)
    user!: User;
}
export default Appointment;