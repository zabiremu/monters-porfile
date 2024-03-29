import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/SearchBox.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            // eslint-disable-next-line no-lone-blocks
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filterMonstersData = monsters.filter((item) =>
      item.name.toLowerCase().includes(searchField)
    );
    return (
      <>
        <div className="App">
          <SearchBox
            className="search-field"
            placeholder="Search ...."
            onSearchChange={onSearchChange}
          />
          <CardList monsters={filterMonstersData} />
        </div>
      </>
    );
  }
}

export default App;
