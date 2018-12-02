import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './media.module.scss'

export default function Media({
  children,
  image,
  rightAligned = false,
  width,
  pushRight,
  pushLeft,
}) {
  const className = classNames(
    styles.Media,
    rightAligned && styles.rightAligned,
    pushRight && styles.pushRight,
    pushLeft && styles.pushLeft,
    width === 'wide' && styles.wideWidth,
    width === 'full' && styles.fullWidth,
    width === 'narrow' && styles.narrowWidth
  )

  return (
    <div className={className}>
      <div className={styles.Image}>{image}</div>
      <div className={styles.Content}>{children}</div>
    </div>
  )
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
}
