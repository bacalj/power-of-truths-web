import anime from 'animejs'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import { useEffect } from 'react'

export default function AnimatedWords({ identifier, delayTime, children }){
    useEffect(() => {
        anime.timeline().add({
            targets: `#${identifier}`,
            opacity: [0,1],
            scale: [100, 1],
            duration: 3000,
            easing: 'linear',
            delay: delayTime
        })
    })

    return (
        <span id={identifier}>{ children }</span>
    )
}