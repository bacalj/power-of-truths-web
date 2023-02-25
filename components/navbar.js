import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar(){

    const theroute = useRouter()
    const [stuck, setStuck] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', manageNavbar)

        return () => {
            window.removeEventListener('scroll', manageNavbar)
        }
    }, [])

    const manageNavbar = () => {
        //const navbarY = document.querySelector('.navbar').getBoundingClientRect().y
        const tripPoint = window.scrollY + 100

        //console.log("window height:", window.innerHeight)
        //console.log("navbarY:", navbarY)
        //console.log("SCROLL Y:", window.scrollY)
        if ( tripPoint > window.innerHeight ){
            setStuck(true)
        } else {
            setStuck(false)
        }
    }

    const classim = clsx({
        "stuck": stuck || theroute.pathname == "/sessions/[slug]",
        "free": !stuck && theroute.pathname == "/",
        "navbar": true
    })

    return (
        <div className={ classim }>
            <div className="brand">
                <Link href="/">Power of Truths 2023</Link>
            </div>
            <nav>
                <div>
                    <Link href="/#about">About</Link>
                </div>
                <div className="navbar-register-link">
                    <Link href="/tickets">Register</Link>
                </div>
                <div>
                    <Link href="/#schedule">Schedule</Link>
                </div>
            </nav>
        </div>
    )
}
