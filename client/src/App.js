import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    players: [],
    playerName: [],
    playerCountry: [],
    searches: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(players => {
      console.log(players)
      this.setState({ ...this.state, players: players})
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
    <div className="App">
      <div className='header'>
        <h1>Players</h1>
        <div className='player-cards'>
          {this.state.players.map(player => (
            <h2 key={player.id}>{player.name}</h2>
          ))}
        </div>
      </div>
    </div>
  )}
}
    
export default App;
