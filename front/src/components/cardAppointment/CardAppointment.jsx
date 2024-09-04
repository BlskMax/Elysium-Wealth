import React from "react";
import styles from "./CardAppointment.module.css"

export default function CardAppointment ({id, date, time, userId, status, description, handleAppointmentCancel}) {

date = new Date(date);
    const formatDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;

    const handleClick = () => { 
        if(
            window.confirm(`Desea cancelar el turno del día ${formatDate} a las ${time}?`)
        )
         {
            handleAppointmentCancel(id);
         }
        };

    return(
        <main className={styles.appointment}>
            <span className={styles.time}>{formatDate}, Horario: {time}</span>
            <span className={styles.description}>{description}</span>

            {status === "active" ? ( <span className={styles.status} onClick={handleClick}>Activo</span>) :( <span className={styles.statusCancelled}>Cancelado</span>)}

        </main>
    )
}