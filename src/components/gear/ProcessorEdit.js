import React, { Component } from "react"
import effect from "./images/processor_(lg).png"
import "./ProcessorList.css"

export default class ProcessorEdit extends Component {

   state = {
            processoreMake: "",
            processorModel: "",
            processorStyle: "",
            processorSize: "",
            processorTrueBypass: "",
            processorTopSideLoaded: "",
            processorSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const processor = this.props.processors.find(a => a.id === parseInt(this.props.match.params.processorId, 0))
        this.setState(processor);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createProcessorPost = evt => {
        evt.preventDefault()
        const newProcessorPost = {
            make: this.state.make,
            model: this.state.model,
            style: this.state.style,
            size: this.state.size,
            MIDI: this.state.MIDI,
            powerAmp: this.state.powerAmp,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editProcessorPost(newProcessorPost, this.state.id, "processors").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={effect} className="icon--processor" />
                <h3 className="edit-post">What About Your Proceesor Pedal Would You Like To Edit?</h3>
                <form className="processorForm">
                    <div className="form-group">
                        <label htmlFor="processorMake" className="processorMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Line 6)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="processorModel" className="processorModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Helix)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="processorStyle" className="processorStyle">Style:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="style"
                            placeholder="Type (ex. Amp Modeler)"
                            defaultValue={this.state.style} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="processorSize" className="processorSize">Power Size:</label>
                        <input type="text" required="true"
                            className="form-control size-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="size"
                            placeholder="Unit Size (ex. Small, Medium, Large)"
                            defaultValue={this.state.size} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="processorMIDI" className="processorMIDI">Has MIDI Capabilities?:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="MIDI"
                            placeholder="Has MIDI Capabilities (ex. Yes!)"
                            defaultValue={this.state.MIDI} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="processorPowerAmp" className="processorPowerAmp">Has Power Amp Built-In:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="powerAmp"
                            placeholder="Has Power Amp Built In (ex. Yes)"
                            defaultValue={this.state.powerAmp} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="processorSpecialFeatures" className="processorSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Keeley 'Seeing-Eye' Mod or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createProcessorPost}
                        className="btn btn-#616161 grey darken-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}