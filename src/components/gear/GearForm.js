
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import "./GearList.css"

export default class GearList extends Component {

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
        this.amplifierNested = this.amplifierNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

        this.state = {
            modal: false,
            acousticModal: false,
            electricModal: false,
            bassModal: false,
            ampModal: false,
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
            electricBodyWood: "",
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
            amplifierSpecialFeatures: ""
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

    amplifierNested() {
        this.setState({
            ampModal: !this.state.ampModal,
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
            console.log(acoustic, "acoustics")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addAcoustic(acoustic, "acoustics").then(() => this.props.history.push("/gear"))
        }
    }

    createElectricPost = evt => {
        evt.preventDefault()
        if (this.state.electricMake === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricModel === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricBodyWood === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.electricSpecialFeatures === "") {
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
            console.log(electric, "electrics")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addElectric(electric, "electrics").then(() => this.props.history.push("/gear"))
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
        else if (this.state.amplifierStrings === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierPickup === "") {
            window.alert("Please make sure to fill out all text fields before submitting!")
        }
        else if (this.state.amplifierBodyWood === "") {
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
                features: this.state.amplifierSpecialFeatures,
            }
            console.log(amplifier, "amplifiers")
            // Create the post for acoustic and redirect user to the gear list page
            this.props.addAmplifier(amplifier, "amplifiers").then(() => this.props.history.push("/gear"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Here Is Your Gear!</h1>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Add Gear</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} className="modalHeader">What Would You Like To Add?</ModalHeader>
                    <ModalBody>
                        <Button color="primary" onClick={this.acousticNested}>Acoustic Guitar</Button>
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
                                        <Input type="textarea" onChange={this.handleFieldChange.bind(this)} name="text" id="acousticGuitarSpecialFeatures" placeholder="Special Features (ex. added Fishman preamp) If no special features have been added, please enter 'none.'" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAcousticPost}>Submit</Button>
                                <Button color="secondary" onClick={this.acousticNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>

                        <Button color="primary" onClick={this.electricNested}>Electric Guitar</Button>
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
                                        <Input type="textarea" onChange={this.handleFieldChange.bind(this)} name="text" id="electricGuitarSpecialFeatures" placeholder="Special Features (ex. Evertune bridge installed) If no special features have been added, please enter 'none.'" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createElectricPost}>Submit</Button>
                                <Button color="secondary" onClick={this.electricNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                        <p></p>

                        <Button color="primary" onClick={this.bassNested}>Bass Guitar</Button>
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
                                        <Input type="textarea" onChange={this.handleFieldChange.bind(this)} name="text" id="bassGuitarSpecialFeatures" placeholder="Special Features (ex. Hipshot Xtender installed) If no special features have been added, please enter 'none.'" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createBassPost}>Submit</Button>
                                <Button color="secondary" onClick={this.bassNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>

                        <p></p>
                        <Button color="primary" onClick={this.amplifierNested}>Amplifier</Button>
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
                                        <Input type="textarea" onChange={this.handleFieldChange.bind(this)} name="text" id="amplifierSpecialFeatures" placeholder="Special Features (ex. Fortin Modded. Smoother Mids) If no special features have been added, please enter 'none.'" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.createAmplifierPost}>Submit</Button>
                                <Button color="secondary" onClick={this.amplifierNested}>Back</Button>{' '}
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}