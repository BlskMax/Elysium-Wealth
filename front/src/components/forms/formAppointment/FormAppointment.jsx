import React from "react"
import styles from "./FormAppointment.module.css"

export default function FormAppointment () {
    return (

<main className={styles.main}>
  <section className={styles.bigContainer}>
    <h1 className={styles.header}>En qué te podemos ayudar?</h1>
    <span className={styles.parraph}>Crea una cita y lo haremos realidad!</span>
    <form id="form">
      <div className={styles.inputsContainer}>

      <h2 className={styles.header2}>Nombre de Usuario</h2>
        <div className={styles.inputContainer}>
          <input name="username" id="usernameForm" className={styles.input} type="text" placeholder="Username" />
        </div>


      <h2 className={styles.header2}>Eliga una Fecha</h2>
        <div className={styles.inputContainer}>
          <input name="date" id="dateForm" className={styles.input} type="text" placeholder="Fecha" />
        </div>

      <h2 className={styles.header2}>Eliga un Horario</h2>
        <div className={styles.inputContainer}>
          <input name="time" id="timeForm" className={styles.input} type="text" placeholder="Horario" />
        </div>

      <h2 className={styles.header2}>Id de usuario</h2>
        <div className={styles.inputContainer}>
          <input name="userId" id="userIdForm" className={styles.input} type="text" placeholder="id" />
        </div>


      <h2 className={styles.header2}>status</h2>
        <div className={styles.inputContainer}>
          <input name="status" id="statusForm" className={styles.input} type="text" placeholder="status" />
        </div>

        <h2 className={styles.header2}>Descripción de la cita</h2>
        <div className={styles.inputContainer}>
          <input name="description" id="descriptionForm" className={styles.input} type="text" placeholder="Descripción" />
        </div>

        {/* <div class="genre-checkboxes">
          <input type="checkbox" name="genre" value="Action" id="genre-action" />
          <label for="genre-action">Acción</label>

        </div> */}
      </div>


      <div className={styles.buttonContainer}>    
        <button type="submit" className={styles.submit}>Iniciar Sesión</button>
        <button type="reset" className={styles.reset}>Reiniciar</button>
      </div>

    </form>    
  </section>

</main>
    )

}



// import React from "react";
// import styles from "./FormAppointment.module.css";
// import handleReset from "../../../views/schedule/Schedule"

// export default function FormAppointment({ handleChange, handleSubmit, formData, errors, getTomorrow, getFourteenDaysAhead }) {
//     return (
//         <main className={styles.main}>
//             <section className={styles.bigContainer}>
//                 <h1 className={styles.header}>En qué te podemos ayudar?</h1>
//                 <span className={styles.parraph}>Crea una cita y lo haremos realidad!</span>
//                 <form id="form" onSubmit={handleSubmit}>
//                     <div className={styles.inputsContainer}>

//                         <h2 className={styles.header2}>Nombre de Usuario</h2>
//                         <div className={styles.inputContainer}>
//                             <input
//                                 name="username"
//                                 id="usernameForm"
//                                 className={styles.input}
//                                 type="text"
//                                 placeholder="Username"
//                                 value={formData.username}
//                                 onChange={handleChange}
//                             />
//                             {errors.username && <p className={styles.error}>{errors.username}</p>}
//                         </div>

//                         <h2 className={styles.header2}>Eliga una Fecha</h2>
//                         <div className={styles.inputContainer}>
//                             <input
//                                 name="date"
//                                 id="date"
//                                 className={styles.input}
//                                 type="date"
//                                 placeholder="Fecha"
//                                 min={getTomorrow()}
//                                 max={getFourteenDaysAhead()}
//                                 value={formData.date}
//                                 onChange={handleChange}
//                             />
//                             {errors.date && <p className={styles.error}>{errors.date}</p>}
//                         </div>

//                         <h2 className={styles.header2}>Eliga un Horario</h2>
//                         <div className={styles.inputContainer}>
//                             <input
//                                 name="time"
//                                 id="timeForm"
//                                 className={styles.input}
//                                 type="text"
//                                 placeholder="Horario"
//                                 value={formData.time}
//                                 onChange={handleChange}
//                             />
//                             {errors.time && <p className={styles.error}>{errors.time}</p>}
//                         </div>

//                         <h2 className={styles.header2}>Id de usuario</h2>
//                         <div className={styles.inputContainer}>
//                             <input
//                                 name="userId"
//                                 id="userIdForm"
//                                 className={styles.input}
//                                 type="text"
//                                 placeholder="id"
//                                 value={formData.userId}
//                                 onChange={handleChange}
//                             />
//                             {errors.userId && <p className={styles.error}>{errors.userId}</p>}
//                         </div>

//                         <h2 className={styles.header2}>Status</h2>
//                         <div className={styles.inputContainer}>
//                             <input
//                                 name="status"
//                                 id="statusForm"
//                                 className={styles.input}
//                                 type="text"
//                                 placeholder="status"
//                                 value={formData.status}
//                                 onChange={handleChange}
//                             />
//                             {errors.status && <p className={styles.error}>{errors.status}</p>}
//                         </div>

//                         <h2 className={styles.header2}>Descripción de la cita</h2>
//                         <div className={styles.inputContainer}>
//                             <input
//                                 name="description"
//                                 id="descriptionForm"
//                                 className={styles.input}
//                                 type="text"
//                                 placeholder="Descripción"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                             />
//                             {errors.description && <p className={styles.error}>{errors.description}</p>}
//                         </div>

//                     </div>

//                     <div className={styles.buttonContainer}>
//                         <button type="submit" className={styles.submit}>Crear Cita</button>
//                         <button type="button" className={styles.reset} onClick={handleReset}>Reiniciar</button>
//                     </div>
//                 </form>
//             </section>
//         </main>
//     );
// }
