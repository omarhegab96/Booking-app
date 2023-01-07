import React, { Component } from 'react';
import Card2 from './card2';
import circle1 from "./Images/Component 1.png";
import peiChart1 from "./Images/pie chart.png";
import peiChart2 from "./Images/pie chart2.png";
import peiChart3 from "./Images/pie chart3.png";
import peiChart4 from "./Images/pie chart4.png";
import circle2 from "./Images/Frame 15.png";
import circle3 from "./Images/Frame 17.png";
import circle4 from "./Images/Frame 16.png";




class CardList extends Component {
    render() { 
     const pieCards =   [
            {icon: circle1 ,name:'Energy' ,graph:peiChart1,color:'#A162F7',textColor:'white'},
            {icon: circle2 ,name:'Range' ,graph:peiChart2,color:'white',textColor:'black'},
            {icon: circle3 ,name:'Break fluid' ,graph:peiChart3,color:'white',textColor:'black'},
            {icon: circle4 ,name:'Tire Wear' ,graph:peiChart4,color:'white',textColor:'black'},
        ];
        return (
            <div
              style={{
                backgroundColor: "#F5F4F6",
                maxHeight: "100vw",
                maxWidth: "100vw",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "30px",
                  justifyContent:'space-between',
                //   padding: "10px 20px 10px 20px"
                }}
              >
                {pieCards.map((card) => (
                  <li
                    style={{
                      listStyle: "none",
                      flex: "0 0 232px",
                    }}
                  >
                    <Card2
                      name={card.name}
                      icon={card.icon}
                      graph={card.graph}
                      color={card.color}
                      textColor={card.textColor}
                      
                    ></Card2>
                  </li>
                ))}
              </ul>
            </div>
          );
    }
}
 
export default CardList;