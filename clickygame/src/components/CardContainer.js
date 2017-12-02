import React, { Component } from "react";
import Container from "./Container/";
import Row from "./Row/";
import Col from "./Col/";
import GuessSatatus from "./GuessSatatus/";
import Counter from "./Counter/"
import ContainerHeader from "./ContainerHeader/";

// import Panel from "./Panel";
// import Card from "./Card"

class CardContainer extends Component {
  // state = {
  //   result: {},
  //   search: ""
  // };

  render() {
    return (
      <div>
        <ContainerHeader>
          <GuessSatatus />
          <Counter />
        </ContainerHeader>

        <Container>
          <Row>
            <Col size="md-4">
            </Col>
            <Col size="md-4">
            </Col>
            <Col size="md-4">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardContainer;
