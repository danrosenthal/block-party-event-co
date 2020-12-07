import React from 'react'

import styles from './portfolioPreview.module.scss'

import Border from './border'
import Hero from './hero'

export default function PortfolioPreview({ title, content, image, button }) {
  return (
    <section className={styles.PortfolioPreview}>
      <div className={styles.TopBorder}>
        <Border color={'white'} top />
      </div>
      <Hero
        image={image}
        impact={true}
        lead={false}
        content={content}
        title={title}
        button={button}
      />
    </section>
  )
}
