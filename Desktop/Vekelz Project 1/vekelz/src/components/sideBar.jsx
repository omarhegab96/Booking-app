import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "./MLogo.png";

class SideBar extends Component {
  render() {
    return (
      <div style={{ maxHeight: "100%"}}>
        <nav
          id="sidebarMenu"
          class="collapse d-lg-block sidebar collapse bg-white"
          style={{ width: "248px",height:'1024px' }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent:'space-between',
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            // className="position-sticky"
          >
            <div style={{maxHeight:'100%'}} className="list-group list-group-flush mx-3 mt-4">
                <a
                  href="add"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                >
                  <span style={{ marginLeft: "-27px", marginTop: "8px" }}>
                    <img style={{
                        marginTop: "-9px",
                      }}
                      src={logo}
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="Cinque Terre"
                    ></img>
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "24px",
                        marginTop: "6px",
                      }}
                    >
                      Motiv.
                    </span>
                  </span>
                </a>
                <a
                  href="add"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                >
                  <i class="bi bi-grid"></i>
                  <span>Dashboard</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                  href="dsad"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-person-circle"></i>
                  <span>Assets</span>
                </a>
                <a
                  href="sdad"
                  style={{
                    backgroundColor: "#F3F5F8",
                    color: "#5F6165",
                    borderColor: "gainsboro",
                    display: "flex",
                    flexDirection: "row",
                    gap: "9px",
                    borderColor:'#fff'
                  }}
                  className="list-group-item list-group-item-action py-2 ripple active"
                >
                  <i class="bi bi-car-front-fill"></i>
                  <span>Booking</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                  href="dasd"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-bag-fill"></i>
                  <span>Sell Cars</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px" ,borderColor:'#fff'}}
                  href="dasdas"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-cart"></i>
                  <span>Buy Cars</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                  href="addd"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-scissors"></i>
                  <span>Services</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px" ,borderColor:'#fff'}}
                  href="sadas"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-calendar4-week"></i>
                  <span>Calendar</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                  href="dasda"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-chat-left-text"></i>
                  <span>Messages</span>
                </a>
                  </div>
              </div>
              <div className="list-group list-group-flush mx-3 mt-4">
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px" ,borderColor:'#fff'}}
                  href="dasda"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-gear"></i>
                  <span>Settings</span>
                </a>
                <a
                  style={{ display: "flex", flexDirection: "row", gap: "9px",borderColor:'#fff' }}
                  href="dasda"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i class="bi bi-box-arrow-left"></i>
                  <span>Log Out</span>
                </a>
              </div>
        </nav>
      </div>
    );
  }
}

export default SideBar;
