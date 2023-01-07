import React, { Component } from "react";
import Bentayga from "./Images/Bentayga.png";
import Audi from "./Images/Audi.jpg";
import Mercedes from "./Images/mercedes.png";
import Chevrolet from "./Images/Chevrolet.png";
import Bmw from "./Images/Bmw.png";
import Peugeot from "./Images/Peugeot.png";
import Card from "./card";

class CarCards extends Component {
  state = {};
  render() {
    const cards = [
      {
        name: "Audi Cayman S",
        transmission: "Automatic",
        seats: 3,
        price: "$1500/d",
        shape: "Coupe",
        direction: Audi,
      },
      {
        name: "Peugeot 508 Sport",
        transmission: "Manual",
        seats: 4,
        price: "$1000/d",
        shape: "Coupe",
        direction: Peugeot,
      },
      {
        name: "Chevrolet Camaro ZL1",
        transmission: "Automatic",
        seats: 2,
        price: "$2000/d",
        shape: "Coupe",
        direction: Chevrolet,
      },
      {
        name: "Mercedes Benz G Class",
        transmission: "Automatic",
        seats: 4,
        price: "$500/d",
        shape: "SUV",
        direction: Mercedes,
      },
      {
        name: "Bentley Bentayga",
        transmission: "Manual",
        seats: 4,
        price: "$1300/d",
        shape: "SUV",
        direction: Bentayga,
      },
      {
        name: "Bmw 340i",
        transmission: "Automatic",
        seats: 4,
        price: "$1800/d",
        shape: "Coupe",
        direction: Bmw,
      },
      {
        name: "Bmw 340i",
        transmission: "Automatic",
        seats: 4,
        price: "$1800/d",
        shape: "Coupe",
        direction: Bmw,
      },
      {
        name: "Bmw 340i",
        transmission: "Automatic",
        seats: 4,
        price: "$1800/d",
        shape: "Coupe",
        direction: Bmw,
      },
      {
        name: "Bmw 340i",
        transmission: "Automatic",
        seats: 4,
        price: "$1800/d",
        shape: "Coupe",
        direction: Bmw,
      },
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

            padding: "10px 20px 10px 20px"
          }}
        >
          {cards.map((car) => (
            <li
              style={{
                listStyle: "none",
                flex: "0 0 325px",
              }}
            >
              <Card
                name={car.name}
                transmission={car.transmission}
                seats={car.seats}
                price={car.price}
                shape={car.shape}
                direction={car.direction}
              ></Card>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CarCards;
