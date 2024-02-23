import { Component } from "react";

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
        <div className="app">
          <input
            className="search-text"
            name="search"
            onChange={onSearchChange}
          />
          {filterMonstersData.map((monster) => {
            return (
              <>
                <div key={monster.id}>
                  <p>{monster.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
