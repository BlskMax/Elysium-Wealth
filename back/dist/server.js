"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const usersRouter_1 = __importDefault(require("../src/routes/usersRouter"));
const userService_1 = require("./services/userService");
const userController_1 = require("./controllers/userController");
const appointmentsController_1 = require("./controllers/appointmentsController");
const appointmentRouter_1 = __importDefault(require("./routes/appointmentRouter"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
//USERS
app.use("/users", usersRouter_1.default); //LISTO
app.post("/users/register", userController_1.register); //LISTO
app.get("/users/getAllUsers", userController_1.getAllusers); //LISTO
app.get("/users/getUserById", userController_1.getUserById); //LISTO
app.get("/users/getUserByCredential", userService_1.findUserByCredentialId); //LISTO
//APPOINTMENTS 
app.use("/appointments", appointmentRouter_1.default); //LISTO
app.get("/appointments/getAllAppointments", appointmentsController_1.getAllAppointments); //LISTO
app.get("appointments/getAppointmentById", appointmentsController_1.getAppointmentById); //LISTO
app.post("appointments/schedule", appointmentsController_1.schedule); //LISTO
app.put("appointments/cancel", appointmentsController_1.cancel); //LISTO
app.get("/", (req, res) => {
    console.log(req);
    res.send("Hola Mundo");
});
exports.default = app;
