import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'

import GearForm from './gear/GearForm'
import AcousticList from './gear/AcousticList'
import ElectricList from './gear/ElectricList'
import BassList from './gear/BassList'
import AmplifierList from './gear/AmplifierList'
import AcousticEdit from './gear/AcousticEdit'
import ElectricEdit from './gear/ElectricEdit'
import BassEdit from './gear/BassEdit'
import AmplifierEdit from './gear/AmplifierEdit'

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

    // ADDING A USER
    addUser = (user, link) => DataManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))

    // ACOUSTIC RELATED POSTS
    addAcoustic = (acoustic, link) => DataManager.post(acoustic, link)
        .then(() => DataManager.getAll("acoustics"))
        .then(acoustics => this.setState({
            acoustics: acoustics
        }))
    editAcousticPost = (acoustic, id, link) => DataManager.put(acoustic, id, link)
        .then(() => DataManager.getAll("acoustics"))
        .then(acoustics => this.setState({
            acoustics: acoustics
        }))
    deleteAcousticPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("acoustics"))
        .then(acoustics => this.setState({
            acoustics: acoustics
        }))

    // ELECTRIC RELATED POSTS
    addElectric = (electric, link) => DataManager.post(electric, link)
        .then(() => DataManager.getAll("electrics"))
        .then(electrics => this.setState({
            electrics: electrics
        }))
    editElectricPost = (electric, id, link) => DataManager.put(electric, id, link)
        .then(() => DataManager.getAll("electrics"))
        .then(electrics => this.setState({
            electrics: electrics
        }))
    deleteElectricPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("electrics"))
        .then(electrics => this.setState({
            electrics: electrics
        }))

    // BASS RELATED POSTS
    addBass = (bass, link) => DataManager.post(bass, link)
        .then(() => DataManager.getAll("basses"))
        .then(basses => this.setState({
            basses: basses
        }))
    editBassPost = (bass, id, link) => DataManager.put(bass, id, link)
        .then(() => DataManager.getAll("basses"))
        .then(basses => this.setState({
            basses: basses
        }))
    deleteBassPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("basses"))
        .then(basses => this.setState({
            basses: basses
        }))

    // AMPLIFIER RELATED POSTS
    addAmplifier = (amplifier, link) => DataManager.post(amplifier, link)
        .then(() => DataManager.getAll("amplifiers"))
        .then(amplifiers => this.setState({
            amplifiers: amplifiers
        }))
    editAmplifierPost = (amplifier, id, link) => DataManager.put(amplifier, id, link)
        .then(() => DataManager.getAll("amplifiers"))
        .then(amplifiers => this.setState({
            amplifiers: amplifiers 
        }))
    deleteAmplifierPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("amplifiers"))
        .then(amplifiers => this.setState({
            amplifiers: amplifiers
        }))

    componentDidMount() {
        const _state = {}
        DataManager.getAll("acoustics").then(acoustics => _state.acoustics = acoustics)
            .then(() => DataManager.getAll("electrics").then(electrics => _state.electrics = electrics))
            .then(() => DataManager.getAll("basses").then(basses => _state.basses = basses))
            .then(() => DataManager.getAll("amplifiers").then(amplifiers => _state.amplifiers = amplifiers))
            .then(() => DataManager.getAll("users").then(users => _state.users = users))
            .then(() => { this.setState(_state) })
    }

    // ROUTES
    render() {
        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                    {/* GEAR ENTRIES */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <GearForm {...props}
                                addAcoustic={this.addAcoustic}
                                editAcousticPost={this.editAcousticPost}
                                acoustics={this.state.acoustics}

                                addElectric={this.addElectric}
                                editElectricPost={this.editElectricPost}
                                electrics={this.state.electrics}

                                addBass={this.addBass}
                                basses={this.state.basses}

                                addAmplifier={this.addAmplifier}
                                editAmplifierPost={this.editAmplifierPost}
                                amplifiers={this.state.amplifiers} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />

                    {/* Acoustic Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AcousticList {...props}
                                acoustics={this.state.acoustics}
                                deleteAcousticPost={this.deleteAcousticPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/acoustic/:acousticId(\d+)" render={(props) => {
                        return <AcousticEdit {...props}
                            editAcousticPost={this.editAcousticPost}
                            acoustics={this.state.acoustics} />
                    }} />

                    {/* Electric Related  */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ElectricList {...props}
                                electrics={this.state.electrics}
                                deleteElectricPost={this.deleteElectricPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/electric/:electricId(\d+)" render={(props) => {
                        return <ElectricEdit {...props}
                            editElectricPost={this.editElectricPost}
                            electrics={this.state.electrics} />
                    }} />

                    {/* Bass Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <BassList {...props}
                                basses={this.state.basses}
                                deleteBassPost={this.deleteBassPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/bass/:bassId(\d+)" render={(props) => {
                        return <BassEdit {...props}
                            editBassPost={this.editBassPost}
                            basses={this.state.basses} />
                    }} />

                    {/* Amplifier Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AmplifierList {...props}
                                amplifiers={this.state.amplifiers}
                                deleteAmplifierPost={this.deleteAmplifierPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/amplifier/:amplifierId(\d+)" render={(props) => {
                        return <AmplifierEdit {...props}
                            editAmplifierPost={this.editAmplifierPost}
                            amplifiers={this.state.amplifiers} />
                    }} />
                </div>
            </React.Fragment>
        )
    }

}