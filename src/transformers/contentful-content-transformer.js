import React from 'react'

import Heading from '../components/heading'
import Media from '../components/media'
import Text from '../components/text'

export default function contentfulContentTransformer(contentfulContent) {
  return (
    <>
      {contentfulContent.content.map((element, index) => {
        let markup = null
        if (element.content.length) {
          const { value } = element.content[0]
          markup = (
            <Text key={index}>
              <p>{value}</p>
            </Text>
          )
        } else if (element.data.target != null) {
          const { file, description, heroImage, title } = element.data.target.fields

          const heroImageMarkup = heroImage && (
            <img src={heroImage.en_US.fields.file.en_US.url} alt={title.en_US} />
          )
          const descriptionMarkup = description && (
            <Text>
              <p>{description.en_US}</p>
            </Text>
          )
          const imageMarkup = file && <img src={file.en_US.url} alt={title.en_US} />
          const headingMarkup = (
            <Heading level="2">
              {title.en_US}
            </Heading>
          );

          const dataMarkup = heroImage ? (
            <Media width="full" image={heroImageMarkup} key={index}>
              {headingMarkup}
              {descriptionMarkup}
            </Media>
          ) : (
            <div key={index}>
              {imageMarkup}
              {descriptionMarkup}
            </div>
          )
          markup = dataMarkup;
        }
        return <>{markup}</>
      })}
    </>
  )
}
