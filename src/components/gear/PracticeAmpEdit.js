import React, { Component } from "react"
import effect from "./images/practiceAmp_(lg).png"
import './PracticeAmpEdit.css'


export default class PracticeAmpEdit extends Component {

   state = {
            practiceAmpMake: "",
            practiceAmpModel: "",
            practiceAmpStyle: "",
            practiceAmpWattage: "",
            practiceAmpMIDI: "",
            practiceAmpSpeakers: "",
            practiceAmpSpecialFeatures: "",
            id: null
    }

    // window.scrollTo forces the screen to render to the top when you click on the edit icon. Otherwise
    // the edit screen will present itself wherever your scroll bar was on the gear page.
    // This is a neat trick! Thanks, Google!
    
    componentDidMount() {
        window.scrollTo(0, 0)
        const practice = this.props.practices.find(a => a.id === parseInt(this.props.match.params.practiceId, 0))
        this.setState(practice);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createPracticeAmpPost = evt => {
        evt.preventDefault()
        const newPracticePost = {
            make: this.state.make,
            model: this.state.model,
            style: this.state.style,
            wattage: this.state.wattage,
            MIDI: this.state.MIDI,
            speakers: this.state.speakers,
            features: this.state.features,
            loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            id: this.state.id
        }
        this.props.editPracticeAmpPost(newPracticePost, this.state.id, "practices").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={effect} className="icon--practiceAmpEdit" />
                <h3 className="edit-post">What About Your Practice Amp Would You Like To Edit?</h3>
                <form className="practiceEditForm">
                    <div className="form-group">
                        <label htmlFor="practiceMake" className="practiceMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Peavey)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="practiceModel" className="practiceModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Decade)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="practiceStyle" className="practiceStyle">Style:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="style"
                            placeholder="Style (ex. Digital)"
                            defaultValue={this.state.style} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="practiceWattage" className="practiceWattage">Wattage:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="wattage"
                            placeholder="Wattage (ex. 30 Watts)"
                            defaultValue={this.state.wattage} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="practiceMIDI" className="practiceMIDI">MIDI:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="MIDI"
                            placeholder="MIDI (ex. Yes!)"
                            defaultValue={this.state.MIDI} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="practiceSpeakers" className="practiceSpeakers">Speakers:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="speakers"
                            placeholder="Speakers (ex. Peavey Black Shadow"
                            defaultValue={this.state.speakers} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="practiceSpecialFeatures" className="practiceSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. 'Diode Clipped' or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createPracticeAmpPost}
                        className="btn btn-#e0e0e0 grey lighten-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}