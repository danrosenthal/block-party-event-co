import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox';

import styles from './gallery.module.scss'

export default function Gallery({ images }) {
  // const columns = [[],[],[]]
  // let columnWithPortrait = null;

  // let n = 0;
  // let column = 0;
  // while (n < images.length) {
  //   const {file: {url}, fixed: {aspectRatio}} = images[n];
  //   columns[column].push({url, isPortrait})
  //   n++;
  //   if (column < 2) {
  //     // isPortrait ? 
      
  //   } else {
  //     column = 0;
  //   }
  // }

  // console.log(columns);`

  // const columnOneMarkup = (
  //   <div className={styles.ColumnOne}>
  //     {columns[0].map((image) => {
  //       return (<img src={image.url} />)
  //     })}
  //   </div>
  // )
  
  // const columnTwoMarkup = (
  //   <div className={styles.ColumnTwo}>
  //     {columns[1].map((image) => {
  //       return (<img src={image.url} />)
  //     })}
  //   </div>
  // )
  
  // const columnThreeMarkup = (
  //   <div className={styles.ColumnThree}>
  //     {columns[2].map((image) => {
  //       return (<img src={image.url} />)
  //     })}
  //   </div>
  // )

  // console.log(columnOneMarkup)

  return (
    <SRLWrapper>
      <div className={styles.GalleryContainer}>
        <div className={styles.Gallery}>
          {images.map((image) => {
        return (<img src={image.file.url} />)
      })}
        </div>
      </div>
    </SRLWrapper>
  );
}
