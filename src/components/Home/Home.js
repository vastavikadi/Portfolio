import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Aurora from "../aurora/Aurora";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      {/* Aurora in the background */}
      <div className="aurora-container">
        <Aurora />
      </div>

      {/* Content that appears over the Aurora */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour!{" "}
                <span className="wave" role="img" aria-labelledby="wink">
                ✌
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Aditya Shukla</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
