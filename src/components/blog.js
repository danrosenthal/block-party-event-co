import React from 'react'

import styles from './blog.module.scss'

import Border from '../components/border'

export default function Blog() {
  return (
    <section className={styles.Blog}>
      <Border yellow />
      <div className={styles.YellowSection}>
        <h1>From the blog</h1>
        <article>
          <h1>Hire a wedding planner</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna ali.
          </p>
          <a href="articles/hire-a-wedding-planner">read more</a>
        </article>
      </div>
      <Border yellow top />
    </section>
  )
}
