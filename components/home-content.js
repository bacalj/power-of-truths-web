import { PortableText } from "@portabletext/react";
import styles from '../styles/Home.module.css'


export default function HomeContent(props){

    return (
        <div className={styles.contento}>
            <h2 id="about">About</h2>
            
            <PortableText value={props.content} />
    
            <h2 id="register">Register</h2>
            <p>Lorem ipsurem</p>
    
            <h2 id="register">Schedule</h2>
            <p>Lorem ipsurem</p>
        </div>
    )
}

