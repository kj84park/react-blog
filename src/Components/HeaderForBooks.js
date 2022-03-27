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
              <HashLink to="/react-blog/#home">HOME</HashLink>
            </li>

            <li>
              <HashLink to="/react-blog/#about">About</HashLink>
            </li>

            <li>
              <HashLink to="/react-blog/#resume">Career</HashLink>
            </li>

            <li>
              <HashLink to="/react-blog/#contact">Works</HashLink>
            </li>

            <li>
              <HashLink to="/react-blog/#ideas">Ideas</HashLink>
            </li>

            <li>
              <Link to="/react-blog/books">Review books</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderForBooks;
