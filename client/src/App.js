import "./App.css";
import TestComponent from "./components/TestComponent";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Products from "./components/pages/Products";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
