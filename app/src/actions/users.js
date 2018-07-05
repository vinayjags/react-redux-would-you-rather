import { checkUserName } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = "RECEIVE_USERS"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function checkLogin(usernname) {
    return (dispatch) => {
        dispatch(showLoading())
        return checkUserName(usernname)
            .then(user => {
                dispatch(hideLoading())
                return user
            })
    }
}