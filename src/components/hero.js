import React from 'react'
import classNames from 'classnames'

import styles from './hero.module.scss'

import Heading from '../components/heading'
import Text from '../components/text'
import Border from '../components/border'

export default function Hero({
  title,
  content,
  image,
  button,
  lead = true,
  impact,
  short,
}) {
  const headingMarkup = title && (
    <Heading level="1" centered>
      {title}
    </Heading>
  )

  const textMarkup = content && (
    <Text lead={lead} impact={impact} centered>
      {content}
    </Text>
  )

  const contentMarkup = (title || content) && (
    <div className={styles.Content}>
      {headingMarkup}
      {textMarkup}
    </div>
  )

  const buttonMarkup = button && (
    <div className={styles.Action}>{button}</div>
  )

  const className = classNames(styles.Image, short && styles.short);

  return (
    <section className={styles.Hero}>
      <figure className={className}>
        <div className={styles.Image}>
          <img
            src={image}
            alt="wedding scene with bride and groom, confetti falling"
          />
        </div>
        <div className={styles.Border}>
          <Border color={'white'} />
        </div>
      </figure>
      <div className={styles.ContentContainer}>
        <div className={styles.ContentInnerContainer}>
          {contentMarkup}
          {buttonMarkup}
        </div>
      </div>
    </section>
  )
}

