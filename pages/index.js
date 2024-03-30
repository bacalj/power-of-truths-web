import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/home-content'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { sClient, ptComponents } from '../client'


export default function Home({ sanityContent}) {

  const fields = sanityContent.homeContent[0]
  const sessions = sanityContent.sessionListings
  const presenters = sanityContent.presenterListings

  return (
    <>
      <Head>
        <title>Power of Truths Conference, 2024</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="sub">Power of Truths is Presented in Collaboration with <a href="https://selfevidenteducation.com">Self-Evident Education</a></div> */}

      <Navbar />

      <div className='poster'>
        <div className="poster-text">
          <p className='second-annual'>The 3rd Annual</p>
          <h2><span className='power'>Power of </span>Truths</h2>
          <h3 className='arts-and'>Arts & Education Festival</h3>
          <p className='info date'>Friday & Saturday, April 5-6, 2024</p>
          <p className='info place'>Bombyx Center for Arts and Equity, Florence, MA</p>
        </div>
      </div>

      <main>
        <HomeContent
          about={fields.pageContent}
          sessions={sessions}
          schedule={fields.scheduleContent}
          register={fields.registerContent}
          video={fields.introVideo}
          presenters={presenters}
        />
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const sanityContent = await sClient.fetch(`{
      "homeContent": *[_type == "home"],
      "sessionListings": *[_type == "session" && !(_id in path("drafts.**"))] | order(order asc),
      "presenterListings": *[_type == "presenter" && !(_id in path("drafts.**"))] | order(order asc)
    }`)
  return {
    props: { sanityContent }, // passed to page component as props
  }
}

