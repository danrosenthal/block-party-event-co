import React from 'react';
import marked from 'marked';
import formatDate from '../utilities/formatDate';

import Layout from '../components/layout'
import Article from '../components/article'
import Hero from '../components/hero'
import Text from '../components/text'
import Heading from '../components/heading'

import styles from './blog-post.module.scss'
class BlogPostTemplate extends React.Component {
  render() {
    const { post } = this.props.data
    const {
      title,
      content,
      featuredImage,
      updatedAt,
    } = post;
    return (
      <Layout>
        <Hero image={featuredImage.url} />
        <Article>
          <Heading centered level="1">
            {title}
          </Heading>
          <Text centered>
            <p><em>{formatDate(updatedAt)}</em></p>
          </Text>
          <Text>
            <div className={styles.BlogContent} dangerouslySetInnerHTML={{__html: marked(content)}}/>
          </Text>
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    post(id: { eq: $id }) {
      status
      id
      createdAt
      updatedAt
      title
      description
      content
      featuredImage {
        url
      }
    }
    contentfulPage(contentful_id: { eq: "cq71OLaGk0aKYMy6QwgMu" }) {
      formTitle
    }
  }
`
