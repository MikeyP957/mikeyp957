import React, { Component } from 'react'
import Title from '../components/Title'
import Card from 'react-bootstrap/Card'
import '../App.css'


class Contact extends Component {

    render() {
        return (
            <div className='mainContent'>
        
            <Card 
            className="contactCard">
                 <Title title={'Contact Information'} />
                <p>Email: peraram2@gmail.com</p>
                
                <p>Github: <a href="https://github.com/MikeyP957">github.com/MikeyP957</a> </p>
        
        
                <p>linkdin: <a href="https://www.linkedin.com/in/mikeyp957/">linkedin.com/in/mikeyp957/
                    </a></p>
            </Card>
                
        
            </div>
        )
    }
    
}

export default Contact