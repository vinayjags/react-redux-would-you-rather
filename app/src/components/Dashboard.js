import React, { Component } from "react"
import { connect } from "react-redux"
import Question from "./Question"

const UNANSWERED_TAB = 'UNANSWERED_TAB'
const ANSWERED_TAB = 'ANSWERED_TAB'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'activeTab': UNANSWERED_TAB
        }
    }

    hadleSwitch(tab) {
        this.setState(currentState => {
            return {
                'activeTab': tab
            }
        })
    }

    render() {
        const { answeredQuestionIds, unAnsweredQuestoinIds } = this.props
        const { activeTab } = this.state

        return (
            <div className="">
                <div className="switch-box">
                    <div className={activeTab === UNANSWERED_TAB ? "tab active" : "tab"} onClick={() => this.hadleSwitch(UNANSWERED_TAB)}>Unanswered Poll</div>
                    <div className={activeTab === ANSWERED_TAB ? "tab active" : "tab"} onClick={() => this.hadleSwitch(ANSWERED_TAB)}>Answered Poll</div>
                </div>
                {activeTab === UNANSWERED_TAB && (
                    <ul className="question-list">
                        {unAnsweredQuestoinIds.map(question =>
                            (
                                <li key={question}>
                                    <Question id={question} />
                                </li>
                            )
                        )}
                    </ul>
                )}
                {activeTab === ANSWERED_TAB && (
                    <ul className="question-list">
                        {answeredQuestionIds.map(question =>
                            (
                                <li key={question}>
                                    <Question id={question} />
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }) {

    const answeredQuestionIds = authedUser === null ? [] : Object.keys(users[authedUser].answers)

    return {
        answeredQuestionIds: answeredQuestionIds,
        unAnsweredQuestoinIds: Object.keys(questions).filter(question => {
            return answeredQuestionIds.indexOf(question) === -1
        })
    }
}

export default connect(mapStateToProps)(Dashboard)