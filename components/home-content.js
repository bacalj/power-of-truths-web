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
            <ul>
                { sessions.map( s => sessionItem(s))}
            </ul>

            <h2 id="register">Register</h2>
            <p>Lorem ipsurem</p>
        </div>
    )
}

