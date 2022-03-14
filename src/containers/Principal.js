import React from 'react'
import styles from '../styles/containers/Principal.module.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function Principal() {
  return (
    <div className={styles.container}>
      <img className={styles.elipse} src="/elipse1.svg" alt="" />
      <div className={styles.content}>
        <h3>Hola, yo soy</h3>
        <h2>Luis Contreras</h2>
        <h5 className={styles.front}>Frontend Developer</h5>
        <h5 className={styles.back}>Backend Developer</h5>
        <a className={styles.button} href="#projects">Proyectos</a>
      </div>
      <div className={styles.img}>
        <img src="/img1.svg" alt="img1" />
      </div>
      <div className={styles.contact}>
        <a href='#' className={styles.linkin}><AiFillLinkedin/></a>
        <a href='#' className={styles.github}><AiFillGithub/></a>
      </div>
    </div>
  )
}

export default Principal