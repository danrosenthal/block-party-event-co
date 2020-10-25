import React from 'react'

import Layout from '../components/layout'
import Page from '../components/page'
import Hero from '../components/hero'
import Text from '../components/text'
import Heading from '../components/heading'

import styles from './blog-post.module.scss'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PortfolioDetailsTemplate extends React.Component {
  render() {
    const { contentfulPortfolio } = this.props.data
    const { heroImage: { file: { url }, description },
      title
    } = contentfulPortfolio;
    const imageMarkup = contentfulPortfolio.gallery.map((item) => {
      return <img src={item.file.url} />
    })
    return (
      <Layout>
        <Hero title={title} impact={true} lead={true} image={url} short={true} />
          <Page>
            {imageMarkup}
            <Text>
              <p>{description}</p>
            </Text>
          </Page>
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
      }
      heroImage {
        file {
          url
        }
        description
      }
    }
  }
`
