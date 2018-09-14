import React, { Component } from "react"
import effect from "./images/effectPedal.png"

export default class PedalEdit extends Component {

   state = {
            pedalMake: "",
            pedalModel: "",
            pedalType: "",
            pedalSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const pedal = this.props.pedals.find(a => a.id === parseInt(this.props.match.params.pedalId, 0))
        this.setState(pedal);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createPedalPost = evt => {
        evt.preventDefault()
        const newPedalPost = {
            make: this.state.make,
            model: this.state.model,
            type: this.state.type,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editPedalPost(newPedalPost, this.state.id, "pedals").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={effect} className="icon--effect" />
                <h3 className="edit-post">What About Your Effect Pedal Would You Like To Edit?</h3>
                <form className="pedalForm">
                    <div className="form-group">
                        <label htmlFor="pedalMake" className="pedalMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Boss)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pedalModel" className="pedalModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Big Muff)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pedalType" className="pedalType">Type:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="power"
                            placeholder="Type (ex. Delay)"
                            defaultValue={this.state.type} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pedalSpecialFeatures" className="pedalSpecialFeatures">Special Features:</label>
                        <input type="textarea" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Keeley 'Seeing-Eye' Mod) If no special features have been added, please enter 'none.'"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createPedalPost}
                        className="btn btn-success">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}