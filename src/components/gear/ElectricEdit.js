import React, { Component } from "react"
import electricGuitar from "./images/electric_(md).png"

export default class ElectricEdit extends Component {

   state = {
            electricGuitarMake: "",
            electricGuitarModel: "",
            electricGuitarStrings: "",
            electricGuitarPickups: "",
            electricGuitarBodyWood: "",
            electricGuitarSpecialFeatures: "",
            id: null
    }

    componentDidMount() {
        const electric = this.props.electrics.find(a => a.id === parseInt(this.props.match.params.electricId, 0))
        this.setState(electric);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createElectricPost = evt => {
        evt.preventDefault()
        const newElectricPost = {
            make: this.state.make,
            model: this.state.model,
            strings: this.state.strings,
            pickups: this.state.pickups,
            body: this.state.body,
            features: this.state.features,
            id: this.state.id
        }
        this.props.editElectricPost(newElectricPost, this.state.id, "electrics").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={electricGuitar} className="icon--electric" />
                <h3 className="edit-post">What About Your Electric Guitar Would You Like To Edit?</h3>
                <form className="electricForm">
                    <div className="form-group">
                        <label htmlFor="electricGuitarMake" className="electricGuitarMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. PRS)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="electricGuitarModel" className="electricGuitarModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. Custom 24)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="electricGuitarStrings" className="electricGuitarStrings">Strings:</label>
                        <input type="text" required="true"
                            className="form-control strings-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="strings"
                            placeholder="Strings (ex. Ernie Ball 10-46)"
                            defaultValue={this.state.strings} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="electricGuitarPickups" className="electricGuitarPickups">Pickups:</label>
                        <input type="text" required="true"
                            className="form-control pickups-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="pickups"
                            placeholder="Pickups (ex. Seymour Duncan Pearly Gates)"
                            defaultValue={this.state.pickups} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="electricGuitarBodyWood" className="electricGuitarBodyWood">Body Wood:</label>
                        <input type="text" required="true"
                            className="form-control body-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="body"
                            placeholder="Body Wood (ex. Alder)"
                            defaultValue={this.state.body} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="electricGuitarSpecialFeatures" className="electricGuitarSpecialFeatures">Special Features:</label>
                        <input type="textarea" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Special Features (ex. Evertune bridge installed) If no special features have been added, please enter 'none.'"
                            defaultValue={this.state.features} />
                    </div>
                    <button type="submit" onClick={this.createElectricPost}
                        className="btn btn-danger">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}