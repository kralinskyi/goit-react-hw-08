import { Component } from 'react';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default FormLogin;
