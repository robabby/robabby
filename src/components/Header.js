import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Nav from './Nav'
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
        <div className="ra-header__left">
          <h3
            className='ra-header__title'
            style={{
              ...scale(.5),
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
        </div>
        <div className="ra-header__right">
          <Nav isRoot={get(this, 'props.isRoot')} />
        </div>
      </header>
    )
  }
}

export default Header
