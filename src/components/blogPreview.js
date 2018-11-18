import React from 'react'

import styles from './blogPreview.module.scss'

import Border from './border'
import Button from './button'
import Heading from './heading'
import Text from './text'
import Article from './article'

export default function Blog({title, post}) {
  const {description: {description}} = post;
  return (
    <section className={styles.Blog}>
      <Border yellow />
      <div className={styles.YellowSection}>
      <Heading level="1" centered={true}>
        {title}
      </Heading>
        <Article>
          <Heading level="2" centered={true}>
            {post.title}
          </Heading>
          <Text lead centered>
            <p>
              {description}
            </p>
            <Button url="articles/hire-a-wedding-planner">read more</Button>
          </Text>
        </Article>
      </div>
      <Border yellow top />
    </section>
  )
}
