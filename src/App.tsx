import { Link } from 'react-router-dom';
import './App.css';
import AppTile from './components/AppTile'

function App() {
  return (
    <div style={{"textAlign": "center"}}>
      <h1>Home Base</h1>
      <p>tic tac toe </p>
      <p>dog app</p>
      <p>movie app</p>
      <h4>...coming soon.</h4>
      <AppTile/>
      <Link to = "/tic-tac-toe">Tic Tac Toe</Link> | {"  "}
      <Link to = "/movies">Movies</Link> | {"   "}
      <Link to = "/dog-app">Doggo App</Link>
    </div>
  );
}

export default App;
