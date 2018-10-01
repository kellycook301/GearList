import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'

// I wanted to include a logo in the Navbar. I couldn't get it to work quite the way I wanted
// so I kinda fudged it by getting the Navbar and my logo to be the same color.
// I used Canva for the color. Then I loaded it into Gimp to crop it, resize it, and get it
// to be the same color as the navbar.
// I also included a logout button which clears session storage. Since the app is always
// checking to see if you are authenticated, it recognizes that the loginUser
// has been removed and redirects you to the login page.

class NavBar extends Component {
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 gearLogout">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link text-white myGearButton" to="/gear">Home</Link>
                        <Link className="nav-link text-white logoutButton" to="/login" onClick={this.props.logout}>Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar