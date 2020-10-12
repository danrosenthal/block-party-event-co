import React from 'react'
import marked from 'marked'
import formatDate from '../utilities/formatDate'

import Layout from '../components/layout'
import Article from '../components/article'
import Hero from '../components/hero'
import Text from '../components/text'
import Heading from '../components/heading'
import Page from '../components/page'

import styles from './blog-post.module.scss'
class BlogPostTemplate extends React.Component {
  render() {
    const { contentfulPost } = this.props.data
    const { title, content: {content}, image: {file: {url}}, updatedAt } = contentfulPost
    return (
      <Layout>
        <Hero image={url} />
        <Page>
          <Article>
            <Heading centered level="1">
              {title}
            </Heading>
            <Text centered>
              <p>
                <em>{formatDate(updatedAt)}</em>
              </p>
            </Text>
            <Text>
              <div
                className={styles.BlogContent}
                dangerouslySetInnerHTML={{ __html: marked(content) }}
              />
            </Text>
          </Article>
        </Page>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      createdAt
      updatedAt
      title
      description
      content {
        content
      }
      image {
        file {
          url
        }
      }
    }
  }
`
