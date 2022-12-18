import React, { Component } from "react";
import Stats from "./Stats";
import Modules from "./Modules";

class ModStatus extends Component {
  state = {
    mods: [
      {
        name: "CS2040C",
        mc: 4,
        grade: "A",
        su: false,
      },
      {
        name: "CS2030",
        mc: 4,
        grade: "A",
        su: false,
      },
      {
        name: "CS1231",
        mc: 4,
        grade: "A+",
        su: false,
      },
      {
        name: "EG2501",
        mc: 4,
        grade: "A-",
        su: false,
      },
      {
        name: "PF1101",
        mc: 4,
        grade: "B",
        su: true,
      },
    ],
    stat: {
      gpa: 1,
      mc: 0,
      suLeft: 8,
    },
  };

  getNumGrade(c) {
    if (c === "A+" || c === "A") {
      return 5;
    } else if (c === "A-") {
      return 4.5;
    } else if (c === "B+") {
      return 4;
    } else if (c === "B") {
      return 3.5;
    } else if (c === "B-") {
      return 3;
    } else if (c === "C+") {
      return 2.5;
    } else if (c === "C") {
      return 2;
    } else if (c === "C-") {
      return 1.5;
    } else if (c === "D+") {
      return 1;
    } else if (c === "D") {
      return 0.5;
    } else if (c === "F") {
      return 0;
    }
  }

  getStat = () => {
    const totalGrade = this.state.mods
      .map((mod) => this.getNumGrade(mod.grade) * mod.mc)
      .reduce((x, y) => x + y);

    const totalMC = this.state.mods
      .map((mod) => mod.mc)
      .reduce((x, y) => x + y);

    const cap = totalGrade / totalMC;

    this.setState({
      ...this.state,
      stat: {
        gpa: cap,
        mc: totalMC,
        suLeft: 8,
      },
    });
  };

  componentDidMount() {
    this.getStat();
  }

  render() {
    return (
      <div>
        <Stats stat={this.state.stat} />
        <Modules mods={this.state.mods} />
      </div>
    );
  }
}

export default ModStatus;
