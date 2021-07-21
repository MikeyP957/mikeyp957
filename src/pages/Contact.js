import React, { Component } from 'react'
import Title from '../components/Title'
import Card from 'react-bootstrap/Card'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import '../App.css'


class Contact extends Component {

    render() {
        return (
            <div className='mainContent'>
        
            <Card 
            className="contactCard">
                 <Title title={'Contact Information'} />
                 <p><FiIcons.FiMail className="ContactIcon"/> peraram2@gmail.com </p>
                
                <p><FaIcons.FaGithub className="ContactIcon"/> <a href="https://github.com/MikeyP957">github.com/MikeyP957</a> </p>
        
        
                <p><FaIcons.FaLinkedin className="ContactIcon" /> <a href="https://www.linkedin.com/in/mikeyp957/">linkedin.com/in/mikeyp957/
                    </a></p>
            </Card>
                
        
            </div>
        )
    }
    
}

export default Contact