import React, { Component } from "react";

class Todo extends Component {
  handleClick = () => {
    this.props.toggleCompleted(this.props.todo.id);
  };
  render() {
    const { task, completed } = this.props.todo;
    return (
      <li
        onClick={this.handleClick}
        style={
          completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {task}
      </li>
    );
  }
}

export default Todo;
