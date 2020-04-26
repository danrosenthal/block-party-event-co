import React from 'react'
import { graphql } from 'gatsby'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Page from '../components/page'

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

    return (
      <Layout>
        <Hero title={title} impact={true} lead={false} image={heroImageUrl} />
        <Page>{contentfulContentTransformer(content)}</Page>
      </Layout>
    )
  }
}

AboutPage.propTypes = propTypes

export const aboutPageQuery = graphql`
  query aboutPageQuery {
    contentfulAboutPage {
      content {
        content {
          content {
            value
            nodeType
          }
        }
      }
      heroImage {
        file {
          url
        }
      }
      title
    }
  }
`

export default AboutPage
