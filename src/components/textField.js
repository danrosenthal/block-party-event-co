import React from 'react'
import classNames from 'classnames'

import styles from './textField.module.scss'

export default function TextField({ label, type, tall = false, name }) {
  const className = classNames(styles.TextField, tall && styles.tall)

  if (tall === true) {
    return (
      <label htmlFor={name}>
        <span className={styles.FormLabel}>{label}</span>
        <textarea className={className} id={name} name={name} />
      </label>
    )
  } else {
    return (
      <label htmlFor={name}>
        <span className={styles.FormLabel}>{label}</span>
        <input className={className} type={type} id={name} name={name} />
      </label>
    )
  }
}
