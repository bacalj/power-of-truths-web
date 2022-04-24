import Head from 'next/head'
import Image from 'next/image'
import HomeContent from '../components/home-content'
import sanityClient from '../client'
import Navbar from '../components/navbar'
import FlyingWords from '../components/flying-words'
import Footer from '../components/footer'

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

      <Navbar />

      <main>
        <FlyingWords />
        <HomeContent content={fields.pageContent} sessions={sessions} />
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const sanityContent = await sanityClient.fetch(`{
      "homeContent": *[_type == "home"],
      "sessionListings": *[_type == "session" && !(_id in path("drafts.**"))] | order(order asc)
    }`)
  return {
    props: { sanityContent }, // passed to page component as props
  }
}
