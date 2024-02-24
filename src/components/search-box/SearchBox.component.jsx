import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <>
        <input
          className={this.props.className}
          name="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChange}
        />
      </>
    );
  }
}

export default SearchBox;
