import React, { Component } from "react";
import TrelloList from "./components/TrelloList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div className="App">
        <h2>Trello Clone React Redux</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TrelloList title={list.title} cards={list.cards} key={list.id} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
