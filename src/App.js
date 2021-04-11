import { Route, Switch } from "react-router";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import ProductDetail from "./components/product/ProductDetail";
import ProductForm from "./components/product/ProductForm";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id/edit" component={ProductForm} />
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
