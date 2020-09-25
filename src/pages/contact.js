import React from 'react'
import Layout from '../components/layout'
import Text from '../components/text'
import Page from '../components/page'
import Hero from '../components/hero'
import Contact from '../components/contact'

import { graphql } from 'gatsby'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ContactPage extends React.Component {

  render() {
    const {
      title,
      heroImage: {
        file: { url: heroImageUrl },
      },
      content,
    } = this.props.data.contentfulContactPage
    return (
      <Layout>
        <Hero title={title} impact={true} lead={false} image={heroImageUrl} short={true} />
        <Page>
          <Text centered lead>
            <p>We'd love to chat. Please reach out.</p>
          </Text>
          <Contact title="Contact" />
        </Page>
      </Layout>
    );
  }
}

ContactPage.propTypes = propTypes

export const contactPageQuery = graphql`
  query contactPageQuery {
    contentfulContactPage {
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


export default ContactPage
