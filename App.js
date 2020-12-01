import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListStocks from "./components/list-stocks.component";
import EditStock from "./components/edit-stock.component";
import CreateStock from "./components/create-stock.component";
 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
           
          <nav className="navbar">
            <Link to="/" className="navbar-brand">Stock list</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Stock</Link>
                </li>
              </ul>
            </div>
          </nav>
 
          <Route path="/" exact component={ListStocks} />
          <Route path="/edit/:id" component={EditStock} />
          <Route path="/create" component={CreateStock} />
        </div>
      </Router>
    );
  }
}
 
export default App;