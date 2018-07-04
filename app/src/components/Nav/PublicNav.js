import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

class PublicNav extends Component {
    render() {
        return (
            <ul className="menu">
                <li>
                    <NavLink to='/login' exact activeClassName='active'>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signup' exact activeClassName='active'>
                        Signup
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default connect()(PublicNav)