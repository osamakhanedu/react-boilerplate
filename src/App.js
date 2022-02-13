import { hot } from "react-hot-loader/root";
import React from "react";
import "./style.css";

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState((prevState) => ({ count: prevState.count - 1 }));
          }}
        >
          -
        </button>
        <h1>Hell World!!</h1>;
      </div>
    );
  }
}

export default hot(App);
