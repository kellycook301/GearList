import React, { Component } from "react"
import { Link } from "react-router-dom"
import capstoneLogo from "../gear/images/Capstone_Logo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'


class NavBar extends Component {
    logout() {
        sessionStorage.clear();
    }

    render() {
        return (
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 shadow gearNavbar">
                <div className="logo">
                    <img src={capstoneLogo} className="icon--capstoneLogo" />
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link text-white myGearButton" to="/gear">My Gear</Link>
                        <Link className="nav-link text-white logoutButton" to="/login" onClick={this.logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar