import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

import Routes from './Routes'
import styles from './App.module.css'

function App(props) {
  return (
    <div className={`${styles['App']} container`}>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className={styles['navbar-brand']}>
            <Link to='/'>Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  )
}

export default App
