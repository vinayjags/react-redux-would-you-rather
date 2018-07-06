import { checkUserName } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addNewUser } from "../utils/api"

export const RECEIVE_USERS = "RECEIVE_USERS"
export const ADD_USER = "ADD_USER"

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function handleAddUser(user) {
    return (dispatch) => {
        dispatch(showLoading())
        return addNewUser(user)
            .then(userRec => {
                dispatch(addUser(userRec))
                dispatch(hideLoading())
                return userRec
            })
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