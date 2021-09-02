import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { formValue: "" };
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ formValue: value });
  };
  componentDidUpdate() {
    this.props.filterTasks(this.state.formValue);
  }
  render() {
    return (
      <form action="submit">
        <label htmlFor="search">Search Tasks</label>
        <input
          name="search"
          type="text"
          placeholder="search tasks"
          value={this.state.formValue}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
