import React from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles['Home']}>
      <div className={styles['lander']}>
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    </div>
  )
}
