import React, { Component } from "react";

class Stats extends Component {
  render() {
    const { gpa, mc, suLeft } = this.props.stat;

    return (
      <div>
        <h1>
          <span className="badge bg-primary m-2">CAP: {gpa}</span>
          <span className="badge bg-secondary m-2">MC Taken: {mc}</span>
          <span className="badge bg-secondary m-2">S/U Left: {suLeft}</span>
        </h1>
      </div>
    );
  }
}

export default Stats;
