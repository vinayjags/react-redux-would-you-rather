import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import { setLoggedInUser } from '../actions/shared'
import { connect } from 'react-redux'
import PrivateRoute from './Routes/PrivateRoute'
import PublicRoute from './Routes/PublicRoute'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(setLoggedInUser())
  }

  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            <PrivateRoute isLoggedIn={this.props.isLoggedIn} />
            <PublicRoute isLoggedIn={this.props.isLoggedIn} />
          </div>
        </Fragment>
      </Router>
    )
    }
}

function mapStateToProps ({ authedUser }) {
  return {
    isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)
