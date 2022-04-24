import AnimatedTitle from '../components/animated-words'
import AnimatedWords from '../components/animated-words'
import FadeWords from '../components/fade-words'
import FadeYear from '../components/fade-year'

export default function FlyingWords(){
    return (

        <section className="flyingwords">
          <AnimatedWords identifier="poder" delayTime="400">
            Power&nbsp;
          </AnimatedWords>
    
          <AnimatedWords identifier="of" delayTime="600">
            of&nbsp;
          </AnimatedWords>

          <AnimatedWords identifier="truths" delayTime="0">
            Truths&nbsp;
          </AnimatedWords>

          <FadeWords identifier="subtitle" delayTime="2500">
            {/* { fields.heroSubheading } */}
          </FadeWords>
        </section>

    )
}
