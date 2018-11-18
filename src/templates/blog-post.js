import React from 'react'

import Layout from '../components/layout'
import Article from '../components/article'
import Hero from '../components/hero'
import Text from '../components/text'
import Heading from '../components/heading'

import contentfulContentTransformer from '../transformers/contentful-content-transformer'

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { contentfulPost } = data
    return (
      <Layout>
        <Hero image={contentfulPost.image.file.url} />
        <Article>
          <Heading level="1">
            {contentfulPost.title}
          </Heading>
          <Text>{contentfulContentTransformer(contentfulPost.content)}</Text>
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title,
      slug,
    	description {
      	description
    	},
    	content {
        content {
          nodeType
          content {
            value,
          }
          data {
            target {
              sys {
                id,
              }
            }
          }
        }
      },
    	image {
        file {
          url
        }
      }
    }
    contentfulPage(contentful_id: { eq: "cq71OLaGk0aKYMy6QwgMu" }) {
      formTitle
    }
  }
`
