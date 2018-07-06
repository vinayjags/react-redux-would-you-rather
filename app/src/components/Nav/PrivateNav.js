import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setLoggedInUser } from '../../actions/shared'

class PrivateNav extends Component {
  handleLogout () {
    const { dispatch } = this.props
    dispatch(setLoggedInUser(null))
  }

  render () {
    const { user } = this.props
    const { name, avatarURL } = user

    return (
      <ul className="menu">
        <li>
          <NavLink className="link" exact to='/' activeClassName='active'>
                        Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="link" exact to='/add' activeClassName='active'>
                        New Poll
          </NavLink>
        </li>
        <li>
          <NavLink className="link" exact to='/leaderboard' activeClassName='active'>
                        Leaderboard
          </NavLink>
        </li>
        <li className="user-hdr">
          <img alt={name} src={`/images/avatars/${avatarURL}`} className="avatar small" />
                    Hello, {name}
        </li>
        <li onClick={() => this.handleLogout()} style={{ cursor: 'pointer', color: '#c0392b' }}>
          <i className="fas fa-sign-out-alt"></i>
        </li>
      </ul >
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  if (authedUser === null || users.length === 0) {
    return {
      user: {
        name: '',
        avatarURL: ''
      }
    }
  } else {
    return {
      user: users[authedUser]
    }
  }
}

export default withRouter(connect(mapStateToProps)(PrivateNav))
