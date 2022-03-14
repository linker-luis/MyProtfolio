import React from 'react'
import styles from '../styles/components/Chip.module.css'

function Chip({info}) {
  console.log(info.gradient)
  return (
    <div className={styles.container} style = {{'background': `${info.gradient}`}}>
      {info.name}
    </div>
  )
}

export default Chip