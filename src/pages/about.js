import React from 'react'
import { graphql } from 'gatsby'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Page from '../components/page'
import Heading from '../components/heading'
import Media from '../components/media'
import Text from '../components/text'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AboutPage extends React.Component {
  render() {
    const {
      title,
      heroImage: {
        file: { url: heroImageUrl },
      },
      content,
    } = this.props.data.contentfulAboutPage

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: node => {
          const { title, heroImage, description } = node.data.target.fields
          const headingMarkup = (
            <Heading level="2">
              {title["en-US"]}
            </Heading>
          );
          const heroImageMarkup = heroImage && (
            <img src={heroImage["en-US"].fields.file["en-US"].url} alt={title["en-US"]} />
          );
          const descriptionMarkup = description && (
            <Text>
              <p>{description["en-US"]}</p>
            </Text>
          );
          return (
            <Media width="full" image={heroImageMarkup}>
              {headingMarkup}
              {descriptionMarkup}
            </Media>
          )
        },
        [BLOCKS.EMBEDDED_ASSET]: node => {
          const { title, file } = node.data.target.fields
          return (
            <img src={file["en-US"].url} alt={title["en-US"]} />
          )
        },
      },
    }

    return (
      <Layout>
        <Hero
          title={title}
          impact={true}
          lead={false}
          image={heroImageUrl}
          short={true}
        />
        <Page>
          {documentToReactComponents(JSON.parse(content.content), options)}
        </Page>
      </Layout>
    )
  }
}

AboutPage.propTypes = propTypes

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    contentfulAboutPage {
      title
      heroImage {
        file {
          url
        }
      }
      content {
        content
      }
    }
  }
`

export default AboutPage
