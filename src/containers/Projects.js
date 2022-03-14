import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import styles from '../styles/containers/Projects.module.css'
import { projects } from '../contents/projects'
import { languajes } from '../contents/languajes'



function Projects() {
  const [projs, setProjs] = useState([])

  useEffect(() => {
    
    projects.map(proj => {
      let arr = []
      proj.technologies.map(tech => {
        let lang = languajes.find(lang => lang.name === tech)
        let newObj = {
          name: lang.name,
          gradient : lang.gradient
        }
        arr.push(newObj)
        // console.log(newObj)
      })
      proj.newThecnologies = arr
    })
    setProjs(projects)
  }, [setProjs])
  
  console.log(projs)

  
  return (
    <div id='projects' className={styles.container}>
        <Title title={'Proyectos'}/>
        <div className={styles.content}>
            {
              projs.map((projs, i) => (
                <Card key={i} project={projs}/>
              ))
            }
            {/* <Card description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum tempore obcaecati fuga fugit distinctio esse blanditiis provident, ab culpa minus recusandae aliquid voluptate a, sed adipisci? Laboriosam nostrum facere dignissimos.'}/>
            <Card description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro, expedita possimus cum odit debitis.'}/>
            <Card description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro, expedita possimus cum odit debitis.'}/>
             */}
    
        </div>
    </div>
  )
}

export default Projects