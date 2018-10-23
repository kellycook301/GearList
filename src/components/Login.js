import React, { Component } from "react"
import { Button, Card, CardHeader, Modal, ModalBody, CardBody, CardTitle } from 'reactstrap';
import musician from "./gear/images/Musician.png"
import './Login.css'

// The login was kind of a pain but I referred to some amigos here to help out!
// Teamwork makes the dream work.

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          registerModal: false,
          noAccountModal: false
        };
    
        this.registerToggle = this.registerToggle.bind(this);
        this.noAccountToggle = this.noAccountToggle.bind(this);
      }
    
      registerToggle() {
        this.setState({
          registerModal: !this.state.registerModal
        });
      }

      noAccountToggle() {
        this.setState({
          noAccountModal: !this.state.noAccountModal
        });
      }

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
        this.props.loginUser(email, password).then(succeeded => {
            if (succeeded) {
                this.props.history.push('/gear')
            } else {
                this.noAccountToggle()
            }
        })
    }

    constructNewUser = evt => {
        evt.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.addUser(user, "users").then(this.registerToggle())
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Modal isOpen={this.state.registerModal} toggle={this.registerToggle} className={this.props.className}>
                        <ModalBody>
                            <h4 className="addedNotification">Thanks For Registering! Go Log In!</h4>
                            <img src={musician} className="icon--musician" />
                            <Button color="secondary" className="addedButton" onClick={this.registerToggle}>Close</Button>
                        </ModalBody>
                    </Modal>
                </div>
                <div>
                    <Modal isOpen={this.state.noAccountModal} toggle={this.noAccountToggle} className={this.props.className}>
                        <ModalBody>
                            <h4 className="addedNotification">I'm Sorry. We Do Not Seem To Recognize That Username Or Password. Try Again Or Feel Free To Register With Us!</h4>
                            <img src={musician} className="icon--musician" />
                            <Button color="secondary" className="addedButton" onClick={this.noAccountToggle}>Close</Button>
                        </ModalBody>
                    </Modal>
                </div>

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
                                required="" />
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
            </React.Fragment>
        );
    };

}