import React, { Component } from "react";
import Bentayga from "./Images/Bentayga.png";
import Audi from "./Images/Audi.jpg";
import Mercedes from "./Images/mercedes.png";
import Chevrolet from "./Images/Chevrolet.png";
import Bmw from "./Images/Bmw.png";
import Peugeot from "./Images/Peugeot.png";
import Card from "./card";
import Card5 from "./carCard2";
import car1 from "./Images/car.png";
import car2 from "./Images/car2.png";
import car3 from "./Images/car3.png";


class CarList extends Component {
  state = {};
  render() {
    const carList = [
      {
        name: "Mini Cooper",
        recommend:'64% Recommended',
        price:'$32/h',
        car:car1,
        backgroundColor:'#E1DFA4'
      },
      {
        name: "Porsche 911 Carrera",
        recommend:'74% Recommended',
        price:'$28/h',
        car:car2,
        backgroundColor:'#E3ECF1'
      },
      {
        name: "peugeot 508",
        recommend:'80% Recommended',
        price:'$30/h',
        car:car3,
        backgroundColor:'#F4E3E5'
      },
      
    ];
    return (
      <div
        style={{
          maxHeight: "100vw",
          maxWidth: "100vw",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent:'flex-start',
          }}
        >
          {carList.map((card) => (
            <li
              style={{
                listStyle: "none",
                flex: "0 0 318px",
              }}
            >
              <Card5
                name={card.name}
                recommend={card.recommend}
                backgroundColor={card.backgroundColor}
                price={card.price}
                car={card.car}
              ></Card5>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CarList;
