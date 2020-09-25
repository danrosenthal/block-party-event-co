import React from 'react'
import { graphql } from 'gatsby'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Services from '../components/services'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ServicesPage extends React.Component {
  render() {
    const {
      title,
      heroImage: {
        file: { url: heroImageUrl },
      },
      content,
      services: [design, coordination, planning],
    } = this.props.data.contentfulServicesPage

    return (
      <Layout>
        <Hero
          title={title}
          impact={true}
          short={true}
          lead={false}
          content={contentfulContentTransformer(content)}
          image={heroImageUrl}
        />
        <Services
          subTitle1={design.title}
          subContent1={design.description.description}
          subImage1={design.heroImage.file.url}
          subTitle2={coordination.title}
          subContent2={coordination.description.description}
          subImage2={coordination.heroImage.file.url}
          subTitle3={planning.title}
          subContent3={planning.description.description}
          subImage3={planning.heroImage.file.url}
        />
      </Layout>
    )
  }
}

ServicesPage.propTypes = propTypes

export const servicesPageQuery = graphql`
  query servicesPageQuery {
    contentfulServicesPage {
      title
      heroImage {
        file {
          url
        }
      }
      content {
        content {
          content {
            value
          }
        }
      }
      services {
        title
        description {
          description
        }
        heroImage {
          file {
            url
          }
        }
      }
    }
  }
`

export default ServicesPage
