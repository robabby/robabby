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
import cashIcon from '../assets/images/ionicons/cash.svg'
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
            itemTitle="The Vision"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={2}
            itemIcon={bodyIcon}
            itemTitle="The Customer"
            onClick={this.onNavClick}
          />
          <ServiceNavItem
            activeService={get(this, 'state.activeService')}
            itemNumber={3}
            itemIcon={cashIcon}
            itemTitle="The Value Proposition"
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
            serviceName="The Vision"
            serviceIcon={eyeIcon}
          >
            <h4>Achieving clarity on pains and opportunities.</h4>
            <p>
              Let us start with the end in mind. What is our <b>Prime Directive</b> for undertaking an initiative together?  What is our <b>outcome</b>?  What does our <b>Utopia</b> look like? How successful is our initiative?  Who is purchasing it? What kind of impact are we having on the world? How much money is it earning us?
            </p>
            <p>
              In order for any map or plan to be effective, you have to have a good idea of where you want to arrive in the end.  The Project Vision does a great job of defining this end-state for our initiative, and allows us to dig deep into the <b>what's</b> and the <b>why's</b> of the project.
            </p>
            <p>
              If you choose to work with me I will help extract this vision from your head, and the heads of those you collaborate with and get it represented in a sharable, meaningful way.  That way, everyone is in alignment as to where we are going, with minimal ambiguity.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={2}
            serviceName="The Customer"
            serviceIcon={bodyIcon}
          >
            <p>
              Now that we have a clearly defined picture of where we would like to end up via our project vision, now it is time to start to align that vision with the markets and segments that will fuel our growth.  Most people, once they have defined a vision, feel like that's enough to get started and then jump right into building. Heck, some poeple don't even define a vision, they just start building all willy-nilly.
            </p>
            <p>
              Without customers we have no reason, no purpose, no why! Without customers, we have no business.  So how can we systematize our customer definition process and get to the heart of our market quickly and effectively?  Fortunately we have a robust Customer Discovery Process at our disposal to quickly identify our new best friends!
            </p>
            <p>
              Customer Discovery is a constantly evolving process, an as the saying goes, no business plan survives first contact with customers.  Thus we must be patient and diligent as we apply proven methods and techniques to learn who wants to give us money for the things we have.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={3}
            serviceName="The Value Proposition"
            serviceIcon={cashIcon}
          >
            <p>
              Ok, we have an idea, product or service that we would like to take to market.  We have a vision of the success that we will achieve, and we have a clearly defined customer along with a Customer Discovery process in place in order to learn and grow with our discoveries. Now it is time to start articulating our Value Proposition.
            </p>
            <p>
              How can we understand the patterns of value creation while leveraging the experience and skills of your teams?  How can we save time and effort, while having fun creating something that will guide us to the promised land?  Thankfully there is a wealth of knowledge and resources at our disposal yet again, this time the individuals at Strategyzer are to thank with their wonderful resource, Value Proposition Design.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={4}
            serviceName="Problem Validation"
            serviceIcon={flaskIcon}
          >
            <p>
              Ok, so now it's time to officially challenge all of the ideas we have cultivated up this point and learn if we have a <b>Hero</b> or a <b>Zero</b>.  If you weren't having fun before, then you are bound to during this phase because now we get to roll up our sleeves and get our hands dirty!
            </p>
            <p>
              Here we start from a fundamental premise of asking the question, "How do people currently solve the problems we are looking to address?" Hopefully you enjoy connecting with your potential customers and developing a dialog with them because that foundation will be used to build the rest of your business, startup or initiative.
            </p>
            <p>
              Next we move into discovering what the Customers current workflow is, and gaining an intimate understanding of their current world, as it is.
            </p>
          </ServiceItem>
          <ServiceItem
            activeService={get(this, 'state.activeService')}
            serviceNumber={5}
            serviceName="Gather Requirements"
            serviceIcon={clipboardIcon}
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
            serviceIcon={filingIcon}
          >
            <p>
              From the telescope to the microscope.
            </p>
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
