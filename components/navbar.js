import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'

export default function Navbar(){

    const [stuck, setStuck] = useState(false)

    const classim = clsx({
        "stuck": stuck,
        "navbar": true
    })

    return (
        <nav className={ classim }>
            <div>
                Power of Truths 2022
            </div>
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