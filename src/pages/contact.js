import React from 'react'
import Layout from '../components/layout'
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
          {contentfulContentTransformer(content)}
        </Page>
        <Contact title="Contact" />
      </Layout>
    );
  }
}

ContactPage.propTypes = propTypes

export const contactPageQuery = graphql`
  query contactPageQuery {
    contentfulContactPage {
      content {
        content
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
