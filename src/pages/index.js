import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../containers/About'
import Principal from '../containers/Principal'
import Projects from '../containers/Projects'
import Skills from '../containers/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luis Contreras</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/tree.svg" />
      </Head>
      <Navbar/>

      <main className={styles.main}>
        <Principal/>
        <About/>
        <Skills/>
        <Projects/>
      </main>   
      <Footer/>   
    </div>
  )
}
