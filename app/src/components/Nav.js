import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <nav className='nav'>
            <ul className="brand">
                <li className="brand-logo">
                    Would You Rather
                </li>
            </ul>
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
        </nav>
    )
} 