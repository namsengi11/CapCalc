import React, { Component } from "react";

class AddMod extends Component {
  state = {
    info: {
      name: "",
      mc: "",
      grade: "",
      su: "",
    },
  };

  inputField = {
    margin: 10,
  };

  handleNameChange = (event) => {
    const info = this.state.info;
    info.name = event.target.value;
    this.setState({ info: info });
  };

  handleMCChange = (event) => {
    const info = this.state.info;
    info.mc = event.target.value;
    this.setState({ info: info });
  };

  handleGradeChange = (event) => {
    const info = this.state.info;
    info.grade = event.target.value;
    this.setState({ info: info });
  };

  handleSUChange = (event) => {
    const info = this.state.info;
    info.su = event.target.value;
    this.setState({ info: info });
  };

  clearMod = () => {
    this.setState({
      info: {
        name: "",
        mc: "",
        grade: "",
        su: "",
      },
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            borderWidth: 2,
            border: "orange solid",
            width: "30vw",
            height: "43vh",
            margin: 10,
            padding: 5,
          }}
        >
          <h3>Add New Module</h3>
          <div>
            <div style={{ margin: 15 }}>
              <div style={this.inputField}>
                <div>
                  <h6>Enter Module Name</h6>
                </div>
                <div>
                  <input
                    value={this.state.info.name}
                    onChange={this.handleNameChange}
                  ></input>
                </div>
              </div>
              <div style={this.inputField}>
                <div>
                  <h6>Enter Module MC</h6>
                </div>
                <div>
                  <input
                    value={this.state.info.mc}
                    onChange={this.handleMCChange}
                  ></input>
                </div>
              </div>
              <div style={this.inputField}>
                <div>
                  <h6>Enter Module Grade</h6>
                </div>
                <div>
                  <input
                    value={this.state.info.grade}
                    onChange={this.handleGradeChange}
                  ></input>
                </div>
              </div>
              <div style={this.inputField}>
                <div>
                  <h6 style={{ margin: -3 }}>Indicate S/U Status</h6>
                  <h6>(Leave Blank If Not Used)</h6>
                </div>
                <div>
                  <input
                    value={this.state.info.su}
                    onChange={this.handleSUChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <button
            style={{ margin: 10 }}
            onClick={() => {
              this.props.handleAddMod(this.state.info);
              this.clearMod();
            }}
          >
            Add Module
          </button>
        </div>
      </div>
    );
  }
}

export default AddMod;
