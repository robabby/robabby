import React from 'react'
import get from 'lodash/get'
import Trianglify from 'react-trianglify'
import Particles from 'react-particles-js'

import '../assets/scss/components/Scene.scss'

class Scene extends React.Component {
  constructor(props) {
    super(props);
  }
  insertTrianglify() {
    const dimensions = get(this, 'props.dimensions')
    const { width, height } = dimensions

    if (width > 0 && height > 0) {
      return (
        <Trianglify
          ref='trianglify'
          output='svg'
          width={width}
          height={height}
          cell_size={80}
          variance={1}
          stroke_width={1.5}
        />
      )
    }
  }
  render() {
    return (
      <div className="ra-scene">
        <Particles
          className="ra-particle-container"
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }}
          style={{
            width: '100%'
          }}
        />
        {this.insertTrianglify()}
      </div>
    )
  }
}

export default Scene
