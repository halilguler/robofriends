import React, { Component } from "react";
import { robots } from "./robots/robots";
import CardList from "./CardList";

class App extends Component {
  render() {
    return <CardList robots={robots}/>;
  }
}

export default App;
