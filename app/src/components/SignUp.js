import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { checkLogin, handleAddUser } from "../actions/users"
import { connect } from "react-redux"
import { setLoggedInUser } from "../actions/shared"

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            error: "",
            firstName: "",
            lastName: "",
            avatarUrl: "one.png"
        }
        this.images = [
            "one.png",
            "two.png",
            "three.png",
            "four.png",
            "five.png",
            "six.png"
        ]
    }

    handleChange(e) {
        const value = e.target.value
        this.setState(currentState => {
            return {
                username: value
            }
        })
    }

    handleChangeFirstName(e) {
        const value = e.target.value
        this.setState(currentState => {
            return {
                firstName: value
            }
        })
    }

    handleChangeLastName(e) {
        const value = e.target.value
        this.setState(currentState => {
            return {
                lastName: value
            }
        })
    }

    handleAvatarChange(image) {
        this.setState(currentState => {
            return {
                avatarUrl: image

            }
        })
    }

    hanldeSubmit(e) {
        e.preventDefault()
        const { dispatch } = this.props
        const { username, firstName, lastName, avatarUrl } = this.state

        const userPromise = dispatch(checkLogin(username))
        userPromise.then(user => {
            if (user !== null) {
                this.setState(currentState => {
                    return {
                        error: "Username already in use."
                    }
                })
            } else {
                const addUserPromise = dispatch(handleAddUser({
                    username,
                    firstName,
                    lastName,
                    avatarUrl
                }))

                addUserPromise.then(user => {
                    dispatch(setLoggedInUser(user.id))
                })
            }
        })
    }

    render() {
        const { username, error, firstName, lastName, avatarUrl } = this.state
        return (
            <div className="main-container">
                <form onSubmit={(e) => this.hanldeSubmit(e)} >
                    <div className="box">
                        <div className="box-center">
                            <i className="fas fa-american-sign-language-interpreting fa-7x icon"></i>
                            <h4>Please Signup to continue</h4>
                        </div>
                        <div className="form-group">
                            <div className="error">{error}</div>
                            <div className="form-row">
                                <input type="text" value={firstName} onChange={(e) => this.handleChangeFirstName(e)} className="form-element" placeholder="First Name" />
                            </div>
                            <div className="form-row">
                                <input type="text" value={lastName} onChange={(e) => this.handleChangeLastName(e)} className="form-element" placeholder="Last Name" />
                            </div>
                            <div className="form-row">
                                <input type="text" value={username} onChange={(e) => this.handleChange(e)} className="form-element" placeholder="Username" />
                            </div>
                            <div className="form-row" id="avatar-ul-container">
                                <label>Avatar</label>
                                <ul className="avatar-list">
                                    {this.images.map(image => (
                                        <li key={image} onClick={() => this.handleAvatarChange(image)}>
                                            <div className={avatarUrl === image ? "checked active" : "checked"}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <img alt={image} src={`/images/avatars/${image}`} className="avatar" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="box-center">
                            <button
                                className='btn'
                                type='submit'
                                disabled={username === '' || firstName === "" || lastName === ""}>
                                <i className="fas fa-sign-in-alt"></i>&nbsp;Sign Up
                            </button>
                            <div>
                                Already have an account&nbsp;
                                <NavLink to='/login'>
                                    Login here
                                </NavLink>
                            </div>
                        </div>
                    </div >
                </form>
            </div >
        )
    }
}

export default connect()(SignUp)