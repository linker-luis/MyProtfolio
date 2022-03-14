import React from 'react'
import styles from '../styles/components/Card.module.css'
import Chip from './Chip'
import { MdVisibility } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

function Card({project}) {
  console.log(project)
  
  return (
    <div className={styles.card}>
      <div className={styles.presentation}>
        <div className={styles.img}>
          <img src={project.url} alt={project.name} />
          <div className={styles.links}>
            <a target='_blank' rel="noopener noreferrer" href={project.page}><MdVisibility/></a>
            <a target='_blank' rel="noopener noreferrer" href={project.github}><AiFillGithub/></a>
          </div>
        </div>
        <p className={styles.title}>
          {project.name}
        </p>
      </div>
      <div className={styles.description}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa quas dignissimos unde est asperiores. */}
        {project.description}
      </div>
      <div className={styles.chips}>
        {
          project.newThecnologies.map((tech, i) => (
            <Chip key={i} info = {tech}/>
          ))
        }
        {/* <Chip/>

        <Chip/>
        <Chip/>
        <Chip/> */}
        
      </div>
    </div>
  )
}

export default Card