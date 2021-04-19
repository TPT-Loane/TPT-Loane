import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './pages/About/About';
import { Error } from './pages/Error/Error';
import { Home } from './pages/Home/Home';

export const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={Error} />
    </Switch>
  </Router>
);
