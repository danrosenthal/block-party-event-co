import React from 'react'

import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Heading from '../components/heading'
import Media from '../components/media'
import Text from '../components/text'

export default function contentfulContentTransformer(content) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { title, heroImage, description } = node.data.target.fields
        const headingMarkup = <Heading level="2">{title['en-US']}</Heading>
        const heroImageMarkup = heroImage && (
          <img
            src={heroImage['en-US'].fields.file['en-US'].url}
            alt={title['en-US']}
          />
        )
        const descriptionMarkup = description && (
          <Text>
            <p>{description['en-US']}</p>
          </Text>
        )
        return (
          <Media width="full" image={heroImageMarkup}>
            {headingMarkup}
            {descriptionMarkup}
          </Media>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, file } = node.data.target.fields
        return <img src={file['en-US'].url} alt={title['en-US']} />
      },
      [BLOCKS.PARAGRAPH]: (_node, children) => {
        return <Text>{children}</Text>
      },
      [BLOCKS.HEADING_1]: (_node, children) => {
        return <Heading level="1">{children}</Heading>
      },
      [BLOCKS.HEADING_2]: (_node, children) => {
        return <Heading level="2">{children}</Heading>
      },
      [BLOCKS.HEADING_3]: (_node, children) => {
        return <Heading level="3">{children}</Heading>
      },
      [BLOCKS.HEADING_4]: (_node, children) => {
        return <Heading level="4">{children}</Heading>
      },
      [BLOCKS.HEADING_5]: (_node, children) => {
        return <Heading level="4">{children}</Heading>
      },
      [BLOCKS.HEADING_6]: (_node, children) => {
        return <Heading level="4">{children}</Heading>
      },
    },
  }

  return documentToReactComponents(JSON.parse(content.content), options);
}
