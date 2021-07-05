import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
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
          <Route exact path="/home" component={Home} />
          <Route exact path='/'>
            <Redirect to="/home" />
          </Route>
          <Route exact path={"/portfolio"} component={Portfolio}/>
          <Route exact path={"/contact"} component={Contact}/>            
        </Switch>
      </div>
    </Router>


  );
}

export default App;

