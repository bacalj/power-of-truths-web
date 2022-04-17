import anime from 'animejs'
import { useEffect } from 'react'

export default function AnimatedTitle({ words }){
    useEffect(() => {
        anime.timeline().add({
            targets: '#animo',
            translateX:150
        })
    })
    return (
        <p id="animo">{ words }</p>
    )
}