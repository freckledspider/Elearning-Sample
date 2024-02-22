import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScienceIcon from "../images/scienceicon.png";
import LanguageArtsIcon from "../images/languageartsicon.png";

import Orion from "../images/Orion.jpg";
import Crab from "../images/Crab.jpg";
import Ring from "../images/Ring.jpg";
import Carina from "../images/Carina.jpg";
import Horsehead from "../images/Horsehead.jpg";

export default function Page1() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === "Answer 4") {
      setFeedbackMessage(
        "Correct! They have different colors, shapes, and amounts of brightness."
      );
    } else {
      setFeedbackMessage("Incorrect. Please try again.");
    }
  };

  return (
    <div>
      <Container>
        <Row style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Col></Col>
          <Col
            style={{
              backgroundColor: "#2ba0df",
              textAlign: "center",
              width: "100px",
              borderRadius: "1rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            <h5 style={{ paddingBottom: "0", marginBottom: "0" }}>
              Current Lesson
            </h5>
            <img src={ScienceIcon} width="25px" />
            <p style={{ color: "#fff", fontWeight: "bold" }}>Nebulae</p>
          </Col>

          <Col
            style={{
              backgroundColor: "#f5679b",
              textAlign: "center",
              width: "100px",
              borderRadius: "1rem",
            }}
          >
            <h5 style={{ paddingBottom: "0", marginBottom: "0" }}>
              Next Lesson
            </h5>
            <a href="/page2">
              <img src={LanguageArtsIcon} width="25px" />
            </a>
            <p>
              <a
                href="/page2"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                “The hands of a poor <i>campesina</i>”
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <div style={{ textAlign: "center" }}>
        <h1>Nebulae</h1>
        <h2>What are nebulae?</h2>
      </div>
      <Container style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <Row>
          <Col>
            <div>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/418202662/display_1500/stock-photo-the-helix-nebula-is-a-large-planetary-nebula-located-in-the-constellation-aquarius-elements-of-418202662.jpg"
                alt="The Helix Nebula is a large planetary nebula located in the constellation Aquarius."
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </div>
          </Col>
          <Col style={{ marginTop: "auto", marginBottom: "auto" }}>
            <div style={{ fontSize: "1.2vw" }}><p>
            <span style={{display: "inline-block", width: "20px"}}></span>Our solar system began in a nebula about 15 billion years ago. All the
        matter in the universe was packed into an incredibly small, dense area.
        A huge explosion happened, and everything scattered in all
        directions. Over billions of years, gravity pulled space dust and gases
        together into clouds. These huge, shining clouds are called nebulae
        — a single cloud is called a nebula. Many stars, like our sun, were born
        in the clouds of the nebulae. </p>
              <p><span style={{display: "inline-block", width: "20px"}}></span>The largest, most violent star-forming region known lies in the
              Tarantula Nebula. The bright knot of stars to the left of the
              center contains many of the largest, hottest, and brightest stars
              known. Click through the slideshow to see a variety of known
              nebulae found in our galaxy and beyond. </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "2rem" }}>
        <Row style={{ backgroundColor: "#BFD0DC", borderRadius: "1rem" }}>
          <Col
            style={{
              fontSize: "1.2vw",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: "3rem",
            }}
          >
            {/* Interactive Question */}
            <h3>Quiz Question</h3>
            <p>
              <b>Q:</b> What are some differences you notice between the nebulae in the
              pictures?
            </p>
            <Form onSubmit={handleSubmit}>
              {["radio"].map((type) => (
                <div key={`Interactive Question`} className="mb-3">
                  <Form.Check
                    type={type}
                    name="interactivequestion"
                    id={`Answer 1`}
                    label={`Colors`}
                    onChange={() => setSelectedAnswer("Answer 1")}
                  />
                  <Form.Check
                    type={type}
                    name="interactivequestion"
                    id={`Answer 2`}
                    label={`Shapes`}
                    onChange={() => setSelectedAnswer("Answer 2")}
                  />
                  <Form.Check
                    type={type}
                    name="interactivequestion"
                    id={`Answer 3`}
                    label={`Amounts of brightness`}
                    onChange={() => setSelectedAnswer("Answer 3")}
                  />
                  <Form.Check
                    type={type}
                    name="interactivequestion"
                    id={`Answer 4`}
                    label={`All of the above`}
                    onChange={() => setSelectedAnswer("Answer 4")}
                  />
                  <Button
                    as="input"
                    type="submit"
                    value="Submit"
                    style={{ marginTop: "1rem" }}
                  />
                </div>
              ))}
            </Form>
            {feedbackMessage && <div>{feedbackMessage}</div>}
          </Col>

          <Col
            style={{ marginTop: "auto", marginBottom: "auto", padding: "1rem" }}
          >
            {/* Slideshow */}
            <div>
              <Carousel interval={null}>
                <Carousel.Item>
                  <img src={Orion} alt="Orion Nebula" text="First slide" />
                  <Carousel.Caption>
                    <h3>Orion Nebula</h3>
                    <p>
                      NASA, ESA, M. Robberto (Space Telescope Science
                      Institute/ESA) and the Hubble Space Telescope Orion
                      Treasury Project Team [Public domain], via{" "}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg"
                        target="_blank"
                      >
                        Wikimedia Commons
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Crab}
                    alt="The Crab Nebula as seen by the Hubble Space Telescope (HST)."
                    text="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Crab Nebula</h3>
                    <p>
                      NASA, ESA, J. Hester and A. Loll (Arizona State
                      University) [Public domain], via{" "}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Crab_Nebula.jpg"
                        target="_blank"
                      >
                        Wikimedia Commons
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Ring}
                    alt="Hubble image of Ring Nebula, also known as Messier 57"
                    text="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Ring Nebula</h3>
                    <p>
                      NASA, ESA, and C. Robert O’Dell (Vanderbilt University)
                      [Public domain], via{" "}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Hubble_image_of_the_Ring_Nebula_(Messier_57).jpg"
                        target="_blank"
                      >
                        Wikimedia Commons
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Carina}
                    alt="The spectacular star-forming Carina Nebula has been captured in great detail by the VLT Survey Telescope at ESO’s Paranal Observatory"
                    text="Fourth slide"
                  />
                  <Carousel.Caption>
                    <h3>Carina Nebula</h3>
                    <p>
                      NASA, ESA, M. Robberto (Space Telescope Science
                      Institute/ESA) and the Hubble Space Telescope Orion
                      Treasury Project Team [Public domain], via{" "}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:The_spectacular_star-forming_Carina_Nebula_imaged_by_the_VLT_Survey_Telescope.jpg"
                        target="_blank"
                      >
                        Wikimedia Commons{" "}
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Horsehead}
                    alt="Astronomers have used NASA's Hubble Space Telescope to photograph the iconic Horsehead Nebula."
                    text="Fifth slide"
                  />
                  <Carousel.Caption>
                    <h3>Horsehead Nebula</h3>
                    <p>
                      ESA/Hubble [
                      <a
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                      >
                        CC BY 4.0
                      </a>
                      ], via{" "}
                      <a
                        href="https://commons.wikimedia.org/wiki/File:Hubble_Sees_a_Horsehead_of_a_Different_Color.jpg"
                        target="_blank"
                      >
                        Wikimedia Commons
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
