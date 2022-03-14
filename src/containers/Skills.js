import React from 'react'
import Title from '../components/Title'
import Skill from '../components/Skill'
import { languajes } from '../contents/languajes'
import styles from '../styles/containers/Skills.module.css'

function Skills() {
  return (
    <div id='skills' className={styles.container}>
        <Title title={'Habilidades'}/>
        <div className={styles.skills_container}>
            <div className={styles.skills}>
                {
                    languajes.map((lang, i) => {
                        return (
                            <Skill key={i} skill={lang}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Skills