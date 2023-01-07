import React, { Component } from "react";
import Heart from "./heart";
import repeat from "./Images/repeat.png";
import car1 from "./Images/car.png";
import square from "./Images/square.png";

class Card5 extends Component {
  state = {};
  render() {
    const { name, recommend, backgroundColor, price, car, } = this.props;
    return (
      <React.Fragment>
        <div
          className="card"
          style={{
            width: "318px",
            height: "236px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginLeft: "10px",
            borderColor: "white",
            borderRadius: "15px",
            backgroundColor:backgroundColor
          }}
        >
          <div className="card-body">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: "12px",
                padding: "0 5px",
              }}
            >
              <img style={{ width: "20px", height: "20px" }} src={repeat}></img>
              <span style={{ fontSize: "16px" }}>{recommend}</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop:'12px'
              }}
            >
              <img style={{ width: "257px", height: "106px" }} src={car}></img>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                padding:'0 5px',
                marginTop:'12px'
              }}
            >
                {name}

            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-between',
                fontSize:'20px',
                padding:'12px 0'
              }}
            >
                <div style={{
                display: "flex",
                flexDirection: "row",
                gap:'18px'
              }}>
                    <img style={{width:'16px',height:'16px',marginTop:'3px'}} src={square}></img>
                    <span style={{fontSize:'14px'}}>132K</span>
                    <i style={{fontSize:'14px'}} class="bi bi-gear"></i>
                    <i style={{fontSize:'14px'}} class="bi bi-lightning-charge"></i>
                </div>

                <div style={{fontSize:'14px'}}>
                    {price}
                </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card5;
