import React, { Component } from "react"
import comboAmp from "./images/combo_(md).png"

export default class ComboEdit extends Component {

   state = {
            comboMake: "",
            comboModel: "",
            comboPowerSection: "",
            comboPreampSection: "",
            comboSpeakers: "",
            comboSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const combo = this.props.combos.find(a => a.id === parseInt(this.props.match.params.comboId, 0))
        this.setState(combo);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createComboPost = evt => {
        evt.preventDefault()
        const newComboPost = {
            make: this.state.make,
            model: this.state.model,
            powerSection: this.state.powerSection,
            preampSection: this.state.preampSection,
            comboSpeakers: this.state.comboSpeakers,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editComboPost(newComboPost, this.state.id, "combos").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={comboAmp} className="icon--amp" />
                <h3 className="edit-post">What About Your Combo Amplifier Would You Like To Edit?</h3>
                <form className="comboForm">
                    <div className="form-group">
                        <label htmlFor="comboMake" className="comboMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Dr. Z)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comboModel" className="comboModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Carmen Ghia)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comboPowerSection" className="comboPowerSection">Power Section:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="power"
                            placeholder="Power Section (ex. Solid State Power Section)"
                            defaultValue={this.state.powerSection} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comboPreampSection" className="comboPreampSection">Preamp Section:</label>
                        <input type="text" required="true"
                            className="form-control preamp-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="preamp"
                            placeholder="Preamp Section (ex. Tube Preamp Section)"
                            defaultValue={this.state.preampSection} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comboSpeakers" className="comboSpeakers">Speakers:</label>
                        <input type="text" required="true"
                            className="form-control headCombo-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="speakers"
                            placeholder="Speakers (ex. V30s)"
                            defaultValue={this.state.comboSpeakers} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comboSpecialFeatures" className="comboSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Fortin Modded. Smoother Mids or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createComboPost}
                        className="btn btn-#ffcc80 orange lighten-3">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}