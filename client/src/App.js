import "./App.css";
import TestComponent from "./components/TestComponent";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Products from "./components/pages/Products";
import ProductForm from "./components/pages/products/ProductForm";
import AuthGuard from "./components/auth/AuthGuard";
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
          <Route path="/products/add">
            <ProductForm />
          </Route>
          <Route path="/products">
            <AuthGuard>
              <Products />
            </AuthGuard>
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
