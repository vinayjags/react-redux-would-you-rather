import { getInitialData, addQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addQuestionToUser, addQuestionAnswerToUser } from '../actions/users'
import { receiveQuestions, addQuestion as addQuestionAction, addQuestionAnswer } from '../actions/questions'
import { setAuthUser } from '../actions/authUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTH_ID = null

export function handleInitialData (authedId = null, loadQuestions = false) {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveUsers(users))
        if (loadQuestions === true) {
          dispatch(receiveQuestions(questions))
        }
        if (authedId !== null || loadQuestions === false) {
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
      dispatch(handleInitialData(authId, false))
    } else {
      dispatch(handleInitialData(authId, true))
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
