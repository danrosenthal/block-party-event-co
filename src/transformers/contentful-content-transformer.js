import React from 'react'

import Heading from '../components/heading'
import Text from '../components/text'

export default function contentfulContentTransformer(contentfulContent) {
  const content = contentfulContent.content.map((item, index) => {
    const { value } = item.content[0]
    switch (item.nodeType) {
      case 'paragraph':
        return (
          <Text key={index}>
            <p>{value}</p>
          </Text>
        )
      case 'heading-1':
        return (
          <Heading key={index} level="1">
            {value}
          </Heading>
        )
      case 'heading-2':
        return (
          <Heading key={index} level="2">
            {value}
          </Heading>
        )
      case 'heading-3':
        return (
          <Heading key={index} level="3">
            {value}
          </Heading>
        )
      default:
        return <p key={index}>{value}</p>
    }
  })
  return <>{content}</>
}
