import React, { Component } from "react";
import CityItinerariesComponent from "../../components/CityItinerariesComponent/CityItinerariesComponent";
import { getItinerariesForACity } from "../../store/action-creators/itinerariesActions";
import { connect } from "react-redux";

class CityItinerariesContainer extends Component {
  async componentDidMount() {
    await this.props.getItineraries(this.props.city_name);
  }

  render() {
    return (
      <div>
        <CityItinerariesComponent
          city_name={this.props.city_name}
          itineraries={this.props.itineraries}
          cityData={this.props.itineraries.singleCityReducer.singleCity}
          userFavorites={this.props.itineraryFavorites}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city_name: ownProps.match.params.city_name,
    itineraries: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItineraries: cityName => dispatch(getItinerariesForACity(cityName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityItinerariesContainer);
