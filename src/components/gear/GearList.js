
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default class GearList extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }


    render() {
        return (

            <React.Fragment>
                <h1>Here Is Your Gear!</h1>
                <div>
                    <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} className="modalHeader">What Would You Like To Add?</ModalHeader>
                        <ModalBody>
                            <Button color="success" onClick={this.toggleNested}>Acoustic Guitar</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Acoustic Guitar Features</ModalHeader>
                                <ModalBody>Stuff and things</ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleNested}>Back</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                                </ModalFooter>
                            </Modal>
                            <p></p>
                            <Button color="success" onClick={this.toggleNested}>Electric Guitar</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Electric Guitar Features</ModalHeader>
                                <ModalBody>Stuff and things</ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleNested}>Back</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                                </ModalFooter>
                            </Modal>
                            <p></p>
                            <Button color="success" onClick={this.toggleNested}>Bass Guitar</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Bass Guitar Features</ModalHeader>
                                <ModalBody>Stuff and things</ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleNested}>Back</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                                </ModalFooter>
                            </Modal>
                            <p></p>
                            <Button color="success" onClick={this.toggleNested}>Amplifier</Button>
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                <ModalHeader>Amplifier Features</ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="amplifierMake">Make:</Label>
                                            <Input type="text" name="text" id="amplifierMake" placeholder="Make" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="amplifierModel">Model:</Label>
                                            <Input type="text" name="text" id="amplifierModel" placeholder="Model" />
                                        </FormGroup>
                                        <FormGroup tag="fieldset">
                                        <Label for="powerSection">Tube or Solid State Power Section:</Label>
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
                                        <FormGroup>
                                            <Label for="exampleText">Special Features:</Label>
                                            <Input type="textarea" name="text" id="ampliferSpecialFeatures" />
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleAll}>Submit</Button>
                                    <Button color="secondary" onClick={this.toggleNested}>Back</Button>{' '}
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