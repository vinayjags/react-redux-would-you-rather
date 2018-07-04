import React, { Component } from "react"
import { connect } from "react-redux"
import { setLoggedInUser } from "../actions/shared"

class Login extends Component {
    handleLogin(e) {
        e.preventDefault()
        this.props.dispatch(setLoggedInUser("1"))
    }

    render() {
        return (
            <div>Login
                <button onClick={(e) => this.handleLogin(e)}>Login</button>
            </div>
        )
    }
}

export default connect()(Login)