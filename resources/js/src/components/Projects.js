import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardGroup } from 'react-bootstrap';

function Projects() {
    return (
        <div className=" items-center text-center d-flex" >
            <CardGroup>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Job Monitor</Card.Title>
                        <Card.Text>
                            Web App to monitor job applications. Built with Laravel and React.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
                </Card>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Portfolio</Card.Title>
                        <Card.Text>
                            Check out the source code.{' '}
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Academic Projects</Card.Title>
                        <Card.Text>
                            A repository of project files from programming courses.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
                </Card>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text>
                            View my linked in.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer> */}
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

