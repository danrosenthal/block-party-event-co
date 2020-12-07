import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Feed from '../components/feed'

import { graphql } from 'gatsby'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPage extends React.Component {
  render() {
    const {
      title,
      heroImage: {
        file: { url: heroImageUrl },
      },
    } = this.props.data.contentfulBlogPage
    const { allContentfulPost } = this.props.data
    const posts = this.props.data.allContentfulPost.edges.map(
      (item) => {
        return {
          title: item.node.title,
          heroImage: item.node.image,
        }
      }
    )
    return (
      <Layout>
        <Hero
          title={title}
          impact={true}
          lead={false}
          image={heroImageUrl}
          short={true}
        />
        <Feed items={posts} root="blog"></Feed>
      </Layout>
    )
  }
}

BlogPage.propTypes = propTypes

export const blogPageQuery = graphql`
  query blogPageQuery {
    contentfulBlogPage {
      heroImage {
        file {
          url
        }
      }
      title
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 1) {
      edges {
        node {
          title
          description
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default BlogPage
