import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Services from '../components/services'
import Team from '../components/team'
import BlogPreview from '../components/blogPreview'
import Contact from '../components/contact'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}
class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const {
      heroTitle,
      heroContent,
      heroImage,
      servicesTitle,
      servicesContent,
      servicesSubtitle1,
      servicesImage1,
      servicesSubContent1,
      servicesSubtitle2,
      servicesImage2,
      servicesSubContent2,
      servicesSubtitle3,
      servicesImage3,
      servicesSubContent3,
      teamTitle,
      teamContent,
      teamImage,
      blogTitle,
      contactTitle,
    } = data.contentfulPage
    const { title, description } = data.allPost.edges[0].node
    return (
      <Layout>
        <Hero
          spaced
          title={heroTitle}
          content={contentfulContentTransformer(heroContent)}
          image={heroImage.file.url}
        />
        <Services
          title={servicesTitle}
          content={contentfulContentTransformer(servicesContent)}
          subTitle1={servicesSubtitle1}
          subContent1={contentfulContentTransformer(servicesSubContent1)}
          subImage1={servicesImage1.file.url}
          subTitle2={servicesSubtitle2}
          subContent2={contentfulContentTransformer(servicesSubContent2)}
          subImage2={servicesImage2.file.url}
          subTitle3={servicesSubtitle3}
          subContent3={contentfulContentTransformer(servicesSubContent3)}
          subImage3={servicesImage3.file.url}
        />
        <Team
          title={teamTitle}
          content={contentfulContentTransformer(teamContent)}
          image={teamImage.file.url}
        />
        <BlogPreview
          title={blogTitle}
          post={{
            title,
            description,
          }}
        />
        <Contact dots title={contactTitle} />
      </Layout>
    )
  }
}

function contentfulContentTransformer(contentArray) {
  const content = contentArray.content.map((item, index) => {
    return <p key={index}>{item.content[0].value}</p>
  })
  return <>{content}</>
}

IndexPage.propTypes = propTypes

export const pageQuery = graphql`
  query pageQuery {
    contentfulPage(contentful_id: { eq: "cq71OLaGk0aKYMy6QwgMu" }) {
      pageSlug
      heroTitle
      heroContent {
        content {
          content {
            value
          }
        }
      }
      heroImage {
        file {
          url
        }
      }
      servicesTitle
      servicesContent {
        content {
          content {
            value
          }
        }
      }
      servicesSubtitle1
      servicesImage1 {
        file {
          url
        }
      }
      servicesSubContent1 {
        content {
          content {
            value
          }
        }
      }
      servicesSubtitle2
      servicesImage2 {
        file {
          url
        }
      }
      servicesSubContent2 {
        content {
          content {
            value
          }
        }
      }
      servicesSubtitle3
      servicesImage3 {
        file {
          url
        }
      }
      servicesSubContent3 {
        content {
          content {
            value
          }
        }
      }
      teamTitle
      teamContent {
        content {
          content {
            value
          }
        }
      }
      teamImage {
        file {
          url
        }
      }
      blogTitle
      formTitle
      formContent {
        content {
          content {
            value
          }
        }
      }
    }
    allPost(sort: { fields: createdAt, order: DESC }, limit: 1) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`

export default IndexPage
