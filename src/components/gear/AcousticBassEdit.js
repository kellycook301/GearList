import React, { Component } from "react"
import acousticBassGuitar from "./images/acousticBass_(lg).png"
import './AcousticBassEdit.css'

export default class AcousticBassEdit extends Component {

    state = {
        acousticBassGuitarMake: "",
        acousticBassGuitarModel: "",
        acousticBassGuitarStrings: "",
        acousticBassGuitarPickup: "",
        acousticBassGuitarTop: "",
        acousticBassGuitarBackSides: "",
        acousticBassGuitarSpecialFeatures: "",
        id: null
    }

    // window.scrollTo forces the screen to render to the top when you click on the edit icon. Otherwise
    // the edit screen will present itself wherever your scroll bar was on the gear page.
    // This is a neat trick! Thanks, Google!
    
    componentDidMount() {
        window.scrollTo(0, 0)
        const acousticBass = this.props.acousticBasses.find(a => a.id === parseInt(this.props.match.params.acousticBassId, 0))
        this.setState(acousticBass);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createAcousticBassPost = evt => {
        evt.preventDefault()
        const newAcousticBassPost = {
            make: this.state.make,
            model: this.state.model,
            strings: this.state.strings,
            pickup: this.state.pickup,
            top: this.state.top,
            backSides: this.state.backSides,
            features: this.state.features,
            loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            id: this.state.id
        }
        this.props.editAcousticBassPost(newAcousticBassPost, this.state.id, "acousticBasses").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={acousticBassGuitar} className="icon--acousticBassEdit" />
                <h3 className="edit-post">What About Your Acoustic Bass Guitar Would You Like To Edit?</h3>
                <form className="acousticBassEditForm">
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarMake" className="acousticBassGuitarMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Martin)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarModel" className="acousticBassGuitarModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. BCPA4)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarStrings" className="acousticBassGuitarStrings">Strings:</label>
                        <input type="text" required="true"
                            className="form-control strings-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="strings"
                            placeholder="Strings (ex. Martin 45-105"
                            defaultValue={this.state.strings} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarPickup" className="acousticBassGuitarPickup">Pickup:</label>
                        <input type="text" required="true"
                            className="form-control pickup-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="pickup"
                            placeholder="Pickup (if no pickup is installed, please enter 'none.')"
                            defaultValue={this.state.pickup} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarTop" className="acousticBassGuitarTop">Top:</label>
                        <input type="text" required="true" 
                            className="form-control top-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="top"
                            placeholder="Top (ex. Sitka Spruce)"
                            defaultValue={this.state.top} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarBackSides" className="acousticBassGuitarBackSides">Back And Sides:</label>
                        <input type="text" required="true"
                            className="form-control back-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="backSides"
                            placeholder="Back and Sides (ex. Sapele)"
                            defaultValue={this.state.backSides} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticBassGuitarSpecialFeatures" className="acousticBassGuitarSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. added Fishman preamp or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createAcousticBassPost}
                        className="btn btn-#a1887f brown lighten-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}