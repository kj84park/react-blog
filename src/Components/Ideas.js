import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;

class Ideas extends Component {
  render() {
    if (!this.props.data) return null;

    const niceProjects = this.props.data.links.map(function (embed) {
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <iframe
              title={embed.title}
              src={embed.src}
              width="500"
              height="405"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
            />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>I love these brilliant ideas!</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {niceProjects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Ideas;
