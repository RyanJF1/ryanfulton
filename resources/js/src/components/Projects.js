import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardGroup } from 'react-bootstrap';


function Projects() {
    return (
        <div className=" items-center text-center " >
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Job Monitor ( Coming soon )</Card.Title>
                        <Card.Text>
                            Web App to monitor job applications. Built with Laravel and React.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>GitHub</Card.Title>
                        <Card.Text>
                            Check out my <Card.Link href="https://github.com/RyanJF1">source code</Card.Link>.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Academic Projects</Card.Title>
                        <Card.Text>
                            A <Card.Link href="https://github.com/RyanJF1/academic-projects">repository of project files</Card.Link> from programming courses.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text>
                            View my <Card.Link href="https://linkedin.com/in/ryan-fulton">LinkedIn</Card.Link>.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Projects;

ReactDOM.render(
    <Projects />,
    document.getElementById('projects')
);

