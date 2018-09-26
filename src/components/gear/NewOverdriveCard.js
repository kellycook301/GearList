import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import overdrivePedal from "./images/overdrivePedal.png"
import musician from "./images/Musician.png"
import "./OverdriveList.css"

library.add(faTrash)
library.add(faPen)


export default class NewOverdriveCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.overdriveToggle = this.overdriveToggle.bind(this);
    }

    overdriveToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="overdriveEntries">
                    {
                            <div key={this.props.overdrive.id} className="card overdriveCard" style={{width: 400}}>
                                <div className="card-header bg-#00e676 green accent-3">
                                    <img src={overdrivePedal} className="icon--overdrive" />
                                    <h3>My {this.props.overdrive.make} {this.props.overdrive.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.overdrive.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.overdrive.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {this.props.overdrive.style}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {this.props.overdrive.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {this.props.overdrive.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {this.props.overdrive.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.overdrive.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="overdriveEditDelete">
                                        <Link to={`/gear/edit/overdrive/${this.props.overdrive.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="overdriveTrash" onClick={this.overdriveToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} overdriveToggle={this.overdriveToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteOverdrivePost(this.props.overdrive.id, "overdrives") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.overdriveToggle}>Cancel</Button>
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                    }
                </section>
                <p></p>
            </React.Fragment>
        )
    }
}