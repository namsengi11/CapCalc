import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" style={{ backgroundColor: "#F57505" }}>
        <div className="container-fluid">
          <span
            style={{ color: "white", fontSize: 30 }}
            className="navbar-brand mb-0 h1"
          >
            NUS CAP Calculator
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
