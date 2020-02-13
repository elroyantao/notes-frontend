import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Auth } from 'aws-amplify'

import Routes from './Routes'
import styles from './App.module.css'

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    onload()
  }, [])

  async function onload () {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }

    setIsAuthenticating(false)
  }

  async function handleLogout() {
    await Auth.signOut()
    userHasAuthenticated(false)
    props.history.push('/login')
  }

  return (
    !isAuthenticating &&
    <div className={`${styles['App']} container`}>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className={styles['navbar-brand']}>
            <Link to='/'>Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {isAuthenticated
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
                <LinkContainer to='/signup'>
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  )
}

export default withRouter(App)
