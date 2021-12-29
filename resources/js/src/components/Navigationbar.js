import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Container } from 'react-bootstrap';

function Navigationbar() {
    return (
<>
<Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">

<h1 className="d-inline-block align-top" style={{fontFamily: 'Sigmar One'}}>Ryan Fulton</h1>

      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    );
}
export default Navigationbar;

ReactDOM.render(
    <Navigationbar />,
    document.getElementById('navbar')
);
