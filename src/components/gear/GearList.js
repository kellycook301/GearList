
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default class GearList extends Component {
    constructor(props) {
        super(props);

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
            closeAll: false
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

    createGearPost() {
        
    }


    render() {
        return (
            <React.Fragment>
                <h1>Here Is Your Gear!</h1>
                <div>
                    <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Add Gear</Button>

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} className="modalHeader">What Would You Like To Add?</ModalHeader>
                        <ModalBody>
                            <Button color="primary" onClick={this.acousticNested}>Acoustic Guitar</Button>
                            <Modal isOpen={this.state.acousticModal} toggle={this.acousticNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Acoustic Guitar Features</ModalHeader>
                                <ModalBody>
                                    <Form className="acousticForm">
                                        <FormGroup>
                                            <Label for="acousticMake">Make:</Label>
                                            <Input type="text" name="text" id="acousticMake" placeholder="Make (ex. Taylor)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="acousticModel">Model:</Label>
                                            <Input type="text" name="text" id="acousticModel" placeholder="Model (ex. 514ce)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="acousticStrings">Strings:</Label>
                                            <Input type="text" name="text" id="acousticStrings" placeholder="Strings (ex. Elixir 12-53)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="acousticPickups">Pickups:</Label>
                                            <Input type="text" name="text" id="acousticPickup" placeholder="Pickup (if no pickup is installed, please enter 'none')" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Special Features:</Label>
                                            <Input type="textarea" name="text" id="acousticSpecialFeatures" placeholder="Special Features (ex. added Fishman preamp)" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleAll}>Submit</Button>
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
                                            <Input type="text" name="text" id="electricGuitarMake" placeholder="Make (ex. PRS)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="electricGuitarModel">Model:</Label>
                                            <Input type="text" name="text" id="electricGuitarModel" placeholder="Model (ex. Custom 22)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="electricGuitarStrings">Strings:</Label>
                                            <Input type="text" name="text" id="electricGuitarStrings" placeholder="Strings (ex. Ernie Ball 10-46)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="electricGuitarPickups">Pickups:</Label>
                                            <Input type="text" name="text" id="electricGuitarPickup" placeholder="Pickups (ex. Seymour Duncan Pearly Gates)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Special Features:</Label>
                                            <Input type="textarea" name="text" id="electricGuitarSpecialFeatures" placeholder="Special Features (ex. Evertune bridge installed)" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleAll}>Submit</Button>
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
                                            <Label for="bassMake">Make:</Label>
                                            <Input type="text" name="text" id="bassMake" placeholder="Make (ex. Fender)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="bassModel">Model:</Label>
                                            <Input type="text" name="text" id="bassModel" placeholder="Model (ex. Precision Bass)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="bassStrings">Strings:</Label>
                                            <Input type="text" name="text" id="bassStrings" placeholder="Strings (ex. Ernie Ball 45-105)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="bassPickups">Pickups:</Label>
                                            <Input type="text" name="text" id="bassPickup" placeholder="Pickups (ex. Bareknuckle '58 Split Coil)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Special Features:</Label>
                                            <Input type="textarea" name="text" id="bassSpecialFeatures" placeholder="Special Features (ex. Hipshot Xtender installed)"/>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleAll}>Submit</Button>
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
                                            <Input type="text" name="text" id="amplifierMake" placeholder="Make (ex. Marshall)" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="amplifierModel">Model:</Label>
                                            <Input type="text" name="text" id="amplifierModel" placeholder="Model (ex. JCM 800)" />
                                        </FormGroup>
                                        <FormGroup tag="fieldset">
                                            <Label for="powerSection">Power Section:</Label>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                    Tube
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                    Solid State
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup tag="fieldset">
                                            <Label for="powerSection">Combo or Head:</Label>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                    Combo
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" />{' '}
                                                    Head
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Special Features:</Label>
                                            <Input type="textarea" name="text" id="ampliferSpecialFeatures" placeholder="Special Features (ex. Fortin Modded. Smoother mids)" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleAll}>Submit</Button>
                                    <Button color="secondary" onClick={this.amplifierNested}>Back</Button>{' '}
                                </ModalFooter>
                            </Modal>
                            <p></p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </React.Fragment>
        )
    }
}