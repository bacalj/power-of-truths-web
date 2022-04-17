import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Power of Truths Conference, 2022</title>
        <meta name="description" content="Power of Truths Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Power of <a href="https://nextjs.org">Truths</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        The footer
      </footer>
    </div>
  )
}
