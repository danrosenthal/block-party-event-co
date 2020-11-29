import React from 'react'

import Layout from '../components/layout'
import Page from '../components/page'
import Hero from '../components/hero'
import Gallery from '../components/gallery'

import * as PropTypes from 'prop-types'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PortfolioDetailsTemplate extends React.Component {
  render() {
    const { contentfulPortfolio } = this.props.data
    const { heroImage: { file: { url } },
      title,
      content,
      gallery,
    } = contentfulPortfolio;
    const imageMarkup = contentfulPortfolio.gallery.map((item) => {
      return <img src={item.file.url} />
    })
    return (
      <Layout>
        <Hero title={title} impact={true} lead={true} image={url} short={true} />
        <Page>
          {contentfulContentTransformer(content)}
        </Page>
        <Gallery images={gallery} />
      </Layout >
    )
  }
}

PortfolioDetailsTemplate.propTypes = propTypes

export default PortfolioDetailsTemplate

export const pageQuery = graphql`
  query PortfolioDetailsById($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      title
      id
      gallery {
        file {
          url
        }
        fixed {
          aspectRatio
        }
      }
      heroImage {
        file {
          url
        }
        description
      }
      content {
        content
      }
    }
  }
`
