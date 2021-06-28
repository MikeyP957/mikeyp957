import React from 'react'
import Title from '../components/Title'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import profilePic from '../media/mikeyP.jpg'
import '../App.css'


function Home() {
return (
    <div>
        <Title title={"About Me"} />
        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image className="profPic" align='left' src={profilePic} thumbnail />
                </Col>
                <Col className='aboutMe' align='center' xs={6} md={4} >
                    <p>Full stack web developer and math educator with working knowledge of building functions, mapping transformations, and logic. Earned certificate of completion from University of Washington’s Full-Stack Web Development Bootcamp by showing ability in using technologies including JavaScript, Node.js, CSS and HTML. Also certified as a National Boards Teacher by showing evidence of collaborative practices, proficient understanding of mathematics, clear communicator and distinguished teaching practices. Through working with other experienced teachers, engaging in professional development and completing a Master’s degree in teaching, I am experienced in working productively with others and continue to grow professionally. As a mathematician I enjoy solving difficult problems with elegant solutions and refining my skills by learning from others. My curious mind, my understanding of mathematics, my willingness to collaborate and learn from others and problem solving skills make me a strong addition to any team.</p>
                </Col>
            </Row>
        </Container>

        

    </div>
)
}

export default Home