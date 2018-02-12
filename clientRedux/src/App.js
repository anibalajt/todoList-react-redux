import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addItem,
  editItem,
  completedItem,
  clearCompleted,
  deleteItem,
  toggleAll,
  fetchPosts
} from "./actions";

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
    this.props.dispatch(addItem(value));
    event.target.item.value = "";
  };
  handleCompleted = id => {
    this.props.dispatch(completedItem(id));
  };
  handleSubmitEdit = event => {
    event.preventDefault();
    let value = event.target.item.value;
    if (!value.trim()) {
      return;
    }
    this.props.dispatch(editItem(this.state.idEdit, value));
    this.setState({ edit: !this.state.edit });
  };
  handleToggle = toggle => {
    this.setState({ toggle: toggle });
  };
  handleClearCompleted = e => {
    this.props.dispatch(clearCompleted());
  };
  handleDelete = id => {
    this.props.dispatch(deleteItem(id));
  };
  handleToggleAll = (e) => {
    this.props.dispatch(toggleAll(e.target.checked));
  };
  componentDidMount(){
    this.props.dispatch(fetchPosts('loadItems'));
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
