import React from 'react'
import styles from '../styles/components/Skill.module.css'

function Skill({skill}) {
  return (
    <div className={styles.container}>
        <div className={styles.img}>
            <img src={skill.img} alt={skill.name} />
        </div>
        <h6 className={styles.name}>{skill.name}</h6>
    </div>
  )
}

export default Skill