import React, { useState } from "react";
import Card from 'react-bootstrap/Card'

import "./style.css";

function ProjectCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    let openAndClose = isExpanded;
    setIsExpanded(!openAndClose)
  }
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
            <h3>Technologies: </h3>
              <div className="projIcons">              
              {props.icons}
              </div>              
                <br/>
                <button onClick={handleExpand}>expand</button>
              <div className={isExpanded ? 'textDescript active' :'textDescript'}>
              {props.description}
              </div>              
            </Card.Text>

          </Card.Body>
      </Card>
   
  );
}

export default ProjectCard;
