import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Page from '../components/page'
import Feed from '../components/feed'

import * as PropTypes from 'prop-types'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PortfolioPage extends React.Component {
  render() {
    const {
      title,
      heroImage: {
        file: { url: heroImageUrl },
      },
      content,
      portfolioItems,
    } = this.props.data.contentfulPortfolioPage

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
        <Feed items={portfolioItems}></Feed>
      </Layout>
    )
  }
}

PortfolioPage.propTypes = propTypes

export const portfolioPageQuery = graphql`
  query portfolioPageQuery {
    contentfulPortfolioPage {
      title
      heroImage {
        file {
          url
        }
      }
      content {
        content
      }
      portfolioItems {
        title
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
`

export default PortfolioPage
