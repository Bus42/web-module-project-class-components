import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoForm
          addTodo={this.props.addTodo}
          clearCompleted={this.props.clearCompleted}
        />
        <ul>
          {this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleCompleted={this.props.toggleCompleted}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
