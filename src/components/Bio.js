import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

import '../assets/scss/components/Bio.scss'

class Bio extends React.Component {
  render() {
    return (
      <div className="ra-bio">
        <img
          className="ra-bio__avatar"
          src={profilePic}
          alt={`Rob Abby`}
        />
        <h2 className="ra-bio__title">Who am I?</h2>
        <p>
          As you may have gathered by arriving here, my name is Rob and I live in Chicago with my beautiful wife, <a href="http://shaynaolufs.com">Shayna</a>.
        </p>
        <p>
          I build software for a living. By day I work with an awesome team at <a href="http://savogroup.com/">The Savo Group</a>.
        </p>
        <p>
          I am also heavily invested in Personal Development, and will gladly talk anyones ear off about life, the Universe, and the nature of existence. If you're intrigued, feel free to read my full Bio on the <b>About Page</b>.
        </p>
      </div>
    )
  }
}

export default Bio
