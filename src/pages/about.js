import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import AboutStage from '../components/AboutStage'
import { rhythm, scale } from '../utils/typography'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div className="ra-page-area">
        <Helmet title={siteTitle} />
        <AboutStage />
        <div className="ra-content-area">
          <h2 style={{
            ...scale(.8)
          }}>
            How am I not myself?
          </h2>
          <hr style={{
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5)
          }} />
          <p>
            Congratulations! You have just stumbled upon my life story.  Buckle
            in, cause you're in for a wild ride.
          </p>
          <p>
            In all honesty, tracing my steps to where I am now is an interesting exercise.
            There is nothing linear about it at all, as I am sure many of you would say of
            yourselves.
          </p>
          <p>
            When it comes to Software Development, by day I work with the
            awesome <a href="https://savogroup.com/blog/what-is-ui-ux-and-why-is-it-important/">UI/UX</a> team
            at <a href="http://savogroup.com/">The Savo Group</a>.  I also get
            loads of satisfaction from helping people bring their businesses or
            ideas to the web.  If you are interested in working with me on your
            next project, don't hesitate to reach out!
          </p>
          <p>
            I live in Chicago with my beautiful wife, <a href="http://shaynaolufs.com">Shayna</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
