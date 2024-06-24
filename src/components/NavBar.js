import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = ()=> {
    return (
        <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="#a3a3a866" expand={expand} className="fixed-top border-bottom border-dark border-2 py-1 mb-2 bg-light">
            <Container fluid>
              <LinkContainer to="/general"  style={{fontStyle: "italic", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: 24}}>
                <Navbar.Brand className='mx-4 px-3'>INFO Junkie</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{fontWeight: "bold"}}>
                    INFO Junkie
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <NavDropdown
                      title="Categories"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    > <LinkContainer to="/general">
                      <NavDropdown.Item>General</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/business">
                      <NavDropdown.Item>Business</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/entertainment">
                      <NavDropdown.Item>Entertainment</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/health">
                      <NavDropdown.Item>Health</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/science">
                      <NavDropdown.Item>Science</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/sports">
                      <NavDropdown.Item>Sports</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <LinkContainer to="/technology">
                      <NavDropdown.Item>Technology</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    )
}

export default NavBar
