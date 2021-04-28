import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/header/Header'
import Pages from './components/mainpages/Pages'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="pages">
            <Pages />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
