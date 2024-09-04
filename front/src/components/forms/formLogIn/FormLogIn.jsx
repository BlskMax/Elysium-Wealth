import React from "react";
import styles from "./FormLogIn.module.css";
import pad from "../../../assets/images/elysiumPad.png";
import { Link } from "react-router-dom";

export default function FormLogIn({ user, errors, handleChange, handleSubmit, handleReset }) {
    return (
        <main className={styles.main}>
            <section className={styles.bigContainer}>
                <h1 className={styles.header}>Iniciar Sesión</h1>
                <span className={styles.parraph}>Inicie sesión con su correo y contraseña</span>
                <form id="form" onSubmit={handleSubmit}>
                    <div className={styles.inputsContainer}>
                        <h2 className={styles.header2}>Nombre De Usuario</h2>
                        <div className={styles.inputContainer}>
                            <input
                                name="username"
                                id="usernameForm"
                                className={styles.input}
                                type="text"
                                placeholder="Username"
                                value={user.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className={styles.error}>{errors.username}</p>}
                        </div>

                        <h2 className={styles.header2}>Su Contraseña</h2>
                        <div className={styles.inputContainer}>
                            <input
                                name="password"
                                id="passwordForm"
                                className={styles.input}
                                type="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className={styles.error}>{errors.password}</p>}
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.submit}>Iniciar Sesión</button>
                        {/* <button type="button" className={styles.reset} onClick={handleReset}>Reiniciar</button> */}
                    </div>
                    <div className={styles.linkcontainer}>
                        <span className={styles.unRegistered}>No está registrado/a?</span>
                        {/* {loggin &&
        <Link to="/schedule">
        <button type="button" className={styles.linkButton}><a target="_blank" href="">Agendar</a></button>
        </Link> */}     <Link to="/register">
                        <a href="" className={styles.link}>Crear una cuenta</a>
                        </Link>
                    </div>
                </form>
            </section>
            <div>
            <img src={pad} className={styles.formImage} />
            </div>
        </main>
    );
}




// import React from "react"
// import styles from "./FormLogIn.module.css"

// export default function FormLogIn () {
//     return (

// <main className={styles.main}>
//   <section className={styles.bigContainer}>
//     <h1 className={styles.header}>Iniciar Sesión</h1>
//     <span className={styles.parraph}>Inicie sesión con su correo y contraseña</span>
//     <form id="form">
//       <div className={styles.inputsContainer}>
//         <h2 className={styles.header2}>Email</h2>
//         <div className={styles.inputContainer}>
//           <input name="email" id="emailForm" className={styles.input} type="text" placeholder="ejemplo@email.com " />
//         </div>

//         <h2 className={styles.header2}>Su Contraseña</h2>
//         <div className={styles.inputContainer}>
//           <input name="password" id="passwordForm" className={styles.input} type="text" placeholder="Contraseña" />
//         </div>
//       </div>


//       <div className={styles.buttonContainer}>    
//         <button type="submit" className={styles.submit}>Iniciar Sesión</button>
//         {/* <button type="reset" className={styles.reset}>Reiniciar</button> */}
//       </div>
//       <div className={styles.linkcontainer}>
//   <span className={styles.unRegistered} >No está registrado/a?</span><a href="" className={styles.link}>Crear una cuenta</a>
//   </div>
//     </form>    
//   </section>

// </main>
//     )

// }
