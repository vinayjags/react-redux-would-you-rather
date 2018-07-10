import { checkUserName, addNewUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER'

function addUser (user) {
  return {
    type: ADD_USER,
    user
  }
}

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addQuestionToUser (question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question
  }
}

export function addQuestionAnswerToUser (info) {
  return {
    type: SAVE_QUESTION_ANSWER_TO_USER,
    info
  }
}

export function handleAddUser (user) {
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

export function checkLogin (usernname) {
  return (dispatch) => {
    dispatch(showLoading())
    return checkUserName(usernname)
      .then(user => {
        dispatch(hideLoading())
        return user
      })
  }
}
