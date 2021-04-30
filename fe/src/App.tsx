import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Error from './pages/Error';
import Default from './components/layouts/Default';

function App(): JSX.Element {
  return (
    <>
      <Default>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Login" component={Login} />
            <Route component={Error} />
          </Switch>
        </Router>
      </Default>
    </>
  );
}

export default App;
