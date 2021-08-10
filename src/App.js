import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Nav from './components/Nav'



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />        
          <Route exact path="*" component={Home} />
        <Switch>
          <Route exact path={"/portfolio"} component={Portfolio}/>
          <Route exact path={"/contact"} component={Contact}/>            
        </Switch>
      </div>      
    </Router>
    


  );
}

export default App;

