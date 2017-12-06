import React, { Component } from "react";
import Container from "./Container";
import PlaceHolders from "./PlaceHolders";
import GuessSatatus from "./GuessSatatus";
import Counter from "./Counter"
import ContainerHeader from "./ContainerHeader";

import Zb from "./images/Zb.png";
import Auroranew from "./images/Auroranew.jpg";
import Cinderellanewpic from "./images/Cinderellanewpic.jpg";
import Snowwhitenew from "./images/Snowwhitenew.jpg"

class CardContainer extends Component {
  state = {
    guesses: "",
    score:"",
    result: "",
    random: 0
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick(id) {
   const min = 1;
   const max = 3;
   let rand = Math.floor(Math.random() * (max - min));

   this.setState({ random: this.state.random + rand });
 }

  render() {
    return (
      <div>
        <ContainerHeader>
          <GuessSatatus />
          <Counter />
        </ContainerHeader>

        <Container>
            <PlaceHolders>
              <img src={Zb} alt={"ZB"} id={0}  height={"242"} width={"190"} onClick={(ev) => this.handleClick(ev.target.id)}/>
              <div>The number is: {this.state.random}</div>
            </PlaceHolders>

            <PlaceHolders>
              <img src={Auroranew} alt={"Auroranew"} id={1} height={"242"} width={"190"}/>
            </PlaceHolders>
            <PlaceHolders>
              <img src={Cinderellanewpic} alt={"Cinderellanewpic"} id={2} height={"242"} width={"190"}/>
            </PlaceHolders>

            <PlaceHolders>
              <img src={Snowwhitenew} alt={"Snowwhitenew"} id={3} height={"242"} width={"190"}/>
            </PlaceHolders>
        </Container>
      </div>
    );
  }
}

export default CardContainer;
