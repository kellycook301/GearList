import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import practiceAmp from "./images/practiceAmp_(md).png"
import musician from "./images/Musician.png"
import "./PracticeAmpList.css"

library.add(faTrash)
library.add(faPen)


export default class NewPracticeCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.practiceToggle = this.practiceToggle.bind(this);
    }

    practiceToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="practiceAmpEntries">
                    {
                            <div key={this.props.practice.id} className="card practiceCard" style={{width: 400}}>
                                <div className="card-header bg-#e0e0e0 grey lighten-2">
                                    <img src={practiceAmp} className="icon--practice" />
                                    <h3>My {this.props.practice.make} {this.props.practice.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.practice.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.practice.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {this.props.practice.style}
                                    </section>
                                    <section className="card-title">
                                        Wattage: {this.props.practice.wattage}
                                    </section>
                                    <section className="card-title">
                                        MIDI: {this.props.practice.MIDI}
                                    </section>
                                    <section className="card-title">
                                        Speakers: {this.props.practice.speakers}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.practice.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="practiceEditDelete">
                                        <Link to={`/gear/edit/practice/${this.props.practice.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="practiceTrash" onClick={this.practiceToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} practiceToggle={this.practiceToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deletePracticeAmpPost(this.props.practice.id, "practices") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.practiceToggle}>Cancel</Button>
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