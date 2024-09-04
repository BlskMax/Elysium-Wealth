import ig from "../../assets/images/iconos-redes/ig.png";
import x from "../../assets/images/iconos-redes/x.png";
import linkedin from "../../assets/images/iconos-redes/linkedin2.png";
import styles from "./Navbar.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export default function Navbar() {

    // const { pathName} = useLocation();
    const loggin = useSelector(state => state.actualUser.userData.loggin)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        const confirm = window.confirm("Cerrar sesión?");
        if (confirm) {
            if(confirm) {
                dispatch(setUserData({ loggin: false, user: {id: false, }, }));
                navigate("/");
            }
        }
    }

    return (
        <main className={styles.navbarContainer}>
        <section className={styles.redesSection}> {/* //REDES */}
            <button type="button" className={styles.redesButton} ><a target="_blank" href="https://twitter.com/Blsk_Max"><img src={x} height="25"></img></a></button>
            <button type="button" className={styles.redesButton} ><a target="_blank" href="https://www.instagram.com/blsk_max/"><img src={ig} height="25"></img></a></button>
            <button type="button" className={styles.redesButton} ><a target="_blank" href="https://www.linkedin.com/in/alejandro-galarza-ornelas-9b503b2b2/"><img src={linkedin} height="25"></img></a></button>
        </section>

        <section className={styles.enlacesSection}> {/* //ENLACES EXTERNOS */}

        {
            loggin ? (
                
                <Link to="/schedule">
                <button type="button" className={styles.linkButton}><a target="_blank" href="">Agendar</a></button>
                </Link>
            ) : (

                <Link to="/logIn" >
                <button type="button" className={styles.linkButton}><a target="_blank" href="">Iniciar Sesión</a></button>
            </Link>
            )
        }

        
{
            loggin ? (
                
                <Link to="/appointments">
                <button type="button" className={styles.linkButton}><a target="_blank" href="">Mis turnos</a></button>
                </Link>
            ) : (

                <Link to="/register" >
                <button type="button" className={styles.linkButton}><a target="_blank" href="">Registrarse</a></button>
            </Link>
            )
        }

        {loggin &&
        
        <button onClick={handleLogout} type="button" className={styles.linkButton}><a target="_blank" href="">LogOut</a></button>
        
        } 

 
        </section>
        </main>
    );
}

        // {!loggin &&
        // <Link to="/logIn" >
        //     <button type="button" className={styles.linkButton}><a target="_blank" href="">Iniciar Sesión</a></button>
        // </Link>}

        // {!loggin &&
        // <Link to="/register" >
        //     <button type="button" className={styles.linkButton}><a target="_blank" href="">Registrarse</a></button>
        // </Link>
        // }

        // {loggin &&
        // <Link to="/schedule">
        // <button type="button" className={styles.linkButton}><a target="_blank" href="">Agendar</a></button>
        // </Link>
        // }

        // {loggin &&
        // <Link to="/appointments">
        // <button type="button" className={styles.linkButton}><a target="_blank" href="">Mis turnos</a></button>
        // </Link>
        // }