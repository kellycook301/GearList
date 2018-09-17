import React, { Component } from "react"
import effect from "./images/cabinet_(md).png"

export default class CabinetEdit extends Component {

   state = {
            cabinetMake: "",
            cabinetModel: "",
            cabinetSpeakers: "",
            cabinetWoodType: "",
            id: null
    }

    componentDidMount() {
        const cabinet = this.props.cabinets.find(a => a.id === parseInt(this.props.match.params.cabinetId, 0))
        this.setState(cabinet);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createcabinetPost = evt => {
        evt.preventDefault()
        const newCabinetPost = {
            make: this.state.make,
            model: this.state.model,
            speakers: this.state.speakers,
            woodType: this.state.woodType,
            id: this.state.id
        }
        this.props.editCabinetPost(newCabinetPost, this.state.id, "cabinets").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <img src={effect} className="icon--effect" />
                <h3 className="edit-post">What About Your Speaker Cabinet Would You Like To Edit?</h3>
                <form className="cabinetForm">
                    <div className="form-group">
                        <label htmlFor="cabinetMake" className="cabinetMake">Make:</label>
                        <input type="text" required="true"
                            className="form-control make-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="make"
                            placeholder="Make (ex. Orange)"
                            defaultValue={this.state.make} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cabinetModel" className="cabinetModel">Model:</label>
                        <input type="text" required="true"
                            className="form-control model-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="model"
                            placeholder="Model (ex. PPC412)"
                            defaultValue={this.state.model} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cabinetSpeakers" className="cabinetSpeakers">Speakers:</label>
                        <input type="text" required="true"
                            className="form-control power-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="speakers"
                            placeholder="Speakers (ex. Vintage 30s)"
                            defaultValue={this.state.speakers} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cabinetWoodType" className="cabinetWoodType">Wood Type:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="features"
                            placeholder="Wood Type (ex. Birch)"
                            defaultValue={this.state.woodType} />
                    </div>
                    <button type="submit" onClick={this.createCabinetPost}
                        className="btn btn-#ffa726 orange lighten-1">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}