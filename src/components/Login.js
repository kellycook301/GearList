import React, { Component } from "react"
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import DataManager from "../data/DataManager"
// import acousticBackground from "./gear/images/acoustic_background.jpg"
import "./Login.css"

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
            <div className="signInRegister">
                <Card className="signInCard">
                    <CardHeader>Already Have An Account?</CardHeader>
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
                            required="" />
                        <p></p>
                        <button type="submit" onClick={this.handleLogin} className="signInButton">
                            Sign In
                        </button>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>

                <Card className="registerCard">
                    <CardHeader>Don't Have An Account?</CardHeader>
                    <CardBody>
                        <CardTitle>Register!</CardTitle>
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
                            required="" />
                        <p></p>
                        <button type="submit" onClick={this.constructNewUser} className="registerButton">
                            Register
                        </button>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        );
    };

}