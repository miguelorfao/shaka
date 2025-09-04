import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Instagram,
  TelephoneFill,
} from "react-bootstrap-icons";

function Footer() {
  const tripadvisorURL =
    "https://www.tripadvisor.co.uk/Restaurant_Review-g190744-d23704759-Reviews-Shaka_Coffee_House_Eatery-Scarborough_Scarborough_District_North_Yorkshire_Engla.html";

  return (
    <div id="Location">
      <footer className="bg-dark text-light py-4 mt-5">
        <h3 className="text-center border-bottom pb-3">
          Better yet, see us in person!
        </h3>

        <Container className="container">
          <Row className="row mt-3">
            {/* Address Section */}
            <Col md={6} className="my-3">
              <p className="card-text">
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              <div className="contact-address-footer d-flex flex-wrap justify-content-around">
                {" "}
                <p className="mb-1">
                  <GeoAltFill
                    className="me-2 text-danger text-center 
                  "
                  />
                  Sha-ka, 12a York Place, Scarborough YO11 2NP, England, UK
                </p>
              </div>{" "}
              <div className="contact-details-footer d-flex justify-content-around mt-3">
                <p className="mb-1">
                  <TelephoneFill className="me-2 text-primary" /> 01723 360449
                </p>
                <p className="mb-0">
                  <EnvelopeFill className="me-2 text-warning" />{" "}
                  shak-ka@gmail.com
                </p>
              </div>
              <div className="social-footer d-flex justify-content-around mt-3">
                {" "}
                <p className="mb-0">
                  <Link
                    to="https://www.facebook.com/p/Sha-Ka-Coffee-House-Eatery-100039928820041/?locale=en_GB" // <-- replace with your FB link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    <Facebook className="me-2" />
                  </Link>
                  Facebook
                </p>
                <p className="mb-0">
                  <Link
                    to="https://www.instagram.com/shaka_coffee_house/" // <-- replace with your FB link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none "
                  >
                    <Instagram className="me-2 text-danger" />
                  </Link>
                  Instagram
                </p>
              </div>
              <div className="tripadvisor-footer mt-3 text-center">
                {" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={tripadvisorURL}
                >
                  <img
                    src="https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png"
                    alt="TripAdvisor"
                    className="mx-auto"
                  />
                </a>
              </div>
            </Col>

            {/* Opening Times Section */}
            <Col md={6} className="mb-3 text-center">
              <h5 className="border-bottom my-3 pb-3">Opening Times</h5>
              <div className="d-flex justify-content-around">
                {" "}
                <div>
                  {" "}
                  <p>Monday: 10:00 - 16:00</p>
                  <p>Tuesday: 10:00 - 16:00</p>
                  <p>
                    Wednesday: <span className="text-danger">Closed</span>
                  </p>
                  <p>
                    Thursday: <span className="text-danger">Closed</span>
                  </p>
                </div>
                <div>
                  {" "}
                  <p>Friday: 10:00 - 16:00</p>
                  <p>Saturday: 10:00 - 16:00</p>
                  <p>Sunday: 10:00 - 15:00</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Bottom Text */}
          <div className="text-center pt-3 border-top">
            <small>
              &copy; {new Date().getFullYear()} Sha-ka. All Rights Reserved.
            </small>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
