import React, { Component } from "react";

class Heart extends Component {
  state = { color: "fa fa-heart-o" };
  changeColor = () => {
    const blackHeart =
      this.state.color === "fa fa-heart-o" ? "fa fa-heart text-danger" : "fa fa-heart-o";
    this.setState({ color: blackHeart });
  };
  render() {
    const { changeColor } = this;
    return <i onClick={changeColor} className={this.state.color}></i>;
  }
}

export default Heart;
