import React from 'react'
import classNames from 'classnames'

import styles from './border.module.scss'

export default function Border({ yellow = false, top = false }) {
  const yellowTopClassName = yellow && top ? styles.yellowTop : null
  const yellowBottomClassName = yellow && !top ? styles.yellowBottom : null
  const pinkTopClassName = !yellow && top ? styles.pinkTop : null
  const pinkBottomClassName = !yellow && !top ? styles.pinkBottom : null

  const className = classNames(
    styles.Border,
    yellowTopClassName,
    yellowBottomClassName,
    pinkTopClassName,
    pinkBottomClassName
  )

  return <div className={className} />
}
