import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import amp from "./images/amplifier.png"
import musician from "./images/Musician.png"
import "./AmplifierList.css"

library.add(faTrash)
library.add(faPen)


export default class NewAmpCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.ampToggle = this.ampToggle.bind(this);
    }

    ampToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <React.Fragment>
                <section className="amplifierEntries">
                    {
                        

                            <div key={this.props.amplifier.id} className="card ampCard" style={{ width: 400 }}>
                                <div className="card-header bg-#757575 grey darken-1">
                                    <img src={amp} className="icon--amp" />
                                    <h3>My {this.props.amplifier.make} {this.props.amplifier.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.amplifier.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.amplifier.model}
                                    </section>
                                    <section className="card-title">
                                        Power Section: {this.props.amplifier.powerSection}
                                    </section>
                                    <section className="card-title">
                                        Preamp Section: {this.props.amplifier.preampSection}
                                    </section>
                                    <section className="card-title">
                                        Amplifier Wattage: {this.props.amplifier.wattage}
                                    </section>
                                    <section className="card-title">
                                        Matching Cabinet for Amplifier?: {this.props.amplifier.matching}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.amplifier.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="ampEditDelete">
                                        <Link to={`/gear/edit/amplifier/${this.props.amplifier.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="ampTrash" onClick={this.ampToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} ampToggle={this.ampToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteAmplifierPost(this.props.amplifier.id, "amplifiers") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.ampToggle}>Cancel</Button>
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

