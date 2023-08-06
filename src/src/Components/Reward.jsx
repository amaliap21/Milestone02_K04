import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

const { compose, withProps, lifecycle } = require("recompose");

class Reward extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const mainDivStyle = {
      width: "800px",
      backgroundColor: "white",
    };

    return (
      <div>
        <Header page={3} />
        <section id="headerImgPaint">
          <article>
            <div id="fixedWidth"></div>
          </article>

          <div class="parallax" data-velocity="-.3"></div>
          <div class="parallax" data-velocity="-.2" data-fit="525">
            <div id="fixedWidth">
              <div id="window">
                <div id="textWindow">
                  <h1> Tukar Sampahmu dengan Rupiah</h1>
                  <h1> </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#333" }}>
          <FormConversionRate />
          <Footer />
        </section>
      </div>
    );
  }
}

class FormConversionRate extends Component {
  state = {
    organicWeight: "",
    metalWeight: "",
    plasticWeight: "",
    haveSubmitted: false,
  };

  submittedWeight = {
    organic: "",
    metal: "",
    plastic: "",
  };

  styleInput = {
    width: "10em",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = (e) => {
    const regex = /^[0-9\b]+$/; // Only allow numeric characters and backspace (\b)
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.submittedWeight = {
      organic: Number(this.state.organicWeight),
      metal: Number(this.state.metalWeight),
      plastic: Number(this.state.plasticWeight),
    };
    this.setState({
      organicWeight: "",
      metalWeight: "",
      plasticWeight: "",
    });
    this.setState({ haveSubmitted: true });
  };

  render() {
    const { organicWeight, metalWeight, plasticWeight } = this.state;
    return (
      <section>
        <div>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={this.handleSubmit}
          >
            <ul>
              <li>
                <label for="organik">Berat sampah organik (gram):</label>
                <input
                  style={this.styleInput}
                  id="organik"
                  type="text"
                  value={this.state.organicWeight}
                  onChange={this.onChange}
                  name="organicWeight"
                  onKeyPress={this.handleKeyPress}
                />
                <br />
                <label for="organik" style={{ fontSize: "0.5em" }}>
                  Harga sampah organik adalah Rp500,- /100 gram
                </label>
              </li>
              <li>
                <label for="logam">Berat sampah logam (gram):</label>
                <input
                  style={this.styleInput}
                  id="logam"
                  type="text"
                  value={this.state.metalWeight}
                  onChange={this.onChange}
                  name="metalWeight"
                  onKeyPress={this.handleKeyPress}
                />
                <br />
                <label for="logam" style={{ fontSize: "0.5em" }}>
                  Harga sampah logam adalah Rp1.000,- /100 gram
                </label>
              </li>
              <li>
                <label for="plastik">Berat sampah plastik (gram):</label>
                <input
                  id="plastik"
                  style={this.styleInput}
                  type="text"
                  value={this.state.plasticWeight}
                  onChange={this.onChange}
                  name="plasticWeight"
                  onKeyPress={this.handleKeyPress}
                />
                <br />
                <label for="plastik" style={{ fontSize: "0.5em" }}>
                  Harga sampah plastik adalah Rp2.000,- /100 gram
                </label>
              </li>

              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </div>
        {this.state.haveSubmitted ? (
          <div>
            <text>Reward untuk pembuangan sampah</text>
            <ul>
              <li>organik: {this.submittedWeight.organic * 5 || 0} rupiah</li>
              <li>logam: {this.submittedWeight.metal * 10 || 0} rupiah</li>
              <li>plastik: {this.submittedWeight.plastic * 20 || 0} rupiah</li>
            </ul>
            <text>
              sehingga totalnya sebesar{" "}
              {(this.submittedWeight.organic * 5 || 0) +
                (this.submittedWeight.metal * 10 || 0) +
                (this.submittedWeight.plastic * 20 || 0)}{" "}
              rupiah.
            </text>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Reward;
