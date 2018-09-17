
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import 'mdbreact/dist/css/mdb.css';

export default class GearForm extends Component {

    // set intial state
    state = {}

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructor(props) {
        super(props);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.acousticNested = this.acousticNested.bind(this);
        this.electricNested = this.electricNested.bind(this);
        this.bassNested = this.bassNested.bind(this);
        this.amplifierChoiceNested = this.amplifierChoiceNested.bind(this);
        this.amplifierNested = this.amplifierNested.bind(this);
        this.comboNested = this.comboNested.bind(this);
        this.overdriveNested = this.overdriveNested.bind(this);
        this.cabinetNested = this.cabinetNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

        this.state = {
            modal: false,
            acousticModal: false,
            electricModal: false,
            bassModal: false,
            ampChoiceModal: false,
            ampModal: false,
            comboModal: false,
            closeAll: false,
            acousticGuitarMake: "",
            acousticGuitarModel: "",
            acousticGuitarStrings: "",
            acousticGuitarPickup: "",
            acousticGuitarBodyWood: "",
            acousticGuitarSpecialFeatures: "",
            electricGuitarMake: "",
            electricGuitarModel: "",
            electricGuitarStrings: "",
            electricGuitarPickups: "",
            electricGuitarBodyWood: "",
            electricGuitarSpecialFeatures: "",
            bassGuitarMake: "",
            bassGuitarModel: "",
            bassGuitarStrings: "",
            bassGuitarPickups: "",
            bassGuitarBodyWood: "",
            bassGuitarSpecialFeatures: "",
            amplifierMake: "",
            amplifierModel: "",
            amplifierPowerSection: "",
            amplifierPreampSection: "",
            amplifierHeadCombo: "",
            amplifierSpecialFeatures: "",
            comboMake: "",
            comboModel: "",
            comboPowerSection: "",
            comboPreampSection: "",
            comboSpeakers: "",
            comboSpecialFeatures: "",
            overdriveMake: "",
            overdriveModel: "",
            overdriveStyle: "",
            overdrivePowerDraw: "",
            overdriveTopSideLoaded: "",
            overdriveSpecialFeatures: "",
            cabinetMake: "",
            cabinetModel: "",
            cabinetSpeakers: "",
            cabinetWoodType: "",
            cabinetTolexColor: "",
            cabinetOpenClosedBack: ""
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    acousticNested() {
        this.setState({
            acousticModal: !this.state.acousticModal,
            closeAll: false
        });
    }

    electricNested() {
        this.setState({
            electricModal: !this.state.electricModal,
            closeAll: false
        });
    }

    bassNested() {
        this.setState({
            bassModal: !this.state.bassModal,
            closeAll: false
        });
    }

    amplifierChoiceNested() {
        this.setState({
            amplifierChoiceModal: !this.state.amplifierChoiceModal,
            closeAll: false
        });
    }

    amplifierNested() {
        this.setState({
            ampModal: !this.state.ampModal,
            closeAll: false
        });
    }

    comboNested() {
        this.setState({
            comboModal: !this.state.comboModal,
            closeAll: false
        });
    }

    overdriveNested() {
        this.setState({
            overdriveModal: !this.state.overdriveModal,
            closeAll: false
        });
    }

    cabinetNested() {
        this.setState({
            cabinetModal: !this.state.cabinetModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    createAcousticPost = evt => {
        evt.preventDefault()
        if (this.state.acousticGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarBodyWood === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.acousticGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const acoustic = {
                make: this.state.acousticGuitarMake,
                model: this.state.acousticGuitarModel,
                strings: this.state.acousticGuitarStrings,
                pickup: this.state.acousticGuitarPickup,
                body: this.state.acousticGuitarBodyWood,
                features: this.state.acousticGuitarSpecialFeatures,
            }
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addAcoustic(acoustic, "acoustics").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }

    }

    createElectricPost = evt => {
        evt.preventDefault()
        if (this.state.electricGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarBodyWood === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const electric = {
                make: this.state.electricGuitarMake,
                model: this.state.electricGuitarModel,
                strings: this.state.electricGuitarStrings,
                pickups: this.state.electricGuitarPickups,
                body: this.state.electricGuitarBodyWood,
                features: this.state.electricGuitarSpecialFeatures,
            }
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addElectric(electric, "electrics").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }
    }

    createBassPost = evt => {
        evt.preventDefault()
        if (this.state.bassGuitarMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarBodyWood === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.bassGuitarSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const bass = {
                make: this.state.bassGuitarMake,
                model: this.state.bassGuitarModel,
                strings: this.state.bassGuitarStrings,
                pickups: this.state.bassGuitarPickups,
                body: this.state.bassGuitarBodyWood,
                features: this.state.bassGuitarSpecialFeatures,
            }
            console.log(bass, "basses")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addBass(bass, "basses").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }
    }

    createAmplifierPost = evt => {
        evt.preventDefault()
        if (this.state.amplifierMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierPowerSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierPreampSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierHeadCombo === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const amplifier = {
                make: this.state.amplifierMake,
                model: this.state.amplifierModel,
                powerSection: this.state.amplifierPowerSection,
                preampSection: this.state.amplifierPreampSection,
                amplifierHeadCombo: this.state.amplifierHeadCombo,
                features: this.state.amplifierSpecialFeatures
            }
            console.log(amplifier, "amplifiers")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addAmplifier(amplifier, "amplifiers").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }
    }

    createComboPost = evt => {
        evt.preventDefault()
        if (this.state.comboMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboPowerSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboPreampSection === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboSpeakers === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.comboSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const combo = {
                make: this.state.comboMake,
                model: this.state.comboModel,
                powerSection: this.state.comboPowerSection,
                preampSection: this.state.comboPreampSection,
                speakers: this.state.comboSpeakers,
                features: this.state.comboSpecialFeatures
            }
            // Create the post for combo amp and redirect user to the gear list page
            this.props.addCombo(combo, "combos").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }
    }

    createOverdrivePost = evt => {
        evt.preventDefault()
        if (this.state.overdriveMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveStyle === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdrivePowerDraw === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveTopSideLoaded === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.overdriveSpecialFeatures === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const overdrive = {
                make: this.state.overdriveMake,
                model: this.state.overdriveModel,
                style: this.state.overdriveStyle,
                draw: this.state.overdrivePowerDraw,
                jacks: this.state.overdriveTopSideLoaded,
                features: this.state.overdriveSpecialFeatures,
            }
            console.log(overdrive, "overdrives")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addOverdrive(overdrive, "overdrives").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }
    }

    createCabinetPost = evt => {
        evt.preventDefault()
        if (this.state.cabinetMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetSpeakers === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetWoodType === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetTolexColor === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.cabinetOpenClosedBack === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else {
            const cabinet = {
                make: this.state.cabinetMake,
                model: this.state.cabinetModel,
                speakers: this.state.cabinetSpeakers,
                woodType: this.state.cabinetWoodType,
                tolexColor: this.state.cabinetTolexColor,
                openClosedBack: this.state.cabinetOpenClosedBack
            }
            console.log(cabinet, "cabinets")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addCabinet(cabinet, "cabinets").then(() => this.props.history.push("/gear"))
            window.alert("Your Post Has Been Added To Your Gear List!")
            this.toggle()
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>MyGearList!</h1>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Add Gear</Button>
                <p></p>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} className="modalHeader">What Would You Like To Add?</ModalHeader>
                    <ModalBody>
                        <Button color="#616161 grey darken-2" onClick={this.amplifierChoiceNested}>Amplifier</Button>
                        <Modal isOpen={this.state.amplifierChoiceModal} toggle={this.amplifierChoiceModal} onClose={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>What Kind of Amplifier?</ModalHeader>
                            <Button color="success" onClick={this.amplifierNested}>Amplifier Head</Button>
                            <Button color="primary" onClick={this.comboNested}>Combo Amp</Button>
                            <ModalFooter>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.amplifierChoiceNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={this.state.ampModal} toggle={this.amplifierNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Amplifier Features</ModalHeader>
                            <ModalBody>
                                <Form className="amplifierForm">
                                    <FormGroup>
                                        <Label for="amplifierMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierMake" placeholder="Make (ex. Marshall)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierModel" placeholder="Model (ex. JCM 800)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierPowerSection">Power Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierPowerSection" placeholder="Power Section (ex. Solid State Power Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierPreampSection">Preamp Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierPreampSection" placeholder="Preamp Section (ex. Tube Preamp Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierHeadCombo">Head or Combo Amp:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierHeadCombo" placeholder="Head or Combo Amp (ex. 2x12 Combo)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amplifierSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierSpecialFeatures" placeholder="Special Features (ex. Fortin Modded. Smoother Mids or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAmplifierPost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.amplifierNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>
                        <Modal isOpen={this.state.comboModal} toggle={this.comboNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Combo Amplifier Features</ModalHeader>
                            <ModalBody>
                                <Form className="comboForm">
                                    <FormGroup>
                                        <Label for="comboMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboMake" placeholder="Make (ex. Dr. Z)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboModel" placeholder="Model (ex. Carmen Ghia)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboPowerSection">Power Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboPowerSection" placeholder="Power Section (ex. Solid State Power Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboPreampSection">Preamp Section:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboPreampSection" placeholder="Preamp Section (ex. Tube Preamp Section)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboSpeakers">Speakers:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboSpeakers" placeholder="Speakers (ex. V30s)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="comboSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="comboSpecialFeatures" placeholder="Special Features (ex. Fortin Modded. Smoother Mids or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createComboPost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.comboNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>
                        <Button color="#a1887f brown lighten-2" onClick={this.acousticNested}>Acoustic Guitar</Button>
                        <Modal isOpen={this.state.acousticModal} toggle={this.acousticNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader className="acousticHeader">Acoustic Guitar Features</ModalHeader>
                            <ModalBody className="acousticMake">
                                <Form className="acousticForm">
                                    <FormGroup>
                                        <Label>Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarMake" placeholder="Make (ex. Taylor)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarModel" placeholder="Model (ex. 514ce)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarStrings" className="acousticStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarStrings" placeholder="Strings (ex. Elixir 12-53)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarPickups">Pickups:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarPickup" placeholder="Pickup (if no pickup is installed, please enter 'none.')" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="acousticGuitarBodyWood">Body Wood:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarBodyWood" placeholder="Body Wood (ex. Indian Rosewood)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarSpecialFeatures" placeholder="Special Features (ex. added Fishman preamp or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAcousticPost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.acousticNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>
                        <Button color="#ef5350 red lighten-1" onClick={this.electricNested}>Electric Guitar</Button>
                        <Modal isOpen={this.state.electricModal} toggle={this.electricNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Electric Guitar Features</ModalHeader>
                            <ModalBody>
                                <Form className="guitarForm">
                                    <FormGroup>
                                        <Label for="electricGuitarMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarMake" placeholder="Make (ex. PRS)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarModel" placeholder="Model (ex. Custom 22)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarStrings" placeholder="Strings (ex. Ernie Ball 10-46)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarPickups">Pickups:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarPickups" placeholder="Pickups (ex. Seymour Duncan Pearly Gates)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="electricGuitarBodyWood">Body Wood:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarBodyWood" placeholder="Body Wood (ex. Alder)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Special Features:</Label>
                                        <Input type="texta" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarSpecialFeatures" placeholder="Special Features (ex. Evertune bridge installed or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createElectricPost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.electricNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>
                        <Button color="#0091ea light-blue accent-4" onClick={this.bassNested}>Bass Guitar</Button>
                        <Modal isOpen={this.state.bassModal} toggle={this.bassNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Bass Guitar Features</ModalHeader>
                            <ModalBody>
                                <Form className="bassForm">
                                    <FormGroup>
                                        <Label for="bassGuitarMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarMake" placeholder="Make (ex. Fender)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarModel" placeholder="Model (ex. Precision Bass)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarStrings">Strings:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarStrings" placeholder="Strings (ex. Ernie Ball 45-105)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarPickups">Pickups:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarPickups" placeholder="Pickups (ex. Bareknuckle '58 Split Coil)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="bassGuitarBodyWood">Body Wood:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarBodyWood" placeholder="Body Wood (ex. Swamp Ash)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarSpecialFeatures" placeholder="Special Features (ex. Hipshot Xtender installed or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createBassPost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.bassNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>
                        <Button color="#00e676 green accent-3" onClick={this.overdriveNested}>Overdrive Pedal</Button>
                        <Modal isOpen={this.state.overdriveModal} toggle={this.overdriveNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Effect Pedal Features</ModalHeader>
                            <ModalBody>
                                <Form className="overdriveForm">
                                    <FormGroup>
                                        <Label for="overdriveMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveMake" placeholder="Make (ex. JHS)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveModel" placeholder="Model (ex. Moonshine)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveStyle">Style:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveStyle" placeholder="Style (ex. Bluesbreaker)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdrivePowerDraw">Power Draw:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdrivePowerDraw" placeholder="Power Draw (ex. 9V or 18V)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveTopSideLoaded">Side or Top-Mounted Jacks:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveTopSideLoaded" placeholder="Side or Top-Mounted Jacks (ex. Top-Mounted)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="overdriveSpecialFeatures">Special Features:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="overdriveSpecialFeatures" placeholder="Special Features (ex. 'Keeley Seeing-Eye' Mod or 'none')" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createOverdrivePost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.overdriveNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>
                        <Button color="#ffa726 orange lighten-1" onClick={this.cabinetNested}>Speaker Cabinet</Button>
                        <Modal isOpen={this.state.cabinetModal} toggle={this.cabinetNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Speaker Cabinet Features</ModalHeader>
                            <ModalBody>
                                <Form className="cabinetForm">
                                    <FormGroup>
                                        <Label for="cabinetMake">Make:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetMake" placeholder="Make (ex. Orange)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetModel">Model:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetModel" placeholder="Model (ex. PPC412)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetSpeakers">Speakers:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetSpeakers" placeholder="Speakers (ex. Vintage 30s)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetWoodType">Wood Type:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetWoodType" placeholder="Wood Type (ex. Birch)" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetTolexColor">Tolex Color:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetTolexColor" placeholder="Tolex Color (ex. Matamp Green) If no tolex, leave 'none' or 'natural finish'" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cabinetOpenClosedBack">Open or Closed Back:</Label>
                                        <Input type="text" onChange={this.handleFieldChange.bind(this)} name="text" id="cabinetOpenClosedBack" placeholder="Open or Closed Back (ex. Closed Back)" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createCabinetPost}>Submit</Button>
                                <Button color="#9575cd deep-purple lighten-2" onClick={this.cabinetNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="#9575cd deep-purple lighten-2" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}