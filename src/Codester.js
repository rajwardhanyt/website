import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./Codester.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Codester() {
    return (
        <div className="codester">
            <h1>Courses</h1>
            <div className="cards">

                <div className="card_row">
                    <a href="/fang">
                        <Card style={{ width: '18rem', hieght: '36rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/-SVTr8FzvRI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNR49PZ1GnJI9Zt1vQ-8-ELXuliQ" />
                            <Card.Body>
                                <Card.Title>Web Development Course</Card.Title>
                                <Card.Text>
                                    In this course you will learn complete web development from scratch. It includes HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs, MongoDB and projects like Youtube Clone, Whatsapp Clone, Facebook Clone, Amazon Clone, Netflix Clone and of course Google Clone.
    </Card.Text>
                                <Button variant="primary">Visit Course</Button>
                            </Card.Body>
                        </Card>
                    </a>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Codester
