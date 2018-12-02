import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Text from '../components/text'
import Page from '../components/page'

const NotFoundPage = () => (
  <Layout>
    <Page>
      <Heading level="1" centered>
        404: Not found
      </Heading>
      <Text centered lead>
        <p>The page you're looking for doesn&#39;t exist.</p>
        <p>
          Why don't you head back <a href="/">home</a>?
        </p>
      </Text>
    </Page>
  </Layout>
)

export default NotFoundPage
