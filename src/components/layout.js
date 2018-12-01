import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import generateBlogPostLink from '../utilities/generateBlogPostLink'

import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        allPost(limit: 1) {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          postLink={generateBlogPostLink(data.allPost.edges[0].node.title)}
        />
        {children}
        <Footer>
          <p>come check out this sweet sweet footer content</p>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
