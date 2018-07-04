import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

class PrivateNav extends Component {
    render() {
        return (
            <ul className="menu">
                <li>
                    <NavLink to='/' activeClassName='active'>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        Add New
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    Welcome Vinay
                </li>
            </ul>
        )
    }
}

export default connect()(PrivateNav)