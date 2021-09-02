import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: "",
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ formValue: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.formValue);
    this.setState({ formValue: "" });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.clearCompleted(e.target.id);
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <label htmlFor="todoItem">
          <input
            type="text"
            placeholder="enter todo"
            value={this.state.formValue}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
          <button onClick={this.handleClick}>Clear Completed</button>
        </label>
      </form>
    );
  }
}

export default TodoForm;
