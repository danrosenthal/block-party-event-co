import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './media.module.scss'

export default function Media({ children, image, rightAligned = false, width }) {
  const className = classNames(
    styles.Media,
    rightAligned && styles.rightAligned,
    width === 'wide' && styles.wideWidth,
    width === 'full' && styles.fullWidth,
    width === 'narrow' && styles.narrowWidth,
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
  rightAligned: PropTypes.boolean,
  width: PropTypes.string.isRequired,
}
