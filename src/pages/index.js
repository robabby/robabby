import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HomeStage from '../components/HomeStage'
import Scene from '../components/Scene'
import Bio from '../components/Bio'
import Services from '../components/Services'
import { rhythm, scale } from '../utils/typography'

import '../assets/scss/pages/home.scss'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="ra-page-area">
        <Helmet title={siteTitle} />
        <HomeStage />
        <div
          className="ra-content-area"
          style={{
            // transform: 'translateY(-220px)',
            marginTop: -169
          }}
        >
          <Bio />

          <div className="ra-home__scroll-1">
            <h3
              className="scroll-title"
              style={{
                ...scale(.8)
              }}
            >
              There's treasure everywhere.
            </h3>
          </div>
          <section className="ra-home__supplement-1">
            <h3
              style={{
                ...scale(.65),
                marginTop: rhythm(2)
              }}
            >
              How can I help?
            </h3>
            <p>
              With an abundance of experience in the world of technology and software
              development, I can either hold your hand or coach from a distance as
              we bring your vision into greater fidelity.
            </p>
            <p>
              I solve <b>business problems</b> -- occasionally a computer is involved.
            </p>
          </section>

          <Services />

          <h2 style={{
            marginTop: rhythm(1.25),
            marginBottom: rhythm(1.25)
          }}>
            Recent ramblings:
          </h2>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                sizes(maxWidth: 786) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
