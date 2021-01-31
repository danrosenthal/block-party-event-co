import React from 'react'
import classNames from 'classnames'

import Heading from '../components/heading'
import Button from '../components/button'
import TextField from '../components/textField'

import styles from './contact.module.scss'

export default function Contact({ dots }) {
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
  )

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
  )

  const className = classNames(dots && styles.dots, styles.Contact)

  return (
    <section className={className} id="#contact">
      <div className={styles.Figure}>
        <div className={styles.FormContainer}>
          <Heading level="2">Get the party started!</Heading>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you"
          >
            <div className={styles.FormSection}>
              <TextField label="Name" name="name" type="text" />
            </div>
            <div className={styles.FormSection}>
              <TextField label="Email address" name="email" type="email" />
            </div>
            <div className={styles.FormSection}>
              <TextField label="Phone number" name="phone" type="tel" />
            </div>
            <div className={styles.FormSection}>
              <TextField label="Message" name="message" tall={true} />
            </div>
            <div className={styles.FormSection}>
              <input type="hidden" name="form-name" value="contact" />
              <Button submit primary fullWidth>
                Send it
              </Button>
            </div>
          </form>
        </div>
        {leftBlock}
        {rightBlock}
      </div>
    </section>
  )
}
