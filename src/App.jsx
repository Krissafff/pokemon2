import React from 'react';
import List from './Pokem/List';
import View from './Pokem/View';
import logo from './assets/logo.png'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/pokemons/list"><img src={logo} alt="" className='botao' />Pokemon-API</Link>
        </h1>
        <Switch>
          <Route path="/pokemons/list" component={List} />
          <Route path="/pokemons/:name" component={View} />
          <Route path="/" exact>
            <Redirect to="/pokemons/list" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
