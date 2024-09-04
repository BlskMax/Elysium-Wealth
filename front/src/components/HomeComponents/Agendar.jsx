import agText1 from "../../assets/images/agText1.png";
import agText2 from "../../assets/images/agText2.png";
import agSuccess from "../../assets/images/agSuccess.png";
import agArrow from "../../assets/images/agArrow.png";
import styles from "./Agendar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Agendar() {
    const loggin = useSelector(state => state.actualUser.userData.loggin)
    return (
    <main  className= {styles.imageContainer}>
        <div className={styles.agendarLeft}>
            <img className={styles.agendarText} src={agText1}></img>
            <img className={styles.agendarTextSecond} src={agText2}></img>

            {loggin ? (
                
            <Link to="/schedule">
            <button type="button" className={styles.agendarButton}>AGENDAR <img className={styles.arrow} src={agArrow}></img></button>
            </Link>
            ) : (

            <Link to="/register">
            <button type="button" className={styles.agendarButton}>UNIRSE <img className={styles.arrow} src={agArrow}></img></button>
            </Link>
            )}



        </div>
        <img className={styles.agendarImg} src={agSuccess}></img>
    </main>
    )
}

