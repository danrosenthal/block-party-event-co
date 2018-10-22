import React from 'react'

import styles from './footer.module.scss'

import Border from '../components/border'

export default function Footer({ children }) {
  return (
    <>
      <Border />
      <div className={styles.PinkSection}>
        {children}
        <p>come check out this sweet sweet footer content</p>
      </div>
    </>
  )
}
