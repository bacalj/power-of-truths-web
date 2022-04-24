import AnimatedTitle from './animated-words'
import AnimatedWords from './animated-words'
import FadeWords from './fade-words'
import FadeYear from './fade-year'

export default function SiteTitle({ flying }){
    
  if (flying){
    return (
      <section className="flyingwords sitetitle">
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
  } else {
    return (
      <section className="sitetitle">
        <div>Power of Truths</div>
      </section>
    )
  }
    
}
