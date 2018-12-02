import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Text from '../components/text'
import Page from '../components/page'
import Contact from '../components/contact'

const ContactPage = () => (
  <Layout>
    <Page>
      <Heading level="1" centered>
        Contact
      </Heading>
      <Text centered lead>
        <p>We'd love to chat. Please reach out.</p>
      </Text>
      <Contact title="Contact" />
    </Page>
  </Layout>
)

export default ContactPage
