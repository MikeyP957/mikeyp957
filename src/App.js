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
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio}/>
          <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact}/>            
        </Switch>
      </div>
    </Router>


  );
}

export default App;

