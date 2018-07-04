import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthUser } from "../actions/authUser"
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTH_ID = null

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ questions, users }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function setLoggedInUser(authId) {
    if (typeof authId === 'undefined') {
        authId = AUTH_ID
    }

    return (dispatch) => {
        dispatch(setAuthUser(authId))
    }
}