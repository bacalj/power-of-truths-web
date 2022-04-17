import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Example from '../components/example'
import AnimatedTitle from '../components/animated-words'
import AnimatedWords from '../components/animated-words'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Power of Truths Conference, 2022</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
  
        <div className={styles.parento}>
        
          <AnimatedWords identifier="poder" delayTime="800">
            Power&nbsp;
          </AnimatedWords>
    
          <AnimatedWords identifier="of" delayTime="600">
            of&nbsp;
          </AnimatedWords>

          <AnimatedWords identifier="truths" delayTime="200">
            Truths
          </AnimatedWords>

          {/* <AnimatedWords identifier="year" delayTime="1100">
            2022
          </AnimatedWords> */}
          

        </div>
       
   
      </main>

      <footer className={styles.footer}>
        The footer
      </footer>
    </div>
  )
}
