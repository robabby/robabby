import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import axios from 'axios'

import ContactStage from '../components/ContactStage'
import ContactForm from '../components/ContactForm'
import { rhythm, scale } from '../utils/typography'

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      email: true,
      question: true,
      submitted: null
    }
  }
  handleChange(field, e) {
    var nextState = {}
    nextState[field] = e.target.checked
    this.setState(nextState)
  }
  handleSubmit = async (e) => {
    if (this.contactForm.isValid()) {
      await this.setState({submitted: this.contactForm.getFormData()})
      console.log('handleSubmit:this.state.submitted', this.state.submitted)

      axios.post('api/contact', this.state.submitted)
        .then((result) => {
          //access the results here....
          console.log('/result/: ', result);
        });
    }
  }
  render() {
    let submitted
    if (get(this, 'state.submitted') !== null) {
      submitted = <div className="alert alert-success">
        <p>ContactForm data:</p>
        <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
      </div>
    }

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div className="ra-page-area">
        <Helmet title={siteTitle} />
        <ContactStage />
        <div className="ra-content-area">
          <h2 style={{
            ...scale(1.1)
          }}>
            Contact
          </h2>
          <hr style={{
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5)
          }} />

          <label className="checkbox-inline">
            <input type="checkbox"
              checked={this.state.email}
              onChange={this.handleChange.bind(this, 'email')}
            /> Email
          </label>
          <label className="checkbox-inline">
            <input type="checkbox"
              checked={this.state.question}
              onChange={this.handleChange.bind(this, 'question')}
            /> Question
          </label>

          <ContactForm
            ref={el => this.contactForm = el}
            email={this.state.email}
            question={this.state.question}
            company={this.props.company}
          />

          <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>Submit</button>

          {submitted}
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.refs);
  }
}

export default Contact
