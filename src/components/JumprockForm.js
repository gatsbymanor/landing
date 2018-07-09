import React from "react"
import axios from "axios"
import {
  Button,
  Form,
} from 'semantic-ui-react'


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class JumprockForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      message: "",
      submitted: false,
    }
  }


  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    const { EXPERIMENT } = this.props
    const submitEvent = {
      hitType: 'event',
      eventCategory: 'starters',
      eventAction: `submit_request_starter_form`,
      eventLabel: EXPERIMENT,
      transport: 'beacon',
    }

    axios({
      method: 'post',
      url: 'https://jumprock.co/mail/gatsbymanor',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: encode({ ...this.state })
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({ submitted: true })
        this.props.trackSubmitEvent(submitEvent)
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {

    const { formName } = this.props
    const { email, message, submitted } = this.state


    return (
      <div>
        {submitted === true ? (
          <p>
            Thank you for your message. We'll get back to you as soon as we can!
          </p>
        ) : (
          <React.Fragment>
            <p>
              Seems like you could not find a starter for your project.
              Send us a with the type of starter you are looking for, and we'll
              build one for you. List your email if you want a reply.
            </p>

            <Form
              name={formName}
              onSubmit={(e) => this.handleSubmit(e)}>

              <input type="text" name="trapit" value="" style={{ display: "none"}} />
              <Form.Field>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder='me@email.com'  />
              </Form.Field>
              <Form.Field>
                <label>Your message</label>
                <textarea type="text" name="message" value={message} onChange={this.handleChange} placeholder='Hello!' />
              </Form.Field>

              <Button type="submit" color='blue'>Send</Button>
            </Form>
          </React.Fragment>
        )}
      </div>

    )

  }

}
export { JumprockForm }
