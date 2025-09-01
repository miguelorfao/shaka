import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Instagram,
  TelephoneFill,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <div id="Location">
      <footer className="bg-dark text-light py-4 mt-5">
        <h3 className="text-center border-bottom">
          Better yet, see us in person!
        </h3>

        <div className="container">
          <div className="row mt-3">
            {/* Address Section */}
            <div className="col-md-6 my-3">
              <p className="card-text">
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              <p className="mb-1">
                <GeoAltFill className="me-2 text-danger" />
                Sha-ka, 12a York Place, Scarborough YO11 2NP, England, UK
              </p>
              <p className="mb-1">
                <TelephoneFill className="me-2 text-primary" /> 01723 360449
              </p>
              <p className="mb-0">
                <EnvelopeFill className="me-2 text-warning" /> shak-ka@gmail.com
              </p>{" "}
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

            {/* Opening Times Section */}
            <div className="col-md-6 mb-3">
              <h5 className="border-bottom my-3">Opening Times</h5>

              <p>Monday: 10:00 - 16:00</p>
              <p>Tuesday: 10:00 - 16:00</p>
              <p>
                Wednesday: <span className="text-danger">Closed</span>
              </p>
              <p>
                Thursday: <span className="text-danger">Closed</span>
              </p>
              <p>Friday: 10:00 - 16:00</p>
              <p>Saturday: 10:00 - 16:00</p>
              <p>Sunday: 10:00 - 15:00</p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center pt-3 border-top">
            <small>
              &copy; {new Date().getFullYear()} Sha-ka. All Rights Reserved.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
