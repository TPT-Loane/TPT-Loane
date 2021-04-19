import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { About } from './pages/About/index';

function App(): JSX.Element {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
