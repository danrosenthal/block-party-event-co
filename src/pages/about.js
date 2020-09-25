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
        <Hero
          title={title}
          impact={true}
          lead={false}
          image={heroImageUrl}
          short={true}
        />
        <Page>{contentfulContentTransformer(content)}</Page>
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
        content {
          data {
            target {
              fields {
                file {
                  en_US {
                    url
                    fileName
                  }
                }
                description {
                  en_US
                }
                heroImage {
                  en_US {
                    fields {
                      file {
                        en_US {
                          url
                        }
                      }
                    }
                  }
                }
                title {
                  en_US
                }
              }
            }
          }
          content {
            nodeType
            value
          }
        }
      }
    }
  }
`

export default AboutPage
