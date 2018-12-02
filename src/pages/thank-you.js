import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Text from '../components/text'
import Page from '../components/page'

const ThankYou = () => (
  <Layout>
    <Page>
      <Heading level="1" centered>
        Thank you
      </Heading>
      <Text centered lead>
        <p>Thanks for reaching out. We'll get back to you soon.</p>
      </Text>
    </Page>
  </Layout>
)

export default ThankYou
