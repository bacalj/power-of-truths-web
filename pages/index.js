import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Example from '../components/example'
import AnimatedTitle from '../components/animated-title'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Power of Truths Conference, 2022</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AnimatedTitle words="Power of Truths"></AnimatedTitle>
      </main>

      <footer className={styles.footer}>
        The footer
      </footer>
    </div>
  )
}
