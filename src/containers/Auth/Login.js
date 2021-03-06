import React, { useState } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Auth } from 'aws-amplify'

import LoaderButton from '../../components/LoaderButton/LoaderButton'
import useFormFields from '../../lib/customHooks/FormFields'

import styles from './Login.module.css'

export default function Login (props) {
  const { userHasAuthenticated, history } = props
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    try {
      await Auth.signIn(fields.email, fields.password)
      userHasAuthenticated(true)
    } catch (e) {
      alert(e.message)
      setIsLoading(false)
    }
  }

  return (
    <div className={styles['Login']}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId='email' bsSize='large'>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type='email'
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={fields.password}
            onChange={handleFieldChange}
            type='password'
          />
        </FormGroup>
        <LoaderButton
          block
          type='submit'
          bsSize='large'
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  )
}
