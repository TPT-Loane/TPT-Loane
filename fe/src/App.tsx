import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faExternalLinkAlt,
  faHome,
  faInfo,
  faListUl,
  fas,
  faTh,
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import ProductCreate from './pages/ProductCreate';
import Error from './pages/Error';
import Default from './components/layouts/Default';
import ProductDetails from './pages/ProductDetails';

library.add(faInfo, faHome, far, fas, faExternalLinkAlt, faListUl, faTh);

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Default>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Login" component={Login} />
            <Route path="/Product/create" component={ProductCreate} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route component={Error} />
          </Switch>
        </Default>
      </Router>
    </>
  );
}

export default App;
