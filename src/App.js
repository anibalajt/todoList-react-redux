import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./actions";

import Input from "./components/input";
import List from "./components/list";

class App extends Component {
  state = {
    edit: false
  };
  handleEdit = event => {
    console.log(event);
    this.setState({ edit: !this.state.edit });
  };
  handleSubmit = event => {
    event.preventDefault();
    let value = event.target.tarea.value;
    this.props.dispatch(addItem(value));
    value = "";
  };
  render() {
    const {items} = this.props;
    return (
      <div className="App">
        <Input handleSubmit={this.handleSubmit} />
        <br />
        <br />
        <List
          items={items}
          handleEdit={this.handleEdit}
          edit={this.state.edit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state
});

export default connect(mapStateToProps)(App);
