import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function StoneHouse() {
  return (
    <div>
      {" "}
      <div>
        <div className="mt-4 text-center">
          <h2>Stone House Coffee</h2>
          <Container>
            <Row className="justify-content-center align-items-center p-4 mt-3 g-3">
              <Col md={6}>
                <div>
                  <img
                    className="img-fluid"
                    src="/images/stoneHouse.jpeg"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={6}>
                <h2> Sunrise Sidamo</h2>
                <p>
                  Sunrise Sidamo is a standout single origin medium roast coffee
                  crafted exclusively from 100% Arabica beans grown in
                  Ethiopia’s renowned Sidamo region. Known for its naturally
                  lower caffeine content, around 1.5% less than blends
                  containing Robusta this is your perfect everyday coffee and
                  smooth enough to enjoy more than once a day. Thanks to our
                  precise roast profiling and its single origin status, Sunrise
                  Sidamo delivers a rich, well-rounded cup with deep chocolatey
                  notes and a clean finish. Every batch is hand-roasted in small
                  quantities at StoneHouse Coffee Beans, then shipped at peak
                  freshness so you can enjoy it during its golden window
                  (between one and two weeks from roast date) for maximum
                  flavour. This coffee was one of StoneHouse’s first products
                  and remains one of our most popular coffees to date. Sunrise
                  Sidamo is perfect for espresso and long drinks with a host of
                  rich complex flavours. Single Origin Ethiopia, Sidamo Region
                  (Highlands) 100% Arabica Elevation: 1,500-2,200 Process:
                  Washed Process Tasting Notes* – Chocolate | Dates | Nuts 100%
                  Arabica Elevation: 1,500-2,200 Process: Washed Process Tasting
                  Notes* – Chocolate | Dates | Nuts As with all freshly brewed
                  coffee the flavours will change slightly depending on the
                  grind and brew method you choose.
                </p>
              </Col>
            </Row>
            <Row className="mt-4 p-3">
              <Col md={6} sm={{ order: 2 }}>
                <div>
                  <img
                    className="img-fluid"
                    src="/images/menus/poke.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col md={6} className="mt-3">
                <h2>Thistory Of The Poke Bowl</h2>
                <p>
                  Poke literally means "to cut into small piecey" (Pronounced
                  Poh-Kay rhymes with Okay) Centuries ago beare wasteners
                  arrived on the blands of Hawaii, the native polynesians when
                  retuning hone from fishing, would cut up raw reef pish, season
                  it with sea salt + seaweed, combined with crushed candlenut,
                  then eat it as a Hawaiian scooby snack! Over time the dish has
                  evolved to include other flavours and westem influences. Thus
                  the Poke bowl was born! Here at Sha-Ka we have our own take on
                  the classic Poke bowl! Hope you Enjoy it!
                </p>
              </Col>
            </Row>
          </Container>
          <hr className="w-75 m-auto" />
        </div>
      </div>
    </div>
  );
}

export default StoneHouse;
