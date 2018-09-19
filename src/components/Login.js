import React, { Component } from "react"
import { Button, Card, CardHeader, CardBody, CardTitle } from 'reactstrap';

import DataManager from "../data/DataManager"
import './Login.css'

// The login was kind of a pain but I referred to some amigos here to help out!
// Teamwork makes the dream work.

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

        // let email = this.state.email;
        // let password = this.state.password;
        DataManager.getAll("users")
            .then(users => {
                let loginUser = users.find(u => u.email === this.state.email && u.password === this.state.password)
                if (loginUser) {
                    sessionStorage.setItem("credentials", JSON.stringify(
                        loginUser
                    )
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

        alert("Thank you for registering! You will now be directed to the homepage!")
        this.props.addUser(user, "users")
        // .then(() => this.props.history.push("/login"))
    }

    render() {
        return (
            <div className="signInRegister">
                <Card className="signInCard">
                    <CardHeader className="loginHeader">Sign In Or Register</CardHeader>
                    <CardBody>
                        <CardTitle>Sign In!</CardTitle>
                        <label htmlFor="inputEmail">
                            Email Address:
                        </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            className="emailField"
                            placeholder="Email Address"
                            required="" autoFocus="" />
                        <p></p>
                        <label htmlFor="inputPassword">
                            Password:
                        </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            className="passwordField"
                            placeholder="Password"
                            onKeyPress={this.handleChange}
                            required="" />
                        <p></p>
                        <Button color="primary" type="submit" onClick={this.handleLogin} className="signInButton">
                            Sign In
                        </Button>
                        <Button color="primary" type="submit" onClick={this.constructNewUser} className="registerButton">
                            Register
                        </Button>
                    </CardBody>
                </Card>
            </div>

        );
    };

}