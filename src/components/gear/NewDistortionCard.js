import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import distortionPedal from "./images/distortion_(md).png"
import musician from "./images/Musician.png"
import "./DistortionList.css"

library.add(faTrash)
library.add(faPen)


export default class NewDistortionCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.distortionToggle = this.distortionToggle.bind(this);
    }

    distortionToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="distortionEntries">
                    {
                            <div key={this.props.distortion.id} className="card distortionCard" style={{width: 432}}>
                                <div className="card-header bg-#ff5252 red accent-2">
                                    <img src={distortionPedal} className="icon--distortion" />
                                    <h3>My {this.props.distortion.make} {this.props.distortion.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.distortion.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.distortion.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {this.props.distortion.style}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {this.props.distortion.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {this.props.distortion.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {this.props.distortion.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.distortion.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="distortionEditDelete">
                                        <Link to={`/gear/edit/distortion/${this.props.distortion.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="distortionTrash" onClick={this.distortionToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} distortionToggle={this.distortionToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteDistortionPost(this.props.distortion.id, "distortions") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.distortionToggle}>Cancel</Button>
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