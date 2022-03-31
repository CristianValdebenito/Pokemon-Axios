
import './App.css';
import ApiSw from './Components/ApiSw';
import Example from './Components/ApiSw';
import Pokemon from './Components/Pokemon';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
//import Personaje from './Components/Personaje';
import Home from './Components/Home';
import Personaje from './Components/Personaje';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to={"/"}>
        Inicio
      </Link>
      <Link to={"/personajes"}>
        Personajes
      </Link>

      <Switch>
      <Route path="/personajes/:id">
            <Personaje></Personaje>
        </Route>
       <Route path="/personajes">
          <ApiSw></ApiSw>
       </Route>
        
        <Route path="/" exact>
          <Home></Home>
       </Route>
       
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
