import homeImage from "../../assets/images/homeImage.png";
import styles from "./CenterImage.module.css";

export default function CenterImage() {
    return (
        <main className={styles.imageContainer}>
            <img src={homeImage} className={styles.centerImage}alt="Home" />
        </main>
    )
}