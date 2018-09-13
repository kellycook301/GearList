import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'

import GearForm from './gear/GearForm'
import AcousticList from './gear/AcousticList'
import ElectricList from './gear/ElectricList'

export default class AppViews extends Component {

    // check if credentials are in session storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        users: [],
        acoustics: [],
        electrics: [],
        basses: [],
        amplifiers: []
    }

    addUser = (user, link) => DataManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))
    addAcoustic = (acoustic, link) => DataManager.post(acoustic, link)
        .then(() => DataManager.getAll("acoustics"))
        .then(acoustics => this.setState({
            acoustics: acoustics
        }))
    deleteAcousticPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("acoustics"))
        .then(acoustics => this.setState({
            acoustics: acoustics
        }))
    addElectric = (electric, link) => DataManager.post(electric, link)
        .then(() => DataManager.getAll("electrics"))
        .then(electrics => this.setState({
            electrics: electrics
        }))
    deleteElectricPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("electrics"))
        .then(electrics => this.setState({
            electrics: electrics
        }))
    addBass = (bass, link) => DataManager.post(bass, link)
        .then(() => DataManager.getAll("basses"))
        .then(basses => this.setState({
            basses: basses
        }))
    addAmplifier = (amplifier, link) => DataManager.post(amplifier, link)
        .then(() => DataManager.getAll("amplifiers"))
        .then(amplifiers => this.setState({
            amplifiers: amplifiers
        }))
    // editGearEntry = (article, id, link) => DataManager.put(article, id, link)
    //     .then(() => DataManager.getAll("entries"))
    //     .then(entries => this.setState({
    //         entries: entries
    //     }))
    

    // componentDidMount() {
    //     const _state = {}
    //     DataManager.getAll("acoustics").then(acoustics => _state.acousticss = acoustics)
    //         .then(() => DataManager.getAll("users").then(users => _state.users = users))
    //         .then(() => { this.setState(_state) })
    // }

    render() {
        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                    {/* gear entries */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <GearForm {...props}
                                addAcoustic={this.addAcoustic}
                                acoustics={this.state.acoustics}
                                addElectric={this.addElectric}
                                electrics={this.state.electrics}
                                addBass={this.addBass}
                                basses={this.state.basses}
                                addAmplifier={this.addAmplifier}
                                amplifiers={this.state.amplifiers} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AcousticList {...props}
                                acoustics={this.state.acoustics}
                                deleteAcousticPost={this.deleteAcousticPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ElectricList {...props}
                                electrics={this.state.electrics}
                                deleteElectricPost={this.deleteElectricPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                </div>
            </React.Fragment>
        )
    }

}