import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Ideas from "./Components/Ideas";
import Books from "./Components/Books";
import { Route, Routes } from "react-router-dom";

import Main from "./Components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Routes>
        <Route path="/react-blog/" element={<Main state={this.state}/>} />
        <Route path="/react-blog/books" element={<Books state={this.state}/>} />
        <Route path="/react-blog/*" element={<Main state={this.state}/>} />
      </Routes>
    );
  }
}

export default App;
