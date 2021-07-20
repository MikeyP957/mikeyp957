import React, { Component } from 'react'
import Title from '../components/Title'
import ProjectCard from '../components/ProjectCard'
import ProjectsArr from '../projects/projectData'
import '../App.css'

class Portfolio extends Component {


render() {
    return(
        <div className='mainContent'>
            <Title title={'Porfolio'} />
                <div>
                    {ProjectsArr.map((proj, index) => (
                        <ProjectCard
                        key={index}
                        title ={proj.title}
                        url ={proj.url}
                        image={proj.image}
                        description ={proj.description}
                        icons = {proj.icons}
                        />
                    ))}
                </div>
        </div>
    )
    
}
}

export default Portfolio