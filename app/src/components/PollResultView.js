import React from 'react'
import { connect } from 'react-redux'
import { formatQuestionForView } from '../utils/api'

const PollResultView = ({ question }) => {
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
  const optionOneVotes = ((question.optionOne.votes.length / totalVotes) * 100).toFixed(1)
  const optionTwoVotes = ((question.optionTwo.votes.length / totalVotes) * 100).toFixed(1)

  return (
    <div>
      <div className="results">Results</div>
      <div className={question.userAnswered === 1 ? 'optionResult active' : 'optionResult'}>
        <div className="your-answer">Your Vote</div>
        <div className="optionText">
          would you rather {question.optionOne.text}
        </div>
        <div className="percentageVotes">
          <div className="percentageComplete" style={{ width: `${optionOneVotes}%` }}>
            <div className="percentageCount">
              {optionOneVotes}%
            </div>
          </div>
        </div>
        <div className="votes">
          {question.optionOne.votes.length} out of {totalVotes} votes
        </div>
      </div>
      <div className={question.userAnswered === 2 ? 'optionResult active' : 'optionResult'}>
        <div className="your-answer">Your Vote</div>
        <div className="optionText">
          would you rather {question.optionTwo.text}
        </div>
        <div className="percentageVotes">
          <div className="percentageComplete" style={{ width: `${optionTwoVotes}%` }}>
            <div className="percentageCount">
              {optionTwoVotes}%
            </div>
          </div>
        </div>
        <div className="votes">
          {question.optionTwo.votes.length} out of {totalVotes} votes
        </div>
      </div>
    </div>
  )
}

function mapStateToProps ({ questions, authedUser, users }, { id }) {
  return {
    question: formatQuestionForView(questions[id], authedUser, users)
  }
}

export default connect(mapStateToProps)(PollResultView)
