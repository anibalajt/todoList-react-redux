import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import Input from "../components/input";
import List from "../components/list";
import Footer from "../components/footer";

import {
  ADD_LIST,
  COMPLETED_ITEM,
  EDIT_LIST,
  DELETE_LIST,
  TOGGLE_ALL,
  CLEAR_COMPLETED
} from "../queries";

class Home extends Component {
  state = {
    edit: false,
    idEdit: null,
    toggle: 1
  };
  handleEdit = id => {
    this.setState({ edit: !this.state.edit, idEdit: id });
  };
  handleSubmit = event => {
    event.preventDefault();
    let text = event.target.item.value;
    event.target.item.value = "";
    if (!text.trim()) {
      return;
    }
    this.props.add_List({
      variables: { text, completed: false }
    });
  };
  handleSubmitEdit = event => {
    event.preventDefault();
    let text = event.target.item.value;
    if (!text.trim()) {
      return;
    }
    this.props.edit_list({
      variables: { id: this.state.idEdit, text }
    });

    this.setState({ edit: !this.state.edit });
  };
  handleCompleted = (id, completed) => {
    this.props.completed_item({
      variables: { id, completed }
    });
  };
  handleToggle = toggle => {
    this.setState({ toggle: toggle });
  };
  handleClearCompleted = e => {
    this.props.clear_completed({
      variables: { completed: true }
    });
  };
  handleDelete = id => {
    this.props.delete_list({
      variables: { id }
    });
  };
  handleToggleAll = e => {
    this.props.toggle_all({
      variables: { completed: e.target.checked }
    });
  };
  render() {
    return (
      <div className="App">
        <Input
          handleToggleAll={this.handleToggleAll}
          handleSubmit={this.handleSubmit}
        />
        <List
          toggle={this.state.toggle}
          handleCompleted={this.handleCompleted}
          handleSubmit={this.handleSubmitEdit}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          edit={this.state.edit}
          idEdit={this.state.idEdit}
        />
        <Footer
          handleClearCompleted={this.handleClearCompleted}
          handleToggle={this.handleToggle}
          toggle={this.state.toggle}
        />
      </div>
    );
  }
}
// EDIT_LIST
export default compose(
  graphql(ADD_LIST, { name: "add_List" }),
  graphql(EDIT_LIST, { name: "edit_list" }),
  graphql(DELETE_LIST, { name: "delete_list" }),
  graphql(COMPLETED_ITEM, { name: "completed_item" }),
  graphql(TOGGLE_ALL, { name: "toggle_all" }),
  graphql(CLEAR_COMPLETED, { name: "clear_completed" })
)(Home);
