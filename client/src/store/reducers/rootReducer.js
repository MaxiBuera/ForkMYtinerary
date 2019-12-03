import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import singleCityReducer from './singleCityReducer'
import itinerariesForACity from './itinerariesReducer'


const rootReducer = combineReducers({citiesReducer, singleCityReducer, itinerariesForACity});


export default rootReducer;