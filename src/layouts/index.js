import React from 'react'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

import Header from '../components/Header'

import '../assets/scss/app.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container
        style={{
          maxWidth: '100vw',
        }}
      >
        <Header showHeader={location.pathname !== rootPath} />
        {children()}
      </Container>
    )
  }
}

export default Template
