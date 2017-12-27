import React from 'react'
import { Container } from 'react-responsive-grid'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'

import Header from '../components/Header'

import '../assets/scss/app.scss'

class Template extends React.Component {
  getContainerStyle(isRoot) {
    return {
      maxWidth: '100vw',
      paddingTop: isRoot ? 0 : 66
    }
  }
  render() {
    const { location, children } = get(this, 'props')

    let rootPath = `/`
    let isRoot = location.pathname === rootPath

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container
        style={this.getContainerStyle(isRoot)}
      >
        <Header isRoot={isRoot} path={location.pathname} />
        {children()}
      </Container>
    )
  }
}

export default Template
