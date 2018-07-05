import React, { Component, Fragment } from "react"
import Dashboard from "../Dashboard"
import { Redirect, Route, withRouter } from "react-router-dom"
import { publicUrls } from "../../settings"

class PrivateRoute extends Component {
    render() {
        const { isLoggedIn } = this.props

        const path = this.props.location

        if (publicUrls.includes(path.pathname)) {
            return null
        }

        if (isLoggedIn === false) {
            const redirectTo = path.pathname === "/" ? "" : `?redirectTo=${path.pathname}`
            return <Redirect to={`/login${redirectTo}`} />
        }

        return (
            <Fragment>
                <Route path="/" exact component={Dashboard} />
            </Fragment>
        )
    }
}

export default withRouter(PrivateRoute)