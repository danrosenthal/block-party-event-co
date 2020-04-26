import React from 'react'
import generateBlogPostLink from '../utilities/generateBlogPostLink'

import styles from './blogPreview.module.scss'

import Border from './border'
import Button from './button'
import Heading from './heading'
import Text from './text'
import Article from './article'

export default function Blog({ title, post }) {
  return (
    <section className={styles.Blog}>
      <Border color={'yellow'} />
      <div className={styles.YellowSection}>
        <Heading level="1" centered={true}>
          {title}
        </Heading>
        <Article>
          <Heading level="2" centered={true}>
            {post.title}
          </Heading>
          <Text impact centered>
            <p>{post.description}</p>
          </Text>
          <div className={styles.Action}>
            <Button outline url={generateBlogPostLink(post.title)}>
              read more
            </Button>
          </div>
        </Article>
      </div>
      <Border color={'yellow'} top />
    </section>
  )
}
