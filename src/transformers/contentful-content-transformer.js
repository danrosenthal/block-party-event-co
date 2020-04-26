import React from 'react'

import Heading from '../components/heading'
import Text from '../components/text'

export default function contentfulContentTransformer(contentfulContent) {
  const content = contentfulContent.content.map((item, index) => {
    if (item.content == null || []) {
      console.warn('skipped content type')
      return null
    }

    const { value, nodeType } = item.content[0]
    switch (nodeType) {
      case 'paragraph':
      case 'text':
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
