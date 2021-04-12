import './App.css';

import { Route, Switch } from 'react-router';

import Login from './components/auth/Login';
import Home from './components/home/Home';
import Navbar from './components/nav/Navbar';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
