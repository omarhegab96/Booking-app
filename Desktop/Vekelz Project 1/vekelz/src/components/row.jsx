import React, { Component } from "react";

class Row extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginTop:'15px',
          font:'icon'
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div
            style={{
              borderRadius: "30px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
              padding: '0px 20px',
            //   width: "122px",
              height: "36px",
              alignItems: "center",
              justifyContent: 'space-around',
            }}
          >
            <span>New</span>
            <i class="bi bi-caret-down-fill"></i>
          </div>
          <div
            style={{
              borderRadius: "30px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              width: "143px",
              height: "36px",
              alignItems: "center",
              justifyContent: 'space-around',
            }}
          >
            <span>
            Porshe</span><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{
              backgroundColor: "white",
              borderRadius: "50%",
              height: "44px",marginRight:'20px',width:'44px',justifyContent:'center',alignItems:'center',display:'flex'}}><i style={{fontSize:'23px'}} className='bi bi-grid'></i></div>
           <div style={{
              backgroundColor: "#A162F7",
              borderRadius: "50%",
              height: "44px",marginRight:'20px',width:'44px',justifyContent:'center',alignItems:'center',display:'flex'}}><i style={{fontSize:'23px' ,color:'white'}} class="bi bi-sliders"></i></div>
        </div>
      </div>
    );
  }
}

export default Row;
