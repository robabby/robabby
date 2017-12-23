import React from 'react';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div className="ra-page-area">
        <Helmet title={siteTitle} />
        <div className="ra-content-area">
          <h1>About Page</h1>
        </div>
      </div>
    )
  }
}

export default About
