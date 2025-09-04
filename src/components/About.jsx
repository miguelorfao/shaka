import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      {" "}
      <div>
        <Container className="my-5">
          <h2 className="text-center mb-4 text-decoration-underline">
            About Us
          </h2>
          <p className="text-center">
            Welcome to Shaka, your little slice of Hawaii in the heart of the
            city! At Shaka, we believe in the spirit of Aloha, where every visit
            feels like a warm embrace from an old friend. Our mission is to
            bring the vibrant flavors and laid-back vibes of Hawaii to your
            everyday life.
          </p>
          <p className="text-center">
            Our menu is a celebration of Hawaiian cuisine, featuring fresh,
            locally-sourced ingredients that capture the essence of the islands.
            From our signature poke bowls to our tropical smoothies, every dish
            is crafted with love and a touch of island magic.
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
            us. Mahalo for choosing Shaka – we can't wait to welcome you to our
            ohana (family)!
          </p>
        </Container>
        <hr className="w-75 m-auto" />
      </div>
    </div>
  );
}

export default About;
