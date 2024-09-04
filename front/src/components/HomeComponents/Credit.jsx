import elysiumCards from "../../assets/images/elysiumCards.png";
import cardText from "../../assets/images/elysiumCardText.png";
import styles from "./Credit.module.css";

export default function CreditCard() {
    return(
        <main className={styles.imageContainer} >
            <img src={elysiumCards} className={styles.imageLeft}></img>
            <img src={cardText} className={styles.imageRight}></img>
        </main>
    )
}