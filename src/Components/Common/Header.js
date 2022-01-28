import React from "react";
import SearchBox from "./SearchBox.js";
import {
    Container,
    Nav,    
    Navbar,    
    Row,
    Col
  } from "react-bootstrap";
//import Navigation from "./Navigation";
//import styles from './MainHeader.module.css'

const Header = () => {
  return(         
    <Container fixed="top" >
      <Row className="globalStrip text-white">
        <Col className="d-flex justify-content-start">Live Chat | Track Order</Col>  
        <Col className="d-flex justify-content-end">Change Currency | AUD</Col>    
      </Row> 
      <Row>
        <Col>   
          <Navbar expend="xs" className="p-0" >
          <Container>
            <Navbar.Brand href="/home"><img src="https://www.xonelec.com/Images/X-ON_LOGO_Worldwide_Electronics.jpg" className="Navbar-Brand-img d-inline-block align-top" alt="XON electronics logo" width="100" height="60"/></Navbar.Brand>
            <SearchBox></SearchBox>
            <Navbar.Toggle />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>*/}
              <Nav>
                <Nav.Link href="/Cart">Cart</Nav.Link>
                <Nav.Link eventKey={2} href="/Login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar> 
        </Col>
      </Row>  
    </Container>                                             
  );
};
export default Header;