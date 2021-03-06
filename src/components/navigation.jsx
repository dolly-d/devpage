import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    let quote = this.props.qod.contents && this.props.qod.contents.quotes[0].quote
    let author = this.props.qod.contents && this.props.qod.contents.quotes[0].author
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              {quote} 
            </a>{" "}
            <p>{author}</p>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1ZY_EPeRy4lJpDhCQBdHM-DOgFNdI2rOO4ZQz7e08fOc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
