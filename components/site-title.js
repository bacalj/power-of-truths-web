import { PortableText } from '@portabletext/react'
import AnimatedTitle from './animated-words'
import AnimatedWords from './animated-words'
import FadeWords from './fade-words'
import FadeYear from './fade-year'
import { ptComponents } from '../client'

export default function SiteTitle({ flying, subheading }){
    
  if (flying){
    return (
      <div className="titlecanvas big">
        <div className="filterator"></div>
        <div className="flying sitetitle">

          <div className="maintitle-wrap">
            <div className="maintitle">
              <AnimatedWords identifier="poder" delayTime="400">
                Power&nbsp;
              </AnimatedWords>
        
              <AnimatedWords identifier="of" delayTime="600">
                of&nbsp;
              </AnimatedWords>

              <AnimatedWords identifier="truths" delayTime="0">
                Truths&nbsp;
              </AnimatedWords>           
            </div>

          </div>


          <div className="subtitle">
            <FadeWords identifier="subtitle" delayTime="2500">
                <PortableText value={subheading} components={ ptComponents } />
            </FadeWords> 
          </div>

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
