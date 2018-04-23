import React from 'react'
import Link from 'gatsby-link'

import profilePic from '../assets/images/profile-pic.jpg'
import { rhythm } from '../utils/typography'

import '../assets/scss/components/Bio.scss'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(1.5),
          marginTop: rhythm(1.5)
        }}
        className="ra-bio"
      >
        <img
          className="ra-bio__avatar"
          src={profilePic}
          alt={`Rob Abby`}
        />
        <div className="ra-bio__content">
          <div>
            <h2 className="ra-bio__title">Hey there.</h2>
          </div>
          <div>
            <p>
              I'm <b>Rob</b>, and I am passionate about <b>Personal and Product Development</b>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
