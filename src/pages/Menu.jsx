import React from "react";
import {
  Col,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import menuData from "../menu.json";

function Menu() {
  return (
    <div>
      {/* Navbar */}
      <div className="menu-nav bg-light py-2 mb-3 shadow-sm">
        <Nav className="justify-content-center" variant="pills">
          <Nav.Link href="#Breakfast@Shaka">Breakfast</Nav.Link>
          <Nav.Link href="#ForOurGroms">For Our Grows</Nav.Link>
          <Nav.Link href="#Tacos">Tacos</Nav.Link>
          <Nav.Link href="#PokeBowls">Poke</Nav.Link>
          <Nav.Link href="#Sides">Sides</Nav.Link>

          <NavDropdown title="Soft Drinks" id="basic-nav-dropdown-cold">
            <NavDropdown.Item href="#Lemonaid">Lemonaid</NavDropdown.Item>
            <NavDropdown.Item href="#SoftDrinkBottles">
              Soft Drinks
            </NavDropdown.Item>
            <NavDropdown.Item href="#Frobrishers">Frobrishers</NavDropdown.Item>
            <NavDropdown.Item href="#Fentimans">Fentimans</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hot Drinks" id="basic-nav-dropdown-hot">
            <NavDropdown.Item href="#NuisanceBotanical">
              Nuisance Botanical
            </NavDropdown.Item>
            <NavDropdown.Item href="#ChariteaIcedTea">
              Charitea Iced Tea
            </NavDropdown.Item>
            <NavDropdown.Item href="#SummerIcedTea">
              Summer Iced Tea
            </NavDropdown.Item>
            <NavDropdown.Item href="#Coffee">Coffee</NavDropdown.Item>
            <NavDropdown.Item href="#LooseLeafTea">
              Loose Leaf Tea
            </NavDropdown.Item>
            <NavDropdown.Item href="#ChaiTea">Chai Tea</NavDropdown.Item>
            <NavDropdown.Item href="#HotChocolate">
              Hot Chocolate
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </div>

      {/* Title */}
      <div className="text-center border-bottom mt-3">
        <h2>Sha-ka coffee house &amp; eatery</h2>
      </div>
      <div className="p-3 text-center border-bottom menu-disclaimer">
        <p>
          {" "}
          Made Fresh, Made to Order We don’t do “mass produced.” Every bite is
          crafted just for you, fresh from the kitchen. Our stock is limited
          each day, so when it’s gone… it’s gone! Grab your favorites while they
          last.
        </p>
      </div>
      <div className="menu-items p-3">
        {" "}
        {/* JSON-driven menu sections */}
        {Object.entries(menuData["SHA-KA Coffee House & Eatery"]).map(
          ([category, items], idx) => {
            // Skip non-array sections like Key or Disclaimer
            if (!Array.isArray(items)) return null;

            return (
              <div
                key={idx}
                id={category.replace(/\s+/g, "")}
                className="mb-5 border p-3"
              >
                {/* Category Header */}
                <h2 className="text-center my-4">{category}</h2>

                {/* Items List */}
                {items.map((item, i) => (
                  <div key={i} className="text-center p-3 border rounded mt-3">
                    {/* Image */}
                    {item.image && (
                      <Container>
                        {" "}
                        <Row>
                          <Col md={6}>
                            {" "}
                            <img
                              src={item.image}
                              alt={item.item}
                              className="img-fluid rounded-3"
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                loading: "lazy",
                              }}
                            />
                          </Col>
                          <Col>
                            {" "}
                            {/* Details */}
                            <div className="">
                              {item.header && (
                                <h5 className="mb-1 text-primary">
                                  {item.header}
                                </h5>
                              )}
                              <h3 className=" mb-1 text-decoration-underline mt-3">
                                {item.item}
                              </h3>

                              {item.description && (
                                <p className="text-muted mb-2">
                                  {item.description}
                                </p>
                              )}

                              {item.tags && (
                                <span className="badge bg-warning text-dark me-2">
                                  {item.tags}
                                </span>
                              )}

                              {item.includes && (
                                <span className="badge bg-info text-dark me-2">
                                  {item.includes}
                                </span>
                              )}

                              {item.price && (
                                <div className="mt-2 fw-bold text-success">
                                  {item.price}
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    )}
                  </div>
                ))}
              </div>
            );
          }
        )}
      </div>

      <div className="text-center border-bottom">
        <h4>Disclaimer:</h4>
        <p>
          {" "}
          "Whilst we have taken great care to ensure no cross contamination has
          occurred, our food may contain or come into contact with common food
          allergens."
        </p>
      </div>
      <div className="border-bottom">
        {" "}
        <ul className="text-center mt-3">
          <li> "V": "Vegetarian"</li>
          <li>"VE": "Vegan"</li>
          <li>"GF": "Gluten Free"</li>
          <li>"GFA": "Gluten Free Available"</li>
          <li>"VLG": "Very Low Gluten"</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
