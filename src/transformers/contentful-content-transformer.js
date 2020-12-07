import React from 'react'

import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Heading from '../components/heading'
import Media from '../components/media'
import Text from '../components/text'

export default function contentfulContentTransformer(content) {
  const locale = 'en-US'
  const options = {
    renderNode: {
      [BLOCKS.DOCUMENT]: (_node, children) => {
        return <Text>{children}</Text>
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { title = '', heroImage, description } = node.data.target.fields;
        return (
          <Media
            inline={true}
            width="full"
            padding={false}
            image={
              <img
                src={heroImage[locale].fields.file[locale].url}
                alt={title[locale]}
              />
            }
          >
            <Heading level="2">{title[locale]}</Heading>
            <p>{description[locale]}</p>
          </Media>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { title, file } = node.data.target.fields;
        return <img src={file[locale].url} alt={title[locale]} />
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

  if (typeof content.content === 'string') {
    return documentToReactComponents(JSON.parse(content.content), options)
  } else if (typeof content.content === 'object') {
    console.log({content: content.content})
  }
}
