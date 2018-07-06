import {
    _getQuestions,
    _getUsers,
    _checkUserName,
    _saveUser
} from './_DATA.js'

export function getInitialData() {
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then(([questions, users]) => ({
        questions,
        users,
    }))
}

export function checkUserName(username) {
    return new Promise((res, rej) => {
        const userRec = _checkUserName(username)
        res(userRec)
    })
}

export function addNewUser(user) {
    return new Promise((res, rej) => {
        const userRec = _saveUser(user)
        res(userRec)
    })
}

export function formatQuestionForView(question, authedUser, users) {

    const hasAnsweredOptionOne = question.optionOne.votes.indexOf(authedUser) !== -1
    const hasAnsweredOptionTwo = question.optionTwo.votes.indexOf(authedUser) !== -1

    return {
        ...question,
        author: users[question.author],
        hasUserAnswered: hasAnsweredOptionOne || hasAnsweredOptionTwo,
        userAnswered: hasAnsweredOptionOne === true ? 1 : (hasAnsweredOptionTwo === true ? 1 : 0)
    }
}