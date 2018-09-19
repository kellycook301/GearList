import React, { Component } from "react"
import effect from "./images/modulation_(lg).png"
import './ModulationEdit.css'

export default class ModulationEdit extends Component {

   state = {
            modulationMake: "",
            modulationModel: "",
            modulationType: "",
            modulationPowerDraw: "",
            modulationTrueBypass: "",
            modulationTopSideLoaded: "",
            modulationSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const modulation = this.props.modulations.find(a => a.id === parseInt(this.props.match.params.modulationId, 0))
        this.setState(modulation);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createModulationPost = evt => {
        evt.preventDefault()
        const newModulationPost = {
            make: this.state.make,
            model: this.state.model,
            type: this.state.type,
            draw: this.state.draw,
            bypass: this.state.bypass,
            jacks: this.state.jacks,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editModulationPost(newModulationPost, this.state.id, "modulations").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={effect} className="icon--modulationEdit" />
                <h3 className="edit-post">What About Your modulation Pedal Would You Like To Edit?</h3>
                <form className="modulationEditForm">
                    <div className="form-group">
                        <label htmlFor="modulationMake" className="modulationMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Boss)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modulationModel" className="modulationModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. DD-2)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modulationStyle" className="modulationType">Type:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="type"
                            placeholder="Type (ex. Chorus)"
                            defaultValue={this.state.type} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modulationPowerDraw" className="modulationPowerDraw">Power Draw:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="draw"
                            placeholder="Power Draw (ex. 9V or 18V)"
                            defaultValue={this.state.draw} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modulationTrueBypass" className="modulationTrueBypass">True Bypass:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="bypass"
                            placeholder="True Bypass (ex. Yes!)"
                            defaultValue={this.state.bypass} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modulationTopSideLoaded" className="modulationTopSideLoaded">Side or Top-Mounted Jacks:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="jacks"
                            placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)"
                            defaultValue={this.state.jacks} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modulationSpecialFeatures" className="modulationSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. No Tremolo Volume Drop or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createModulationPost}
                        className="btn btn-#03a9f4 light-blue">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}