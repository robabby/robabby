import React from 'react';
import { rhythm } from '../utils/typography'

import Scene from './Scene'

import '../assets/scss/components/Stage.scss'


class Stage extends React.Component {
  render() {
    return (
      <div className="ra-stage">
        <h1 className="ra-stage__title">Let's go exploring...</h1>
        <Scene />
      </div>
    )
  }
}

export default Stage;
