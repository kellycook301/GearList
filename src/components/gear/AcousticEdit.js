import React, { Component } from "react"
// import acousticGuitar from "./images/acoustic.png"
import "./AcousticEdit.css"

export default class AcousticEdit extends Component {

    state = {
        acousticGuitarMake: "",
        acousticGuitarModel: "",
        acousticGuitarStrings: "",
        acousticGuitarPickup: "",
        acousticGuitarTop: "",
        acousticGuitarBackSides: "",
        acousticGuitarSpecialFeatures: "",
        id: null
    }

    componentDidMount() {
        const acoustic = this.props.acoustics.find(a => a.id === parseInt(this.props.match.params.acousticId, 0))
        this.setState(acoustic);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createAcousticPost = evt => {
        evt.preventDefault()
        const newAcousticPost = {
            make: this.state.make,
            model: this.state.model,
            strings: this.state.strings,
            pickup: this.state.pickup,
            top: this.state.top,
            backSides: this.state.backSides,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editAcousticPost(newAcousticPost, this.state.id, "acoustics").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                {/* <img src={acousticGuitar} className="icon--acoustic" /> */}
                <h3 className="edit-post">What About Your Acoustic Guitar Would You Like To Edit?</h3>
                <form className="acousticForm">
                    <div className="form-group">
                        <label htmlFor="acousticGuitarMake" className="acousticGuitarMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Taylor)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticGuitarModel" className="acousticGuitarModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. 514ce)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticGuitarStrings" className="acousticGuitarStrings">Strings:</label>
                        <input type="text" required="true"
                            className="form-control strings-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="strings"
                            placeholder="Strings (ex. Elixir 12-53)"
                            defaultValue={this.state.strings} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticGuitarPickup" className="acousticGuitarPickup">Pickup:</label>
                        <input type="text" required="true"
                            className="form-control pickup-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="pickup"
                            placeholder="Pickup (if no pickup is installed, please enter 'none.')"
                            defaultValue={this.state.pickup} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticGuitarTop" className="acousticGuitarTop">Top:</label>
                        <input type="text" required="true"
                            className="form-control top-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="top"
                            placeholder="Top (ex. Sitka Spruce)"
                            defaultValue={this.state.top} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticGuitarBackSides" className="acousticGuitarBackSides">Back And Sides:</label>
                        <input type="text" required="true"
                            className="form-control back-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="back"
                            placeholder="Back and Sides (ex. Indian Rosewood)"
                            defaultValue={this.state.backSides} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="acousticGuitarSpecialFeatures" className="acousticGuitarSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. added Fishman preamp or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createAcousticPost}
                        className="btn btn-#a1887f brown lighten-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}