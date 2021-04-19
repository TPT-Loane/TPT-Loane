import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home/index';
import { About } from './components/pages/About/index';
import { Error } from './components/pages/Error/index';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
