import React from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
  state = {
    characters: []
  };

  removeCharacter = (index) => {
    this.setState(
      {
        characters: this.state.characters.filter((character, i) => {
          return i !== index;
        }
        )
      }
    );
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
