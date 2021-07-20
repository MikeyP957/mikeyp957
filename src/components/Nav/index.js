import React, { Component } from "react";
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'react-bootstrap'


class Navbar extends Component {
  state= { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavbarItems'>
       <h1 className= 'navbar-logo' >        
        Mikey Perara's webpage
        <i className="fas fa-cat"></i> 
        </h1>
        <div className = 'menu-icon' onClick ={this.handleClick}>
          <i className ={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }> </i>
        </div>
        <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}> 
              
                <Link className= {item.cName} to = {item.url}>
                  {item.icon} {item.title}
                </Link> 
              </li>
            )
          })}          
        </ul>
      </nav>
    )
  }
}

export default Navbar;
