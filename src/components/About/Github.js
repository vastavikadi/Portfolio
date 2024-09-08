import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <hr className="line pb-1"></hr>
      <GitHubCalendar
        username="vastavikadi"
        blockSize={15}
        blockMargin={5}
        color="#ffe310"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
