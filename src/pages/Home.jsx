import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import stoneHouseCoffee from "../images/stoneHouse.jpeg";
import coffee from "../images/coffee.jpeg";
import breakfast from "../images/breakfast.png";
import poke from "../images/poke.png";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <div className="Hero-section"></div>
      <section id="about" className="bg-white">
        <div>
          <Container className="my-5">
            <h2 className="text-center mb-4 text-decoration-underline">
              About Us
            </h2>
            <p className="text-center">
              Welcome to Shaka, your little slice of Hawaii in the heart of the
              city! At Shaka, we believe in the spirit of Aloha, where every
              visit feels like a warm embrace from an old friend. Our mission is
              to bring the vibrant flavors and laid-back vibes of Hawaii to your
              everyday life.
            </p>
            <p className="text-center">
              Our menu is a celebration of Hawaiian cuisine, featuring fresh,
              locally-sourced ingredients that capture the essence of the
              islands. From our signature poke bowls to our tropical smoothies,
              every dish is crafted with love and a touch of island magic.
            </p>
            <p className="text-center">
              But Shaka is more than just a cafe; it's a community hub where
              people come together to share stories, laughter, and good times.
              Whether you're here for a quick coffee, a leisurely brunch, or a
              special event, we strive to create an atmosphere that feels like
              home.
            </p>
            <p className="text-center">
              We invite you to relax, unwind, and soak in the Aloha spirit with
              us. Mahalo for choosing Shaka – we can't wait to welcome you to
              our ohana (family)!
            </p>
          </Container>
          <hr className="w-75 m-auto" />
        </div>
      </section>
      <section id="menu-highlights" className="menu-highlights p-3 mt-3">
        <div className="text-center mt-4">
          {" "}
          <h2>Menu Highlight</h2>
          <div className="d-flex flex-wrap justify-content-center mt-3 gap-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={coffee} />
              <Card.Body>
                <Card.Title>
                  <h3>Stonehouse Coffee</h3>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={breakfast} />
              <Card.Body>
                <Card.Title>
                  <h3>Breakfast</h3>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={poke} />
              <Card.Body>
                <Card.Title>
                  <h3>Lunches</h3>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section>
        {" "}
        <div>
          <div className="mt-4 text-center">
            <h2>Stone House Coffee</h2>
            <Container>
              <Row className="justify-content-center align-items-center p-4 mt-3 g-3">
                <Col md={6}>
                  {" "}
                  <div>
                    <img className="img-fluid" src={stoneHouseCoffee} alt="" />
                  </div>
                </Col>
                <Col md={6}>
                  <h3> Sunrise Sidamo</h3>
                  <p>
                    Sunrise Sidamo is a standout single origin medium roast
                    coffee crafted exclusively from 100% Arabica beans grown in
                    Ethiopia’s renowned Sidamo region. Known for its naturally
                    lower caffeine content, around 1.5% less than blends
                    containing Robusta this is your perfect everyday coffee and
                    smooth enough to enjoy more than once a day. Thanks to our
                    precise roast profiling and its single origin status,
                    Sunrise Sidamo delivers a rich, well-rounded cup with deep
                    chocolatey notes and a clean finish. Every batch is
                    hand-roasted in small quantities at StoneHouse Coffee Beans,
                    then shipped at peak freshness so you can enjoy it during
                    its golden window (between one and two weeks from roast
                    date) for maximum flavour. This coffee was one of
                    StoneHouse’s first products and remains one of our most
                    popular coffees to date. Sunrise Sidamo is perfect for
                    espresso and long drinks with a host of rich complex
                    flavours. Single Origin Ethiopia, Sidamo Region (Highlands)
                    100% Arabica Elevation: 1,500-2,200 Process: Washed Process
                    Tasting Notes* – Chocolate | Dates | Nuts As with all
                    freshly brewed coffee the flavours will change slightly
                    depending on the grind and brew method you choose.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <h2>Thistory Of The Poke Bowl</h2>
<p>Poke
literally means "to cut into small piecey"
(Pronounced Poh-Kay rhymes with Okay)
Centuries ago beare wasteners arrived on the blands of Hawaii, the native polynesians when retuning hone from fishing, would cut up raw reef pish, season it with
sea salt + seaweed, combined with crushed candlenut, then eat it as a Hawaiian scooby snack!
Over time the dish has evolved to include other flavours and westem influences. Thus the Poke bowl was born!
Here at Sha-Ka we have our own take on the classic Poke bowl!
Hope you Enjoy it!</p>
                  </Col>
                </Row>
            </Container>
            <hr className="w-75 m-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
