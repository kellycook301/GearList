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
        user: {}
    }

    login = (email, password) => {
        DataManager.getAll("users")
            .then(users => {
                let loginUser = users.find(u => u.email === email && u.password === password)
                if (loginUser) {
                    this.setState({user: loginUser})
                    sessionStorage.setItem(
                        "loginUser",
                        JSON.stringify({
                        email: loginUser.email,
                        password: loginUser.password,
                        id: loginUser.id
                        })
                    )
                    
                } else {
                    alert("I'm sorry. We do not seem to recognize that username or password. Please check again or feel free to register with us!")
                }
            })
    }

    // function for redirecting
    // redirect = () => {
    //     this.props.history.push('/gear')
    // }

    logout() {
        sessionStorage.clear();
        this.setState({user: null})
    }

    render() {
        if (!this.state.user) {
            return <Redirect to='/login' />
        }

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