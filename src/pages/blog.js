import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import BlogStage from '../components/BlogStage'
import { rhythm, scale } from '../utils/typography'

class Blog extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="ra-page-area">
        <Helmet title={siteTitle} />
        <BlogStage />
        <div className="ra-content-area">
          <h2 style={{
            ...scale(1.1)
          }}>
            Blog
          </h2>
          <hr style={{
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5)
          }} />
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

export default Blog

export const pageQuery = graphql`
  query blogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
