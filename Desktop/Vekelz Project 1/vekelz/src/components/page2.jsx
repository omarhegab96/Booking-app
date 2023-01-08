import React, { Component } from "react";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import CarCards from "./carCards";
import SideMenu from "./sideMenu";
import Row from "./row";
import Card2 from "./card2";
import CardList from "./cardList";
import Card3 from "./graph";
import Card4 from "./graph2";
import Card5 from "./carCard2";
import CarList from "./carCardList";

class Application2 extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F5F4F6",
          marginTop: "15px",
        }}
      >
        <div style={{ padding: "0 30px 0 30px" }}>
          <CardList />
        </div>
        <div
          style={{
            padding: "0 0 0 60px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card3 />
          <Card4 />
        </div>
        <div
          style={{
            padding: "0 25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: "32px",
          }}
        >
          <CarList />
        </div>
      </div>
    );
  }
}

export default Application2;
