import React, { Component } from "react";

class Todo extends Component {
  handleClick = () => {
    this.props.toggleCompleted(this.props.todo.id);
  };
  render() {
    const { task, completed, show } = this.props.todo;
    return (
      <li
        onClick={this.handleClick}
        // style={
        //   completed
        //     ? { textDecoration: "line-through" }
        //     : { textDecoration: "none" }
        // }
        style={{
          textDecoration: completed ? "line-through" : "none",
          display: show ? "block" : "none",
        }}
      >
        {task}
      </li>
    );
  }
}

export default Todo;
