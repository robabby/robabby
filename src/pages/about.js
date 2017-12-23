import React from 'react';
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
            ...scale(1.1)
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
