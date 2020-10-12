import React from 'react'

import generateDetailsLink from '../utilities/generateDetailsLink'
import Heading from './heading'

import styles from './feed.module.scss'

export default function Feed({ children, items }) {
  const itemsMarkup = items.map((item) => {
    return (
      <a className={styles.FeedItem} href={generateDetailsLink(item.title, 'portfolio')}>
        <div className={styles.ItemContent}>
          <Heading level="1" centered={true}>
            {item.title}
          </Heading>
        </div>
        <img src={item.heroImage.file.url} alt={item.title} />
      </a>
    );
  })

  return (
    <main className={styles.Feed}>
      <div className={styles.FeedContainer}>
        {children}
        {itemsMarkup}
      </div>
    </main>
  )
}
