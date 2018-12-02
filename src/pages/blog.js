import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/heading'
import Text from '../components/text'
import Page from '../components/page'
import BlogRoll from '../components/blogRoll'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPage extends React.Component {
  render() {
    const { data } = this.props

    const blogRollMarkup = <BlogRoll posts={data.allPost.edges} />;

    return (
      <Layout>
        <Page>
          <Heading level="1" centered>Blog</Heading>
          <Text>
            <ul>
              {blogRollMarkup}
            </ul>
          </Text>
        </Page>
      </Layout>
    );
  }
}

BlogPage.propTypes = propTypes

export const blogPageQuery = graphql`
  query blogPageQuery {
    allPost(sort: {
      fields: createdAt
      order: DESC
    }) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
export default BlogPage;