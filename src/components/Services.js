import React from 'react'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'

import ServiceNavItem from '../components/Services/ServiceNavItem'
import ServiceItem from '../components/Services/ServiceItem'

import codeIcon from '../assets/images/feather/code.svg'
import imageIcon from '../assets/images/feather/image.svg'
import layoutIcon from '../assets/images/feather/layout.svg'
import zenCircleIcon from '../assets/images/zen-brush.svg'

import flaskIcon from '../assets/images/ionicons/ios-flask.svg'
import eyeIcon from '../assets/images/ionicons/ios-eye.svg'
import bodyIcon from '../assets/images/ionicons/ios-body.svg'
import cachIcon from '../assets/images/ionicons/cash.svg'
import clipboardIcon from '../assets/images/ionicons/clipboard.svg'
import filingIcon from '../assets/images/ionicons/filing.svg'

import '../assets/scss/components/Services.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeService: 1
    }
  }
  onNavClick = (itemNumber) => {
    console.log(itemNumber)
    this.setState({ activeService: itemNumber })
  }
  render() {
    return (
      <section
        className="ra-services"
        style={{
          marginTop: rhythm(3),
          marginRight: '-4rem',
          marginBottom: rhythm(3),
          marginLeft: '-4rem',
          padding: '4rem',
        }}
      >
        <div
          className="ra-services__nav"
          style={{
            marginRight: '4rem',
          }}
        >
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={1}
            itemIcon={eyeIcon}
            itemTitle="Define the Vision"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={2}
            itemIcon={bodyIcon}
            itemTitle="Define the Customer"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={3}
            itemIcon={cachIcon}
            itemTitle="Define the Value Proposition"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={4}
            itemIcon={flaskIcon}
            itemTitle="Problem Validation"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={5}
            itemIcon={clipboardIcon}
            itemTitle="Gather Requirements"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={6}
            itemIcon={filingIcon}
            itemTitle="Create a Backlog"
            onClick={this.onNavClick}
          />
        </div>



        <div className="ra-services__list">
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={1}
            serviceName="Define the Vision"
            serviceIcon={layoutIcon}
          >
            <p>
              Depending on the scope and complexity of a project, this phase
              can cover Sketches,  Wireframes, Prototypes, end-user persona
              creation, User Journeys, and User Interviews.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={2}
            serviceName="Define the Customer"
            serviceIcon={imageIcon}
          >
            <p>
              Once we have enough data collected and we have reduced our risk,
              it's time to start bringing a greater level of fidelity to our
              vision.  This is where we get to see colors and shades bring the
              concept to life on a screen.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={3}
            serviceName="Define the Value Proposition"
            serviceIcon={codeIcon}
          >
            <p>
              Here's where the rubber hit's the road.  I take all of the work
              we have accomplished thus far and bring it to life on the web.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={4}
            serviceName="Problem Validation"
            serviceIcon={zenCircleIcon}
          >
            <p>
              To be agile means to adapt quickly and effectively to change.
              Customers, requirements, and funding can always change.
              Fortunately the way I work will embrace whatever change
              is thrown our way.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={5}
            serviceName="Gather Requirements"
            serviceIcon={zenCircleIcon}
          >
            <p>
              To be agile means to adapt quickly and effectively to change.
              Customers, requirements, and funding can always change.
              Fortunately the way I work will embrace whatever change
              is thrown our way.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={6}
            serviceName="Create a Backlog"
            serviceIcon={zenCircleIcon}
          >
            <p>
              To be agile means to adapt quickly and effectively to change.
              Customers, requirements, and funding can always change.
              Fortunately the way I work will embrace whatever change
              is thrown our way.
            </p>
          </ServiceItem>
        </div>
      </section>
    )
  }
}

export default Services
