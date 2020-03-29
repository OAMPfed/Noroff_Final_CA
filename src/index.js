import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import App from './App';
import './styles/styles.scss';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import CardSpecific from './pages/CardSpecific';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/card/:id" component={CardSpecific} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
