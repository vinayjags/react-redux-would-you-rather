import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function users (state = [], action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_QUESTION_ANSWER:
      console.log(state[action.info.qid][action.info.answer])
      return {
        ...state,
        [action.info.qid]: {
          ...state[action.info.qid],
          [action.info.answer]: {
            ...state[action.info.qid][action.info.answer],
            votes: state[action.info.qid][action.info.answer].votes.concat([action.info.authedUser])
          }
        }

      }
    default:
      return state
  }
}
