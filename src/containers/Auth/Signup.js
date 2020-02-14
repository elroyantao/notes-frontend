import React, { useState } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Auth } from 'aws-amplify'

import LoaderButton from '../../components/LoaderButton/LoaderButton'
import useFormFields from '../../lib/customHooks/FormFields'

import styles from './Login.module.css'

export default function Signup (props) {
  const { userHasAuthenticated, history } = props
  const [isLoading, setIsLoading] = useState(false)
  const [newUser, setNewUser] = useState(null)
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: ''
  })

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.confirmPassword === fields.password
    )
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0
  }

  async function handleConfirmationSubmit (event) {
    event.preventDefault()
    setIsLoading(true)

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode)
      await Auth.signIn(fields.email, fields.password)
      userHasAuthenticated(true)
      history.push('/')
    } catch (e) {
      alert(e.message)
      setIsLoading(false)
    }
  }

  async function handleSubmit (event) {
    event.preventDefault()
    setIsLoading(true)

    try {
      await Auth.signUp({
        username: fields.email,
        password: fields.password
      })
      setIsLoading(false)
      setNewUser(true)
    } catch (e) {
      if (e.code = 'UsernameExistsException') {
        const resend = window.confirm('An user already exists with this email!!\n Do you want us to resend the confirmation code?')
        if (resend) {
          await Auth.resendSignUp(fields.email)
          setNewUser(true)
        }
      } else {
        alert(e.message)
      }
      setIsLoading(false)
    }
  }

  function renderConfirmationForm () {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId='confirmationCode' bsSize='large'>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type='tel'
            value={fields.confirmationCode}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <LoaderButton
          block
          type='submit'
          bsSize='large'
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </form>
    )
  }

  function renderForm () {
    return (
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
        <FormGroup controlId='confirmPassword' bsSize='large'>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={fields.confirmPassword}
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
          Signup
        </LoaderButton>
      </form>
    )
  }

  return (
    <div className={styles['Signup']}>
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  )
}
