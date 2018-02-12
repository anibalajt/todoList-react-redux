import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchGet } from "./actions";

import Input from "./components/input";
import List from "./components/list";
import Footer from "./components/footer";

class App extends Component {
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
    let value = event.target.item.value;
    if (!value.trim()) {
      return;
    }
    this.props.dispatch(fetchPosts({ action: "addItem", text: value }));
    event.target.item.value = "";
  };
  handleSubmitEdit = event => {
    event.preventDefault();
    let value = event.target.item.value;
    if (!value.trim()) {
      return;
    }
    this.props.dispatch(
      fetchPosts({ action: "editItem", id: this.state.idEdit, text: value })
    );
    this.setState({ edit: !this.state.edit });
  };
  handleCompleted = (id, completed) => {
    this.props.dispatch(fetchGet({ action: "completedItem", id, completed }));
  };
  handleToggle = toggle => {
    this.setState({ toggle: toggle });
  };
  handleClearCompleted = e => {
    this.props.dispatch(fetchGet({ action: "clearCompleted" }));
  };
  handleDelete = id => {
    this.props.dispatch(fetchGet({ action: "deleteItem", id }));
  };
  handleToggleAll = e => {
    this.props.dispatch(
      fetchGet({ action: "toggleAll", completed: e.target.checked })
    );
  };
  componentWillMount() {
    this.props.dispatch(fetchGet({ action: "loadItems" }));
  }
  render() {
    const { items } = this.props;
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
          items={items}
          edit={this.state.edit}
          idEdit={this.state.idEdit}
        />
        <Footer
          handleClearCompleted={this.handleClearCompleted}
          items={items.length}
          handleToggle={this.handleToggle}
          toggle={this.state.toggle}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state
});

export default connect(mapStateToProps)(App);
