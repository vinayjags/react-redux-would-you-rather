import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

const UNANSWERED_TAB = 'UNANSWERED_TAB'
const ANSWERED_TAB = 'ANSWERED_TAB'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      'activeTab': UNANSWERED_TAB
    }
  }

  hadleSwitch (tab) {
    this.setState(currentState => {
      return {
        'activeTab': tab
      }
    })
  }

  render () {
    const { answeredQuestionIds, unAnsweredQuestoinIds } = this.props
    const { activeTab } = this.state

    return (
      <div className="">
        <div className="switch-box">
          <div style={{ borderRight: '0px' }} className={activeTab === UNANSWERED_TAB ? 'tab active' : 'tab'} onClick={() => this.hadleSwitch(UNANSWERED_TAB)}>Unanswered Poll</div>
          <div style={{ borderLeft: '0px' }} className={activeTab === ANSWERED_TAB ? 'tab active' : 'tab'} onClick={() => this.hadleSwitch(ANSWERED_TAB)}>Answered Poll</div>
        </div>
        {activeTab === UNANSWERED_TAB && (
          <ul className="question-list">
            {unAnsweredQuestoinIds.map(question =>
              (
                <li key={question}>
                  <Poll id={question} />
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
                  <Poll id={question} />
                </li>
              )
            )}
          </ul>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  const answeredQuestionIds = authedUser === null ? [] : Object.keys(users[authedUser].answers).sort((a, b) => {
    return questions[b].timestamp - questions[a].timestamp
  })

  return {
    answeredQuestionIds: answeredQuestionIds,
    unAnsweredQuestoinIds: Object.keys(questions).filter(question => {
      return answeredQuestionIds.indexOf(question) === -1
    }).sort((a, b) => {
      return questions[b].timestamp - questions[a].timestamp
    })
  }
}

export default connect(mapStateToProps)(Dashboard)
