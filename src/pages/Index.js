import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ScienceIcon from "../images/scienceicon.png";
import LanguageArtsIcon from "../images/languageartsicon.png";
import MathIcon from "../images/mathicon.png";

import kidsInClass from "../images/kidsinclass.jpg";

export default function Index() {
  return (
    <div>
      <div className="welcomeDiv">
    <Container>
      <Row style={{display: "table"}}>
        <Col style={{width: "50%", textAlign: "center", display: "table-cell", verticalAlign: "middle"}}>
          <h1>Welcome back!</h1>
          <a href="/page1"><Button>Continue Lessons</Button></a>
        </Col>
        <Col><img style={{width: "100%", borderRadius: "1rem"}} src={kidsInClass}/></Col>
      </Row>
    </Container>
      </div>
      <div className="lessonsDiv">
      <Container>
      <Row>
        <Col className="science">
          <img src={ScienceIcon} alt="Science Icon" style={{width: "25%"}}/>
          <h4>Science</h4>

          <p>
            Part 1<br/>
            <a href="/page1">Nebulae</a>
          </p>
          </Col>

        <Col className="languageArts">
          <img src={LanguageArtsIcon} alt="Language Arts Icon" style={{width: "25%"}}/>
          <h4>Language Arts</h4>
          <p>
          Part 2<br/>
          <a href="/page2">“The hands of a poor <i>campesina</i>”</a>
          </p>
          </Col>
        <Col className="math">
          <img src={MathIcon} alt="Math Icon" style={{width: "25%"}}/>
          <h4>Math</h4>
          <p>
          Part 3<br/>
          <a href="/page3">Grouping and Counting</a></p>
          </Col>
      </Row>
    </Container>
      </div>
    </div>
  );
}

