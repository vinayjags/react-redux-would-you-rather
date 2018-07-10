import React, { Component, Fragment } from 'react'
import Login from '../Login'
import SignUp from '../SignUp'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { publicUrls } from '../../settings'
import queryString from 'query-string'

class PublicRoute extends Component {
  render () {
    const { isLoggedIn } = this.props

    const path = this.props.location

    if (!publicUrls.includes(path.pathname)) {
      return null
    }

    const queryParams = queryString.parse(path.search)
    let { redirectTo } = queryParams

    if (typeof redirectTo === 'undefined' ||
      redirectTo === null) {
      redirectTo = '/'
    }

    if (isLoggedIn === true) {
      return <Redirect to={redirectTo} />
    }

    return (
      <Fragment>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Fragment>
    )
  }
}

export default withRouter(PublicRoute)
