import React from 'react'
import { connect } from 'react-redux'
import { formatQuestionForView } from '../utils/api'
import PollFormView from './PollFormView'
import PollResultView from './PollResultView'

const PollView = ({ question }) => {
  return (
    <div className="question-container">
      <div className="question-box">
        <div className="question-by">
          <img alt={question.author.id} src={`/images/avatars/${question.author.avatarURL}`} className="avatar small" />
          {question.author.name} ask:
        </div>
        <div className="question-details">
          <div className="question-user-avatar">
            <img alt={question.author.id} src={`/images/avatars/${question.author.avatarURL}`} className="avatar" />
          </div>
          <div className="question-text">
            {question.hasUserAnswered === false && (<PollFormView id={question.id} />)}
            {question.hasUserAnswered === true && (<PollResultView id={question.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps ({ users, questions, authedUser }, { match }) {
  return {
    question: formatQuestionForView(questions[match.params.question_id], authedUser, users),
    authedUser
  }
}

export default connect(mapStateToProps)(PollView)
