import React, { Component } from "react";
import Module from "./Module";

class Modules extends Component {
  render() {
    return this.props.mods.map((mod) => <Module key={mod.name} mod={mod} />);
  }
}

export default Modules;
