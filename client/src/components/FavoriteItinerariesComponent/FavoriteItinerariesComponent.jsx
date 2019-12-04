import React, { Component } from "react";
import fav_off from "../CityItinerariesComponent/CityItinerariesComponentImages/fav_off.jpg";
import fav_on from "../CityItinerariesComponent/CityItinerariesComponentImages/fav_on.svg";

const imagesPath = {
    on: fav_on,
    off: fav_off  
}

class FavoriteItinerariesComponent  extends Component {
    state = {
        open: false
    }
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }
    
    getImageName = () => this.state.open ? 'on' : 'off'
    
        render() {
            const imageName = this.getImageName();
            return (
                <div>
                    <img style={{maxWidth: '50px'}} 
                        src={imagesPath[imageName]} 
                        onClick={this.toggleImage} 
                    />
                </div>
            );
        }
    }


export default FavoriteItinerariesComponent;