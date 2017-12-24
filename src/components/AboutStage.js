import React from 'react'

import meditatingDude from '../assets/images/meditating-dude.svg'
import '../assets/scss/components/AboutStage.scss'

class AboutStage extends React.Component {
  render() {
    return (
      <div className="ra-about-stage">
        <img
          className="ra-about-stage__meditating-dude"
          src={meditatingDude}
          alt={`Meditating Dude`}
        />
        <div className="ra-about-stage__shadow"></div>
        {/* <h1 className="ra-about-stage__title">What <i>about</i> me?</h1> */}
      </div>
    )
  }
}

export default AboutStage
