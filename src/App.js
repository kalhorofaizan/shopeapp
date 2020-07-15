import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/MainPage'
import ProductPage from './components/ProdectPage'
function App() {
  return (
    <div >
      <Router>
      <Switch>
          <Route path="/product">
            <ProductPage />
          </Route>
         
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
