import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Wojciech Bigosinski about me website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className={styles.navbar}></Navbar>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi!
        </h1>

        <p className={styles.description}>
          My name is Wojciech Bigosinski
        </p>
        <p>
          I'm a cybersecurity specialist, frontend and blockchain developer
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Made by Wojciech Bigosinski</p>
      </footer>
    </div>
  )
}
