import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({
    name: "USERS"
})

export class User {
    @PrimaryGeneratedColumn()
    id!: number;   // id?: number;  

    @Column ({unique: true})
    username!: string;

    @Column ({unique: true})
    password!: string;

    @Column({unique: true})
    email!:string;

    @Column({})
    birthdate!: String;

    @Column({unique: true})
    nDni!: string;

    // User 1:1 Credential
    @OneToOne(() => Credential)
    @JoinColumn()
    credential!: Credential;

    //User 1:N Appointment
    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments!: Appointment[];
    // @Column({unique: true})
    // credentialsId!: number;
}

export default User;