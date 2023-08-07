import React, { Component } from "react";

import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  IndexLink,
} from "react-router";

// import { Switch, Route } from 'react-router-dom';

import Home from "./Home";
import Article from "./Article";
import LocateUs from "./LocateUs";
import Reward from "./Reward";
import About from "./About";
import Terms from "./Terms";

// article routes
import article1 from "./TrashGuide/Articles/Article1";
import article2 from "./TrashGuide/Articles/Article2";
import article3 from "./TrashGuide/Articles/Article3";
import article4 from "./TrashGuide/Articles/Article4";
import article5 from "./TrashGuide/Articles/Article5";
import article6 from "./TrashGuide/Articles/Article6";
import "../css/styles.css";
import "../css/TrashGuide.css";

// App.jsx is not 'actually necessary' but it follows accepted react architecture by always having an App.jsx main renderer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  render() {
    return (
      <Router history={hashHistory}>
        <IndexRoute component={Home} />

        {/* <Route exact path = "/" component={() => (<Home page={0} />)} />
                  <Route exact path = "/Ewaste" component={() => (<Ewaste page={1} />)} />
                  <Route path = "/Battery" component={() => (<Battery page={2} />)}/> */}
        {/* <Route path = "/Paint" component={() => (<Paint page={3} />)} />
                  <Route path = "/About" component={() => (<About page={4} />)} />
                  <Route path = "/Terms" component={() => (<Ewaste page={5} />)} /> */}

        <Route path="/" component={Home} />
        <Route path="/locateus" component={LocateUs} />
        <Route path="/article" component={Article} />
        <Route path="/Reward" component={Reward} />
        <Route path="/about" component={About} />
        <Route path="/terms_privacy" component={Terms} />
        <Route path="/Article1" component={article1} />
        <Route path="/Article2" component={article2} />
        <Route path="/Article3" component={article3} />
        <Route path="/Article4" component={article4} />
        <Route path="/Article5" component={article5} />
        <Route path="/Article6" component={article6} />

        <Route path="/about" component={About} />
        <Route path="/terms_privacy" component={Terms} />
      </Router>
    );
  }
}

export default App;
