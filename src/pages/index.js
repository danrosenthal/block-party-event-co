import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Services from '../components/services'
import Team from '../components/team'
import Blog from '../components/blog'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Services />
    <Team />
    <Blog />
    <Contact />
  </Layout>
)

export default IndexPage
