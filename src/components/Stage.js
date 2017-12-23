import React from 'react';
import '../assets/scss/components/Stage.scss'

import { rhythm } from '../utils/typography'

class Stage extends React.Component {
  render() {
    return (
      <div className="ra-stage">
        <h1 className="ra-stage__title">Let's go exploring...</h1>
      </div>
    )
  }
}

export default Stage;
