import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LanguageArtsIcon from "../images/languageartsicon.png";
import MathIcon from "../images/mathicon.png";

import SixPencils from "../images/1.2_six_pencils.png";
import GroupPencils from "../images/1.2_six_pencils-grouped.png";
import TwoFourSixPencils from "../images/1.2_six_pencils-grouped-counted.png";
import TwentyPencils from "../images/1.2_twenty_pencils-grouped-counted.png";
import TwentyErasers from "../images/1.2_twenty_erasers-grouped_2rows.png";
import CountedErasers from "../images/1.2_twenty_erasers-grouped-counted.png";

export default function Page3() {
  const [open, setOpen] = useState(false);
  // State to manage the form input value
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Container>
        <Row style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Col
            style={{
              backgroundColor: "#f5679b",
              textAlign: "center",
              width: "100px",
              borderRadius: "1rem",
            }}
          >
            <h5 style={{ paddingBottom: "0", marginBottom: "0" }}>
              Previous Lesson
            </h5>
            <a href="/page2">
              <img src={LanguageArtsIcon} width="25px" />
            </a>
            <p>
              {" "}
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

          <Col
            style={{
              backgroundColor: "#47bb5e",
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
            <img src={MathIcon} width="25px" />
            <p style={{ color: "#fff", fontWeight: "bold" }}>
              Grouping and Counting
            </p>
          </Col>

          <Col></Col>
        </Row>
      </Container>

      <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
        <h1>Grouping and Counting</h1>
        <h2>Can you group and count the items? Let’s learn how.</h2>
      </div>

      <div
        style={{ textAlign: "center", fontSize: "2vw", marginBottom: "2rem" }}
      >
        <p>How many pencils do we have?</p>
        <div>
          <img src={SixPencils} alt="Six pencils" width="350" />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "2vw",
          marginLeft: "15%",
          marginRight: "15%",
          marginBottom: "2rem",
        }}
      >
        <p>
          It will help us to <b>group</b> the pencils. This means we will put
          them in groups. We <b>group</b> items that are the same. Here are the
          pencils in groups of 2.
        </p>
        <div>
          <img
            src={GroupPencils}
            alt="Six pencils grouped in groups of 2"
            width="350"
          />
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "2vw",
          marginLeft: "15%",
          marginRight: "15%",
          marginBottom: "2rem",
        }}
      >
        <p>
          We can <b>skip count</b> by 2 to count the pencils. This means we will
          count up by 2. Like this:
        </p>
        <div>
          <img
            src={TwoFourSixPencils}
            alt="Two, four, six pencils"
            width="30%"
          />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "2vw",
            marginLeft: "15%",
            marginRight: "15%",
            marginTop: "2rem",
          }}
        >
          <p>There are 6 pencils! Here is how to skip count to 20. Try it!</p>
        </div>
        <div>
          <img
            src={TwentyPencils}
            alt="Twenty pencils counted by two's"
            width="100%"
          />
        </div>
      </div>

      <h2 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
        Great work! We can group and skip count to count quickly!
      </h2>

      <div
        style={{
          borderRadius: "1rem",
          backgroundColor: "#BFD0DC",
          marginBottom: "2rem",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "2vw",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        >
          Let’s practice. Skip count by 2 and type your answer into the box
          below. Once you have your answer typed, click the answer button to
          check your answer.
        </div>

        {/* Text entry question. Feedback appears after button press */}

        <div
          style={{
            textAlign: "center",
            fontSize: "2vw",
            marginLeft: "15%",
            marginRight: "15%",
            marginTop: "2rem",
          }}
        >
          <p>
            <b>Q</b>: How many erasers do you see?
          </p>
          <div>
            <img src={TwentyErasers} alt="Twenty erasers" width="90%" />
          </div>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Form.Control
              style={{
                textAlign: "center",
                width: "250px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
              size="lg"
              type="number"
              placeholder="Type your answer."
              value={inputValue} // Bind state to input value
              onChange={(e) => setInputValue(e.target.value)} // Update state on change
            />
          </div>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            disabled={inputValue.trim() === ""} // Disable button if inputValue is empty
          >
            Submit
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text" style={{ marginTop: "2rem" }}>
              <div>
                There are 20 erasers.
                <div>
                  <img
                    src={CountedErasers}
                    alt="Twenty erasers counted by groups of two"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
