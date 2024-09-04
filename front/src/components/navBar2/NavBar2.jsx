import ig from "../../assets/images/iconos-redes/ig.png";
import x from "../../assets/images/iconos-redes/x.png";
import linkedin from "../../assets/images/iconos-redes/linkedin2.png";
import styles from "./NavBar2.module.css"
import { Link } from "react-router-dom";


export default function NavBar2() {
    return (
        <main className={styles.navbarContainer}>
        <section className={styles.redesSection}> {/* //REDES */}
            <button type="button" className={styles.redesButton} ><a target="_blank" href="https://twitter.com/Blsk_Max"><img src={x} height="25"></img></a></button>
            <button type="button" className={styles.redesButton} ><a target="_blank" href="https://www.instagram.com/blsk_max/"><img src={ig} height="25"></img></a></button>
            <button type="button" className={styles.redesButton} ><a target="_blank" href="https://www.linkedin.com/in/alejandro-galarza-ornelas-9b503b2b2/"><img src={linkedin} height="25"></img></a></button>
        </section>

        <section className={styles.enlacesSection}> {/* //ENLACES EXTERNOS */}
            <Link to="/" >
            <button type="button" className={styles.linkButton}><a target="_blank" href="">HomePage</a></button>
            </Link>
            
        </section>
        </main>
    );
}