import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/index';
import Error from './pages/Error/index';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
