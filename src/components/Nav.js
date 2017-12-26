import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import '../assets/scss/components/Nav.scss'
// #6ea8cc
class Nav extends React.Component {

  render() {

    return (
      <nav className="ra-nav">
        <li>
          <Link
            to={'/'}
            exact
            activeClassName={'active'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={'/about'}
            activeClassName={'active'}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to={'/blog'}
            activeClassName={'active'}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to={'/contact'}
            activeClassName={'active'}
          >
            Contact
          </Link>
        </li>
      </nav>
    )
  }
}

export default Nav
