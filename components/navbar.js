import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import clsx from 'clsx'

export default function Navbar(){

    const [stuck, setStuck] = useState(false)
    const navito = useRef()

    // useEffect(()=>{
    //     window.addEventListener("scroll", ()=>{
    //         const pos = navito.current.getBoundingClientRect()
    //         if (pos.top > 0){
    //             setStuck(false)
    //         } else {
    //             setStuck(true)
    //         }
    //         console.log(stuck)
    //     })
    // },[])

    return (
        <div ref={navito}>
            <div>
                <a href="#about">About</a>
            </div>
            <div>
                <a href="#register">Register</a>
            </div>
            <div>
                <a href="#schedule">Schedule</a>
            </div>
        </div>
    )
}
