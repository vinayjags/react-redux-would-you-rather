import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"

class PublicNav extends Component {
    render() {
        return (
            <ul className="menu">
                <li>
                    <NavLink className="link" exact to='/login' activeClassName='active'>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" exact to='/signup' activeClassName='active'>
                        Signup
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default withRouter(connect()(PublicNav))