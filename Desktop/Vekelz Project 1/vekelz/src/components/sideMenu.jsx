import React, { Component } from "react";
import logo from "./MLogo.png";
import { NavLink, useLocation } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const currLocation = location.pathname.split("/").slice(1)[0];
  const data = [
    { name: "Dashboard", icon: "bi bi-grid", link: "" },
    { name: "Assets", icon: "bi bi-person-circle" },
    {
      name: "Booking",
      icon: "bi bi-car-front-fill",
      link: "booking",
    },
    { name: "Sell Cars", icon: "bi bi-bag-fill" },
    { name: "Buy Cars", icon: "bi bi-cart" },
    { name: "Services", icon: "bi bi-scissors" },
    { name: "Calendar", icon: "bi bi-calendar4-week" },
    { name: "Messages", icon: "bi bi-chat-left-text" },
  ];
  return (
    <div
      style={{
        width: "248px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          maxHeight: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ padding: "4px 18px", marginTop: "12px" }}>
            <img
              style={{
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
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginLeft: "35px",
              marginTop: "40px",
            }}
          >
            {data.map((item) => {
              const isActive = currLocation === item.link;
              return (
                <NavLink
                  to={item.link}
                  style={{
                    padding: "3px 3px 3px 10px",
                    display: "flex",
                    textDecoration: "none",
                    color: "black",
                    flexDirection: "row",
                    borderRadius: "8px",
                    backgroundColor: isActive ? "#F3F5F8" : "white",
                    gap: "10px",
                  }}
                  end
                >
                  <i class={item.icon}></i>
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            marginLeft: "35px",
            marginTop: "100px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <i class="bi bi-gear"></i>
            <span>Settings</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <i class="bi bi-box-arrow-left"></i>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
