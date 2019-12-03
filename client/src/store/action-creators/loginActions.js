import { LOG_IN_USER } from "../constants"
import Axios from "axios"

const logInUser = (user) => ({
    type: LOG_IN_USER,
    user: user
});


export const validateUser = (userData) => dispatch => {
    return Axios.post('/api/users/login', userData)
        .then((user) => {
            if (user.data === 'x') {
                return true
            } else {
                dispatch(logInUser(user))
                return false
            }
        })
}