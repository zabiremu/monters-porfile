import { Component } from "react";
import "./49 - search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <>
        <input
          className={`search-box  ${this.props.className}`}
          name="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChange}
        />
      </>
    );
  }
}

export default SearchBox;
