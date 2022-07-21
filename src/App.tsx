import { Link } from 'react-router-dom';
import './App.css';
import AppTile from './components/AppTile'

const apps = ["Dog App", "Tic Tac Toe", "Movies"]

function App() {
  // const newAppTile = apps.map( (app, i) => {
  //       return (
  //       <Tile> 
  //           <Link to = "/tic-tac-toe">tic tac toe</Link>
  //       </Tile>)
  //   });
  return (
    <div style={{"textAlign": "center"}}>
      <h1>Home Base</h1>
      <p>tic tac toe </p>
      <p>dog app</p>
      <p>movie app</p>
      <div style={{"display": "flex"}}>
        {apps.map( (app, i ) => {
          return <AppTile appName={app} key={i}/>
        })}  
      </div>
      <h4>...more coming soon.</h4>

      {/* <AppTile/>
      <Link to = "/tic-tac-toe">Tic Tac Toe</Link> | {"  "}
      <Link to = "/movies">Movies</Link> | {"   "}
      <Link to = "/dog-app">Doggo App</Link> */}
    </div>
  );
}

export default App;
