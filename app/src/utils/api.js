import {
  _getQuestions,
  _getUsers,
  _checkUserName,
  _saveUser,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getQuestions(),
    _getUsers()
  ]).then(([questions, users]) => ({
    questions,
    users
  }))
}

export function checkUserName (username) {
  return new Promise((resolve, reject) => {
    const userRec = _checkUserName(username)
    resolve(userRec)
  })
}

export function addNewUser (user) {
  return new Promise((resolve, reject) => {
    const userRec = _saveUser(user)
    resolve(userRec)
  })
}

export function addQuestion (question) {
  return new Promise((resolve, reject) => {
    const questionRec = _saveQuestion(question)
    resolve(questionRec)
  })
}

export function saveQuestionAnswer (info) {
  return new Promise((resolve, reject) => {
    _saveQuestionAnswer(info)
    resolve()
  })
}

export function formatQuestionForView (question, authedUser, users) {
  const hasAnsweredOptionOne = question.optionOne.votes.indexOf(authedUser) !== -1
  const hasAnsweredOptionTwo = question.optionTwo.votes.indexOf(authedUser) !== -1

  return {
    ...question,
    author: users[question.author],
    hasUserAnswered: hasAnsweredOptionOne || hasAnsweredOptionTwo,
    userAnswered: hasAnsweredOptionOne === true ? 1 : (hasAnsweredOptionTwo === true ? 1 : 0)
  }
}
