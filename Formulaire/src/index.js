import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", subject: "", souvenir: "", sex: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      sex: event.target.name
    });
  }

  handleSubmit(event) {
    console.log(this.state.name);
    console.log(this.state.subject);
    console.log(this.state.sex);
    console.log(this.state.souvenir);
    event.preventDefault();
    // on met le const pour s'en servir pour le local storage
    const { name, subject, souvenir, sex } = this.state;
    localStorage.setItem("name", souvenir ? name : "");
    localStorage.setItem("subject", souvenir ? subject : "");
    localStorage.setItem("sex", souvenir ? sex : "");
    localStorage.setItem("souvenir", souvenir);
  }

  componentDidMount() {
    const souvenir = localStorage.getItem("souvenir") === "";
    const name = souvenir ? localStorage.getItem("name") : "";
    const subject = souvenir ? localStorage.getItem("subject") : "";
    const sex = souvenir ? localStorage.getItem("sex") : "";
    this.setState({ name, subject, souvenir, sex });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input name="name" type="string" onChange={this.handleInputChange} />
          Sujet:{" "}
          <input
            name="subject"
            type="string"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <input
            name="souvenir"
            checked={this.state.souvenir}
            onChange={this.handleInputChange}
            type="checkbox"
          />{" "}
          Se souvenir de moi
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="homme"
            checked={this.state.sex === "homme"}
            onChange={this.handleInputChange}
          />
          Homme
        </label>
        <label>
          <input
            type="radio"
            name="femme"
            checked={this.state.sex === "femme"}
            onChange={this.handleInputChange}
          />
          Femme
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);