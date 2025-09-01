import React from "react";
import v_img from "../images/venueHire.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import Contact from "../components/Contact";
function Events() {
  return (
    <div className="events">
      <h2 className="mt-3 text-center">Events Night & Venue Hire</h2>
      <Container>
        {" "}
        <Row className="border-bottom pb-3 mt-3">
          <Col md={6}>
            <img src={v_img} alt="" className="img-fluid" />
          </Col>
          <Col md={6} className="mt-3">
            <div>
              <h2>Our Concept</h2>
              <p>
                Turn your celebration into an island escape! Our tropical-themed
                café is available for exclusive hire, giving you the whole space
                to make your event truly unforgettable. Picture flickering
                candlelight, exotic floral touches, and the warm glow of aloha
                filling the air.
              </p>
            </div>
            <Contact className="border-0 w-50" />
          </Col>
        </Row>
        <Row className="mt-3 border-bottom pb-3">
          <Col sm={{ order: 2 }} md={6}>
            {" "}
            <img src={v_img} alt="" className="img-fluid" />
          </Col>
          <Col md={{ order: 1 }} className="mt-3">
            {" "}
            <div>
              {" "}
              <h2>CandleLight By Sha-ka</h2>
              <h4>Moments made brighter by candlelight.</h4>
              <p>
                {" "}
                Dinner Celebrate life’s most meaningful moments with the
                timeless glow of candlelight. Sha-Ka by Candlelight Dinner is
                more than a meal — it’s an atmosphere of warmth, connection, and
                elegance designed for every special occasion. Whether you’re
                marking an anniversary, hosting friends, sharing time with
                family, or honoring an achievement, our candlelit setting
                transforms any evening into an unforgettable experience. What
                Awaits You A welcoming, intimate candlelit ambiance A carefully
                crafted gourmet menu with something for everyone A relaxed yet
                refined atmosphere, perfect for any gathering Personalized
                touches to make your occasion truly yours Step into the glow of
                Sha-Ka by Candlelight — where every dinner becomes a cherished
                memory.
              </p>{" "}
              <Contact className="border-0 w-50" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Events;
