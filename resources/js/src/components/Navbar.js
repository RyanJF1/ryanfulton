import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/home">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Projects</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;

ReactDOM.render(
    <Navbar />,
    document.getElementById('navbar')
);
