import React, { Component } from "react"
import Navbar from "./nav/Navbar"
import Footer from "./Footer.js"
import AppViews from "../AppViews"
import DataManager from "../data/DataManager"

// This loads the navbar, everything in AppViews, and the Footer that I made.

import "bootstrap/dist/css/bootstrap.min.css"
import "./MyGearList.css"


class MyGearList extends Component {
    state = {
        user: JSON.parse(sessionStorage.getItem("loginUser"))
    }

    login = (email, password) => {
        console.log("in app views")
        DataManager.getAll("users")
            .then(users => {
                let loginUser = users.find(u => u.email === email && u.password === password)
                if (loginUser) {
                    sessionStorage.setItem(
                        "loginUser",
                        JSON.stringify({
                        email: loginUser.email,
                        password: loginUser.password,
                        id: loginUser.id
                        })
                    )
                    this.setState({user: loginUser})
                    //redirect
                } else {
                    alert("I'm sorry. We do not seem to recognize that username or password. Please check again or feel free to register with us!")
                }
            })
    }

    logout() {
        console.log("this is clearning")
        sessionStorage.clear();
        console.log(sessionStorage.getItem("loginUser"), "this should be clear")
        this.setState({user: null})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar 
                logout={this.logout}/>
                <AppViews 
                login={this.login}
                user={this.state.user}/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default MyGearList