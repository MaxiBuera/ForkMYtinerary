import { FETCH_ALL_CITIES } from '../constants';

const fetchAllCities = (cities) => {
    return {
        type: FETCH_ALL_CITIES,
        cities: cities
    }
};

//POR QUE NO ANDA CON UNA PROMESA MAS??????
export const getAllTheCities = () => dispatch => {
    return fetch("/api/cities", { method: 'GET' })
        .then(response => response.json())
        .then(response => //console.log("Soy response en el action", response))
            // .then(response => {
            dispatch(fetchAllCities(response))
            // dispatch({
            //     type: FETCH_ALL_CITIES,
            //     cities: response
            // })
            // }
        )
        .catch(err => console.log(err));
}