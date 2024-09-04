import React from "react";
import styles from "./FormSignIn.module.css";
import formImage2 from "../../../assets/images/formImage2.png";
import { Link } from "react-router-dom";

export default function FormSignIn({ user, errors, handleChange, handleSubmit, handleReset }) {
    return (
        <main className={styles.main}>
            <section className={styles.bigContainer}>
                <h1 className={styles.header}>Crear Cuenta</h1>
                <span className={styles.parraph}>Sea parte de Elysium comenzando por crear su cuenta!</span>
                <form id="form" onSubmit={handleSubmit}>
                    <div className={styles.inputsContainer}>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Nombre Completo</h2>
                            <input name="name"
                            value={user.name}
                            onChange={handleChange}
                            className={styles.input}
                            type="text"
                            placeholder="Nombre completo" />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                        </div>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Fecha de nacimiento</h2>
                            <input name="birthdate" value={user.birthdate} onChange={handleChange} className={styles.input} type="date" placeholder="Fecha de nacimiento" />
                            {errors.birthdate && <span className={styles.error}>{errors.birthdate}</span>}
                        </div>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Número de DNI</h2>
                            <input name="nDni" value={user.nDni} onChange={handleChange} className={styles.input} type="text" placeholder="Número DNI" />
                            {errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
                        </div>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Email</h2>
                            <input name="email" value={user.email} onChange={handleChange} className={styles.input} type="text" placeholder="ejemplo@email.com" />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Nombre de Usuario</h2>
                            <input name="username" value={user.username} onChange={handleChange} className={styles.input} type="text" placeholder="Username" />
                            {errors.username && <span className={styles.error}>{errors.username}</span>}
                        </div>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Crear Contraseña</h2>
                            <input name="password" value={user.password} onChange={handleChange} className={styles.input} type="password" placeholder="Contraseña" />
                            {errors.password && <span className={styles.error}>{errors.password}</span>}
                        </div>

                        <div className={styles.inputContainer}>
                        <h2 className={styles.header2}>Confirmar Contraseña</h2>
                            <input name="confirmPassword" value={user.confirmPassword} onChange={handleChange} className={styles.input} type="password" placeholder="Confirmar Contraseña" />
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.submit} disabled={Object.keys(errors).length > 0}>Registrar</button>
                        <button type="reset" className={styles.reset} onClick={handleReset}>Reiniciar</button>
                    </div>
                <div className={styles.linkContainer}>
                    <span className={styles.unRegistered}>Ya tiene una cuenta?</span>
                    <Link to="/logIn">
                    <a href="" className={styles.link}>Iniciar sesión</a>
                    </Link>
                </div>
                </form>
            </section>

            <div>
                <img src={formImage2} className={styles.formImage} />
            </div>
        </main>
    );
}



// import React from "react"
// import styles from "./FormSignIn.module.css"
// import formImage1 from "../../../assets/images/formImage1.png"

// export default function FormSignIn () {
//     return (

// <main className={styles.main}>
//   <section className={styles.bigContainer}>
//     <h1 className={styles.header}>Crear Cuenta</h1>
//     <span className={styles.parraph}>Sea parte de Elysium comenzando por crear su cuenta!</span>
//     <form id="form">
//       <div className={styles.inputsContainer}>

//       <h2 className={styles.header2}>Nombre Completo</h2>
//         <div className={styles.inputContainer}>
//           <input name="name" value={"name"} className={styles.input} type="text" placeholder="Nombre completo" />
//         </div>

//       <h2 className={styles.header2}>Fecha de nacimiento</h2>
//         <div className={styles.inputContainer}>
//           <input name="birthdate" value={"birthdate"} className={styles.input} type="date" placeholder="Fecha de nacimiento" />
//         </div>

//       <h2 className={styles.header2}>Número de DNI</h2>
//         <div className={styles.inputContainer}>
//           <input name="nDni" value={"nDni"} className={styles.input} type="text" placeholder="Número Dni" />
//         </div>


//       <h2 className={styles.header2}>Email</h2>
//         <div className={styles.inputContainer}>
//           <input name="email" value={"email"} className={styles.input} type="text" placeholder="ejemplo@email.com " />
//         </div>

//         <h2 className={styles.header2}>Nombre de Usuario</h2>
//         <div className={styles.inputContainer}>
//           <input name="username" value={"username"} className={styles.input} type="text" placeholder="Username" label="username" />
//         </div>
        
//         <h2 className={styles.header2}>Crear Contraseña</h2>
//         <div className={styles.inputContainer}>
//           <input name="password" value={"password"} className={styles.input} type="password" placeholder="Contraseña" />
//         </div>



//         {/* <div class="genre-checkboxes">
//           <input type="checkbox" name="genre" value="Action" id="genre-action" />
//           <label for="genre-action">Acción</label>

//         </div> */}
//       </div>


//       <div className={styles.buttonContainer}>    
//         <button type="submit" className={styles.submit} disabled={Object.keys(user).some(e=> !user[e])}>Registrar</button>
//         <button type="reset" className={styles.reset} onclick={handleReset}>Reiniciar</button>

//       </div>

//     </form> 
//     <div className={styles.linkcontainer}>
//         <span className={styles.unRegistered } >Ya tiene una cuenta?</span><a href="" className={styles.link}>Iniciar sesión</a>
//         </div>
     
//   </section>

//       <div>
//         <img src={formImage1} className={styles.formImage}></img>
//       </div>
// </main>
//     )

// }
