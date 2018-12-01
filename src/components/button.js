import React from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

export default function Button({
  children,
  onClick,
  url,
  submit,
}) {
  const className = classNames(
    styles.Button,
  );

  const type = submit ? 'submit' : 'button';

  if (url) {
    return (
      <a href={url} className={className}>
        {children}
      </a>
    )
  } else {
    return (
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    )
  }
}
