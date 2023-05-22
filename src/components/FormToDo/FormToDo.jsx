import { Component } from 'react';

const INITIAL_STATE = {
  todo: '',
};

class FormToDo extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { value } }) => {
    this.setState({ todo: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);

    this.setState({
      todo: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Create to do:
          <input
            name="todo"
            type="text"
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </label>
        <br />
        <button type="submit">Ad to-do</button>
      </form>
    );
  }
}

export default FormToDo;
