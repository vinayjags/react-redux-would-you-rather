import React, { Component } from "react"
import { connect } from "react-redux"
import PrivateNav from "./PrivateNav"
import PublicNav from "./PublicNav"

class Nav extends Component {
    render() {
        const { isLoggedIn } = this.props

        return (
            <nav className='nav' >
                <ul className="brand">
                    <li className="brand-logo">
                        Would You Rather
                    </li>
                </ul>
                {isLoggedIn === true && (<PrivateNav />)}
                {isLoggedIn === false && (<PublicNav />)}
            </nav>
        )
    }
}

function mapStateToPros({ authedUser }) {
    return {
        isLoggedIn: authedUser !== null
    }
}

export default connect(mapStateToPros)(Nav)

