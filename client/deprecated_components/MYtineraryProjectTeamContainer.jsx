import React, { Component } from "react";
import MYtineraryProjectTeamComponent from "../components/MYtineraryProjectTeamComponent";
import data from "../src/assets/data";

export default class MYtineraryProjectTeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      show: true
    };
    // this.btnCerrar = this.btnCerrar.bind(this)
  }

  // btnCerrar() {
  //   this.state.show ? this.setState({show: false}) : this.setState({show: true});
  // }

  render() {
    return (
      <div>
        <h3>
          Welcome to the Home Page of MYtinerary! Let me introduce our team:
        </h3>

        <MYtineraryProjectTeamComponent
          data={this.state.data}
          show={this.state.show}
          btnCerrar={this.btnCerrar}
        />
      </div>
    );
  }
}
