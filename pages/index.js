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
  const presenters = sanityContent.presenterListings

  return (
    <>
      <Head>
        <title>Power of Truths Conference, 2023</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sub">Power of Truths is Presented in Collaboration with <a href="https://selfevidenteducation.com">Self-Evident Education</a></div>

      <SiteTitle flying={true} subheading={fields.heroSubheading} />

      <Navbar />

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

