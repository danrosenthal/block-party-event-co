import React from 'react'
import { graphql } from 'gatsby'
import debounce from 'lodash/debounce'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Button from '../components/button'
import Team from '../components/team'
import PortfolioPreview from '../components/portfolioPreview'
import Contact from '../components/contact'

import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      medium: true,
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  render() {
    const { medium } = this.state
    const [
      {
        linkDescription: {
          linkDescription: servicesPagePreviewLinkDescription,
        },
        linkText: servicesPagePreviewLinkText,
        linkImage: {
          file: { url: servicesPagePreviewImageUrl },
        },
      },
      {
        linkDescription: { linkDescription: aboutPagePreviewLinkDescription },
        linkText: aboutPagePreviewLinkText,
        linkImage: {
          file: { url: aboutPagePreviewImageUrl },
        },
        title: aboutPageTitle,
      },
      {
        linkDescription: {
          linkDescription: portfolioPagePreviewLinkDescription,
        },
        linkText: portfolioPagePreviewLinkText,
        linkImage: {
          file: { url: portfolioPagePreviewImageUrl },
        },
        title: portfolioPageTitle,
      },
    ] = this.props.data.contentfulHomePage.pages

    return (
      <Layout>
        <Hero
          content={servicesPagePreviewLinkDescription}
          image={servicesPagePreviewImageUrl}
          button={
            <Button primary url="/services">
              {servicesPagePreviewLinkText}
            </Button>
          }
        />
        <Team
          title={aboutPageTitle}
          content={aboutPagePreviewLinkDescription}
          image={aboutPagePreviewImageUrl}
          button={
            <Button url="/about" primary>
              {aboutPagePreviewLinkText}
            </Button>
          }
        />
        <PortfolioPreview
          title={portfolioPageTitle}
          content={portfolioPagePreviewLinkDescription}
          image={portfolioPagePreviewImageUrl}
          button={
            <Button outline={!medium} primary={medium} url="/services">
              {portfolioPagePreviewLinkText}
            </Button>
          }
        />
        <Contact dots={false} />
      </Layout>
    )
  }

  handleResize = debounce(
    () => {
      const { matches } = window.matchMedia('(min-width: 64em)')
      this.setState({ medium: !matches })
    },
    40,
    { leading: true, trailing: true, maxWait: 40 }
  )
}

IndexPage.propTypes = propTypes

export const homePageQuery = graphql`
  query homePageQuery {
    contentfulHomePage {
      pages {
        ... on ContentfulServicesPage {
          id
          linkDescription {
            linkDescription
          }
          linkImage {
            file {
              url
            }
          }
          linkText
        }
        ... on ContentfulAboutPage {
          title
          id
          linkDescription {
            linkDescription
          }
          linkImage {
            file {
              url
            }
          }
          linkText
        }
        ... on ContentfulPortfolioPage {
          title
          id
          linkDescription {
            linkDescription
          }
          linkImage {
            file {
              url
            }
          }
          linkText
        }
      }
    }
  }
`

export default IndexPage
