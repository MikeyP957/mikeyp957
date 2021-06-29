import React, { Component } from 'react'
import Title from '../components/Title'
import Card from 'react-bootstrap/Card'
import '../App.css'


class Contact extends Component {

    render() {
        return (
            <div>
        
            <Card 
            className="contactCard">
                 <Title title={'Contact Information'} />
                <h5>Email: peraram2@gmail.com</h5>
                
                <h5>Github: <a href="https://github.com/MikeyP957">github.com/MikeyP957</a> </h5>
        
        
                <h5>linkdin: <a href="https://www.linkedin.com/in/mikeyp957/">linkedin.com/in/mikeyp957/
                    </a></h5>
            </Card>
                
        
            </div>
        )
    }
    
}

export default Contact