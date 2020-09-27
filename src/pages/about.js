import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Page from '../components/page'

import * as PropTypes from 'prop-types'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

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
        <Hero
          title={title}
          impact={true}
          lead={false}
          image={heroImageUrl}
          short={true}
        />
        <Page>
          {contentfulContentTransformer(content)}
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
