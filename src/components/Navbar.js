import React, { useState } from 'react'
import styles from '../styles/components/Navbar.module.css'
import {GiTreeBranch} from 'react-icons/gi'
import { VscThreeBars } from 'react-icons/vsc'
import Link from 'next/link'

function Navbar() {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <Link href="">
        <div className={styles.logo}>
          <GiTreeBranch/>
          LC<span>.</span>
        </div>  
      </Link>
      <ul className={styles.links}>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#projects">Proyectos</a></li>
      </ul>
      <ul className={`${styles.links_responsive} ${active && styles.links_responsive_active}`}>
        <li><a onClick={() => setActive(!active)} href="#about">Acerca de mi</a></li>
        <li><a onClick={() => setActive(!active)} href="#skills">Habilidades</a></li>
        <li><a onClick={() => setActive(!active)} href="#projects">Proyectos</a></li>
      </ul>
      <div onClick={() => setActive(!active)} className={`${styles.toggle} ${active && styles.toggle_active}`}>
        <VscThreeBars/>
      </div>
    </div>
  )
}

export default Navbar