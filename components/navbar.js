import styles from '../styles/Home.module.css'

export default function Navbar(){
    return (
        <div className={styles.grid}>
            <div className={styles.card}>
                <a href="#about">About</a>
            </div>
            <div className={styles.card}>
                <a href="#register">Register</a>
            </div>
            <div className={styles.card}>
                <a href="#schedule">Schedule</a>
            </div>
        </div>
    )
}
