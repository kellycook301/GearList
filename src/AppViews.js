import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './components/Login'
import DataManager from './data/DataManager'

// The monstrous form component
import GearForm from './components/gear/GearForm'

// The Components where gear is listed
import AcousticList from './components/gear/AcousticList'
import ElectricList from './components/gear/ElectricList'
import BassList from './components/gear/BassList'
import AcousticBassList from './components/gear/AcousticBassList'
import AmplifierList from './components/gear/AmplifierList'
import ProcessorList from './components/gear/ProcessorList'
import PracticeAmpList from './components/gear/PracticeAmpList'
import ComboList from './components/gear/ComboList'
import OverdriveList from './components/gear/OverdriveList'
import DistortionList from './components/gear/DistortionList'
import FuzzList from './components/gear/FuzzList'
import ModulationList from './components/gear/ModulationList'
import CabinetList from './components/gear/CabinetList'

// The Components where gear is edited
import AcousticEdit from './components/gear/AcousticEdit'
import ElectricEdit from './components/gear/ElectricEdit'
import BassEdit from './components/gear/BassEdit'
import AcousticBassEdit from './components/gear/AcousticBassEdit'
import AmplifierEdit from './components/gear/AmplifierEdit'
import ComboEdit from './components/gear/ComboEdit'
import ProcessorEdit from './components/gear/ProcessorEdit'
import PracticeAmpEdit from './components/gear/PracticeAmpEdit'
import OverdriveEdit from './components/gear/OverdriveEdit'
import DistortionEdit from './components/gear/DistortionEdit'
import FuzzEdit from './components/gear/FuzzEdit'
import ModulationEdit from './components/gear/ModulationEdit'
import CabinetEdit from './components/gear/CabinetEdit'

export default class AppViews extends Component {

    // check if loginUser is in session storage
    isAuthenticated = () => sessionStorage.getItem("loginUser") !== null


    state = {
        acoustics: [],
        electrics: [],
        basses: [],
        acousticBasses: [],
        amplifiers: [],
        combos: [],
        processors: [],
        practices: [],
        overdrives: [],
        distortions: [],
        fuzzes: [],
        modulations: [],
        cabinets: [],
        users: [],
        user: JSON.parse(sessionStorage.getItem("loginUser"))

    }

    // All of the fancy functions to add, edit, and delete. All hail CRUD.

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

    // ACOUSTIC BASS RELATED POSTS
    addAcousticBass = (acousticBass, link) => DataManager.post(acousticBass, link)
        .then(() => DataManager.getAll("acousticBasses"))
        .then(acousticBasses => this.setState({
            acousticBasses: acousticBasses
        }))
    editAcousticBassPost = (acousticBass, id, link) => DataManager.put(acousticBass, id, link)
        .then(() => DataManager.getAll("acousticBasses"))
        .then(acousticBasses => this.setState({
            acousticBasses: acousticBasses
        }))
    deleteAcousticBassPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("acousticBasses"))
        .then(acousticBasses => this.setState({
            acousticBasses: acousticBasses
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

    // AMP MODELER RELATED POSTS
    addProcessor = (processor, link) => DataManager.post(processor, link)
        .then(() => DataManager.getAll("processors"))
        .then(processors => this.setState({
            processors: processors
        }))
    editProcessorPost = (processor, id, link) => DataManager.put(processor, id, link)
        .then(() => DataManager.getAll("processors"))
        .then(processors => this.setState({
            processors: processors
        }))
    deleteProcessorPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("processors"))
        .then(processors => this.setState({
            processors: processors
        }))

    // PRACTICE RELATED POSTS
    addPracticeAmp = (practice, link) => DataManager.post(practice, link)
        .then(() => DataManager.getAll("practices"))
        .then(practices => this.setState({
            practices: practices
        }))
    editPracticeAmpPost = (practice, id, link) => DataManager.put(practice, id, link)
        .then(() => DataManager.getAll("practices"))
        .then(practices => this.setState({
            practices: practices
        }))
    deletePracticeAmpPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("practices"))
        .then(practices => this.setState({
            practices: practices
        }))

    // OVERDRIVE RELATED POSTS
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

    // DISTORTION RELATED POSTS
    addDistortion = (distortion, link) => DataManager.post(distortion, link)
        .then(() => DataManager.getAll("distortions"))
        .then(distortions => this.setState({
            distortions: distortions
        }))
    editDistortionPost = (overdrive, id, link) => DataManager.put(overdrive, id, link)
        .then(() => DataManager.getAll("distortions"))
        .then(distortions => this.setState({
            distortions: distortions
        }))
    deleteDistortionPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("distortions"))
        .then(distortions => this.setState({
            distortions: distortions
        }))

    // FUZZ RELATED POSTS
    addFuzz = (fuzz, link) => DataManager.post(fuzz, link)
        .then(() => DataManager.getAll("fuzzes"))
        .then(fuzzes => this.setState({
            fuzzes: fuzzes
        }))
    editFuzzPost = (fuzz, id, link) => DataManager.put(fuzz, id, link)
        .then(() => DataManager.getAll("fuzzes"))
        .then(fuzzes => this.setState({
            fuzzes: fuzzes
        }))
    deleteFuzzPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("fuzzes"))
        .then(fuzzes => this.setState({
            fuzzes: fuzzes
        }))

    // MODULATION RELATED POSTS
    addModulation = (modulation, link) => DataManager.post(modulation, link)
        .then(() => DataManager.getAll("modulations"))
        .then(modulations => this.setState({
            modulations: modulations
        }))
    editModulationPost = (modulation, id, link) => DataManager.put(modulation, id, link)
        .then(() => DataManager.getAll("modulations"))
        .then(modulations => this.setState({
            modulations: modulations
        }))
    deleteModulationPost = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("modulations"))
        .then(modulations => this.setState({
            modulations: modulations
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

    // Putting all entries on the DOM. Always a good time to see your work displayed for all to see. 

    componentDidMount() {
        const _state = {}
        if (this.state.user.id) {
            DataManager.getAllUserInfo(this.state.user.id, "acoustics").then(acoustics => _state.acoustics = acoustics)
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "electrics").then(electrics => _state.electrics = electrics))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "basses").then(basses => _state.basses = basses))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "acousticBasses").then(acousticBasses => _state.acousticBasses = acousticBasses))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "amplifiers").then(amplifiers => _state.amplifiers = amplifiers))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "combos").then(combos => _state.combos = combos))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "processors").then(processors => _state.processors = processors))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "practices").then(practices => _state.practices = practices))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "overdrives").then(overdrives => _state.overdrives = overdrives))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "distortions").then(distortions => _state.distortions = distortions))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "fuzzes").then(fuzzes => _state.fuzzes = fuzzes))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "modulations").then(modulations => _state.modulations = modulations))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "cabinets").then(cabinets => _state.cabinets = cabinets))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "users").then(users => _state.users = users))
                .then(() => { this.setState(_state) })
        }
    }

    // componentDidMount runs once. ComponentDidupdate runs when a new prop is passed in / different user signs in.
    // User is being passed in as a prop. Previous user's entries are briefly displayed before new user data is printed to the DOM.
    
    componentDidUpdate(prevProps) {
        if (this.state.user.id !== prevProps.user.id) {
            const _state = {}
            if (this.state.user.id !== null){
            DataManager.getAllUserInfo(this.state.user.id, "acoustics").then(acoustics => _state.acoustics = acoustics)
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "electrics").then(electrics => _state.electrics = electrics))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "basses").then(basses => _state.basses = basses))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "acousticBasses").then(acousticBasses => _state.acousticBasses = acousticBasses))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "amplifiers").then(amplifiers => _state.amplifiers = amplifiers))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "combos").then(combos => _state.combos = combos))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "processors").then(processors => _state.processors = processors))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "practices").then(practices => _state.practices = practices))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "overdrives").then(overdrives => _state.overdrives = overdrives))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "distortions").then(distortions => _state.distortions = distortions))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "fuzzes").then(fuzzes => _state.fuzzes = fuzzes))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "modulations").then(modulations => _state.modulations = modulations))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "cabinets").then(cabinets => _state.cabinets = cabinets))
                .then(() => DataManager.getAllUserInfo(this.state.user.id, "users").then(users => _state.users = users))
                .then(() => { this.setState(_state) })
            }
        }
    }

    // ROUTES
    render() {

        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser}
                            loginUser={this.props.login} />
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

                                addAcousticBass={this.addAcousticBass}
                                editAcousticBassPost={this.editAcousticBassPost}
                                acousticBasses={this.state.acousticBasses}

                                addAmplifier={this.addAmplifier}
                                editAmplifierPost={this.editAmplifierPost}
                                amplifiers={this.state.amplifiers}

                                addCombo={this.addCombo}
                                editComboPost={this.editComboPost}
                                combos={this.state.combos}

                                addProcessor={this.addProcessor}
                                editProcessorPost={this.editProcessorPost}
                                processors={this.state.processors}

                                addPracticeAmp={this.addPracticeAmp}
                                editPracticeAmpPost={this.editPracticeAmpPost}
                                practices={this.state.practices}

                                addOverdrive={this.addOverdrive}
                                editOverdrivePost={this.editOverdrivePost}
                                overdrives={this.state.overdrives}

                                addDistortion={this.addDistortion}
                                editDistortionPost={this.editDistortionPost}
                                distortions={this.state.distortions}

                                addFuzz={this.addFuzz}
                                editFuzzPost={this.editFuzzPost}
                                fuzzes={this.state.fuzzes}

                                addModulation={this.addModulation}
                                editModulationPost={this.editModulationPost}
                                modulations={this.state.modulations}

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

                    {/* Acoustic Bass Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AcousticBassList {...props}
                                acousticBasses={this.state.acousticBasses}
                                deleteAcousticBassPost={this.deleteAcousticBassPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/acousticBass/:acousticBassId(\d+)" render={(props) => {
                        return <AcousticBassEdit {...props}
                            editAcousticBassPost={this.editAcousticBassPost}
                            acousticBasses={this.state.acousticBasses} />
                    }} />

                    {/* Amplifier Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AmplifierList {...props}
                                amplifiers={this.state.amplifiers}
                                deleteAmplifierPost={this.deleteAmplifierPost}
                            />
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

                    {/* Processor Pedal Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ProcessorList {...props}
                                processors={this.state.processors}
                                deleteProcessorPost={this.deleteProcessorPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/processor/:processorId(\d+)" render={(props) => {
                        return <ProcessorEdit {...props}
                            editProcessorPost={this.editProcessorPost}
                            processors={this.state.processors} />
                    }} />

                    {/* Practice Amp Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <PracticeAmpList {...props}
                                practices={this.state.practices}
                                deletePracticeAmpPost={this.deletePracticeAmpPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/practice/:practiceId(\d+)" render={(props) => {
                        return <PracticeAmpEdit {...props}
                            editPracticeAmpPost={this.editPracticeAmpPost}
                            practices={this.state.practices} />
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

                    {/* Distortion Pedal Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <DistortionList {...props}
                                distortions={this.state.distortions}
                                deleteDistortionPost={this.deleteDistortionPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/distortion/:distortionId(\d+)" render={(props) => {
                        return <DistortionEdit {...props}
                            editDistortionPost={this.editDistortionPost}
                            distortions={this.state.distortions} />
                    }} />

                    {/* Fuzz Pedal Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <FuzzList {...props}
                                fuzzes={this.state.fuzzes}
                                deleteFuzzPost={this.deleteFuzzPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/fuzz/:fuzzId(\d+)" render={(props) => {
                        return <FuzzEdit {...props}
                            editFuzzPost={this.editFuzzPost}
                            fuzzes={this.state.fuzzes} />
                    }} />

                    {/* Modulation Pedal Related */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ModulationList {...props}
                                modulations={this.state.modulations}
                                deleteModulationPost={this.deleteModulationPost} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/gear/edit/modulation/:modulationId(\d+)" render={(props) => {
                        return <ModulationEdit {...props}
                            editModulationPost={this.editModulationPost}
                            modulations={this.state.modulations} />
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