import React, { Component } from "react";
import AllCitiesComponent from "../../components/AllCitiesComponent/AllCitiesComponent";

export default class AllCitiesContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
          data: ""         
      };
      this.getData = this.getData.bind(this)
    };
    
  componentDidMount() {
      this.getData()
  }
  
  async getData() {
    await fetch('/api/cities')
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  render() {
    return (
      <div>
        <AllCitiesComponent 
        data={this.state.data}
        />
      </div>
    );
  }
}
