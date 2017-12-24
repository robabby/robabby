import React from 'react'
import Measure from 'react-measure'
import { rhythm } from '../utils/typography'

import Scene from './Scene'

import '../assets/scss/components/HomeStage.scss'


class HomeStage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      dimensions: {
        width: -1,
        height: -1
      }
    }
  }
  render() {
    return (
      <Measure
        bounds
        onResize={(contentRect) => {
          this.setState({ dimensions: contentRect.bounds })
        }}
      >
        {({ measureRef }) =>
          <section ref={measureRef} className="ra-home-stage">
            <h1 className="ra-home-stage__title">Let's build something together</h1>
            <Scene dimensions={this.state.dimensions} />
          </section>
        }
      </Measure>
    )
  }
}

export default HomeStage
