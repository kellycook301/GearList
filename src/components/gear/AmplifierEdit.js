import React, { Component } from "react"
import amp from "./images/amplifier_(md).png"

export default class AmplifierEdit extends Component {

   state = {
            amplifierMake: "",
            amplifierModel: "",
            amplifierPowerSection: "",
            amplifierPreampSection: "",
            amplifierHeadCombo: "",
            amplifierSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const amplifier = this.props.amplifiers.find(a => a.id === parseInt(this.props.match.params.amplifierId, 0))
        this.setState(amplifier);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createAmplifierPost = evt => {
        evt.preventDefault()
        const newAmplifierPost = {
            make: this.state.make,
            model: this.state.model,
            powerSection: this.state.powerSection,
            preampSection: this.state.preampSection,
            amplifierHeadCombo: this.state.amplifierHeadCombo,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editAmplifierPost(newAmplifierPost, this.state.id, "amplifiers").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={amp} className="icon--amp" />
                <h3 className="edit-post">What About Your Amplifier Would You Like To Edit?</h3>
                <form className="amplifierForm">
                    <div className="form-group">
                        <label htmlFor="amplifierMake" className="amplifierMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Marshall)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amplifierModel" className="amplifierModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. JCM 800)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amplifierPowerSection" className="amplifierPowerSection">Power Section:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="power"
                            placeholder="Power Section (ex. Solid State Power Section)"
                            defaultValue={this.state.powerSection} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amplifierPreampSection" className="amplifierPreampSection">Preamp Section:</label>
                        <input type="text" required="true"
                            className="form-control preamp-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="preamp"
                            placeholder="Preamp Section (ex. Tube Preamp Section)"
                            defaultValue={this.state.preampSection} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amplifierHeadCombo" className="amplifierHeadCombo">Head or Combo:</label>
                        <input type="text" required="true"
                            className="form-control headCombo-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="headCombo"
                            placeholder="Head or Combo Amp (ex. 2x12 Combo)"
                            defaultValue={this.state.amplifierHeadCombo} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amplifierSpecialFeatures" className="amplifierSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Fortin Modded. Smoother Mids or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createAmplifierPost}
                        className="btn btn-#616161 grey darken-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}