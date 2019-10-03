import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Results } from "./carreClick";

class Carre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ""
    };
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div id="block">
        <button
          className={"green box"}
          onClick={() => this.changeColor("green")}
        >
          Button
        </button>

        <button className="blue box" onClick={() => this.changeColor("blue")}>
          Button
        </button>

        <button className="red box" onClick={() => this.changeColor("red")}>
          Button
        </button>

        <button
          className="yellow box"
          onClick={() => this.changeColor("yellow")}
        >
          Button
        </button>
        <Results color={this.state.color} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carre />, rootElement);