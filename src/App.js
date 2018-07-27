import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Redux App</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
