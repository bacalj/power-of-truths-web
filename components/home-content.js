import { PortableText } from "@portabletext/react";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function HomeContent(props){

    const { sessions, content } = props

    function sessionItem(s){
        return (
            <tr key={s._id} className={styles.sessiontitle}>
                <td>
                    { s.time }
                </td>
                <td>
                    <Link href={`/sessions/${s.slug.current}`} passHref>
                        { s.title }
                    </Link>
                </td>
            </tr>
        )

     
    }

    return (
        <div className={styles.contento}>
            <h2 id="about">About</h2>
            
            <PortableText value={content} />
    
            <h2 id="schedule">Schedule</h2>

            <table className={styles.sessiontable}>
                { sessions.map( s => sessionItem(s))}
            </table>

            <h2 id="register">Register</h2>
            <p>Lorem ipsurem</p>
        </div>
    )
}

