import React from 'react'


import Heading from '../components/heading'
import Text from '../components/text'
import Media from '../components/media'

import styles from './team.module.scss'

import chelseaBaker from '../images/chelsea-baker.jpg'

export default function Team() {

  const image = (
    <div className={styles.Figure}>
      <div className={styles.Image}>
        <img
          src={chelseaBaker}
          alt="a headshot of chelsea baker, founder and lead planner"
        />
      </div>
      <div className={styles.LeftBlock}>
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
      <div className={styles.RightBlock}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 187.8 171.58"
        >
          <path
            d="M7.87 4.86A388.55 388.55 0 0 0 0 86.91c.16 14 1.09 28 .88 42-.21 14.87.31 27.84 2.72 42.53 58.17-2.3 115.12 4.57 172.17-5.95a5.11 5.11 0 0 0 2.32-.85 3.61 3.61 0 0 0 1-2c11.7-45.16 9.06-95.81 6.36-141.81-.45-7.65-.69-20.49-.69-20.49s-32.93-.08-45-.3c-28.48-.5-57 3.44-85.48 3.82-4.07.05-46.15-.24-46.41 1z"
            fill="#F8AA97"
          />
        </svg>
      </div>
      <div className={styles.Dots}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.5 169.1">
          <path d="M1.2 30.6c-.3.3-.5.7-.6 1.1-.2.1-.3.2-.4.4-.9 1.5.7 3.1 2.2 2.9 1.6-.2 2.9-1.7 2.4-3.3-.4-1.4-2.4-2.3-3.6-1.1zM36.6 34.7c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .1.1.1.2.1zM71.8 33c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.1-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.1.4 2.7-.2 2.8-1.7zM1.2.6c-.3.3-.5.6-.5 1-.2.1-.3.3-.5.5-.8 1.5.7 3 2.3 2.9C4 4.8 5.4 3.2 4.9 1.7 4.4.2 2.4-.6 1.2.6zM36.6 4.6c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .2.1.1.2.1zM71.8 3c0-.7-.3-1.4-.9-1.8-.2-.1-.3-.2-.4-.2-.1-.2-.3-.4-.4-.5C69-.3 67.3.4 67 1.7c-.4 1.4.6 2.6 1.9 3 1.2.4 2.8-.3 2.9-1.7zM68.7 62.9c-.1 0-.1 0-.2.1-.4.1-.9.4-1.1.8-.3.5-.4 1.1-.2 1.7.3 1.2 1.4 1.8 2.6 1.6 1.1-.3 1.9-1.4 1.6-2.5-.2-1.3-1.6-2.1-2.7-1.7zM36.7 63.2c-.5-.1-1-.2-1.4-.1-.5.1-.9.5-1.1.9-.6 1.1.2 2.3 1.3 2.6.9.3 2.2.1 2.5-1 .1-.5 0-1-.3-1.3-.2-.5-.5-1-1-1.1zM3.4 63.4c-.1-.3-.4-.4-.6-.5-.6-.1-1.2 0-1.6.4-.3.3-.5.7-.6 1.1-.2 1 .3 2 1.3 2.4.8.3 1.8 0 2.3-.8.5-.7.4-1.8-.3-2.4-.2-.1-.3-.2-.5-.2zM1.2 97.2c-.3.3-.5.7-.6 1.1-.2.1-.3.2-.4.4-.9 1.5.7 3.1 2.2 2.9 1.6-.2 2.9-1.7 2.4-3.3-.4-1.5-2.4-2.3-3.6-1.1zM36.6 101.2c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .2.1.1.2.1zM71.8 99.6c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.1-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.1.4 2.7-.2 2.8-1.7zM101.5 30.6c-.3.3-.5.7-.6 1.1-.2.1-.3.2-.4.4-.9 1.5.7 3.1 2.2 2.9 1.6-.2 2.9-1.7 2.4-3.3-.5-1.4-2.4-2.3-3.6-1.1zM136.8 34.7c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .1.1.1.2.1zM172 33c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.1-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.1.4 2.7-.2 2.8-1.7zM101.5.6c-.3.3-.5.7-.6 1.1-.2.1-.3.2-.4.4-.9 1.5.7 3.1 2.2 2.9 1.6-.2 2.9-1.7 2.4-3.3-.5-1.5-2.4-2.3-3.6-1.1zM136.8 4.6c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .2.1.1.2.1zM172 3c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.2-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.1.4 2.7-.3 2.8-1.7zM169 62.9c-.1 0-.1 0-.2.1-.4.1-.9.4-1.1.8-.3.5-.4 1.1-.2 1.7.3 1.2 1.4 1.8 2.6 1.6 1.1-.3 1.9-1.4 1.6-2.5-.3-1.3-1.6-2.1-2.7-1.7zM136.9 63.2c-.5-.1-1-.2-1.4-.1-.5.1-.9.5-1.1.9-.6 1.1.2 2.3 1.3 2.6.9.3 2.2.1 2.5-1 .1-.5 0-1-.3-1.3-.1-.5-.5-1-1-1.1zM103.7 63.4c-.2-.2-.4-.4-.7-.5-.6-.1-1.2 0-1.6.4-.3.3-.5.7-.6 1.1-.2 1 .3 2 1.3 2.4.8.3 1.8 0 2.3-.8.5-.7.4-1.8-.3-2.4-.1-.1-.3-.2-.4-.2zM101.5 97.2c-.3.3-.5.7-.6 1.1-.2.1-.3.2-.4.4-.9 1.5.7 3.1 2.2 2.9 1.6-.2 2.9-1.7 2.4-3.3-.5-1.5-2.4-2.3-3.6-1.1zM136.8 101.2c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .2.1.1.2.1zM172 99.6c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.1-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.1.4 2.7-.2 2.8-1.7zM36.6 168.7c.3 0 .7-.1 1-.4.4-.3.5-.8.6-1.3.1-.8-.1-1.7-.7-2.2-.6-.5-1.3-.6-1.9-.4-.5 0-1 .3-1.4.7-.5.7-.6 1.6-.1 2.3.5.7 1.4 1.2 2.3 1.2 0 .2.1.2.2.1zM71.8 167.1c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.1-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.1.4 2.7-.2 2.8-1.7zM68.7 129.4c-.1 0-.1 0-.2.1-.4.1-.9.4-1.1.8-.3.5-.4 1.1-.2 1.7.3 1.2 1.4 1.8 2.6 1.6 1.1-.3 1.9-1.4 1.6-2.5-.2-1.3-1.6-2-2.7-1.7zM36.7 129.7c-.5-.1-1-.2-1.4-.1-.5.1-.9.5-1.1.9-.6 1.1.2 2.3 1.3 2.6.9.3 2.2.1 2.5-1 .1-.5 0-1-.3-1.3-.2-.5-.5-1-1-1.1zM3.4 129.9c-.2-.2-.4-.4-.7-.5-.6-.1-1.2 0-1.6.4-.3.3-.5.7-.6 1.1-.2 1 .3 2 1.3 2.4.8.3 1.8 0 2.3-.8.5-.7.4-1.8-.3-2.4-.1 0-.2-.1-.4-.2zM103.9 129.9c-.4-.3-1-.2-1.4.1h-.5c-.5.1-1 .5-1.1 1-.3 1 .6 1.9 1.5 2 .8.2 1.7-.1 2.1-.9.4-.7.2-1.7-.6-2.2zM136.7 129.7c0-.1 0-.1 0 0-.6-.4-1.3-.4-1.8 0-.6.3-.8 1-.9 1.6-.1 1 .6 2.1 1.7 2.3 1.1.1 2.3-.7 2.4-1.8.2-1.1-.5-1.9-1.4-2.1zm-.7 2.3c.1 0 .1.1 0 0 .1.1.1 0 0 0zM1.2 164.7c-.3.3-.5.7-.6 1.1-.2.1-.3.2-.4.4-.9 1.5.7 3.1 2.2 2.9 1.6-.2 2.9-1.7 2.4-3.3-.4-1.5-2.4-2.3-3.6-1.1zM103.8 168.5c1-.5 1.3-1.8.7-2.7 0-.3-.1-.6-.4-.8-.7-.6-1.8-.8-2.7-.2-.9.6-1.2 1.9-.6 2.9.7 1 2 1.4 3 .8zM138.2 167c.2-.6 0-1.3-.5-1.7-.3-.2-.5-.3-.8-.3h-.1c-.3-.2-.7-.3-1.1-.2-.1 0-.2.1-.3.1h-.2c-.7.2-1.1.8-1.2 1.5-.1 1.1.9 2.1 2 2.2 1 0 2-.7 2.2-1.6zM173.5 167.1c0-.7-.3-1.4-.9-1.8-.1-.1-.2-.1-.3-.2-.1-.2-.3-.4-.4-.5-1.1-.8-2.8-.1-3.1 1.2-.4 1.4.6 2.6 1.9 3 1.2.4 2.8-.2 2.8-1.7zM171.9 129.9c-.2-.2-.4-.4-.7-.5-.6-.1-1.2 0-1.6.4-.3.3-.5.7-.6 1.1-.2 1 .3 2 1.3 2.4.8.3 1.8 0 2.3-.8.5-.7.4-1.8-.3-2.4-.1 0-.3-.1-.4-.2z" fill="#F04E30"/>
        </svg>
      </div>
    </div>
  )

  return (
    <section className={styles.Team}>
      <Media image={image} width="wide">
        <Heading level="1">
          meet Chelsea
        </Heading>
        <Text indented lead>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna ali.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nosquam erat volutpat.
          </p>
        </Text>
      </Media>
    </section>
  )
}
