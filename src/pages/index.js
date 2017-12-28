import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HomeStage from '../components/HomeStage'
import Scene from '../components/Scene'
import Bio from '../components/Bio'
import Services from '../components/Services'
import { rhythm, scale } from '../utils/typography'

import asanaPlow from '../assets/images/asana_plow.svg'
import asanaLotus from '../assets/images/asana_lotus_col.svg'

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

          <section className="ra-home__scroll--treasure">
            <h3
              className="scroll-title"
              style={{
                ...scale(.8)
              }}
            >
              There's treasure everywhere.
            </h3>
          </section>
          <section className="ra-home__supplement">
            <div
              className="supplement__top"
              style={{
                paddingTop: rhythm(2)
              }}
            >
              <h3
                className="supplement__title"
                style={{
                  ...scale(.8)
                }}
              >
                I solve <span>business problems.</span>
              </h3>
              <blockquote>
                <small>occasionally a computer is involved.</small>
              </blockquote>
            </div>
            <hr
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(2)
              }}
            />
            <div>
              <img
                src={asanaPlow}
              />
              <p>
                Through a flexible and adaptable process model, we can curate an approach
                to your specific needs.
              </p>
            </div>
            <p>
              I strive to achieve process Zen.
            </p>
            <img
              src={asanaLotus}
            />
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
