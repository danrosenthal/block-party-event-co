import React from 'react'
import classNames from 'classnames'

import styles from './text.module.scss'

export default function Text({
  lead = false,
  children,
  centered = false,
  indented = false,
  impact = false,
}) {
  const className = classNames(
    styles.Text,
    lead && styles.lead,
    centered && styles.centered,
    indented && styles.indented,
    impact && styles.impact
  )

  return <div className={className}>{children}</div>
}
