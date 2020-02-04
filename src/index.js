import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

class Root extends Component {
  render ()
    {
      return (
        <Provider store={store}>
          <Router>
            <ul>
              <li>
                <Link to="/" style={{color: "white"}}>App</Link>
              </li>
              <li>
                <Link to="/home" style={{color: "white"}}>Home</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Provider>
      );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
