import React, {useState} from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap';

function App() {

  let [shoes, shoes변경] = useState([]);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item className="background01">
          
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="background02">
          
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="background03">
          
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='container mdpick'>
        <div className='row'>
          <h3>MD PICK</h3>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='100%' alt='신발이미지'/>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='100%' alt='신발이미지'/>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='100%' alt='신발이미지'/>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default App;
