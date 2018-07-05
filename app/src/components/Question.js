import React, { Component } from "react"
import { connect } from "react-redux"
import { formatQuestionForView } from "../utils/api"

class Question extends Component {
    render() {

        const { question } = this.props

        return (
            <div className="question-box">
                <h2>Would you rather</h2>
                <div>{question.optionOne.text}</div>
            </div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
    return {
        question: formatQuestionForView(questions[id], authedUser, users)
    }
}

export default connect(mapStateToProps)(Question)