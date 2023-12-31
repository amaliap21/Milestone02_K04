import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom'
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory,
  DefaultRoute,
  IndexLink,
} from "react-router";
import "../css/styles.css";
import { StyleSheet, css } from "aphrodite/no-important";

import RecycleCanLight from "../Images/trashmap.svg";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    const styles = StyleSheet.create({
      logoLinkStyle: {
        color: "white",
        textDecoration: "none",
      },

      logoImageStyle: {
        width: "240px",
        height: "80px",
      },
      gitHubLogoStyle: {
        width: "35px",
        height: "35px",
      },
    });

    console.log("Hi, ", this.props.page);

    return (
      <div id="fixedwidth">
        <div id="footer">
          <a href="Index.html">
            <img src={RecycleCanLight} className={css(styles.logoImageStyle)} />
          </a>
          <p>© Copyright 2023 Trashmap by Kelompok 4</p>
        </div>
      </div>
    );
  }
}

export default Footer;
