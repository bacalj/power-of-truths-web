import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

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
    const { sessions, about, schedule, register, video } = props

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

            <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=jbmtl75&public_id=see/Power_of_Truths_promo_V2_rjvmio&fluid=true&controls=true&source_types%5B0%5D=mp4"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
            ></iframe>
            
            <h2 id="about">About</h2>
            <PortableText value={about} components={ ptComponents } />

            <h2 id="schedule">Schedule</h2>
            <PortableText value={schedule} components={ ptComponents } />
            {/* <ul>
                { sessions.map( s => sessionItem(s))}
            </ul> */}

            <h2 id="register">Register</h2>
            <div className="register-wrap">
                <PortableText value={register} components={ ptComponents } />
            </div>
            
            
        </div>
    )
}

