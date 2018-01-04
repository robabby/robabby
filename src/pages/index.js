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
            marginTop: -167
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
              <p className="lead-in">
                I work with everyone from early stage startups, entrepreneurs &amp; independent professionals to large, multi-national corporations - and regardless of size or scale the problems and patterns faced stay relatively the same.
              </p>
            </div>
            <hr
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1)
              }}
            />
            <div>
              <p>
                <b>What</b> is best for my business or organization?  <b>Why</b> is this potential solution the best?  <b>How</b> can I turn this idea into a reality, and <b>when</b> will it be completed?
              </p>
              <p>
                Damn near everyone is faced with this simple algorithm countless times over their lives. At any given point in time, there are a number of things jumping up to grab our attention and take it off of the things we want. So how can we make answering these fundamental questions easier, and less intimidating?
              </p>
              <p>
                If our life is a direct reflection of the amount of uncertainty we can handle at any given point in time, how can we start to translate uncertainty into certainty in a simple and effective way.  Thus thoroughly unblocking ourselves and our organizations, getting out of our own way, and gaining true clarity on what we want and how to achieve it.
              </p>
            </div>
            <hr
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1)
              }}
            />
            <div>
              <h3
                className="supplement__title"
                style={{
                  ...scale(.8)
                }}
              >
                I solve <span>business problems.</span>
                <br />
                Occasionally a computer is involved.
              </h3>
            </div>
            <hr
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(2)
              }}
            />
            <div>
              <p>
                Fortunately, due to my wealth of experience in both personal development and cutting-edge software development practices, I started to notice patterns of similarity between both worlds.  As I struggled to re-learn my place in the world, I found time and again fundamental similarities between Tony Robbins, Kyle Cease, Kaizen, Lean &amp; Agile.
              </p>
              <p>
                Drifting on the surface of these similarities was an inclination to try new things, continually reflect, and apply the learnings from that reflection into a renewed effort to try new things.  All in order to enable us to ship new solutions to those waiting for them in our lives.
              </p>
              <p>
                When we are finished working together, you will have a map that you can use to guide you toward value.  A living breathing artifact that you can print, show off to your friends, and use to go forth and build the future.  When was the last time you were clearly able to articulate the rationale of how your organization creates, delivers and captures value?
              </p>
              <p>
                Let's get started.
              </p>
              {/* <p>
                What most people fail to consider when standing up their new idea, is asking the fundamental question, "does this solve a real problem in world today?"  How can we increase certainty and reduce the risk of our ideas broke in the highly variable world of websites, startups, and application development?
              </p> */}
            </div>
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
