import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "./actions";

import Input from "./components/input";
import List from "./components/list";

class App extends Component {
  state = {
    edit: false,
    idEdit:null
  };
  handleEdit = id => {
    console.log(id);
    this.setState({ edit: !this.state.edit,idEdit: id });
  };
  handleSubmit = event => {
    event.preventDefault();
    let value = event.target.item.value;
    this.props.dispatch(addItem(value));
    event.target.item.value = "";
  };
  render() {
    const {items} = this.props;
    return (
      <div className="App">
        <Input handleSubmit={this.handleSubmit} />
        <List
          items={items}
          handleEdit={this.handleEdit}
          edit={this.state.edit}
          idEdit={this.state.idEdit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state
});

export default connect(mapStateToProps)(App);
