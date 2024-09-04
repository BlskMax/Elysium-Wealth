import React, { useState } from "react";
import axios from "axios";
import FormLogIn from "../../components/forms/formLogIn/FormLogIn";
import NavBar2 from "../../components/navBar2/NavBar2.jsx"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice.js";

const emailRegExp = /\S+@\S+\.\S+/;
const POSTUSER_URL = "http://localhost:3000/users/login";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // ESTADO INICIAL
    const initialState = {
        username: "",
        password: "",
    };

    // ESTADOS
    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    // VALIDACIÓN
    const validateUser = ({ username, password }) => {
        const errors = {};

        if (!username) errors.username = "Ingrese un Nombre de Usuario";
        if (!password) errors.password = "Ingrese una Contraseña";

        return errors;
    };

    // HANDLERS
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setErrors(validateUser({ ...user, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: user.username,
            password: user.password,
        };
        axios.post(POSTUSER_URL, userData)
            .then(({ data }) => {
                dispatch(setUserData(data));
                alert("Inicio de Sesión Exitoso");
                setUser(initialState);
                navigate("/");
            })
            .catch((error) => alert(error?.response?.data?.message));
    };

    const handleReset = (event) => {
        event.preventDefault();
        setUser(initialState);
    };

    return (
        <div>
            <NavBar2></NavBar2>
        <FormLogIn
            user={user}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
        />
        </div>
    );
}

export default Login;



















// import React from "react";
// import FormSignIn from "../../components/forms/formSignIn/FormSignIn";

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
    
//     return (
        
//         <FormSignIn></FormSignIn>

//     )
// }

// export default Register;