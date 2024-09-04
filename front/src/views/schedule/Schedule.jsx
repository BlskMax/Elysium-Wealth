import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar2 from "../../components/navBar2/NavBar2";
import styles from "../schedule/Schedule.module.css";
import formImage from "../../assets/images/elysiumFormal.png"



const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

    //HOOKS Y ESTADOS GLOBALES
export default function Schedule(props){
    const navigate = useNavigate();
    const userId = useSelector((state) => state.actualUser?.userData.user.id);
    const loggin = useSelector((state) => state.actualUser.userData.loggin);

    //REDIRIGIR SI NO SE ESTÁ LOGUEADO

    useEffect(() => {
        !loggin && navigate("/");
    }, [loggin]);

    //ESTADOS LOCALES

    const initialState = {
        date: "",
        hours: "09",
        minutes: "00",
        description: "",
    };
    const [appointment, setAppointment] = useState(initialState);
    const [errors, setErrors] = useState({
        date: "Debe ingresar una fecha valida",
        description: "La descripción no es correcta"
    });

    //VALIDACIÓN
    const validateAppointment = ({date, hours, minutes, description}) => {
        const errors = {};
        if (!date) errors.date = "Ingresar una Fecha Valida";
        else if (isWeekend(date))
            errors.date = "La fecha seleccionada es en fin de semana";   
        if (!description) errors.description = "Ingrese una Descripción Valida";
        else if (description.length < 5)
            errors.description = "La descripción debe tener más de 5 carácteres";
        else if (description.length > 25)
            errors.description = "La descripción no debe exceder los 25 carácteres"
        return errors;
    };

    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 0 || day ===6; 
    };

    //HANDLERS
    const handleChange = (event) => {
        const { value, name} = event.target;
        const updatedAppointment = {
            ...appointment,
            [name]: value,
        };
        setAppointment(updatedAppointment);
        setErrors(validateAppointment(updatedAppointment));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newAppointment = {
            date: appointment.date,
            time: `${appointment.hours}:${appointment.minutes}`,
            description: appointment.description,
            userId
        };
        axios
        .post(POSTAPPOINTMENT_URL, newAppointment)
        .then(({ data }) => {
            alert(
                `Se ha creado la cita: Fecha ${data.date}, hora ${data.time}`
            );
            setAppointment(initialState);
            navigate("/appointments");
        })
        .catch((error) => {
            alert(`Error: ${error.response.data.error}`);
        });
    };

    //LIMITAR HORARIOS
    const validHours = ["09","10","11","12","13","14","15","16","17"];
    const validMinutes = ["00", "30"];

    //LIMITAR FECHAS EN EL INPUT
    function getTomorrow() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1 );
        return tomorrow.toISOString().split("T")[0];
    }

    function getFourteenDaysAhead() {
        const today = new Date();
        const fourteenDaysAhead = new Date(today);
        fourteenDaysAhead.setDate(fourteenDaysAhead.getDate() + 13);
        return fourteenDaysAhead.toISOString().split("T")[0];
    }

    return (
        <div>
            <NavBar2></NavBar2>
        <main className={styles.main}>
            <section className={styles.bigContainer}>
            <h1 className={styles.header}>En qué te podemos ayudar?</h1>
            <span className={styles.parraph}>Crea una cita y lo haremos realidad!</span>
            <form onSubmit={handleSubmit}>
                <div className={styles.fecha}>
                <h2 className={styles.header2}>Eliga una Fecha</h2>
                    <input
                    type="date"
                    className={styles.input}
                    id="date"
                    name="date"
                    min={getTomorrow()}
                    max={getFourteenDaysAhead}
                    value={appointment.date}
                    onChange={handleChange}
                    />
                    {errors.date && <span style={{color: "red"}}>{errors.date}</span>}
                </div>

                <h2 className={styles.header2}>Eliga un Horario</h2>
                <div className={styles.horario}>
                    <select
                    className={styles.input}
                    id="hours"
                    name="hours"
                    value={appointment.hours}
                    onChange={handleChange}
                    >
                        {validHours.map((hour) => (
                            <option key={hour} value={hour}>
                                {hour}
                            </option>
                        ))}
                    </select>
                    <select
                    className={styles.input}
                    id="minutes"
                    name="minutes"
                    value={appointment.minutes}
                    onChange={handleChange}
                    >
                        {validMinutes.map((minute) => (
                            <option key={minute} value={minute}>
                                {minute}
                            </option>
                        ))}
                    </select>
                </div>
                <br />

                <div className={styles.containerDesc}>
                <h2 className={styles.header2}>Descripción de la cita</h2>
                    <input
                    className={styles.input}
                    type="text"
                    id="description"
                    name="description"
                    value={appointment.description}
                    placeholder="Ingresar Descripción"
                    onChange={handleChange}
                    / >
                        {errors.description && (
                            <span style={{ color: "red", marginBottom: "2em" }}>{errors.description}</span>
                        )}
                </div>

                <button type="submit" className={styles.submit} disabled={Object.keys(errors). length > 0}>
                    Enviar
                </button>
            </form>
            </section>
            <div>
                <img src={formImage} className={styles.formImage}></img>
            </div>

            
        </main>
        </div>
    )
}

