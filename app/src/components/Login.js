import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkLogin } from '../actions/users'
import { NavLink } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'

class Login extends Component {
  constructor () {
    super()
        this.state = {
      username: '',
      error: ''
    }
  }

  handleChange (e) {
    const value = e.target.value
    this.setState(currentState => {
      return {
        username: value
      }
    })
  }

  handleLogin (e) {
    e.preventDefault()

    this.setState(previousState => {
      return {
        error: ''
      }
    })

    const userPromise = this.props.dispatch(checkLogin(this.state.username))
    userPromise.then(user => {
      if (user == null) {
        this.setState(previousState => {
          return {
            error: 'Invalid Username'
          }
        })
      } else {
        this.props.dispatch(handleInitialData(user.id))
      }
    })
  }

  render () {
    const { username, error } = this.state

    return (
      <div className="main-container">
        <form onSubmit={(e) => this.handleLogin(e)} >
          <div className="box">
            <div className="box-center">
              <i className="fas fa-american-sign-language-interpreting fa-7x icon"></i>
              <h4>Please login to continue</h4>
            </div>
            <div className="form-group">
              <div className="error">{error}</div>
              <div className="form-row">
                <input type="text" value={username} onChange={(e) => this.handleChange(e)} className="form-element" placeholder="Username" />
              </div>
            </div>
            <div className="box-center">
              <button
                className='btn'
                type='submit'
                disabled={username === ''}>
                <i className="fas fa-sign-in-alt"></i>&nbsp;Login
              </button>
              <div>
                                Don't have a account?&nbsp;
                <NavLink to='/signup'>
                                    Signup Now
                </NavLink>
              </div>
            </div>
          </div >
        </form>
      </div >
    )
  }
}

export default connect()(Login)
