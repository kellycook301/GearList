import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import acousticBassGuitar from "./images/acousticBass_(md).png"
import musician from "./images/Musician.png"
import "./AcousticBassList.css"

library.add(faTrash)
library.add(faPen)


export default class NewAcousticBassBard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.acousticBassToggle = this.acousticBassToggle.bind(this);
    }

    acousticBassToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="acousticBassEntries">
                    {
                            <div key={this.props.acousticBass.id} className="card acousticBassCard" style={{width: 400}}>
                                <div className="card-header bg-#a1887f brown lighten-2">
                                    <img src={acousticBassGuitar} className="icon--acousticBass" />
                                    <h3>My {this.props.acousticBass.make} {this.props.acousticBass.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.acousticBass.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.acousticBass.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {this.props.acousticBass.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {this.props.acousticBass.pickup}
                                    </section>
                                    <section className="card-title">
                                        Top: {this.props.acousticBass.top}
                                    </section>
                                    <section className="card-title">
                                        Back And Sides: {this.props.acousticBass.backSides}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.acousticBass.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="acousticBassEditDelete">
                                        <Link to={`/gear/edit/acousticBass/${this.props.acousticBass.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="acousticBassTrash" onClick={this.acousticBassToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} acousticBassToggle={this.acousticBassToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteAcousticBassPost(this.props.acousticBass.id, "acousticBasses") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.acousticBassToggle}>Cancel</Button>
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