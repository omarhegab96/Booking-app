import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import omarHegab from "./Images/omar.jpg";


class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "row",
          maxWidth: "100%",
          height:'46px',
          marginTop: "16px",
          marginLeft:'30px',
          alignItems: "center",
        }}
        className="navbar-expand-lg navbar-light"
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form
            style={{ position: "relative" }}
            className="form-inline my-2 my-lg-0"
          >
            <i
              style={{
                position: "absolute",
                marginTop: "2px",
                marginLeft: "319px",
                fontSize:'27px'
              }}
              className="bi bi-search"
            ></i>
            <input
              style={{
                backgroundColor: "#F5F4F6",
                width: "358px",
                height: "46px",
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "21px",
              }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search or type"
              aria-label="Search"
            ></input>
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            marginRight: "25px",
          }}
        >
            
<span  style={{
                position: "absolute",
                marginTop: "-20px",
                marginLeft: "-5px",
                fontSize: '3rem',
                color: 'rgb(255, 0, 0)'

              }} className="bi bi-dot"></span>
          <i
            style={{ fontSize: "27px", marginTop: "12px",marginRight:'2px' }}
            className="bi bi-bell fa-lg"
          ></i>
          <img
            src={omarHegab}
            width="50"
            height="50"
            className="rounded-circle"
            alt="Cinque Terre"
          ></img>
        </div>
      </nav>
    );
  }
}

export default NavBar;
