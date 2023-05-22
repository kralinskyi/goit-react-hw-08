import { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
  isChecked: true,
  gender: 'male',
};

class FormLogin extends Component {
  state = { ...INITIAL_STATE };

  // componentDidMount() {
  //   console.log('Mount');
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('update');
  // }
  // componentWillUnmount() {
  //   console.log('unmount');
  // }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });
    this.setState({
      email: '',
      password: '',
    });
    this.props.closeModal();
  };

  handleCheck = ({ target: { checked } }) => {
    this.setState({ isChecked: checked });
  };

  handleGenderChange = ({ target: { value } }) => {
    this.setState({ gender: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <br />
        <label>
          name:
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>
        <br />
        <div>
          <input
            type="checkbox"
            name="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheck}
          />
          <label htmlFor="checkbox">I agree</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="radio1"
            value="male"
            checked={this.state.gender === 'male'}
            onChange={this.handleGenderChange}
          />
          <label htmlFor="genderMale">Male</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="gender"
            id="radio2"
            value="female"
            checked={this.state.gender === 'female'}
            onChange={this.handleGenderChange}
          />
          <label htmlFor="genderFemale">Female</label>
        </div>
        <button disabled={!this.state.isChecked} type="submit">
          submit
        </button>
      </form>
    );
  }
}

export default FormLogin;
