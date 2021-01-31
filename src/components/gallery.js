import React from 'react'

import styles from './gallery.module.scss'

export default function Gallery({ images }) {
  function addEntry(size, image) {
    columns.push({
      size,
      entries: [<img src={image.file.url} loading="lazy" />],
    })
  }
  const columns = []
  images.forEach(image => {
    if (columns[columns.length - 1] == null) {
      if (image.fixed.aspectRatio > 1) {
        addEntry(1, image)
      } else {
        addEntry(2, image)
      }
    } else if (columns[columns.length - 1].size === 1) {
      if (image.fixed.aspectRatio > 1) {
        columns[columns.length - 1].entries.push(<img src={image.file.url} />)
        columns[columns.length - 1].size = 2
      } else {
        addEntry(2, image)
      }
    } else {
      if (image.fixed.aspectRatio > 1) {
        addEntry(1, image)
      } else {
        addEntry(2, image)
      }
    }
  })

  const columnMarkup = columns.map(column => {
    return (
      <div className={styles.Column}>{column.entries.map(image => image)}</div>
    )
  })

  return (
    <div className={styles.GalleryContainer}>
      <div className={styles.Gallery}>{columnMarkup}</div>
    </div>
  )
}
