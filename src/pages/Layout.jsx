import React from "react";

import { Link, Outlet } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Layout() {
  return (
    <div>
      <header>
        <div>
          <div className="w-100 Promo text-center d-flex justify-content-around align-items-center pt-3">
            <p>Hawaiian Café & Entire Venue Hire</p>
          </div>
          <Navbar expand="lg" className="navigation-bar">
            <Container>
              <Navbar.Brand as={Link} to="/" className="Heading-fonts">
                Shaka
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/Menu">
                    Menu
                  </Nav.Link>
                  <Nav.Link as={Link} to="/About">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="#Location">Location</Nav.Link>
                  <Nav.Link as={Link} to="Events">
                    Events
                  </Nav.Link>
                </Nav>
                <Contact className="border-0 w-50" />
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
