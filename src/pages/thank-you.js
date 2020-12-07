import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Text from '../components/text'
import Page from '../components/page'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ThankYou extends React.Component {
  render() {
    const {
      heroImage: {
        file: { url: heroImageUrl },
      },
    } = this.props.data.contentfulContactPage
    return (
      <Layout>
        <Hero
          title="Thank you"
          impact={true}
          lead={false}
          image={heroImageUrl}
          short={true}
        />
        <Page>
          <Text centered lead>
            <p>Thanks for reaching out. We'll get back to you soon.</p>
          </Text>
        </Page>
      </Layout>
    )
  }
}

ThankYou.propTypes = propTypes

export const thankYouPageQuery = graphql`
  query thankYouPageQuery {
    contentfulContactPage {
      heroImage {
        file {
          url
        }
      }
    }
  }
`

export default ThankYou
