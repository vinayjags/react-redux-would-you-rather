import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            error: "",
            firstName: "",
            lastName: "",
            images: [
                "one",
                "two"
            ]
        }
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

    hanldeSubmit(e) {

    }

    render() {
        const { username, error, firstName, lastName } = this.state
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
                            <div className="form-row">
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

export default SignUp