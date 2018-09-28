import React, { Component } from "react"
import Navbar from "../nav/Navbar"
import effect from "./images/cabinet_(lg).png"
import './CabinetEdit.css'

export default class CabinetEdit extends Component {

   state = {
            cabinetMake: "",
            cabinetModel: "",
            cabinetSpeakers: "",
            cabinetWoodType: "",
            cabinetTolexColor: "",
            cabinetOpenClosedBack: "",
            cabinetSlantedStraight: "",
            id: null
    }

    // window.scrollTo forces the screen to render to the top when you click on the edit icon. Otherwise
    // the edit screen will present itself wherever your scroll bar was on the gear page.
    // This is a neat trick! Thanks, Google!
    
    componentDidMount() {
        window.scrollTo(0, 0)
        const cabinet = this.props.cabinets.find(a => a.id === parseInt(this.props.match.params.cabinetId, 0))
        this.setState(cabinet);
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createCabinetPost = evt => {
        evt.preventDefault()
        const newCabinetPost = {
            make: this.state.make,
            model: this.state.model,
            speakers: this.state.speakers,
            woodType: this.state.woodType,
            tolex: this.state.tolex,
            back: this.state.back,
            slantedStraight: this.state.slantedStraight,
            loginUser: JSON.parse(sessionStorage.getItem("loginUser")).id,
            id: this.state.id
        }
        this.props.editCabinetPost(newCabinetPost, this.state.id, "cabinets").then(() => this.props.history.push("/gear"))
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    logout={this.logout} />
                <img src={effect} className="icon--cabinetEdit" />
                <h3 className="edit-post">What About Your Speaker Cabinet Would You Like To Edit?</h3>
                <form className="cabinetEditForm">
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
                    <div className="form-group">
                        <label htmlFor="cabinetTolex" className="cabinetTolex">Tolex Color:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="tolex"
                            placeholder="Tolex Color (ex. Green)"
                            defaultValue={this.state.tolex} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cabinetOpenClosedBack" className="cabinetOpenClosedBack">Open, Partial, or Closed Back:</label>
                        <input type="text" required="true"
                            className="form-control features-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="back"
                            placeholder="Open, Partial, or Closed Back (ex. Closed Back)"
                            defaultValue={this.state.back} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cabinetSlantedStraight" className="cabinetSlantedStraight">Slanted or Straight:</label>
                        <input type="text" required="true"
                            className="form-control slantedStraight-field"
                            onChange={this.handleFieldChange.bind(this)}
                            id="slantedStraight"
                            placeholder="Slanted or Straight (ex. Slanted)"
                            defaultValue={this.state.slantedStraight} />
                    </div>
                    <button type="submit" onClick={this.createCabinetPost}
                        className="btn btn-#ffa726 orange lighten-1">Submit Edited Post</button>
                </form>
            </React.Fragment>
        )
    }
}