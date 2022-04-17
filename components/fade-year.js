import anime from 'animejs'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'


export default function FadeWords({ identifier, delayTime, children }){
    useEffect(() => {
        anime.timeline().add({
            targets: `#${identifier}`,
            opacity: [0,1],
            duration: 330,
            easing: 'linear',
            delay: delayTime
        })
    })

    return (
        <div className={styles.year} id={identifier}>{ children }</div>
    )
}