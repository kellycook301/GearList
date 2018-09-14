import React, { Component } from "react"

export default class BassEdit extends Component {

   state = {
            bassGuitarMake: "",
            bassGuitarModel: "",
            bassGuitarStrings: "",
            bassGuitarPickups: "",
            bassGuitarBodyWood: "",
            bassGuitarSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const bass = this.props.basses.find(a => a.id === parseInt(this.props.match.params.bassId, 0))
        this.setState(bass);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createBassPost = evt => {
        evt.preventDefault()
        const newBassPost = {
            make: this.state.make,
            model: this.state.model,
            strings: this.state.strings,
            pickups: this.state.pickups,
            body: this.state.body,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editBassPost(newBassPost, this.state.id, "basses").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="edit-post">What About Your Bass Would You Like To Edit?</h3>
                <form className="bassForm">
                    <div className="form-group">
                        <label htmlFor="bassGuitarMake" className="bassGuitarMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Fender)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bassGuitarModel" className="bassGuitarModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Precision Bass)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bassGuitarStrings" className="bassGuitarStrings">Strings:</label>
                        <input type="text" required="true"
                            className="form-control strings-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="strings"
                            placeholder="Strings (ex. Ernie Ball 45-105)"
                            defaultValue={this.state.strings} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bassGuitarPickups" className="bassGuitarPickups">Strings:</label>
                        <input type="text" required="true"
                            className="form-control pickups-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="pickups"
                            placeholder="Pickups (ex. Bareknuckle '58 Coil Split)"
                            defaultValue={this.state.pickups} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bassGuitarBodyWood" className="bassGuitarBodyWood">Body Wood:</label>
                        <input type="text" required="true"
                            className="form-control body-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="body"
                            placeholder="Body Wood (ex. Swamp Ash)"
                            defaultValue={this.state.body} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bassGuitarSpecialFeatures" className="bassGuitarSpecialFeatures">Special Features:</label>
                        <input type="textarea" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Hipshit Xtender installed) If no special features have been added, please enter 'none.'"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createBassPost}
                        className="btn btn-success">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}