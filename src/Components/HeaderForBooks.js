import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ParticlesBg from "particles-bg";

class HeaderForBooks extends Component {
  render() {
    if (!this.props.data) return null;
    return (
      <header id="home">
        <nav id="nav-wrap">
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
