import React from 'react';
import Link from 'gatsby-link'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

import '../assets/scss/components/Header.scss'

class Header extends React.Component  {
  render() {
    return (
      <header style={get(this, 'props.showHeader') ? {} : {display: 'none'}} className="ra-header">
        <h3
          className='ra-header__title'
          style={{
            ...scale(.75),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Rob Abby
          </Link>
        </h3>
      </header>
    )
  }
}

export default Header;
