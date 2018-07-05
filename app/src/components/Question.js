import React, { Component } from "react"
import { connect } from "react-redux"
import { formatQuestionForView } from "../utils/api"
import { withRouter } from "react-router-dom"

class Question extends Component {

    handlePollPage(e) {
        const { question } = this.props
        e.preventDefault()
        this.props.history.push(`question/${question.id}`)
    }

    render() {

        const { question } = this.props

        return (
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
                        <div style={{ marginBottom: '28px' }}>
                            <div className="title">Would you rather</div>
                            <div style={{ marginBottom: '10px' }}>...{question.optionOne.text}...</div>
                        </div>
                        <button
                            style={{ width: '100%', marginBottom: 0 }}
                            className='btn'
                            type='button'
                            onClick={(e) => this.handlePollPage(e)}>
                            View Poll
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
    return {
        question: formatQuestionForView(questions[id], authedUser, users)
    }
}

export default withRouter(connect(mapStateToProps)(Question))