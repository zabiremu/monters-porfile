const { Component } = require("react");

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <p>{monster.name}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default CardList;
