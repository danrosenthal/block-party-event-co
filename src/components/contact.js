import React from 'react'
import classNames from 'classnames'

import Heading from '../components/heading'
import Button from '../components/button'

import styles from './contact.module.scss'

export default function Contact() {
  const leftBlock = (
    <div className={styles.LeftBlock}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 187.8 171.58"
      >
        <path
          d="M7.87 4.86A388.55 388.55 0 0 0 0 86.91c.16 14 1.09 28 .88 42-.21 14.87.31 27.84 2.72 42.53 58.17-2.3 115.12 4.57 172.17-5.95a5.11 5.11 0 0 0 2.32-.85 3.61 3.61 0 0 0 1-2c11.7-45.16 9.06-95.81 6.36-141.81-.45-7.65-.69-20.49-.69-20.49s-32.93-.08-45-.3c-28.48-.5-57 3.44-85.48 3.82-4.07.05-46.15-.24-46.41 1z"
          fill="#F04E30"
        />
      </svg>
    </div>
  );

  const rightBlock = (
    <div className={styles.RightBlock}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 187.8 171.58"
      >
        <path
          d="M7.87 4.86A388.55 388.55 0 0 0 0 86.91c.16 14 1.09 28 .88 42-.21 14.87.31 27.84 2.72 42.53 58.17-2.3 115.12 4.57 172.17-5.95a5.11 5.11 0 0 0 2.32-.85 3.61 3.61 0 0 0 1-2c11.7-45.16 9.06-95.81 6.36-141.81-.45-7.65-.69-20.49-.69-20.49s-32.93-.08-45-.3c-28.48-.5-57 3.44-85.48 3.82-4.07.05-46.15-.24-46.41 1z"
          fill="#FFC233"
        />
      </svg>
    </div>
  );

  const textFieldClassName = classNames(styles.tall, styles.TextField);

  return (
    <section className={styles.Contact}>
      <div className={styles.Figure}>
        <div className={styles.FormContainer}>
          <Heading level="1">Get in touch</Heading>
          <form>
            <div className={styles.FormSection}>
              <label htmlFor="name">
                <span className={styles.FormLabel}>
                  Name
                </span>
                <input className={styles.TextField} type="text" id="name" name="name" />
              </label>
            </div>
            <div className={styles.FormSection}>
              <label htmlFor="email">
                <span className={styles.FormLabel}>
                  Email address
                </span>
                <input className={styles.TextField} type="email" id="email" name="email" />
              </label>
            </div>
            <div className={styles.FormSection}>
              <label htmlFor="phone">
                <span className={styles.FormLabel}>
                  Phone number
                </span>
                <input className={styles.TextField} type="tel" id="phone" name="phone" />
              </label>
            </div>
            <div className={styles.FormSection}>
              <label htmlFor="message">
                <span className={styles.FormLabel}>
                  Message
                </span>
                <textarea className={textFieldClassName} id="message" name="message" />
              </label>
            </div>
            <div className={styles.FormSection}>
              <Button>Submit</Button>
            </div>
          </form>
        </div>
        {leftBlock}
        {rightBlock}
      </div>
    </section>
  )
}