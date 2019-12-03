import { FETCH_SINGLE_CITY } from '../constants'

const initialState = ""

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_CITY: {
            return Object.assign({}, state, { singleCity: action.city })
        }
        default: return state
    }
}