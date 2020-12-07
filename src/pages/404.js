import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Text from '../components/text'
import Page from '../components/page'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class NotFoundPage extends React.Component {

  render() {
    const {
      heroImage: {
        file: { url: heroImageUrl },
      },
    } = this.props.data.contentfulContactPage
    return (
      <Layout>
        <Hero title={"404: Not found"} impact={true} lead={false} image={heroImageUrl} short={true} />
      <Page>
        <Text centered lead>
          <p>The page you're looking for doesn&#39;t exist.</p>
          <p>
            Why don't you head back <a href="/">home</a>?
          </p>
        </Text>
      </Page>
    </Layout>
    );
  }
}

NotFoundPage.propTypes = propTypes

export const notFoundPageQuery = graphql`
  query notFoundPageQuery {
    contentfulContactPage {
      heroImage {
        file {
          url
        }
      }
    }
  }
`

export default NotFoundPage
