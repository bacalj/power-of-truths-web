import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url'


function urlFor (source) {
    return imageUrlBuilder(sanityClient).image(source)
}

const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          />
        )
      }
    }
}

export default function HomeContent(props){

    const { sessions, content } = props

    function sessionItem(s){
        return (
            <li key={s._id}>
                <a href={`/sessions/${s.slug.current}`}>
                    <div>
                        <div>
                            { s.time }
                        </div>
                        <div>
                            { s.title }
                        </div>
                    </div>
                </a>
            </li> 
        )
    }

    return (
        <div className="homecontent">
            <h2 id="about">About</h2>
            
            <PortableText value={content} components={ ptComponents } />
    
            <h2 id="schedule">Schedule</h2>
            {/* <ul>
                { sessions.map( s => sessionItem(s))}
            </ul> */}

            <p>Power of Truths 2022 will be held June 10-11, 2022 at the <a href="https://bombyx.live/about/">Bombyx Center for Arts &amp; Equity</a> in Florence, Massachusetts</p>


            <p><em>Complete schedule coming soon</em></p>

            <h2 id="register">Register</h2>

            <a className="reglink" href="https://forms.gle/mCXeZq8k4376uVEz5">Click here to pre-register</a>
            
        </div>
    )
}

