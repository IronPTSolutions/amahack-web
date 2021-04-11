import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import ProductDetail from "./components/product/ProductDetail";
import ProductForm from "./components/product/ProductForm";
import { getUserInfo } from "./services/UserService";
import { getAccessToken } from "./store/AccessTokenStore";

function App() {
  const [user, setUser] = useState(null);

  const getUser = () => {
    return getUserInfo().then((response) => setUser(response));
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser().catch((e) => {});
    }
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id/edit" component={ProductForm} />
        <Route exact path="/products/:id">
          <ProductDetail user={user} />
        </Route>
        <Route
          exact
          path="/signin"
          render={() => <Login doLogin={getUser} />}
        />
      </Switch>
    </div>
  );
}

export default App;
