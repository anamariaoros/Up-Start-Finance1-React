import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Home from './views/home'
import Page1 from './views/page1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/page" />
        <Route component={Home} exact path="/" />
        <Route component={Page1} exact path="/page1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
