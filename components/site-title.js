import AnimatedTitle from './animated-words'
import AnimatedWords from './animated-words'
import FadeWords from './fade-words'
import FadeYear from './fade-year'

export default function SiteTitle({ flying }){
    
  if (flying){
    return (
      <div className="titlecanvas big">
        <div className="filterator"></div>
        <div className="flying sitetitle">
          <AnimatedWords identifier="poder" delayTime="400">
            Power&nbsp;
          </AnimatedWords>
    
          <AnimatedWords identifier="of" delayTime="600">
            of&nbsp;
          </AnimatedWords>

          <AnimatedWords identifier="truths" delayTime="0">
            Truths&nbsp;
          </AnimatedWords>

          {/* <FadeWords identifier="subtitle" delayTime="2500">
             { fields.heroSubheading } 
          </FadeWords> */}
        </div>
      </div>
    )
  } 
  
  else {
    return (
      <div className="titlecanvas small">
        <div className="sitetitle">
          <div>Power of Truths</div>
        </div>
      </div>
    )
  }
    
}
