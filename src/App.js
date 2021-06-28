import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Nav from './components/Nav'
import Wrapper from './components/Wrapper'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>            
        </Wrapper>
      </div>
    </Router>


  );
}

export default App;

