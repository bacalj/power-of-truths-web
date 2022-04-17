import anime from 'animejs'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import { useEffect } from 'react'

export default function AnimatedWords({ identifier, delayTime, children }){
    useEffect(() => {
        anime.timeline().add({
            targets: `#${identifier}`,
            translateY:150,
            delay: delayTime
        })
    })
    return (
        <p id={identifier}>{ children }</p>
    )
}