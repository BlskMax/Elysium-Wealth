import React, { useState } from "react";
import FormSignIn from "../../components/forms/formSignIn/FormSignIn";
import axios from "axios";
import NavBar2 from "../../components/navBar2/NavBar2.jsx"
import { setUserData } from "../../redux/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const emailRegExp = /\S+@\S+\.\S+/;
const POSTUSER_URL = "http://localhost:3000/users/register";
const LOGUSER_URL = "http://localhost:3000/users/login";

function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // ESTADO INICIAL
    const initialState = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        confirmPassword: ""
    };

    // ESTADOS
    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    

    // VALIDACIÓN
    const validateUser = ({ name, email, birthdate, nDni, username, password, confirmPassword }) => {
        const errors = {};

        if (!name) errors.name = "Ingrese un nombre";
        if (!email) errors.email = "Ingrese un email";
        else if (!emailRegExp.test(email)) errors.email = "El Email es inválido";
        if (!birthdate) errors.birthdate = "Ingrese una Fecha de Nacimiento";
        if (!nDni) errors.nDni = "Ingrese un número de DNI";
        if (!username) errors.username = "Ingrese un Nombre de Usuario";
        if (!password) errors.password = "Ingrese una Contraseña";
        if (confirmPassword !== password) errors.confirmPassword = "Confirme la Contraseña por favor";

        return errors;
    };

    // HANDLERS
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setErrors(validateUser({ ...user, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
            username: user.username,
            password: user.password,
        };

        try {
            // Registrar el usuario
            await axios.post(POSTUSER_URL, userData);

            // Iniciar sesión automáticamente después del registro
            const loginResponse = await axios.post(LOGUSER_URL, {
                username: user.username,
                password: user.password,
            });

            // Guardar los datos del usuario en el estado global
            dispatch(setUserData(loginResponse.data));

            // Redirigir a la página principal
            alert("Usuario creado con éxito!");
            setUser(initialState);
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };



    const handleReset = (event) => {
        event.preventDefault();
        setUser(initialState);
    };

    return (
        <div>
        <NavBar2></NavBar2>
        <FormSignIn
            user={user}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
        />
        </div>
    );
}

export default Register;






// import React from "react";
// import FormSignIn from "../../components/forms/formSignIn/FormSignIn";
// import axios from "axios";

// const emailRegExp = /\S+@\S+\.\S+/;
// const POSTUSER_URL = "http://localhost:3000/users/register";

// // name, email, birthdate, nDnin username, password, confirmPassword 

// function Register () {

//     // ESTADO INICIAL
//     const initialState = {
//         name: "",
//         email: "",
//         birthdate: "",
//         nDni: "",
//         username: "",
//         password: "",
//         confirmPassword: "",
//     }

//     // ESTADOS
//     const [user, setUser] = useState(initialState);
//     const [errors, setErrors] = useState(initialState);

//     //VALIDACIÓN
//     const validateUser = ({name, email, birthdate, nDni, username, password, confirmPassword }) => {
//         const errors = {};

//         if(!name) errors.name = "Ingrese un nombre";
//         if(!email) errors.email = "Ingrese un email";
//         else if (!emailRegExp.test(email)) errors.email = "El Email es invalido";
//         if(!birthdate) errors.birthdate = "Ingrese una Fecha de Nacimiento";
//         if(!nDni) errors.nDni = "Ingrese un nDni";
//         if(!username) errors.username = "Ingrese un Nombre de Usuario";
//         if(!password) errors.password = "Ingrese una Contraseña";
//         if(confirmPassword !== password) errors.confirmPassword = "Confirme la Contraseña por favor";

//         return errors;
//     };

//     // HANDLERS
//     const handleChange = (event) => {
//         const {name, value} = event.target;
//         setUser({...user, [name]: value});
//         sertErrors(validateUser({...user, [name]: value}));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const userData= {
//             name: user.name,
//             email: user.email,
//             birthdate: user.birthdate,
//             nDni: user.nDni,
//             username: user.username,
//             password: user.password,
//         };
//         axios.post(POSTUSER_URL, userData)
//             .then(({ data }) =>{
//                 console.log(data);
//                 alert(data.message);

//                 setUser(initialState);
//             })
//             .catch ((error) => alert (error.message));
//     };

//     const handleReset = (event) => {
//         event.preventDefault();
//         setUser(initialState);
//     }
    
//     return (
        
//         <FormSignIn></FormSignIn>

//     )
// }

// export default Register;