import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'

// The monstrous form component
import GearForm from './gear/GearForm'

// The Components where gear is listed
import AcousticList from './gear/AcousticList'
import ElectricList from './gear/ElectricList'
import BassList from './gear/BassList'
import AmplifierList from './gear/AmplifierList'
import ComboList from './gear/ComboList'
import OverdriveList from './gear/OverdriveList'
import CabinetList from './gear/CabinetList'

// The Components where gear is edited
import AcousticEdit from './gear/AcousticEdit'
import ElectricEdit from './gear/ElectricEdit'
import BassEdit from './gear/BassEdit'
import AmplifierEdit from './gear/AmplifierEdit'
import ComboEdit from './gear/ComboEdit'
import OverdriveEdit from './gear/OverdriveEdit'
import CabinetEdit from './gear/CabinetEdit'

export default class AppViews extends Component {

    // check if credentials are in session storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        acoustics: [],
        electrics: [],
        basses: [],
        amplifiers: [],
        combos: [],
        overdrives: [],
        cabinets: [],
        users: []
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

    // COMBO AMPLIFIER RELATED POSTS
    addCombo = (combo, link) => DataManager.post(combo, link)
        .then(() => DataManager.getAll("combos"))
        .then(combos => this.setState({
            combos: combos
        }))
    editComboPost = (combo, id, link) => DataManager.put(combo, id, link)
        .then(() => DataManager.getAll("combos"))
        .then(combos => this.setState({
            combos: combos 
        }))
    deleteComboPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("combos"))
        .then(combos => this.setState({
            combos: combos
        }))

    // PEDAL RELATED POSTS
    addOverdrive = (overdrive, link) => DataManager.post(overdrive, link)
        .then(() => DataManager.getAll("overdrives"))
        .then(overdrives => this.setState({
            overdrives: overdrives
        }))
    editOverdrivePost = (overdrive, id, link) => DataManager.put(overdrive, id, link)
        .then(() => DataManager.getAll("overdrives"))
        .then(overdrives => this.setState({
            overdrives: overdrives 
        }))
    deleteOverdrivePost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("overdrives"))
        .then(overdrives => this.setState({
            overdrives: overdrives
        }))

    // CABINET RELATED POSTS
    addCabinet = (cabinet, link) => DataManager.post(cabinet, link)
        .then(() => DataManager.getAll("cabinets"))
        .then(cabinets => this.setState({
            cabinets: cabinets
        }))
    editCabinetPost = (cabinet, id, link) => DataManager.put(cabinet, id, link)
        .then(() => DataManager.getAll("cabinets"))
        .then(cabinets => this.setState({
            cabinets: cabinets 
        }))
    deleteCabinetPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("cabinets"))
        .then(cabinets => this.setState({
            cabinets: cabinets
        }))

    componentDidMount() {
        const _state = {}
        DataManager.getAll("acoustics").then(acoustics => _state.acoustics = acoustics)
            .then(() => DataManager.getAll("electrics").then(electrics => _state.electrics = electrics))
            .then(() => DataManager.getAll("basses").then(basses => _state.basses = basses))
            .then(() => DataManager.getAll("amplifiers").then(amplifiers => _state.amplifiers = amplifiers))
            .then(() => DataManager.getAll("combos").then(combos => _state.combos = combos))
            .then(() => DataManager.getAll("overdrives").then(overdrives => _state.overdrives = overdrives))
            .then(() => DataManager.getAll("cabinets").then(cabinets => _state.cabinets = cabinets))
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
                                editBassPost={this.editBassPost}
                                basses={this.state.basses}

                                addAmplifier={this.addAmplifier}
                                editAmplifierPost={this.editAmplifierPost}
                                amplifiers={this.state.amplifiers}

                                addCombo={this.addCombo}
                                editComboPost={this.editComboPost}
                                combos={this.state.combos}
                                
                                addOverdrive={this.addOverdrive}
                                editOverdrivePost={this.editOverdrivePost}
                                overdrives={this.state.overdrives}

                                addCabinet={this.addCabinet}
                                editCabinetPost={this.editCabinetPost}
                                cabinets={this.state.cabinets}
                                />
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

                    {/* Combo Amp Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ComboList {...props}
                                combos={this.state.combos}
                                deleteComboPost={this.deleteComboPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/combo/:comboId(\d+)" render={(props) => {
                        return <ComboEdit {...props}
                            editComboPost={this.editComboPost}
                            combos={this.state.combos} />
                    }} />

                    {/* Overdrive Pedal Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <OverdriveList {...props}
                            overdrives={this.state.overdrives}
                                deleteOverdrivePost={this.deleteOverdrivePost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/overdrive/:overdriveId(\d+)" render={(props) => {
                        return <OverdriveEdit {...props}
                            editOverdrivePost={this.editOverdrivePost}
                            overdrives={this.state.overdrives} />
                    }} />

                    {/* Cabinet Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <CabinetList {...props}
                                cabinets={this.state.cabinets}
                                deleteCabinetPost={this.deleteCabinetPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/cabinet/:cabinetId(\d+)" render={(props) => {
                        return <CabinetEdit {...props}
                            editCabinetPost={this.editCabinetPost}
                            cabinets={this.state.cabinets} />
                    }} />
                    
                </div>
            </React.Fragment>
        )
    }

}