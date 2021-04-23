import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
