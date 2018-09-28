import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import processorPedal from "./images/processor_(md).png"
import musician from "./images/Musician.png"
import "./ProcessorList.css"

library.add(faTrash)
library.add(faPen)


export default class NewProcessorCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.processorToggle = this.processorToggle.bind(this);
    }

    processorToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="processorEntries">
                    {
                            <div key={this.props.processor.id} className="card processorCard" style={{width: 432}}>
                                <div className="card-header bg-#616161 grey darken-2">
                                    <img src={processorPedal} className="icon--processor"/>
                                    <h3>My {this.props.processor.make} {this.props.processor.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.processor.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.processor.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {this.props.processor.style}
                                    </section>
                                    <section className="card-title">
                                        Unit Size: {this.props.processor.size}
                                    </section>
                                    <section className="card-title">
                                        MIDI Capable: {this.props.processor.MIDI}
                                    </section>
                                    <section className="card-title">
                                        Power Amp: {this.props.processor.powerAmp}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.processor.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="processorEditDelete">
                                        <Link to={`/gear/edit/processor/${this.props.processor.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="processorPen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="processorTrash" onClick={this.processorToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} processorToggle={this.processorToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteProcessorPost(this.props.processor.id, "processors") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.processorToggle}>Cancel</Button>
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}