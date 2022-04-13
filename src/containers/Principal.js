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
        <a target='_blank' rel="noopener noreferrer" className={styles.button} href="https://drive.google.com/file/d/1rqanuryyftK2oUqEQ6d_w8UCXh0wC6yO/view?usp=sharing">C.V.</a>
      </div>
      <div className={styles.img}>
        <img src="/img1.svg" alt="img1" />
      </div>
      <div className={styles.contact}>
        <a target='_blank' rel="noopener noreferrer" href='https://linkedin.com/in/luis-contreras-417a6b233' className={styles.linkin}><AiFillLinkedin/></a>
        <a target='_blank' rel="noopener noreferrer" href='https://github.com/linker-luis' className={styles.github}><AiFillGithub/></a>
      </div>
    </div>
  )
}

export default Principal