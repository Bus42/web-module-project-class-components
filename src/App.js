import React from "react";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: "Pass unit 3",
          id: 1,
          completed: false,
        },
        {
          task: "Make a million a year",
          id: 2,
          completed: false,
        },
      ],
    };
  }

  componentDidMount() {
    // prior to mount, check if todos are in local storage, if so set app state to data store locally
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    } else {
      this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo = (task) => {
    const newTodo = { task, id: Date.now(), completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      }),
    });
  };

  clearCompleted = (id) => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      }),
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          addTodo={this.addTodo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
