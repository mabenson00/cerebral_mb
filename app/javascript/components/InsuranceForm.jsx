import React from "react";
import axios from "axios"

export default class InsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      relationship: 'self',
      group_name: "",
      state: "",
      group_id: "",
      policy_id: "",
      error_message: ""
    };

  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    axios.post('/users',
      {
      authenticity_token: token,
      user: {
      email: this.state.email,
      password: this.state.password,
    }
    })
      .then(response => {
        console.log(this)
        console.log(response);
      })
      .catch(error => {
        console.log(error.response)
        console.log(error.response.data.message)

        this.setState({
          error_message: error.response.data.message
        })
      });

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
        <label>
          Email:
        </label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </section>
        <section>
          <label>
            Password:
          </label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
        </section>
        <p className="error">{this.state.error_message}</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

