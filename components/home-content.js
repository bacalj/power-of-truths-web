import { PortableText } from "@portabletext/react";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function HomeContent(props){

    const { sessions, content } = props

    function sessionItem(s){
        return (
            <li key={s._id} className={styles.sessiontitle}>
                <a href={`/sessions/${s.slug.current}`}>
                    <div className={styles.sessionrow}>
                        <div className={styles.timeitem}>
                            { s.time }
                        </div>
                        <div>
                            { s.title }
                        </div>
                    </div>
                </a>
            </li> 
        )
    }

    return (
        <div className={styles.contento}>
            <h2 id="about">About</h2>
            
            <PortableText value={content} />
    
            <h2 id="schedule">Schedule</h2>

            <ul className={styles.sessiontable}>
                { sessions.map( s => sessionItem(s))}
            </ul>

            <h2 id="register">Register</h2>
            <p>Lorem ipsurem</p>
        </div>
    )
}

