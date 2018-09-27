import React, { Component } from "react"
import capstoneLogo from "../gear/images/Capstone_Logo4.png"
import "bootstrap/dist/css/bootstrap.min.css"
import './NavBar.css'

class Logo extends Component {
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <nav className=".navbar.navbar-default.navbar-static-top light-blue flex-md-nowrap p-0 shadow gearNavbar">
                <div className="logo">
                    <img src={capstoneLogo} className="icon--capstoneLogo" />
                </div>
            </nav>
        )
    }
}

export default Logo