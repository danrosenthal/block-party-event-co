import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './heading.module.scss'

export default function Heading({ level = '1', children, centered = false }) {
  let levelClassName

  if (level === '1') {
    levelClassName = styles.levelOne
  } else if (level === '2') {
    levelClassName = styles.levelTwo
  } else if (level === '3') {
    levelClassName = styles.levelThree
  } else if (level === '4') {
    levelClassName = styles.levelFour
  }

  const className = classNames(
    styles.Heading,
    levelClassName,
    centered && styles.centered
  )

  if (level === '1') {
    return <h1 className={className}>{children}</h1>
  } else if (level === '2') {
    return <h2 className={className}>{children}</h2>
  } else if (level === '3') {
    return <h3 className={className}>{children}</h3>
  } else if (level === '4') {
    return <h4 className={className}>{children}</h4>
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string.isRequired,
}
