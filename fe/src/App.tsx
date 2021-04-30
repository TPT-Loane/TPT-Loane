import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Default from './components/layouts/Default';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Default>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </Default>
      </Router>
    </>
  );
}

export default App;
