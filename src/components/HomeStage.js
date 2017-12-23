import React from 'react';
import { rhythm } from '../utils/typography'

import Scene from './Scene'

import '../assets/scss/components/HomeStage.scss'


class HomeStage extends React.Component {
  render() {
    return (
      <section className="ra-stage">
        <h1 className="ra-stage__title">Let's go exploring...</h1>
        <Scene />
      </section>
    )
  }
}

export default HomeStage;
