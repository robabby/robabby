import React from 'react';
import Trianglify from 'react-trianglify'
import Particles from 'react-particles-js';

import '../assets/scss/components/Scene.scss'

class Scene extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }
  render() {
    const windowWidth = window.innerWidth; // canvas width
    const windowHeight = window.innerHeight; // canvas height

    return (
      <div className="ra-trianglify">
        <Trianglify
          output='svg'
          width={windowWidth}
          height={windowHeight}
          cell_size={80}
          variance={1}
          stroke_width={1.5}
        />
        {/* <Particles
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
        /> */}
      </div>
    )
  }
}

export default Scene;
