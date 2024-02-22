import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ScienceIcon from "../images/scienceicon.png";
import LanguageArtsIcon from "../images/languageartsicon.png";
import MathIcon from "../images/mathicon.png";

import Avo1 from "../images/avo1.jpg";
import Avo2 from "../images/avo2.jpg";
import Avo3 from "../images/avo3.jpg";

export default function Page2() {
  const [open, setOpen] = useState(false);
  // State to manage the textarea input value
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
       <Container>
        <Row style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
         <Col style={{backgroundColor: "#2ba0df", textAlign: "center", width: "100px", borderRadius: "1rem"}}>
          <h5 style={{paddingBottom: "0", marginBottom: "0"}}>Previous Lesson</h5>
          <a href="/page1"><img src={ScienceIcon} width="25px" /></a>
          <p><a href="/page1" style={{color: "#fff", fontWeight: "bold", textDecoration: "none"}}>Nebulae</a></p></Col>

          <Col style={{backgroundColor: "#f5679b", textAlign: "center", width: "100px", borderRadius: "1rem", marginLeft: "1rem", marginRight: "1rem"}}>
          <h5 style={{paddingBottom: "0", marginBottom: "0"}}>Current Lesson</h5>
          <img src={LanguageArtsIcon} width="25px" />
          <p style={{color: "#fff", fontWeight: "bold"}}>“The hands of a poor <i>campesina</i>”</p>
          </Col>

          <Col style={{backgroundColor: "#47bb5e", textAlign: "center", width: "100px", borderRadius: "1rem"}}>
          <h5 style={{paddingBottom: "0", marginBottom: "0"}}>Next Lesson</h5>
          <a href="/page3"><img src={MathIcon} width="25px" /></a>
          <p><a href="/page3" style={{color: "#fff", fontWeight: "bold", textDecoration: "none"}}>Grouping and Counting</a></p></Col>
        </Row>
      </Container>
      
      <div style={{ textAlign: "center" }}>
      <h1>
        "The hands of a poor <i>campesina</i>"
      </h1>
      <h2>What do Esperanza’s hands suggest about her whole life?</h2>
      </div>

      <div style={{marginLeft: "10%", marginRight: "10%", marginTop: "2rem", marginBottom: "2rem", fontSize: "1.2vw"}}>
        Sometimes, an author uses a single scene to communicate a big idea that
        the author doesn’t want readers to miss. Pam Muñoz Ryan creates such as
        scene at the beginning of “<i>Los Aguacates</i>: Avocados.” This scene
        is brief, but it develops an important <b>theme</b>, or important idea
        about human experience, in the novel and helps to move the plot forward.
      </div>

      {/* Images Across Page */}
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <img
                src={Avo1}
                alt="Avocado dip or guacamole in wooden bowl, photographed overhead with natural light"
                style={{ width: "100%", height: "100%", borderRadius: "1rem"}}
              />
            </Col>
            <Col>
              {" "}
              <img
                src={Avo2}
                alt="Hands holding tree growing on cracked earth"
                style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
              />
            </Col>
            <Col>
              <img src={Avo3} alt="Hands with avocado" style={{ width: "100%", height: "100%", borderRadius: "1rem"}}/>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{marginLeft: "10%", marginRight: "10%", marginTop: "2rem", marginBottom: "2rem", fontSize: "1.2vw"}}>
        Read the opening pages of “<i>Los Aguacates</i>: Avocados” closely
        again. Then, review the details from the scene listed below before
        answering a question about what the scene adds to the novel’s plot and
        themes.
      </div>

      {/* Accordion Interactive */}

<div style={{marginLeft: "10%", marginRight: "10%", marginTop: "2rem", marginBottom: "2rem", fontSize: "1.2vw"}}>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Working Hands</Accordion.Header>
          <Accordion.Body>
            After tying grape canes for days in the cold, foggy weather,
            Esperanza soaks her tired hands in warm water and realizes
            something: “she no longer recognized them as her own.” They are so
            beaten up and swollen that they seem like “the hands of a very old
            man.” How might this realization make her feel?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Fortunate Hands</Accordion.Header>
          <Accordion.Body>
            Hortensia says that they are “lucky” to have avocados, which are not
            in season. Friends brought the fruits from Los Angeles. Esperanza is
            lucky, too, to have Hortensia’s help and friendship. How might
            Esperanza feel as she watches Hortensia make the lotion, as she did
            for Mama when they were back in Mexico?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Remembering Hands</Accordion.Header>
          <Accordion.Body>
            Seeing her hands coated in Hortensia’s homemade avocado lotion
            brings memories to Esperanza’s mind: Mama’s smooth, soft hands and
            how quickly she worked with the crochet hook; Mama’s grace and
            presence; Mama’s bright, confident laughter. What mixed emotions
            might these memories cause?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <i>Campesina’s</i>&nbsp;Hands
          </Accordion.Header>
          <Accordion.Body>
            A <i>campesina</i> is a girl or woman who works the farms. As
            Esperanza applies another coat of avocado lotion, she admits the
            truth: she will never again have hands like those of “a wealthy
            woman from El Rancho de las Rosas.”
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>

      {/* Interactive Question */}

      <div style={{padding: "1rem", borderRadius: "1rem", backgroundColor: "#BFD0DC", marginLeft: "10%", marginRight: "10%", marginTop: "2rem", marginBottom: "2rem", fontSize: "1.2vw"}}>
        
        <h4>Quiz Question</h4>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <p>Q: What important idea does Esperanza’s realization about her
              hands develop? As you respond, think about the long journey she is
              on as she learns to live without Papa and worries about having to
              live without Mama and Abuelita.</p>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Type your answer here."
              rows={3}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{fontSize: "1.2vw"}}
            />
          </Form.Group>
        </Form>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          disabled={inputValue.trim() === ""}
        >
          Submit
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" style={{paddingTop: "1rem"}}>
            <p>A: In this scene, Esperanza’s realization that her hands will never
            again be soft and supple points to an important idea: the future she
            had always imagined, as a wealthy <i>patrona</i> of a big ranch in
            Mexico, is no longer a possibility. She expected that she would grow
            up to be the lady of the ranch, as her mother had been. When she
            admits that she is now “a poor <i>campesina</i>,” Esperanza is
            letting go of that future and accepting other possible futures
            instead. It’s as if she’s reached an important milestone in her
            journey and now fully understands that there’s no going back.</p>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
