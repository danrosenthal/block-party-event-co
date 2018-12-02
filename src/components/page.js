import React from 'react'

import styles from './page.module.scss'

export default function Page({children}) {
  return (
    <main className={styles.Page}>
      {children}
    </main>
  )
}
