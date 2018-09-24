import React, { Component } from "react"
import distortionPedal from "./images/distortion_(lg).png"
import './DistortionEdit.css'

export default class DistortionEdit extends Component {

   state = {
            distortionMake: "",
            distortionModel: "",
            distortionStyle: "",
            distortionPowerDraw: "",
            distortionTrueBypass: "",
            distortionTopSideLoaded: "",
            distortionSpecialFeatures: "",
            id: null
    }

    // window.scrollTo forces the screen to render to the top when you click on the edit icon. Otherwise
    // the edit screen will present itself wherever your scroll bar was on the gear page.
    // This is a neat trick! Thanks, Google!
    
    componentDidMount() {
        window.scrollTo(0, 0)
        const distortion = this.props.distortions.find(a => a.id === parseInt(this.props.match.params.distortionId, 0))
        this.setState(distortion);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createDistortionPost = evt => {
        evt.preventDefault()
        const newDistortionPost = {
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
        this.props.editDistortionPost(newDistortionPost, this.state.id, "distortions").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={distortionPedal} className="icon--distortionEdit" />
                <h3 className="edit-post">What About Your Distortion Pedal Would You Like To Edit?</h3>
                <form className="distortionEditForm">
                    <div className="form-group">
                        <label htmlFor="distortionMake" className="distortionMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Lone Wolf Audio)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="distortionModel" className="distortionModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Metalzone)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="distortionStyle" className="distortionStyle">Style:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="style"
                            placeholder="Type (ex. Rat)"
                            defaultValue={this.state.style} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="distortionPowerDraw" className="distortionPowerDraw">Power Draw:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="draw"
                            placeholder="Power Draw (ex. 9V or 18V)"
                            defaultValue={this.state.draw} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="distortionTrueBypass" className="distortionTrueBypass">True Bypass:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="bypass"
                            placeholder="True Bypass (ex. Yes!)"
                            defaultValue={this.state.bypass} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="distortionTopSideLoaded" className="distortionTopSideLoaded">Side or Top-Mounted Jacks:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="jacks"
                            placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)"
                            defaultValue={this.state.jacks} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="distortionSpecialFeatures" className="distortionSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Keeley 'Seeing-Eye' Mod or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createDistortionPost}
                        className="btn btn-#ff5252 red accent-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}