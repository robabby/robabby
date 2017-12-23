import React from 'react';
import Link from 'gatsby-link'
import get from 'lodash/get'
import { rhythm, scale } from '../utils/typography'

import '../assets/scss/components/Header.scss'

class Header extends React.Component  {
  getHeaderClassNames() {
    let classList = ['ra-header']
    get(this, 'props.isRoot') ? classList.push('ra-header--isRoot') : ''

    return classList.toString().replace(',', ' ')
  }
  render() {
    return (
      <header className={this.getHeaderClassNames()}>
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
