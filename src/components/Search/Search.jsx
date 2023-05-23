import { Component } from 'react';

class Search extends Component {
  state = { value: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <form action="search" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;