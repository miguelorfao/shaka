import React from "react";
import v_img from "../images/venueHire.png";
import { Button } from "react-bootstrap";
function VenueHire() {
  return (
    <div>
      <div className="v-hire"></div>
      <div className="shadow container text-center mt-3">
        {" "}
        <h2>Our Concept</h2>
        <p>
          Turn your celebration into an island escape! Our tropical-themed café
          is available for exclusive hire, giving you the whole space to make
          your event truly unforgettable. Picture flickering candlelight, exotic
          floral touches, and the warm glow of aloha filling the air.
        </p>
        <h2> Why hire with us?</h2>
        <p>
          {" "}
          Perfect for birthdays, reunions, engagements, or private luau-style
          gatherings Full privacy, island-inspired décor, and tailored menus
          Dog-friendly — your furry friends are welcome tooGMO ingredients
          whenever possible. Our chefs take pride in creating dishes that are
          both healthy and delicious.
        </p>
        <Button className="border-0">Book A Venue</Button>
      </div>
    </div>
  );
}

export default VenueHire;
