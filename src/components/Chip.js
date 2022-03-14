import React from 'react'
import styles from '../styles/components/Chip.module.css'

function Chip({info}) {
  return (
    <div className={styles.container} style = {{'background': `${info.gradient}`}}>
      {info.name}
    </div>
  )
}

export default Chip