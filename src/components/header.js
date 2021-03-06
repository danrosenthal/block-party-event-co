import React, { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import styles from './header.module.scss'

import Border from '../components/border'
import Button from '../components/button'

export default function Header({ showNav }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    if (menuOpen === true) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  const desktopNavigationmarkup = (
    <div className={styles.Navigation}>
      <div className={styles.Item}>
        <Button outline url="/about">
          About
        </Button>
      </div>
      <div className={styles.Item}>
        <Button outline url="/services">
          Services
        </Button>
      </div>
      <div className={styles.Item}>
        <Button outline url="/portfolio">
          Portfolio
        </Button>
      </div>
      <div className={styles.Item}>
        <Button outline url="/contact">
          Contact
        </Button>
      </div>
    </div>
  )

  const mobileNavigationMarkup = (
    <div className={styles.MobileNavigation}>
      <div className={styles.Item}>
        <Button primary onClick={handleMenuClick}>
          Menu
        </Button>
      </div>
    </div>
  )

  const navigationMarkup = showNav ? (
    <>
      {desktopNavigationmarkup}
      {mobileNavigationMarkup}
    </>
  ) : null

  const logoMarkup = (
    <div className={styles.Logo}>
      <h1>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.8 171.58">
            <path
              d="M7.87 4.86A388.55 388.55 0 0 0 0 86.91c.16 14 1.09 28 .88 42-.21 14.87.31 27.84 2.72 42.53 58.17-2.3 115.12 4.57 172.17-5.95a5.11 5.11 0 0 0 2.32-.85 3.61 3.61 0 0 0 1-2c11.7-45.16 9.06-95.81 6.36-141.81-.45-7.65-.69-20.49-.69-20.49s-32.93-.08-45-.3c-28.48-.5-57 3.44-85.48 3.82-4.07.05-46.15-.24-46.41 1z"
              fill="#F8AA97"
            />
            <path
              d="M28.76 35.1v-.65L38 32h1.3v17.49h.24c1.47-2.24 4.13-3.65 7.79-3.65 6 0 10.5 4.36 10.5 12.39C57.79 69 49.88 72.74 42 72.74A28.15 28.15 0 0 1 31.53 71V38.28zm10.5 33.81a6 6 0 0 0 3.36 1c3.84 0 7.2-3 7.2-10.15 0-6.49-2.89-9-7-9a6 6 0 0 0-3.54 1zM75 70.44l-.76 1.71H61.28V70.5l2.42-1.06V38.28l-2.77-3.18v-.65l9.2-2.45h1.3v37.32zM90.83 72.74c-8 0-13.22-4.54-13.22-13.45s5.25-13.45 13.22-13.45S104 50.38 104 59.29s-5.21 13.45-13.17 13.45zm0-2.71c4 0 5-3.9 5-10.74s-1.06-10.74-5-10.74-5 3.89-5 10.74S86.87 70 90.83 70zM122.7 48.49c-3.89 0-6.55 3.07-6.55 10 0 5.73 2.72 9.33 7.38 9.33a9.75 9.75 0 0 0 6.31-2.31l1.06 1.3c-2.12 4.37-5.48 6-10.5 6-6.84 0-11.92-4.66-11.92-13.1 0-9.32 6.55-13.8 13.75-13.8 4.9 0 8.5 1.94 8.5 5.9a3.79 3.79 0 0 1-3.84 4.07 3.6 3.6 0 0 1-3.77-3.66 4 4 0 0 1 1.59-3.3 5 5 0 0 0-2.01-.43zM147.74 70.44l-.74 1.71h-12.95V70.5l2.42-1.06V38.28l-2.78-3.18v-.65L142.9 32h1.3v25.7l2.41-.48 7.62-7.37-3.72-1.42.41-2h11.45l.41 1.88-3.42 1.07-6.9 6.62 8.14 13.22 3.66 1.24-.71 1.65h-10.09l-7-11.92h-2.26v9.09zM40 116.27v9.44l4.14 1.12-.77 1.71H29.41v-1.65l2.78-1V97.33l-2.48-4v-.65l9.5-2.89h.94L40 93.91h.24a8.88 8.88 0 0 1 7.73-4.07c6 0 10.5 4.36 10.5 12.39 0 10.74-7.9 14.51-14.87 14.51a13.18 13.18 0 0 1-3.6-.47zm0-3.54a5.66 5.66 0 0 0 3.31 1c3.83 0 7.2-2.83 7.2-10.09 0-6.19-2.83-8.55-6.91-8.55a6.09 6.09 0 0 0-3.6 1.06zM83.19 110.49c0 2.65 1 3.24 3.72 3l.18 1.18a8.44 8.44 0 0 1-6.2 2.12c-2.54 0-4.66-1.06-5.13-3.77l-.18-.06c-1.24 2.65-4 3.83-7.14 3.83-4 0-7.2-2.18-7.2-7.08 0-5.19 4.13-7.73 10.68-7.73a15.89 15.89 0 0 1 3.54.47v-2.24c0-3.42-2.18-5.13-5.66-5.13a14.06 14.06 0 0 0-7 1.77l-.71-1.71c2.54-3.42 6.61-5.25 11.45-5.25s9.67 2.18 9.67 9.38zm-9-5.84c-3.48 0-5.48.88-5.48 4 0 2.18 1.29 3.66 3.36 3.66a4.75 4.75 0 0 0 3.42-1.24v-6.43zM104.84 114.32l-.77 1.83h-14.4v-1.65l2.42-1.06V97.33l-2.48-3.89v-.65l8.91-3h1.24l-.17 6h.23c1.18-3 3.48-6 7.38-6 3.13 0 5 1.83 5 4.72a4 4 0 0 1-4.07 4.3 3.86 3.86 0 0 1-4.07-4.13 11.93 11.93 0 0 0-4.25 3.78v14.74zM113.9 91.55l9.44-8.09h1.77v7h7.79l-.41 3.06h-7.32v13.93c0 3.42 1.3 4.72 3.66 4.72a8.45 8.45 0 0 0 4.36-1.24l.59 1.42a9.83 9.83 0 0 1-8.55 4.42c-4.6 0-7.79-2.3-7.79-8.32V93.49h-3.54zM137.29 94l-2.66-1.77.41-1.83h13.69l.36 2.06-3.78.89 3.84 9.73a25.88 25.88 0 0 1 1.82 7h.24a71.75 71.75 0 0 1 2-7l3.24-9.5-3.72-1.12.3-2H163l.36 1.94-2.72.95-8.67 23.25c-3.07 8.26-6.32 12.45-12.27 12.45-3.72 0-5.37-2.19-5.37-4.78a3.72 3.72 0 0 1 3.95-4.08 3.43 3.43 0 0 1 3.66 3.66 3.56 3.56 0 0 1-.95 2.48c2.54-.23 5.25-3.78 6.55-7.79zM60.19 141.48v1.19h2.55v1.55h-2.55v1.18h3v1.67h-5.05v-7.26h5.09v1.67zM69.1 144.35a7.17 7.17 0 0 1 .21.89 8.6 8.6 0 0 1 .19-.88l1.2-4.55h2.08l-2.36 7.26h-2.26l-2.37-7.26h2.1zM77.65 141.48v1.19h2.55v1.55h-2.55v1.18h3v1.67h-5.1v-7.26h5.1v1.67zM90.51 147.07h-1.84l-1.86-2.58c-.29-.41-.62-.91-.9-1.35h-.08a7.33 7.33 0 0 1 .06 1.32v2.58h-2v-7.26h1.63l2.08 2.85c.3.43.76 1.16.9 1.43h.07a8.25 8.25 0 0 1-.06-1.39v-2.85h2zM95.53 141.48h-2.1v-1.67h6.26v1.67h-2.1v5.59h-2.06zM113.21 142.64l-1.89.29a1.28 1.28 0 0 0-1.23-1.44c-.85 0-1.5.75-1.5 1.95a1.71 1.71 0 0 0 1.74 1.94 2.2 2.2 0 0 0 1.72-1l1.21 1.27a3.57 3.57 0 0 1-3 1.47 3.51 3.51 0 0 1-3.76-3.72 3.44 3.44 0 0 1 3.55-3.72 2.85 2.85 0 0 1 3.16 2.96zM123.24 143.43a3.64 3.64 0 1 1-3.64-3.71 3.46 3.46 0 0 1 3.64 3.71zm-2.07 0c0-1.26-.68-1.94-1.57-1.94s-1.56.68-1.56 1.94.67 1.94 1.56 1.94 1.57-.68 1.57-1.94zM126 145a1.06 1.06 0 0 1 1.06 1.06 1 1 0 0 1-1.06 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1.06z"
              fill="#fffcfb"
            />
          </svg>
        </Link>
      </h1>
    </div>
  )

  return (
    <div className={styles.Header}>
      <div className={styles.BorderContainer}>
        <Border color={'yellow'} top />
      </div>
      <div className={styles.HeaderContainer}>
        <div className={styles.HeaderInnerContainer}>
          {logoMarkup}
          {navigationMarkup}
        </div>
      </div>
      <Transition timeout={250} in={menuOpen} appear>
        {state => {
          const sideNavigationClassName = classNames(
            styles.SideNavigation,
            styles[state],
          );
          return (
            <div className={sideNavigationClassName}>
              <div className={styles.SideNavigationInnerContainer}>
                <div className={styles.Item}>
                  <Button primary url="/about">
                    About
                  </Button>
                </div>
                <div className={styles.Item}>
                  <Button primary url="/services">
                    Services
                  </Button>
                </div>
                <div className={styles.Item}>
                  <Button primary url="/portfolio">
                    Portfolio
                  </Button>
                </div>
                <div className={styles.Item}>
                  <Button primary url="/contact">
                    Contact
                  </Button>
                </div>
              </div>
              <button
                type="button"
                onClick={handleMenuClick}
                className={styles.SideNavigationBackdrop}
                aria-label="Close navigation menu"
              />
            </div>
          )
        }}
      </Transition>
    </div>
  )
}
