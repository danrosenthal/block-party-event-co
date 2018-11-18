import React from 'react'

import styles from './footer.module.scss'

import Border from '../components/border'
import Text from '../components/text'

export default function Footer({ children }) {
  return (
    <>
      <Border />
      <div className={styles.PinkSection}>
        <div className={styles.Footer}>
          <Text>
            {children}
          </Text>
        </div>
      </div>
    </>
  )
}
