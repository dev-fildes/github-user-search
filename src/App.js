import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';

import Home from './components/Home.js'

const App = () => {

  return (
    <div className="App">
      <Router>
        <Route exact path="/github-user-search" component={Home}/>
      </Router>
    </div>
    );
  }

  export default App;
