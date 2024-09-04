import express from "express";
import morgan from "morgan";
import userRouter from "../src/routes/usersRouter";
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "./services/userService";
import { getAllusers, register, getUserById } from "./controllers/userController";
import { cancel, getAllAppointments, getAppointmentById, schedule } from "./controllers/appointmentsController";
import appointmentRouter from "./routes/appointmentRouter";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//USERS
app.use("/users",userRouter) //LISTO
app.post("/users/register", register); //LISTO
app.get("/users/getAllUsers", getAllusers); //LISTO
app.get("/users/getUserById", getUserById); //LISTO
app.get("/users/getUserByCredential", findUserByCredentialId) //LISTO
//APPOINTMENTS 
app.use("/appointments", appointmentRouter) //LISTO
app.get("/appointments/getAllAppointments", getAllAppointments); //LISTO
app.get("appointments/getAppointmentById", getAppointmentById); //LISTO
app.post("appointments/schedule", schedule); //LISTO
app.put("appointments/cancel", cancel); //LISTO

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hola Mundo");
})

export default app;