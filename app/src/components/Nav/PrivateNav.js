import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink, withRouter } from "react-router-dom"

class PrivateNav extends Component {
    render() {
        return (
            <ul className="menu">
                <li>
                    <NavLink className="link" exact to='/' activeClassName='active'>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" exact to='/add' activeClassName='active'>
                        Add New
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" exact to='/leaderboard' activeClassName='active'>
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

export default withRouter(connect()(PrivateNav))