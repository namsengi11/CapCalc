import React, { Component } from "react";

class Module extends Component {
  contentBox = {
    padding: 5,
  };

  render() {
    return (
      <div
        style={{
          fontSize: 20,
          border: "2px solid black",
          margin: 5,
        }}
      >
        <span style={this.contentBox}>{this.props.mod.name}</span>
        <span style={this.contentBox}>{this.props.mod.mc}</span>
        <span style={this.contentBox}>{this.props.mod.su ? "Yes" : "No"}</span>
        <span style={this.contentBox}>{this.props.mod.grade}</span>
      </div>
    );
  }
}

export default Module;
