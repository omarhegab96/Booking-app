import React, { Component } from "react";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import CarCards from "./carCards";
import SideMenu from "./sideMenu";
import Row from "./row";

class Application extends Component {
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
        <h1
          style={{
            fontWight: "700",
            fontSize: "30px",
            lineHeight: "39px",
            justifyContent: "flex-start",
            fontFamily: "",
            fontStyle: "normal",
            maxHeight: "100%",
            marginTop: "30px",
            marginLeft: "30px",
          }}
        >
          Booking
        </h1>
        <Row />
        <CarCards></CarCards>
      </div>
    );
  }
}

export default Application;
