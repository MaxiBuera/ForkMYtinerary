import React, { Component } from "react";

class FavoriteItinerariesComponent extends Component{

    constructor(props) {
        super(props);
 
       this.state = {
            image_path: 'your image url here'
       }
    }

    render(){
       

        function ActionLink(){
            function handleClick(e){
                e.preventDafualt();
                console.log("Aver");
            }

        }

        return(
            <div>

            </div>
        );
    }
}

export default FavoriteItinerariesComponent;