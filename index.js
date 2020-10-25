import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Lottie from "react-lottie";
import * as animFav from "./fav.json";
import * as animTable from "./table.json";
import * as animCar from "./car.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    const buttonStyle = {
      display: "block",
      margin: "10px auto"
    };

    const carOptions = {
      loop: true,
      autoplay: true,
      animationData: animCar,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie options={carOptions} height={500} width={500} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
