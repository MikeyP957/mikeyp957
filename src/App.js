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
        <Switch>
          <Route exact path={["/", "/Home"]}>
              <Home />
          </Route>
          <Route exact path={["/", "/Portfolio"]}>
              <Portfolio />
          </Route>
          <Route exact path={["/", "/Contact"]}>
              <Contact />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;

