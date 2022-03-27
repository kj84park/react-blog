import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class HeaderForBooks extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        {/*<ParticlesBg type="circle" bg={true} />*/}

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <HashLink to="/#home">HOME</HashLink>
            </li>

            <li>
              <HashLink to="/#about">About</HashLink>
            </li>

            <li>
              <HashLink to="/#resume">Career</HashLink>
            </li>

            <li>
              <HashLink to="/#contact">Works</HashLink>
            </li>

            <li>
              <HashLink to="/#ideas">Ideas</HashLink>
            </li>

            <li>
              <Link to="/books">Review books</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderForBooks;
