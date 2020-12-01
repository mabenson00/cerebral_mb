import React from "react";
import axios from "axios"

export default class InsuranceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      relationship: 'self',
      group_name: "",
      state: "AL",
      group_id: "",
      policy_id: "",
      error_message: ""
    };

  }

  state_options = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
  relationship_options = ["self", "spouse", "other", "child"]

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

    axios.post('/v1/insurances',
      {
      authenticity_token: token,
      insurance: {
      name: this.state.name,
      relationship: this.state.relationship,
      group_name: this.state.group_name,
      state: this.state.state,
      group_id: this.state.group_id,
      policy_id: this.state.policy_id,
      user_id: this.props.userId
    }
    })
    .then(response => {
      console.log(response)
      this.props.setIsInsuranceComplete(true)
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
          Name:
        </label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </section>
        <section>
          <label>
            State:
          </label>
          <select
            name="state"
            onChange={this.handleInputChange}
            value={this.state.state} >
            {this.state_options.map((x, y) => <option key={y}>{x}</option>)}
          </select>
        </section>
        <section>
          <label>
            Relationship To Policyholder:
          </label>
            <select
              name="relationship"
              onChange={this.handleInputChange}
              value={this.state.relationship} >
              {this.relationship_options.map((x, y) => <option key={y}>{x}</option>)}
            </select>
        </section>
        <section>
          <label>
            Group Name:
          </label>
          <input
            name="group_name"
            value={this.state.group_name}
            onChange={this.handleInputChange} />
        </section>
        <section>
          <label>
            Group ID:
          </label>
          <input
            name="group_id"
            value={this.state.group_id}
            onChange={this.handleInputChange} />
        </section>
        <section>
          <label>
            Policy ID:
          </label>
          <input
            name="policy_id"
            value={this.state.policy_id}
            onChange={this.handleInputChange} />
        </section>
        <p className="error">{this.state.error_message}</p>

        <input type="submit" value="Add Insurance" />
      </form>
    );
  }
}

