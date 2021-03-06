import React from 'react'
import get from 'lodash/get'

const STATES = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

class ContactForm extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      errors: {}
    }
  }
  isValid() {
    let fields = ['firstName', 'lastName', 'phoneNumber', 'address', 'city', 'state', 'zipCode']
    if (get(this, 'props.email')) fields.push('email')
    if (get(this, 'props.question')) fields.push('question')

    let errors = {}
    fields.forEach(function(field) {
      let value = trim(this.refs[field].value)
      if (!value) {
        errors[field] = 'This field is required'
      }
    }.bind(this))
    this.setState({errors: errors})

    let isValid = true
    for (let error in errors) {
      isValid = false
      break
    }
    return isValid
  }
  getFormData() {
    let data = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      phoneNumber: this.refs.phoneNumber.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zipCode: this.refs.zipCode.value,
      currentCustomer: this.refs.currentCustomerYes.checked
    }
    if (this.props.email)
      data.email = this.refs.email.value
    if (this.props.question)
      data.question = this.refs.question.value
    return data
  }
  renderTextInput(id, label) {
    return this.renderField(id, label,
      <input type="text" className="form-control" id={id} ref={id}/>
    )
  }
  renderTextarea(id, label) {
    return this.renderField(id, label,
      <textarea className="form-control" id={id} ref={id}/>
    )
  }
  renderSelect(id, label, values) {
    let options = values.map(function(value, index) {
      return <option key={index} value={value}>{value}</option>
    })
    return this.renderField(id, label,
      <select className="form-control" id={id} ref={id}>
        {options}
      </select>
    )
  }
  renderRadioInlines(id, label, kwargs) {
    let radios = kwargs.values.map(function(value, index) {
      let defaultChecked = (value == kwargs.defaultCheckedValue)
      return <label key={index} className="radio-inline">
        <input key={index} type="radio" ref={id + value} name={id} value={value} defaultChecked={defaultChecked}/>
        {value}
      </label>
    })
    return this.renderField(id, label, radios)
  }
  renderField(id, label, field) {
    return <div className={$c('form-group', {'has-error': id in this.state.errors})}>
      <label htmlFor={id} className="col-sm-4 control-label">{label}</label>
      <div className="col-sm-6">
        {field}
      </div>
    </div>
  }
  render() {
    return (
      <div className="form-horizontal">
        {this.renderTextInput('firstName', 'First Name')}
        {this.renderTextInput('lastName', 'Last Name')}
        {this.renderTextInput('phoneNumber', 'Phone number')}
        {this.props.email && this.renderTextInput('email', 'Email')}
        {this.props.question && this.renderTextarea('question', 'Question')}
        {this.renderTextInput('address', 'Address')}
        {this.renderTextInput('city', 'City')}
        {this.renderSelect('state', 'State', STATES)}
        {this.renderTextInput('zipCode', 'Zip Code')}
        {this.renderRadioInlines('currentCustomer', 'Are you currently a ' + get(this, 'props.company') + ' Customer?', {
          values: ['Yes', 'No'],
          defaultCheckedValue: 'No'
        })}
      </div>
    )
  }
}

ContactForm.defaultProps = {
  email: true,
  question: false
}

let trim = function() {
  let TRIM_RE = /^\s+|\s+$/g
  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}()

// Utils

function $c(staticClassName, conditionalClassNames) {
  let classNames = []
  if (typeof conditionalClassNames == 'undefined') {
    conditionalClassNames = staticClassName
  }
  else {
    classNames.push(staticClassName)
  }
  for (let className in conditionalClassNames) {
    if (!!conditionalClassNames[className]) {
      classNames.push(className)
    }
  }
  return classNames.join(' ')
}

export default ContactForm
