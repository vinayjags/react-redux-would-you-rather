import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import PrivateNav from "./PrivateNav"
import PublicNav from "./PublicNav"

class Nav extends Component {
    render() {
        const { isLoggedIn } = this.props

        return (
            <div className='nav' >
                <ul className="brand">
                    <li className="brand-logo">
                        Would You Rather
                    </li>
                </ul>
                {isLoggedIn === true && (<PrivateNav />)}
                {isLoggedIn === false && (<PublicNav />)}
            </div>
        )
    }
}

function mapStateToPros({ authedUser }) {
    return {
        isLoggedIn: authedUser !== null
    }
}

export default withRouter(connect(mapStateToPros)(Nav))

