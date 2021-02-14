import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allContentfulMeta(sort: { fields: createdAt, order: DESC }, limit: 1) {
          edges {
            node {
              title
              description
              keywords
              image {
                file {
                  url
                }
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.allContentfulMeta.edges[0].node.title}
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              name: 'description',
              content: data.allContentfulMeta.edges[0].node.description,
            },
            {
              name: 'keywords',
              content: data.allContentfulMeta.edges[0].node.keywords,
            },
            {
              property: 'og:url',
              content: 'https://www.blockpartyeventco.com',
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:title',
              content: data.allContentfulMeta.edges[0].node.title,
            },
            {
              property: 'og:description',
              content: data.allContentfulMeta.edges[0].node.description,
            },
            {
              property: 'og:image',
              content: data.allContentfulMeta.edges[0].node.image.file.url,
            },
            {
              property: 'og:image:alt',
              content: data.allContentfulMeta.edges[0].node.image.description,
            },
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:title',
              content: data.allContentfulMeta.edges[0].node.title,
            },
            {
              name: 'twitter:description',
              content: data.allContentfulMeta.edges[0].node.description,
            },
            {
              name: 'twitter:image',
              content: data.allContentfulMeta.edges[0].node.image.file.url,
            },
            {
              name: 'twitter:image:alt',
              content: data.allContentfulMeta.edges[0].node.image.description,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <div id="pageContainer">
          <Header
            showNav
          />
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
