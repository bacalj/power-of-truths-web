import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/home-content'
import Navbar from '../components/navbar'
import FlyingWords from '../components/site-title'
import Footer from '../components/footer'
import SiteTitle from '../components/site-title'
import { sClient, ptComponents } from '../client'


export default function Home({ sanityContent}) {

  const fields = sanityContent.homeContent[0]
  const sessions = sanityContent.sessionListings

  return (
    <>
      <Head>
        <title>Power of Truths Conference, 2022</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <SiteTitle flying={true} subheading={fields.heroSubheading} />

      
      <Navbar />

      

      <main>
        <HomeContent 
          about={fields.pageContent} 
          sessions={sessions} 
          schedule={fields.scheduleContent}
          register={fields.registerContent}
          video={fields.introVideo}
        />
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const sanityContent = await sClient.fetch(`{
      "homeContent": *[_type == "home"],
      "sessionListings": *[_type == "session" && !(_id in path("drafts.**"))] | order(order asc)
    }`)
  return {
    props: { sanityContent }, // passed to page component as props
  }
}

