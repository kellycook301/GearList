import React, { Component } from "react"
import acousticGuitar from "./images/acoustic_(md).png"

export default class AcousticEdit extends Component {

   state = {
            acousticGuitarMake: "",
            acousticGuitarModel: "",
            acousticGuitarStrings: "",
            acousticGuitarPickup: "",
            acousticGuitarBodyWood: "",
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
            body: this.state.body,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editAcousticPost(newAcousticPost, this.state.id, "acoustics").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={acousticGuitar} className="icon--acoustic" />
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
                        <label htmlFor="acousticGuitarBodyWood" className="acousticGuitarBodyWood">Body Wood:</label>
                        <input type="text" required="true"
                            className="form-control body-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="body"
                            placeholder="Body Wood (ex. Indian Rosewood)"
                            defaultValue={this.state.body} />
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