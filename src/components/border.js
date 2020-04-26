import React from 'react'
import classNames from 'classnames'

import styles from './border.module.scss'

export default function Border({ color = 'yellow', top = false }) {
  const colors = {
    yellow: '#ffc233',
    pink: '#f47f62',
    white: '#fffcfb',
  }

  const fillColor = colors[color]

  const topSvgMarkup = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1114 79">
      <path
        fill={fillColor}
        d="M63.5 66c-18.8-1.6-49-2.5-63.5 0V.5h1114.5V73c-20 0-145 5.5-163 5.5-16.5 0-62.5-5.5-146.5-8-67.2-2-116.333-2.167-132.5-2-53.5-2.333-185-5.6-283 0-122.5 7-81 7.5-159.5 9.5S87 68 63.5 66z"
      />
    </svg>
  )

  const bottomSvgMarkup = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1111 79">
      <path
        fill={fillColor}
        d="M1051 13c18.8 1.6 49 2.5 63.5 0v65.5H0V6C20 6 145 .5 163 .5c16.5 0 62.5 5.5 146.5 8 67.2 2 116.333 2.167 132.5 2 53.5 2.333 185 5.6 283 0C847.5 3.5 806 3 884.5 1s143 10 166.5 12z"
      />
    </svg>
  )

  const markup = top ? topSvgMarkup : bottomSvgMarkup

  const className = classNames(styles.Border, top ? styles.top : styles.bottom)

  return <div className={className}>{markup}</div>
}
