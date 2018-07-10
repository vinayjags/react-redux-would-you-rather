import { RECEIVE_USERS, ADD_USER, ADD_QUESTION_TO_USER, SAVE_QUESTION_ANSWER } from '../actions/users'

export default function users (state = [], action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.info.authedUser]: {
          ...state[action.info.authedUser],
          answers: {
            ...state[action.info.authedUser].answers,
            [action.info.qid]: action.info.answer
          }
        }
      }
    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default:
      return state
  }
}
