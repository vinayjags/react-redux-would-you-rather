import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      error: ''
    }
  }

  handleLogin (user) {
    this.props.dispatch(handleInitialData(user.id, true))
  }

  render () {
    const { error } = this.state
    const { users } = this.props

    return (
      <div className="main-container">
        <div className="box">
          <div className="box-center">
            <i className="fas fa-american-sign-language-interpreting fa-7x icon"></i>
            <h4>Please login to continue</h4>
          </div>
          <div className="form-group">
            <div className="error">{error}</div>
            <div className="form-row">
              <ul className="login-user-list">
                {Object.keys(users).map(user => (
                  <li key={users[user].id} onClick={() => this.handleLogin(users[user])}>
                    <div className="login-user-box">
                      <div className="avata-box">
                        <img alt={users[user].name} src={`/images/avatars/${users[user].avatarURL}`} className="avatar small" />
                      </div>
                      <div className="login-user-name">
                        {users[user].name}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="box-center">
            <div>
              Don't have a account?&nbsp;
              <NavLink to='/signup'>
                Signup Now
              </NavLink>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
