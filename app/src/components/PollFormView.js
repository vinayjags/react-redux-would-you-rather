import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestionAnswer } from '../actions/shared'

class PollFormView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'optionOne'
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const { dispatch, authedUser, question } = this.props
    const { selectedOption } = this.state

    dispatch(handleAddQuestionAnswer({
      authedUser,
      qid: question.id,
      answer: selectedOption
    }))
  }

  handleRadioChange (e) {
    e.persist()
    this.setState(currentState => {
      return {
        selectedOption: e.target.value
      }
    })
  }

  render () {
    const { question } = this.props
    const { selectedOption } = this.state

    return (
      <div>
        <div>
          <div className="title">Would you rather</div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <input type="radio" onChange={(e) => this.handleRadioChange(e)} value="optionOne" checked={selectedOption === 'optionOne'} />{question.optionOne.text}
            </div>
            <div style={{ marginBottom: '5px' }}>
              <input type="radio" value="optionTwo" onChange={(e) => this.handleRadioChange(e)} checked={selectedOption === 'optionTwo'} />{question.optionTwo.text}
            </div>
            <button
              style={{ width: '100%', marginBottom: 0 }}
              className='btn'>
                            Submit
            </button>
          </form>
        </div>
      </div >
    )
  }
}

function mapStateToProps ({ questions, authedUser }, { id }) {
  return {
    question: questions[id],
    authedUser
  }
}

export default connect(mapStateToProps)(PollFormView)
