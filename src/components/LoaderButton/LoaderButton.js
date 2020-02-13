import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import styles from './LoaderButton.module.css'

export default function LoaderButton({
  isLoading,
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`${styles['LoaderButton']} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Glyphicon glyph='refresh' className={styles['spinning']} />}
      {props.children}
    </Button>
  )
}