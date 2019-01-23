import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import acousticGuitar from "./images/acoustic.png"
import musician from "./images/Musician.png"
import "./AcousticList.css"

library.add(faTrash)
library.add(faPen)


export default class NewAcousticCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.acousticToggle = this.acousticToggle.bind(this);
    }

    acousticToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="acousticEntries">
                    {
                        <div key={this.props.acoustic.id} className="card acousticCard" style={{ width: 432 }}>
                            <div className="card-header bg-#a1887f brown lighten-2">
                                <img src={acousticGuitar} className="icon--acoustic" />
                                <h3>My {this.props.acoustic.make} {this.props.acoustic.model}</h3>
                            </div>
                            <div className="card-body">
                                <section className="card-title">
                                    Make: {this.props.acoustic.make}
                                </section>
                                <section className="card-title">
                                    Model: {this.props.acoustic.model}
                                </section>
                                <section className="card-title">
                                    Strings: {this.props.acoustic.strings}
                                </section>
                                <section className="card-title">
                                    Pickup: {this.props.acoustic.pickup}
                                </section>
                                <section className="card-title">
                                    Top: {this.props.acoustic.top}
                                </section>
                                <section className="card-title">
                                    Back And Sides: {this.props.acoustic.backSides}
                                </section>
                                <section className="card-title">
                                    Special Features: {this.props.acoustic.features}
                                </section>
                                <hr></hr>
                                <h6 className="acousticEditDelete">
                                    <Link to={`/gear/edit/acoustic/${this.props.acoustic.id}`}><FontAwesomeIcon
                                        icon="pen"
                                        color="blue" className="pen" /></Link>
                                    <p></p>
                                    <FontAwesomeIcon icon="trash" color="red" className="acousticTrash" onClick={this.acousticToggle} />
                                </h6>
                                <div>
                                    <Modal isOpen={this.state.modal} acousticToggle={this.ampToggle} className={this.props.className}>
                                        <ModalBody>
                                            <h4>Are You Sure You Want To Delete This Post?</h4>
                                            <img src={musician} className="icon--musician" />
                                            <Button color="danger" className="deleteAmplifierButton" onClick={() => this.props.deleteAcousticPost(this.props.acoustic.id, "acoustics")}>Delete</Button>{' '}
                                            <Button color="secondary" className="cancelAmplifierButton" onClick={this.acousticToggle}>Cancel</Button>
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