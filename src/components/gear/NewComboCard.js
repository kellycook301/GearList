import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import comboAmp from "./images/combo_(md).png"
import musician from "./images/Musician.png"
import "./ComboList.css"

library.add(faTrash)
library.add(faPen)


export default class ComboList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.comboToggle = this.comboToggle.bind(this);
    }

    comboToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="comboEntries">
                    {
                        <div key={this.props.combo.id} className="card comboCard" style={{ width: 432 }}>
                            <div className="card-header bg-#ffcc80 orange lighten-3">
                                <img src={comboAmp} className="icon--comboAmp" />
                                <h3>My {this.props.combo.make} {this.props.combo.model}</h3>
                            </div>
                            <div className="card-body">
                                <section className="card-title">
                                    Make: {this.props.combo.make}
                                </section>
                                <section className="card-title">
                                    Model: {this.props.combo.model}
                                </section>
                                <section className="card-title">
                                    Power Section: {this.props.combo.powerSection}
                                </section>
                                <section className="card-title">
                                    Preamp Section: {this.props.combo.preampSection}
                                </section>
                                <section className="card-title">
                                    Wattage: {this.props.combo.wattage}
                                </section>
                                <section className="card-title">
                                    Speakers: {this.props.combo.speakers}
                                </section>
                                <section className="card-title">
                                    Special Features: {this.props.combo.features}
                                </section>
                                <hr></hr>
                                <h6 className="comboEditDelete">
                                    <Link to={`/gear/edit/combo/${this.props.combo.id}`}><FontAwesomeIcon
                                        icon="pen"
                                        color="blue" className="pen" /></Link>
                                    <p></p>
                                    <FontAwesomeIcon icon="trash" color="red" className="comboTrash" onClick={this.comboToggle} />
                                </h6>
                                <div>
                                    <Modal isOpen={this.state.modal} comboToggle={this.comboToggle} className={this.props.className}>
                                        <ModalBody>
                                            <h4>Are You Sure You Want To Delete This Post?</h4>
                                            <img src={musician} className="icon--musician" />
                                            <Button color="danger" className="deleteAmplifierButton" onClick={() => this.props.deleteComboPost(this.props.combo.id, "combos")}>Delete</Button>{' '}
                                            <Button color="secondary" className="cancelAmplifierButton" onClick={this.comboToggle}>Cancel</Button>
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