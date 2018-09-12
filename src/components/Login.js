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
                    this.props.history.push("/gear")
                } else {
                    alert("I'm sorry. We do not seem to recognize that username or password. Please check again or feel free to register with us!")
                }
            })
    }

    constructNewUser = evt => {
        evt.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password,
        }

        this.props.addUser(user, "users").then(() => this.props.history.push("/"))
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                <label htmlFor="inputEmail">
                    Username:
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="signInEmail"
                    placeholder="Email address"
                    required="" autoFocus="" />
                    <p></p>
                <label htmlFor="inputPassword">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="signInPassword"
                    placeholder="Password"
                    required="" />
                    <p></p>
                <button type="submit">
                    Sign in
                </button>
                <p></p>
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <label htmlFor="inputEmail">
                    Username:
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="registerEmail"
                    placeholder="Email address"
                    required="" autoFocus="" />
                    <p></p>
                <label htmlFor="inputPassword">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="registerPassword"
                    placeholder="Password"
                    required="" />
                    <p></p>
                <button type="submit" onClick={this.constructNewUser}>
                    Register
                </button>
            </form>
        )
    }
}