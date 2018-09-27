import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import Navbar from "./nav/Navbar"
import Footer from "./Footer.js"
import AppViews from "../AppViews"
import DataManager from "../data/DataManager"

// This loads the navbar, everything in AppViews, and the Footer that I made.

import "bootstrap/dist/css/bootstrap.min.css"
import "./MyGearList.css"


class MyGearList extends Component {
    state = {
        key: Math.random(),
        user: sessionStorage.getItem("loginUser") || {}
    }

    login = (email, password) => {
        return DataManager.getAll("users")
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
                    this.setState({ user: loginUser, key: Math.random() })
                    return true

                } else {
                    return false
                }
            })
    }

    logout() {
        sessionStorage.clear();
        this.setState({ user: null, key: Math.random() })
    }

    render() {
        if (!this.state.user) {
            return <Redirect to='/login' />
        }

        return (
            <React.Fragment>
                <Navbar
                    logout={this.logout} />
                <AppViews
                    login={this.login}
                    key={this.state.key}
                    user={this.state.user} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MyGearList