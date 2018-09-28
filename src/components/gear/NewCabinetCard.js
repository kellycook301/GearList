import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import cab from "./images/cabinet_(md).png"
import musician from "./images/Musician.png"
import "./CabinetList.css"

library.add(faTrash)
library.add(faPen)


export default class NewCabinetCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.cabinetToggle = this.cabinetToggle.bind(this);
    }

    cabinetToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="cabinetEntries">
                    {
                        <div key={this.props.cabinet.id} className="card cabCard" style={{ width: 432 }}>
                            <div className="card-header bg-#ffa726 orange lighten-1">
                                <img src={cab} className="icon--cab" />
                                <h3>My {this.props.cabinet.make} {this.props.cabinet.model}</h3>
                            </div>
                            <div className="card-body">
                                <section className="card-title">
                                    Make: {this.props.cabinet.make}
                                </section>
                                <section className="card-title">
                                    Model: {this.props.cabinet.model}
                                </section>
                                <section className="card-title">
                                    Speakers: {this.props.cabinet.speakers}
                                </section>
                                <section className="card-title">
                                    Wood Type: {this.props.cabinet.woodType}
                                </section>
                                <section className="card-title">
                                    Tolex Color: {this.props.cabinet.tolex}
                                </section>
                                <section className="card-title">
                                    Open, Partial, or Closed Back: {this.props.cabinet.back}
                                </section>
                                <section className="card-title">
                                    Slanted or Straight: {this.props.cabinet.slantedStraight}
                                </section>
                                <hr></hr>
                                <h6 className="cabinetEditDelete">
                                    <Link to={`/gear/edit/cabinet/${this.props.cabinet.id}`}><FontAwesomeIcon
                                        icon="pen"
                                        color="blue" className="pen" /></Link>
                                    <p></p>
                                    <FontAwesomeIcon icon="trash" color="red" className="cabinetTrash" onClick={this.cabinetToggle} />
                                </h6>
                                <div>
                                    <Modal isOpen={this.state.modal} cabinetToggle={this.cabinetToggle} className={this.props.className}>
                                        <ModalBody>
                                            <h4>Are You Sure You Want To Delete This Post?</h4>
                                            <img src={musician} className="icon--musician" />
                                            <Button color="danger" className="deleteAmplifierButton" onClick={() => this.props.deleteCabinetPost(this.props.cabinet.id, "cabinets")}>Delete</Button>{' '}
                                            <Button color="secondary" className="cancelAmplifierButton" onClick={this.cabinetToggle}>Cancel</Button>
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