import React from 'react'

import '../../assets/scss/components/Services/ServiceNavItem.scss'

class ServiceNavItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }
  render() {
    return (
      <button
        type="button"
        className={this.state.isActive ? "nav__item nav__item--current" : "nav__item"}
        onClick={() => this.props.onClick(this.props.itemNumber)}
      >
        <span className="nav__item-inner">
          <img
            className="nav__item-img"
            src={this.props.itemIcon}
            alt="Service Offered"
          />
        </span>
        <span className="nav__item-title">
          {this.props.itemTitle}
        </span>
      </button>
    )
  }
  componentDidMount() {
    if (this.props.activeService === this.props.itemNumber) {
      this.setState({ isActive: true })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeService === this.props.itemNumber) {
      this.setState({ isActive: true })
    } else {
      this.setState({ isActive: false })
    }
  }
}

export default ServiceNavItem
