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
        About Page
      </div>
    )
  }
}

export default About
