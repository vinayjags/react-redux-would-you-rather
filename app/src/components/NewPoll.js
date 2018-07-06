import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { withRouter } from 'react-router-dom'

class NewPoll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      optionOne: '',
      optionTwo: '',
      error: ''
    }
  }

  handleChange (e, element) {
    const value = e.target.value
    this.setState(currentState => {
      currentState[element] = value
      return currentState
    })
  }

  hanldeSubmit (e) {
    e.preventDefault()

    const { dispatch, author } = this.props
    const { optionOne, optionTwo } = this.state

    const addQuestionPromise = dispatch(handleAddQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author
    }))

    addQuestionPromise.then(question => {
      this.props.history.push('/')
    })
  }

  render () {
    const { optionOne, optionTwo, error } = this.state

    return (
      <div className="main-container">
        <form onSubmit={(e) => this.hanldeSubmit(e)} >
          <div className="box">
            <div className="box-center">
              <h3>Add New Poll</h3>
            </div>
            <div className="form-group">
              <div className="error">{error}</div>
              <div className="form-row">
                                Compelete the question:
                <h4>Would you rather...</h4>
              </div>
              <div className="form-row">
                <input type="text" value={optionOne} onChange={(e) => this.handleChange(e, 'optionOne')} className="form-element" placeholder="Enter Option One Text Here" />
              </div>
              <div className="form-row text-center">
                <h4 style={{ fontWeight: 'bold' }}>OR</h4>
              </div>
              <div className="form-row">
                <input type="text" value={optionTwo} onChange={(e) => this.handleChange(e, 'optionTwo')} className="form-element" placeholder="Enter Option Two Text Here" />
              </div>
            </div>
            <div className="box-center">
              <button
                style={{ width: '95%' }}
                className='btn'
                type='submit'
                disabled={optionTwo === '' || optionTwo === ''}>
                                Create Poll
              </button>
            </div>
          </div >
        </form>
      </div >
    )
  }
}

function mapStateToPros ({ authedUser }) {
  return {
    author: authedUser
  }
}

export default withRouter(connect(mapStateToPros)(NewPoll))
