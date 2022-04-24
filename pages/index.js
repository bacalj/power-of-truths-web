import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Example from '../components/example'
import AnimatedTitle from '../components/animated-words'
import AnimatedWords from '../components/animated-words'
import FadeWords from '../components/fade-words'
import FadeYear from '../components/fade-year'
import HomeContent from '../components/home-content'
import sanityClient from '../client'

export default function Home({ sanityContent}) {

  const fields = sanityContent.homeContent[0]
  const sessions = sanityContent.sessionListings

  return (
    <div className={styles.container}>
      <Head>
        <title>Power of Truths Conference, 2022</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
  
        <div className={styles.lettersin}>
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
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <a href="#about">About</a>
          </div>
          <div className={styles.card}>
            <a href="#register">Register</a>
          </div>
          <div className={styles.card}>
            <a href="#schedule">Schedule</a>
          </div>
        </div>

        <div className={styles.content}>
          <HomeContent 
            content={fields.pageContent}
            sessions={sessions}
          >
          </HomeContent>
        </div>
   
      </main>

      <footer className={styles.footer}>
        The footer
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const sanityContent = await sanityClient.fetch(`
    {
      "homeContent": *[_type == "home"],
      "sessionListings": *[_type == "session" && !(_id in path("drafts.**"))]
    }
  `)
  return {
    props: { sanityContent }, // will be passed to the page component as props
  }
}
