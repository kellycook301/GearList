import React, { Component } from "react"
import fuzzPedal from "./images/fuzz_(lg).png"
import './FuzzEdit.css'

export default class FuzzEdit extends Component {

   state = {
            fuzzMake: "",
            fuzzModel: "",
            fuzzStyle: "",
            fuzzPowerDraw: "",
            fuzzTrueBypass: "",
            fuzzTopSideLoaded: "",
            fuzzSpecialFeatures: "",
            id: null
    }

    // window.scrollTo forces the screen to render to the top when you click on the edit icon. Otherwise
    // the edit screen will present itself wherever your scroll bar was on the gear page.
    // This is a neat trick! Thanks, Google!
    
    componentDidMount() {
        window.scrollTo(0, 0)
        const fuzz = this.props.fuzzes.find(a => a.id === parseInt(this.props.match.params.fuzzId, 0))
        this.setState(fuzz);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createFuzzPost = evt => {
        evt.preventDefault()
        const newFuzzPost = {
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
        this.props.editFuzzPost(newFuzzPost, this.state.id, "fuzzes").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={fuzzPedal} className="icon--fuzzEdit" />
                <h3 className="edit-post">What About Your Fuzz Pedal Would You Like To Edit?</h3>
                <form className="fuzzEditForm">
                    <div className="form-group">
                        <label htmlFor="fuzzMake" className="fuzzMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Electro Harmonix)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuzzModel" className="fuzzModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Big Muff)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuzzStyle" className="fuzzStyle">Style:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="style"
                            placeholder="Type (ex. Civil War)"
                            defaultValue={this.state.style} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuzzPowerDraw" className="fuzzPowerDraw">Power Draw:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="draw"
                            placeholder="Power Draw (ex. 9V or 18V)"
                            defaultValue={this.state.draw} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuzzTrueBypass" className="fuzzTrueBypass">True Bypass:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="bypass"
                            placeholder="True Bypass (ex. Yes!)"
                            defaultValue={this.state.bypass} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuzzTopSideLoaded" className="fuzzTopSideLoaded">Side or Top-Mounted Jacks:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="jacks"
                            placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)"
                            defaultValue={this.state.jacks} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuzzSpecialFeatures" className="fuzzSpecialFeatures">Special Features:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Keeley 'Seeing-Eye' Mod or 'none')"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createFuzzPost}
                        className="btn btn-#ff8a65 deep-orange lighten-2">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}