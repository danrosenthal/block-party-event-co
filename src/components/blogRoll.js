import React from 'react'
import generateBlogPostLink from '../utilities/generateBlogPostLink'

import styles from './blogRoll.module.scss'

import Heading from './heading'
import Text from './text'

export default function Blog({ posts }) {
  return (
    <ul className={styles.BlogRoll}>
      {posts.map((post, index) => {
        const {title, description} = post.node;
        return (
          <li className={styles.Item} key={index}>
            <Heading level="2" centered>
              <a href={generateBlogPostLink(title)}>
                {title}
              </a>
            </Heading>
            <Text centered>
              {description}
            </Text>
          </li>
        )
      })}
    </ul>
  )
}
