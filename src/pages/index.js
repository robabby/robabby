import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HomeStage from '../components/HomeStage'
import Scene from '../components/Scene'
import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

import codeIcon from '../assets/images/feather/code.svg'
import imageIcon from '../assets/images/feather/image.svg'
import layoutIcon from '../assets/images/feather/layout.svg'
import activityIcon from '../assets/images/feather/activity.svg'

class Index extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="ra-page-area">
        <Helmet title={siteTitle} />
        <HomeStage />
        <div className="ra-content-area">
          <Bio />
          <hr style={{
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5)
          }} />

          <div
            className="ra-services"
            style={{
              marginTop: rhythm(1.5),
              marginBottom: rhythm(1.5)
            }}
          >
            <h3
              style={{
                ...scale(.65)
              }}
            >
              How can I help?
            </h3>
            <div className="ra-services__list">
              <div className="ra-service">
                <img
                  className="ra-service__icon"
                  src={layoutIcon}
                  alt={`Layout`}
                />
                <h4 className="ra-service__title">User Experience</h4>
                <p>
                  Depending on the scope and complexity of a project, this phase
                  can cover Sketches,  Wireframes, Prototypes, end-user persona
                  creation, User Journeys, and User Interviews.
                </p>
              </div>
              <div className="ra-service">
                <img
                  className="ra-service__icon"
                  src={imageIcon}
                  alt={`Code`}
                />
                <h4 className="ra-service__title">Design</h4>
                <p>
                  Once we have enough data collected and we have reduced our risk,
                  it's time to start bringing a greater level of fidelity to our
                  vision.  This is where we get to see colors and shades bring the
                  concept to life on a screen.
                </p>
              </div>
              <div className="ra-service">
                <img
                  className="ra-service__icon"
                  src={codeIcon}
                  alt={`Image`}
                />
                <h4 className="ra-service__title">Development</h4>
                <p>
                  Here's where the rubber hit's the road.  I take all of the work
                  we have accomplished thus far and bring it to life on the web.
                </p>
              </div>
              <div className="ra-service">
                <img
                  className="ra-service__icon"
                  src={activityIcon}
                  alt={`Activity`}
                />
                <h4 className="ra-service__title">LEAN/Agile</h4>
                <p>
                  To be agile means to adapt quickly and effectively to change.
                  Customers, requirements, and funding can always change.
                  Fortunately the way I work will embrace whatever change
                  is thrown our way.
                </p>
              </div>
            </div>
          </div>

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
