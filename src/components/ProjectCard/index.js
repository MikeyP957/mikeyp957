import React from "react";
import Card from 'react-bootstrap/Card'

import "./style.css";

function ProjectCard(props) {
  
  return (
    
      <Card className='projCard' style={{ width: '50rem' }}>

          <Card.Body>
            <Card.Title>
             <h3> {props.title} </h3> 
            <a href={props.url} >Click here to view the project</a>
            <br />
            <br/> 
            <Card.Img className='projImg' variant="top" src={props.image} />       
            </Card.Title>
            <Card.Text>

              {props.description}
            </Card.Text>

          </Card.Body>
      </Card>
   
  );
}

export default ProjectCard;
