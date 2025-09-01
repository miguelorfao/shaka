import React from "react";
import { Dropdown, Nav, NavDropdown } from "react-bootstrap";
import menuData from "../menu.json";

function Menu() {
  return (
    <div>
      {/* Navbar */}
      <div className="menu-nav bg-light py-2 mb-3 shadow-sm">
        <Nav className="justify-content-center" variant="pills">
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
          <NavDropdown title="Soft Drinks" id="basic-nav-dropdown-hot">
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
      <div className="text-center border-bottom">
        <h2>Sha-ka coffee house &amp; eatery</h2>
      </div>

      {/* JSON-driven menu sections */}
      {Object.entries(menuData["SHA-KA Coffee House & Eatery"]).map(
        ([category, items], idx) => {
          // Skip non-array sections like Key or Disclaimer
          if (!Array.isArray(items)) return null;

          return (
            <div key={idx} id={category.replace(/\s+/g, "")} className="mb-5">
              {/* Category Header */}
              <h2 className="text-center mb-4">{category}</h2>

              {/* Items List */}
              {items.map((item, i) => (
                <div
                  key={i}
                  className="d-flex align-items-start gap-3 p-3 border-bottom"
                >
                  {/* Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.item}
                      className="img-thumbnail"
                      style={{ width: "10rem", height: "auto" }}
                    />
                  )}

                  {/* Details */}
                  <div>
                    {item.header && (
                      <h5 className="mb-1 text-primary">{item.header}</h5>
                    )}
                    <p className="fw-semibold mb-1">{item.item}</p>

                    {item.description && (
                      <p className="text-muted mb-2">{item.description}</p>
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
                </div>
              ))}
            </div>
          );
        }
      )}
      <div className="text-center border-bottom">
        <h4>Disclaimer:</h4>
        <p>
          {" "}
          "Whilst we have taken great care to ensure no cross contamination has
          occurred, our food may contain or come into contact with common food
          allergens."
        </p>
      </div>
      <div>
        {" "}
        <ul className="d-flex flex-wrap justify-content-around mt-3">
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
