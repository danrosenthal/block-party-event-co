import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Text from '../components/text'
import Page from '../components/page'

const NotFoundPage = () => (
  <Layout>
    <Page>
      <Heading level="1" centered>
        Coming soon
      </Heading>
      <Text centered lead>
        <p>In the mean time, you should follow us on <a href="https://instagram.com/blockpartyeventco">Instagram</a>.</p>
      </Text>
    </Page>
  </Layout>
)

export default NotFoundPage
