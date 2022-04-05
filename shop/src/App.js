/* eslint-disable */

import React, {useState, useContext} from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';

let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
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

      

      <Switch>
        <Route exact path="/"> 

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

            <재고context.Provider value={재고}>

            <div className='row'>
              <h3>MD PICK</h3>

              {
                shoes.map((a,i) => {
                  return <Card shoes={shoes[i]} i={i} key={i}></Card>
                })
              }
              <button className='btn btn-primary' onClick={()=>{



                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{

                  console.log('result.data');
                  shoes변경([...shoes, ...result.data]);
                })
                .catch(()=>{
                  console.log('실패했어요')
                })

              }}>더보기</button>
              {/* <Card shoes={shoes[0]} />
              <Card shoes={shoes[1]} />
              <Card shoes={shoes[2]} /> */}
            </div>

            </재고context.Provider>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
        </Route>
        
        <Route path='/:id'>
          <div>아무거나 적었을 때 이거 보여주셈</div>
        </Route>
      </Switch>        
    </div>
  );
}




function Card(props){

  let 재고 = useContext(재고context);

  return (
    <div className='col-md-4'>
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width='100%' alt='신발이미지'/>
      <h3> { props.shoes.title } </h3>
      <p> { props.shoes.content } & { props.shoes.price }</p>
      {재고[props.i]}
    </div>
  )
}

export default App;
