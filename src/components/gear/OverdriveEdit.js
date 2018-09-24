import React, { Component } from "react"
import effect from "./images/overdrive_(lg).png"
import './OverdriveEdit.css'


export default class OverdriveEdit extends Component {

   state = {
            overdriveMake: "",
            overdriveModel: "",
            overdriveStyle: "",
            overdrivePowerDraw: "",
            overdriveTrueBypass: "",
            overdriveTopSideLoaded: "",
            overdriveSpecialFeatures: "",
            id: null
    }

    // window.scrollTo forces the screen to render to the top when you click on the edit icon. Otherwise
    // the edit screen will present itself wherever your scroll bar was on the gear page.
    // This is a neat trick! Thanks, Google!
    
    componentDidMount() {
        window.scrollTo(0, 0)
        const overdrive = this.props.overdrives.find(a => a.id === parseInt(this.props.match.params.overdriveId, 0))
        this.setState(overdrive);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createOverdrivePost = evt => {
        evt.preventDefault()
        const newOverdrivePost = {
            make: this.state.make,
            model: this.state.model,
            style: this.state.style,
            draw: this.state.draw,
            bypass: this.state.bypass,
            jacks: this.state.jacks,
            features: this.state.features,
            loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            id: this.state.id
        }
        this.props.editOverdrivePost(newOverdrivePost, this.state.id, "overdrives").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={effect} className="icon--overdriveEdit" />
                <h3 className="edit-post">What About Your Overdrive Pedal Would You Like To Edit?</h3>
                <form className="overdriveEditForm">
                    <div className="form-group">
                        <label htmlFor="overdriveMake" className="overdriveMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. JHS)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="overdriveModel" className="overdriveModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Moonshine)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="overdriveStyle" className="overdriveStyle">Style:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="style"
                            placeholder="Type (ex. Bluesbreaker)"
                            defaultValue={this.state.style} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="overdrivePowerDraw" className="overdrivePowerDraw">Power Draw:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="draw"
                            placeholder="Power Draw (ex. 9V or 18V)"
                            defaultValue={this.state.draw} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="overdriveTrueBypass" className="overdriveTrueBypass">True Bypass:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="bypass"
                            placeholder="True Bypass (ex. Yes!)"
                            defaultValue={this.state.bypass} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="overdriveTopSideLoaded" className="overdriveTopSideLoaded">Side or Top-Mounted Jacks:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="jacks"
                            placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)"
                            defaultValue={this.state.jacks} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="overdriveSpecialFeatures" className="overdriveSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Keeley 'Seeing-Eye' Mod or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createOverdrivePost}
                        className="btn btn-#00e676 green accent-3">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}