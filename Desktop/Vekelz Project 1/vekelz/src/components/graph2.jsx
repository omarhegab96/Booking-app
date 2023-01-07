import React, { Component } from "react";
import Heart from "./heart";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.css";
import peiChart1 from "./Images/pie chart.png";
import bar from "./Images/bar.png";
import graphs from "./Images/graph.png";


class Card4 extends Component {
  state = {};
  render() {
    const { name, graph, icon,color,textColor } = this.props;
    return (
      <React.Fragment>
        <div
          className="card"
          style={{
            width: "488px",
            height: "332px",
            display: "flex",
            flexDirection: "column",
            justifyContent: 'flex-start',
            padding:'0 35px',
            marginTop: "10px",
            marginLeft: "10px",
            borderColor: "white",
            backgroundColor: color,
          }}
        >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'flex-start',
                padding: "22px 0 0 0",
              }}
            >
                <div style={{fontSize:'20px',fontFamily:'sans-serif'}}>
                  <span style={{fontWeight:'700'}}>  Miles</span><span> Statistics</span>
                </div>
            </div>
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-between',
                // padding: "10px 22px",
                color:'white',
                fontSize:'24px',
                fontWeight:'400',
                fontFamily:'sans-serif',
                gap:'22px',
                marginTop:'27px'


              }}
            >
                
                  <div style={{color:'black',fontSize:'14px',fontWeight:'700',}}>
                      20 February 2022
                  </div>
                  <div style={{display:'flex',flexDirection:'row',backgroundColor:'#F5F4F6',borderRadius:'20px'}}>
                <div style={{borderRadius:'20px',backgroundColor:'#FF764C',width:'43px',height:'20px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'10px',color:'white'}}>Day</div>
                <div style={{borderRadius:'20px',width:'43px',height:'20px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'10px',color:'black'}}>Week</div>
                <div style={{borderRadius:'20px',width:'43px',height:'20px',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'10px',color:'black'}}>Month</div>
                </div>
                </div>
                <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "10px 0 0 0",
              }}
            >
                 <img
                  src={graphs}
                  width="418px"
                  height="223px"
                  alt="Cinque Terre"
                ></img>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card4;
