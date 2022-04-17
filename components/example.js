import styles from '../styles/Home.module.css'

export default function Example({ texto }){
    return (
        <em className={styles.card}>{ texto }</em>
    )
}