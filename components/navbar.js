import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
                <Link href="/#about">About</Link>
            </div>
            <div>
                <Link href="/#register">Register</Link>
            </div>
            <div>
                <Link href="/#schedule">Schedule</Link>
            </div>
        </nav>
    )
}
