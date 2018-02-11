import React, { Component } from "react";

import Input from "./components/input";
import List from "./components/list";

class App extends Component {
  state = {
    edit: false
  };
  handleEdit = event => {
    console.log("edit: ", this.state.edit);
    this.setState({ edit: !this.state.edit });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit");
  };
  render() {
    return (
      <div className="App">
        <Input handleSubmit={this.handleSubmit} />
        <br />
        <br />
        <br />
        <br />
        <List handleEdit={this.handleEdit} edit={this.state.edit} />
      </div>
    );
  }
}

export default App;
