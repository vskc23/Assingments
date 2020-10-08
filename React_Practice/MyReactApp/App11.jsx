import React, { Component } from 'react';
class App11 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  makeIncrementer(){
      this.setState(
          {
              count: this.state.count + 1
          }
      )
  }
 // increment = this.makeIncrementer(1);
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
    )
  }
}
export default App11;