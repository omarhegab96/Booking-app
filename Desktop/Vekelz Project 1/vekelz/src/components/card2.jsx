import React, { Component } from "react";
import Heart from "./heart";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.css";
import peiChart1 from "./Images/pie chart.png";
import circle from "./Images/Component 1.png";

class Card2 extends Component {
  state = {};
  render() {
    const { name, graph, icon,color,textColor } = this.props;
    return (
      <React.Fragment>
        <div
          className="card"
          style={{
            width: "232px",
            height: "266px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            marginTop: "10px",
            marginLeft: "10px",
            borderColor: "white",
            backgroundColor: color,
            borderRadius:'15px'
          }}
        >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "22px 0 0 0",
              }}
            >
                <img
                style={{width: "38px",
                height: "38px",}}
                  src={icon}
                  width="13.41px"
                  height="19.9px"
                  alt="Cinque Terre"
                ></img>
            </div>
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "10px 0 0 0",
                color:textColor,
                fontSize:'24px',
                fontWeight:'400',
                fontFamily:'sans-serif'

              }}
            >
                {name}
                </div>
                <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "30px 0 0 0",
              }}
            >
                 <img
                  src={graph}
                  width="112px"
                  height="112px"
                  alt="Cinque Terre"
                ></img>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card2;
