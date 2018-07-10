import React, { Component, Fragment } from 'react'
import Dashboard from '../Dashboard'
import NewPoll from '../NewPoll'
import LeaderBoard from '../LeaderBoard'
import PollView from '../PollView'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { publicUrls } from '../../settings'

class PrivateRoute extends Component {
  render () {
    const { isLoggedIn } = this.props

    const path = this.props.location

    if (publicUrls.includes(path.pathname)) {
      return null
    }

    if (isLoggedIn === false) {
      const redirectTo = path.pathname === '/' ? '' : `?redirectTo=${path.pathname}`
      return <Redirect to={`/login${redirectTo}`} />
    }

    return (
      <Fragment>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add" exact component={NewPoll} />
        <Route path="/leaderboard" exact component={LeaderBoard} />
        <Route path="/questions/:question_id" exact component={PollView} />
      </Fragment>
    )
  }
}

export default withRouter(PrivateRoute)
