import React, { Component } from "react"
import { connect } from "react-redux"
import { setLoggedInUser } from "../actions/shared"
import { NavLink } from "react-router-dom"

class Login extends Component {
    handleLogin(e) {
        e.preventDefault()
        this.props.dispatch(setLoggedInUser("1"))
    }

    render() {
        return (
            <div className="main-container">
                <div className="box">
                    <div className="box-center">
                        <i className="fas fa-american-sign-language-interpreting fa-7x icon"></i>
                        <h4>Please login to continue</h4>
                    </div>
                    <div className="box-center">
                        Don't have a account?&nbsp;
                        <NavLink to='/signup'>
                            Signup Now
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Login)