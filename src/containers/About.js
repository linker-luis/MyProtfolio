import React from 'react'
import Title from '../components/Title'
import styles from '../styles/containers/About.module.css'

function About() {
  return (
    <div id='about' className = {styles.container}>
      <Title title = {'Acerca de Mi'} />
      <div className={styles.img}>
        <img src="/img2.svg" alt="" />
      </div>
      <div className={styles.content}>
        <p>Mi nombre es Luis Contreras y soy un apasionado autodidacta del desarrollo web, me gusta aprender y crear cosas nuevas y ver hasta donde puedo llegar.</p>
      </div>
        <img className={styles.circles} src="/circulos.svg" alt="" />
      
    </div>
  )
}

export default About