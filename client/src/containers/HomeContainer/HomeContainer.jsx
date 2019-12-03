import React, { Component } from "react";
import HomeComponent from "../../components/HomeComponent/HomeComponent";
import { connect } from "react-redux";
import { getAllTheCities } from "../../store/action-creators/cityActions";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      randomNum: []
    };
    this.randomNum = this.randomNum.bind(this);
  }
  async UNSAFE_componentWillMount() {
    await this.props.getAllCities();
    this.setState({
      data: this.props.ciudades.citiesReducer.citiesArray
    });
    await this.randomNum();
  }

  randomNum() {
    let arr = [];
    for (let i = 0; i < 12; ) {
      let r = Math.floor(Math.random() * 30);
      if (arr.indexOf(r) === -1) {
        arr.push(r);
        i++;
      }
    }
    this.setState({ randomNum: arr });
  }

  render() {
    return (
      <div>
        <HomeComponent cities={this.state.data} nums={this.state.randomNum} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ciudades: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCities: () => dispatch(getAllTheCities())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
