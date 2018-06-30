import React from "react"
import jsonp from "jsonp"
import { validate } from "email-validator"

class SubscribeForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }

  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  // Using jsonp, post to MC server & handle its response
  _postEmailToMailchimp = url => {
    // jsonp lib takes an `endpoint`, {options}, & callback
    jsonp(url, { param: `c` }, (err, data) => {
      // network failures, timeouts, etc
      if (err) {
        this.setState({
          status: `error`,
          msg: err,
        })

      // Mailchimp errors & failures
      } else if (data.result !== `success`) {
        this.setState({
          status: `error`,
          msg: data.msg,
        })

      // Posted email successfully to Mailchimp
      } else {
        this.setState({
          status: `success`,
          msg: data.msg,
        })
      }
    })
  }

  // On form submit, validate email
  // then jsonp to Mailchimp, and update state
  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    // If email is not valid, break early
    if (!validate(this.state.email)) {
      this.setState({
        status: `error`,
        msg: `"${this.state.email}" is not a valid email address`,
      })
      return
    }

    // Construct the url for our jsonp request
    // Query params must be in CAPS
    // Capture pathname for better email targeting
    const url = `${this.props.mailchimp_url}
      &EMAIL=${encodeURIComponent(this.state.email)}
      &PATHNAME=${window.location.pathname}
    `

    this.setState(
      {
        msg: null,
        status: `sending`,
      },
      // jsonp request as setState callback
      this._postEmailToMailchimp(url)
    )
  }

  render() {

    return (
      <div style={{
        textAlign: 'center',
        color: 'black'
      }}>
        {this.state.status === `success` ? (
          <div>Thank you! We'll email you next announcements.</div>
        ) : (
          <div>
            <form method="post" noValidate>
              <div>
                <input
                  style={{
                    borderWidth: `1px`,
                    borderStyle: `solid`,
                    borderRadius: `2px`,
                    width: `250px`,
                    padding: `0.7rem`,
                  }}
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  onChange={this._handleEmailChange}
                />
                {this.props.children(this._handleFormSubmit)}
                {this.state.status === `error` && (
                  <div
                    style={{
                      color: 'red'
                    }}
                    dangerouslySetInnerHTML={{ __html: this.state.msg }}
                  />
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export { SubscribeForm }
