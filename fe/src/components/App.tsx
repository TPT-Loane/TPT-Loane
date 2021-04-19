import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './pages/Home/index';

function App(): JSX.Element {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
