import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'

export default function Navbar(){

    const [stuck, setStuck] = useState(false)

    const classim = clsx({
        "stuck": stuck,
        "free": !stuck,
        "navbar": true
    })

    return (
        <nav className={ classim }>
            <div>
                <a href="#about">About</a>
            </div>
            <div>
                <a href="#register">Register</a>
            </div>
            <div>
                <a href="#schedule">Schedule</a>
            </div>
        </nav>
    )
}
