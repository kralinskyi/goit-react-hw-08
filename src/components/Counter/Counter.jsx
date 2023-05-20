import { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrementClick = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrementClick = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;

    return (
      <div
        style={{
          width: 300,
          height: 450,
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'turquoise',
          margin: 'auto',
        }}
      >
        <h2>Current Count</h2>
        <p>{value}</p>
        <div style={{ display: 'flex', gap: 30 }}>
          <button
            type="button"
            name="increment"
            style={{ width: 50, height: 30 }}
            onClick={this.handleIncrementClick}
          >
            +
          </button>
          <button
            type="button"
            name="decrement"
            style={{ width: 50, height: 30 }}
            onClick={this.handleDecrementClick}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
