import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

function SeasonSpecials() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const special = [
    {
      item: "curry",
      price: "£10.95",
      description: "text of description",
      image: "/images/menus/winter/citrus&ginger.png",
      tags: "VG",
      includes: "Nuts",
    },
    {
      item: "curry",
      price: "£10.95",
      description: "text of description",
      image: "/images/menus/winter/citrus&ginger.png",
      tags: "VG",
      includes: "Nuts",
    },
  ];
  return (
    <div>
      <Container className="specials p-3 rounded-4">
        <h2 className="mt-3 text-center">Winter Specials</h2>
        <Row className="align-items-center p-4">
          <Col md={6}>
            <div>
              <img
                src="/images/menus/specials.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={4}>
            <p className="text-center">
              Try our latest winter specials, from warm hearted curry and
              mushroom stroganoff
            </p>
            <div>
              <Button
                variant="primary"
                className="border-0 w-100"
                onClick={handleShow}
              >
                View Specials
              </Button>

              <Modal show={show} onHide={handleClose} centered fullscreen>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  {special.map((dish, idk) => (
                    <div
                      key={idk}
                      className="d-flex gap-3 border-bottom p-3 mt-2"
                    >
                      <div>
                        <img
                          src={dish.image}
                          className="img-thumbnail"
                          style={{ width: "13rem", height: "auto" }}
                          alt=""
                        />
                      </div>
                      <div>
                        {" "}
                        <h3 className=" mb-1 text-decoration-underline">
                          {dish.item}
                        </h3>
                        <p className="text-muted mb-2">{dish.description}</p>
                        <div className="mt-2 fw-bold text-success">
                          {dish.price}
                        </div>
                        <p>
                          <span className="badge bg-warning text-dark me-2">
                            {dish.tags}
                          </span>
                          <br />
                          <span className="badge bg-info text-dark me-2">
                            {dish.includes}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SeasonSpecials;
