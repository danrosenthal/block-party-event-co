import React from 'react'
import classNames from 'classnames'

import styles from './button.module.scss'

export default function Button({
  children,
  onClick,
  url,
}) {
  const className = classNames(
    styles.Button,
  );

  if (url) {
    return (
      <a href={url} className={className}>
        {children}
      </a>
    )
  } else {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    )
  }
}
