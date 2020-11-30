import React from "react";

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
    };

  }

  handleInputChange = (event) => {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
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
              value={this.state.email}
              onChange={this.handleInputChange} />
        </section>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

