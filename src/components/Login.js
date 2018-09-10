import React, { Component } from "react"
import DataManager from "../data/DataManager"

export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        let email = this.state.email;
        let password = this.state.password;
        DataManager.getAll("users")
            .then(users => {
                let loginUser = users.find(u => u.inputEmail === email && u.inputPassword === password)
                if (loginUser) {
                    sessionStorage.setItem(
                        "credentials",
                        JSON.stringify({
                            email: this.state.email,
                            password: this.state.password,
                            id: loginUser.id
                        })
                    )
                    this.props.history.push("/events")
                } else {
                    alert("No user found, please register!")
                }
            })
    }

    constructNewUser = evt => {
        evt.preventDefault()
        const user = {
            inputEmail: this.state.email,
            inputPassword: this.state.password,
        }

        this.props.addUser(user, "users").then(() => this.props.history.push("/"))
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <div class="card register-card">
                    <h5 class="card-header">Register</h5>
                    <div class="card-body">
                        <label htmlFor="inputEmail">Email Address:</label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <p></p>
                        <label htmlFor="inputPassword">Password:</label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <p></p>
                        <button type="submit" onClick={this.constructNewUser}>Register</button>
                    </div>
                </div>
                <div class="card sign-in-card">
                    <h5 class="card-header">Sign In</h5>
                    <div class="card-body">
                        <label htmlFor="inputEmail">Email Address:</label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <p></p>
                        <label htmlFor="inputPassword">Password:</label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <p></p>
                        <button type="submit" onClick={this.handleLogin}>Sign In</button>
                    </div>
                </div>
            </form>
        )
    }
}