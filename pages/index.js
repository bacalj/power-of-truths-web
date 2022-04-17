import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Example from '../components/example'
import AnimatedTitle from '../components/animated-words'
import AnimatedWords from '../components/animated-words'
import FadeWords from '../components/fade-words'
import FadeYear from '../components/fade-year'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Power of Truths Conference, 2022</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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

          {/* <FadeYear identifier="year" delayTime="2500">
            2022
          </FadeYear> */}

          <FadeWords identifier="subtitle" delayTime="2500">
            Conference for Arts and Education - June 10, 2022
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
          <h2 id="about">About</h2>
          <p>Lorem ipsurem</p>

          <h2 id="register">Register</h2>
          <p>Lorem ipsurem</p>

          <h2 id="register">Schedule</h2>
          <p>Lorem ipsurem</p>
        </div>
   
      </main>

      <footer className={styles.footer}>
        The footer
      </footer>
    </div>
  )
}
