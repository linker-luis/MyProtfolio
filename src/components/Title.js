import React from 'react'
import styles from '../styles/components/Title.module.css'

function Title({title}) {
  return (
    <div className={styles.container}>
        <h3>{title}</h3>
        <div></div>
    </div>
  )
}

export default Title