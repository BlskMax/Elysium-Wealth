// import Navbar from './components/navbar/Navbar';
// import CenterImage from './components/centerImage/CenterImage';
// import Home from './views/homepage/HomePage';
// import CreditCard from './components/HomeComponents/Credit';
// import Agendar from './components/HomeComponents/Agendar';
import Appointments from './views/appointments/Appointments';
import FormSignIn from './components/forms/formSignIn/FormSignIn';
import FormLogIn from './components/forms/formLogIn/FormLogIn';
import FormAppointment from './components/forms/formAppointment/FormAppointment';
import Register from './views/register/Register';
import Login from './views/login/Login';
import HomePage from './views/homepage/HomePage';
// import Schedule from './views/schedule/Schedule';
import { Route, Routes } from 'react-router-dom';
import Schedule from './views/schedule/Schedule';
// import AppointmentsView from "./views/appointments/AppointmentsView"


function App() {
  return (
    <>

  {/* <Appointments></Appointments>
      <FormSignIn></FormSignIn>
      <FormLogIn></FormLogIn>
      <FormAppointment></FormAppointment> */}

      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="/home" element={<HomePage />}/> */}
        <Route path="/appointments" element={<Appointments />}></Route> 
        <Route path="/register" element={<Register />}></Route> 
        <Route path="/logIn" element={<Login />}></Route> 
        {/* <Route path="/schedule" element={<Schedule />}></Route> */}
        <Route path="/schedule" element={<Schedule />}></Route>

      </Routes>

    </>
  );
}


export default App
