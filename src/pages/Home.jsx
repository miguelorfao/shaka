import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";
import SeasonSpecials from "./SeasonSpecials";
import MenuHighlights from "../components/MenuHighlights";
import About from "../components/About";
import StoneHouse from "../components/StoneHouse";

function Home() {
  return (
    <div>
      <div className="Hero-section"></div>
      <section id="about" className="about p-3 mt-3">
        <About />
      </section>
      <section id="menu-highlights" className="menu-highlights p-3 mt-3">
        <MenuHighlights />
      </section>
      <section id="season-specials" className="season-specials p-3 ">
        <SeasonSpecials />
      </section>
      <section id="stonehouse" className="stonehouse p-3 ">
        <StoneHouse />
      </section>

      <section>
        <Reviews />
      </section>
    </div>
  );
}

export default Home;
