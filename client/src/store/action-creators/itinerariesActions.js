import { FETCH_ITINERARIES_FOR_A_CITY } from '../constants'

const fetchItinerariesForACity = (itineraries) => {
    return {
        type: FETCH_ITINERARIES_FOR_A_CITY,
        itineraries: itineraries
    }
};


export const getItinerariesForACity = (city_name) => dispatch => {
    return fetch(`/api/itineraries/${city_name}`, { method: 'GET' })
    .then(response => response.json())
    .then(response => dispatch(fetchItinerariesForACity(response))
    )
    .catch(err => console.log(err))
}
/*
export const favoriteItineraries = (city_name) => dispatch => {
    return fetch(`/api/itineraries/${city_name}`, { method: 'PUT' })
    .then(response => response.json())
    .then(response => dispatch(fetchItinerariesForACity(response))
    )
    .catch(err => console.log(err))
}*/
