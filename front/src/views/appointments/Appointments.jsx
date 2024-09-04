import { useEffect, useState } from "react";
import styles from "./Appointments.module.css";
import axios from "axios";
import CardAppointment from "../../components/cardAppointment/CardAppointment";
import NavBar2 from "../../components/navBar2/NavBar2"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";
// import appointmentsImage from "../../assets/images/"

const GETTALLAPPOINTMENTSURL = "http://localhost:3000/appointments/getAllAppointments";
const GETUSERBYID_URL = "http://localhost:3000/users/getUserById/";
const POSTCANCEL_URL = "http://localhost:3000/appointments/cancel/"

export default function Appointments() {

    const actualUserId = useSelector ( (state) => state.actualUser.userData.user.id);
    const dispatch = useDispatch();
    useEffect(() => {
        axios
        .get(GETUSERBYID_URL + actualUserId)
        .then((response) => response.data)
        .then((actualUser) => {
            dispatch(setUserAppointments(actualUser.appointments));
        })
        .catch((error) => console.log(error.message));
    }, [actualUserId, dispatch]);

    const appointments = useSelector(state => state.actualUser.userAppointments)

    const loggin = useSelector((state) => state.actualUser.userData.loggin);
    const navigate = useNavigate();
    
    useEffect(() => {
        !loggin && navigate("/");
    }, [loggin]);

    // useEffect(() => {
    //     axios.get(GETTALLAPPOINTMENTSURL)
    //         .then(response => {
    //             console.log(response.data);
    //             setAppointments(response.data); 
    //         })
    //         .catch(errors => {
    //             console.error("Error consiguiendo los turnos, :", error);
    //         });
    // }, []);;

    const handleAppointmentCancel = (appointmentId) => {
        axios
        .put(POSTCANCEL_URL + appointmentId)
        .then(response => response.data)
        .then(data => {
        //ACTUALIZAR LOS TURNOS DESDE EL BACK
        axios
        .get(GETUSERBYID_URL + actualUserId)
        .then(response => response.data.appointments)
        .then(appointments => dispatch(setUserAppointments(appointments)))
        .catch(error => console.log(error.message))
        })
    }

    return (
        <main>

            <NavBar2></NavBar2>
            
            <div className={styles.appointmentsContainer}>
                {appointments.length > 0 ? (
                    appointments.map(appointment => (
                        <CardAppointment
                            key={appointment.id}
                            id={appointment.id}
                            date={appointment.date}
                            time={appointment.time}
                            userId={appointment.userId}
                            status={appointment.status}
                            description={appointment.description}
                            handleAppointmentCancel={handleAppointmentCancel}
                        />
                    ))
                ) : (
                    <p className={styles.noAppointments}>No hay citas disponibles</p>
                )}
            </div>
            <div></div>
        </main>
    );
}


// import { useEffect, useState } from "react";
// import styles from "./Appointments.module.css";
// import axios from "axios";
// import CardAppointment from "../../components/cardAppointment/CardAppointment";
// import NavBar2 from "../../components/navBar2/NavBar2";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserAppointments } from "../../redux/userSlice";

// const GETUSERBYID_URL = "http://localhost:3000/users/getUserById/";
// const GETTALLAPPOINTMENTSURL = "http://localhost:3000/appointments/getAllAppointments";

// export default function Appointments() {
//     const actualUserId = useSelector((state) => state.actualUser.userData.user.id);
//     const dispatch = useDispatch();
//     const [appointments, setAppointments] = useState([]);

//     const loggin = useSelector((state) => state.actualUser.userData.loggin);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!loggin) {
//             navigate("/");
//         }
//     }, [loggin, navigate]);

//     useEffect(() => {
//         if (actualUserId) {
//             axios
//                 .get(GETUSERBYID_URL + actualUserId)
//                 .then((response) => {
//                     const actualUser = response.data;
//                     dispatch(setUserAppointments(actualUser.appointments));
//                     setAppointments(actualUser.appointments);
//                 })
//                 .catch((error) => console.log(error.message));
//         }
//     }, [actualUserId, dispatch]);

//     useEffect(() => {
//         axios.get(GETTALLAPPOINTMENTSURL)
//             .then(response => {
//                 console.log(response.data);
//                 setAppointments(response.data); 
//             })
//             .catch(error => {
//                 console.error("Error consiguiendo los turnos, :", error);
//             });
//     }, []);

//     return (
//         <main>

//             <NavBar2></NavBar2>
            
//             <div className={styles.appointmentsContainer}>
//                 {appointments.length > 0 ? (
//                     appointments.map(appointment => (
//                         <CardAppointment
//                             key={appointment.id}
//                             id={appointment.id}
//                             date={appointment.date}
//                             time={appointment.time}
//                             userId={appointment.userId}
//                             status={appointment.status}
//                             description={appointment.description}
//                         />
//                     ))
//                 ) : (
//                     <p className={styles.noAppointments}>No hay citas disponibles</p>
//                 )}
//             </div>
//             <div></div>
//         </main>
//     );
// }



/* <COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO>
    <COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO>

    </COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO>
</COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO> */








// import { useEffect, useState } from "react";
// import styles from "./Appointments.module.css";
// // import allAppointments from "../../../helpers/allAppointments";
// import CardAppointment from "../../components/cardAppointment/CardAppointment";
// import axios from "axios";

// const GETTALLAPPOINTMENTSURL = "http://localhost:3000/appointments/getAllAppointments";

// export default function Appointments() {
//     const [appointments, setAppointments] = useState([]);

//     useEffect(() => {
//         axios.get(GETTALLAPPOINTMENTSURL)
//         .then(response => console.log(response.data))
//         .then(appointmentsFromDB => setAppointments (appointmentsFromDB))
//     }, [])

//     return (
//     <main>
//         <h1 className={styles.aiuda}>Mu buebas</h1>

//     {
//         appointments.map(appointment => (
//             <CardAppointment
//             key= {appointment.id}
//             id= {appointment.id}
//             date= {appointment.date}
//             time= {appointment.time}
//             userId={appointment.userId}
//             status= {appointment.status}
//             description={appointment.description}
//             />
//         ))
//     }

//         </main>
//     );
// }