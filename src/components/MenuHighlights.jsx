import React from "react";
import { Card } from "react-bootstrap";

function MenuHighlights() {
  return (
    <div>
      {" "}
      <div className="text-center mt-4">
        <h2>Menu Highlight</h2>
        <div className="d-flex flex-wrap justify-content-center mt-3 gap-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/coffee.jpeg" />
            <Card.Body>
              <Card.Title>
                <h3>Stonehouse Coffee</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Experience the journey from farm to cup with Stonehouse Coffee
                  Beans. Our small-batch roast capture the essence of each
                  origin., with beans sourced directly from family farms in
                  Ethiopia, Brazil, Mexico, and Africa.
                  <br />
                </p>
                <p>
                  Every Sip is a tribute to the land and the people behind it.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/breakfast.png" />
            <Card.Body>
              <Card.Title>
                <h3>Breakfast</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Breakfast at Sha-Ka is served from 10AM till 12PM, from
                  wholesome oats to pastries, our breakfast is made fresh daily
                  with love and seasonal ingredients.
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/menus/poke.png" />
            <Card.Body>
              <Card.Title>
                <h3>Season Specials </h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Discover <strong>Chef's seasonal creations,</strong> crafted
                  wit the freshest ingredients. Our speacials change with the
                  seasons - bringing you warm and bold flavours and wholesome
                  goodness every time.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MenuHighlights;
