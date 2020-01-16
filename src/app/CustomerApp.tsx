import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'
import './customer.css'

const CustomerApp: React.FC = () => {
  return (
    <Router>
      <div className="CustomerApp">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>
        {
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/detail">
              <DetailPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        }
      </div>
    </Router>
  )
}
export default CustomerApp
