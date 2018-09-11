
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



export default class GearList extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false,
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // toggle() {
    //     this.setState(prevState => ({
    //         dropdownOpen: !prevState.dropdownOpen
    //     }));
    // }

    render() {
        return (


            <React.Fragment>
                <h1>Here Is Your Gear!</h1>
                <div>
                    <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle} className="modalHeader">What Would You Like To Add?
                            <UncontrolledDropdown>
                                <DropdownToggle caret>
                                    Choose From The Following...
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Acoustic Guitar</DropdownItem>
                                    <DropdownItem header>Electric Guitar</DropdownItem>
                                    <DropdownItem header>Bass Guitar</DropdownItem>
                                    <DropdownItem header>Amplifier</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </ModalHeader>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </React.Fragment>
        )
    }
}