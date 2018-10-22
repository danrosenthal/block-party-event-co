import React from 'react'

import styles from './contact.module.scss'

export default function Contact() {
  return (
    <section className={styles.Contact}>
      <h1>Get in touch</h1>
      <form>
        <div>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span>Email address</span>
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            <span>Phone number</span>
            <input type="text" id="phone" name="phone" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <span>Your message</span>
            <textarea id="message" name="message" />
          </label>
        </div>
      </form>
    </section>
  )
}
