import Axios from "axios";

export const addUser = (userData) => dispatch => {
    return Axios.post('/api/users/adduser/', userData)
        .then((newUser) => {
            if (newUser.data === 'x') {
                return true
            } else {
                return false
            }
        })
}