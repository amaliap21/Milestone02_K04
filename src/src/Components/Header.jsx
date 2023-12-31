import React, { Component } from "react";
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

import RecycleCanLogo from "../Images/trashmap.svg";

class Header extends Component {
  constructor() {
    super();
  }

  chooseHeader() {
    if (this.props.page == 0) {
      return (
        <ul>
          <li className="active">
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/article">
              <span>Article</span>
            </Link>
          </li>
          <li>
            <Link to="/locateus">
              <span>Locate Us</span>
            </Link>
          </li>
          <li>
            <Link to="/Reward">
              <span>Reward</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
        </ul>
      );
    } else if (this.props.page == 1) {
      return (
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/article">
              <span>Article</span>
            </Link>
          </li>
          <li>
            <Link to="/locateus">
              <span>Locate Us</span>
            </Link>
          </li>
          <li>
            <Link to="/Reward">
              <span>Reward</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
        </ul>
      );
    } else if (this.props.page == 2) {
      return (
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/article">
              <span>Article</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/locateus">
              <span>Locate Us</span>
            </Link>
          </li>
          <li>
            <Link to="/reward">
              <span>Reward</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
        </ul>
      );
    } else if (this.props.page == 3) {
      return (
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/article">
              <span>Article</span>
            </Link>
          </li>
          <li>
            <Link to="/locateus">
              <span>Locate Us</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/reward">
              <span>Reward</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
        </ul>
      );
    } else if (this.props.page == 4) {
      return (
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/article">
              <span>Article</span>
            </Link>
          </li>
          <li>
            <Link to="/locateus">
              <span>Locate Us</span>
            </Link>
          </li>
          <li>
            <Link to="/reward">
              <span>Reward</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
        </ul>
      );
    } else if (this.props.page == 5) {
      return (
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/article">
              <span>Article</span>
            </Link>
          </li>
          <li>
            <Link to="/locateus">
              <span>Locate Us</span>
            </Link>
          </li>
          <li>
            <Link to="/reward">
              <span>Reward</span>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <span>About</span>
            </Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    const styles = StyleSheet.create({
      logoLinkStyle: {
        color: "white",
        textDecoration: "none",
      },

      logoImageStyle: {
        width: "324px",
        height: "108px",
        position: "fixed",
      },
    });

    // console.log("Hi, ", this.props.page);

    return (
      <div id="header">
        <div id="fixedWidth">
          <div id="Logoback"></div>

          <div id="logodiv">
            <a className={css(styles.logoLinkStyle)}>
              <Link to="/">
                {" "}
                <img
                  src={RecycleCanLogo}
                  alt="Image Not Found"
                  className={css(styles.logoImageStyle)}
                />{" "}
              </Link>
            </a>
          </div>

          <div id="cssmenu">
            {/* <Link to='/'><span>Home</span></Link>&nbsp;
            <Link to='/locateus'><span>Home</span></Link> */}

            {/* <li><Link to='/article'><span>article</span></Link>&nbsp</li>
            <li><Link to='/locateus'><span>Batteries</span></Link>&nbsp</li>
            <li><Link to='/Reward'><span>Reward</span></Link>&nbsp</li>
            <li><Link to='/About'><span>About</span></Link>&nbsp</li> */}

            {this.chooseHeader()}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
