import elysiumStreet from "../../assets/images/elysiumStreet.png";
import streetText from "../../assets/images/streetText.png";
import styles from "./Street.module.css";

export default function Street() {
    return(
        <main className={styles.imageContainer} >
            <img src={elysiumStreet} className={styles.imageLeft}></img>
            <img src={streetText} className={styles.imageRight}></img>
        </main>
    )
}