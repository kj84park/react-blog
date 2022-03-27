import React, { Component } from "react";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Ideas from "./Ideas";
import Header from "./Header";
import Footer from "./Footer";

const Main = (props) => {
  return (
    <div className="App">
      <Header data={props.state.resumeData.main} />
      <About data={props.state.resumeData.main} />
      <Resume data={props.state.resumeData.resume} />
      <Contact data={props.state.resumeData.main} />
      {/*<Portfolio data={this.state.resumeData.portfolio} />*/}
      <Ideas data={props.state.resumeData.ideas} />
      <Footer data={props.state.resumeData.main} />
    </div>
  );
};

export default Main;
