import React, { Component } from "react";
import Heart from "./heart";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.css";

class Card extends Component {
  state = {};
  render() {
    const { name, transmission, seats, price, shape, direction } = this.props;
    return (
      <React.Fragment>
        <div
          className="card"
          style={{
            width: "325px",
            height: "230px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "10px",
            borderColor: "white",
            borderRadius:'15px'
          }}
        >
          <div className="card-body">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h5
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
                className="card-title"
              >
                {name}
              </h5>
              <Heart></Heart>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{shape}</h6>
            <div>
              <img
                src={direction}
                width="233px"
                height="120px"
                alt="Cinque Terre"
              ></img>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "19px",
                  marginLeft: "-40px",
                }}
              >
                <div
                  style={{
                    marginTop: "-1px",
                    display:'flex',
                    flexDirection:'row',
                    gap:'6px'
                  }}
                >
                  <i
                    style={{ color: "#A162F7", fontSize: "large",marginTop:'-1px' }}
                    className="bi bi-person"
                  ></i>
                  <span style={{ color: "#72767C" }}>{seats}</span>
                </div>
                <div>
                  <i style={{ color: "#A162F7" }} className="bi bi-square"></i>{" "}
                  <span style={{ color: "#72767C" }}>{transmission}</span>
                </div>
              </div>
              <div style={{ marginRight: "-40px", fontWeight: "bold" }}>
                {price}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
