import { getInitialData, addQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addQuestionToUser, addQuestionAnswerToUser } from '../actions/users'
import { receiveQuestions, addQuestion as addQuestionAction, addQuestionAnswer } from '../actions/questions'
import { setAuthUser } from '../actions/authUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTH_ID = null

export function handleInitialData (authedId = null) {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        if (authedId !== null) {
          dispatch(setAuthUser(authedId))
        }
        dispatch(hideLoading())
      })
  }
}

export function setLoggedInUser (authId) {
  if (typeof authId === 'undefined') {
    authId = AUTH_ID
  }

  return (dispatch) => {
    if (authId == null) {
      dispatch(setAuthUser(authId))
    } else {
      dispatch(handleInitialData(authId))
    }
  }
}

export function handleAddQuestion (question) {
  return (dispatch) => {
    dispatch(showLoading)
    return addQuestion(question)
      .then(questionRec => {
        dispatch(addQuestionAction(questionRec))
        dispatch(addQuestionToUser(questionRec))
        dispatch(hideLoading())
      })
  }
}

export function handleAddQuestionAnswer (info) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(addQuestionAnswer(info))
        dispatch(addQuestionAnswerToUser(info))
        dispatch(hideLoading())
      })
  }
}
