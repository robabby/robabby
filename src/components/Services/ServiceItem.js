import React from 'react'

import '../../assets/scss/components/Services/ServiceItem.scss'

class ServiceItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }
  render() {
    return (
      <div className={this.state.isActive ? "ra-service ra-service--isActive" : "ra-service"}>
        <div className="ra-service__header">
          <h4 className="ra-service__title">
            {this.props.serviceName}
          </h4>
          <img
            className="ra-service__icon"
            src={this.props.serviceIcon}
          />
        </div>
        <div className="ra-service__body">
          {this.props.children}
        </div>
      </div>
    )
  }
  componentDidMount() {
    if (this.props.activeService === this.props.serviceNumber) {
      this.setState({ isActive: true })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeService === this.props.serviceNumber) {
      this.setState({ isActive: true })
    } else {
      this.setState({ isActive: false })
    }
  }
}

export default ServiceItem
