import React from 'react'

import styles from './article.module.scss'

export default function Article({ children }) {
  return <article className={styles.Article}>{children}</article>
}
