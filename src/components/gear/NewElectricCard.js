import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import electricGuitar from "./images/electric.png"
import musician from "./images/Musician.png"
import "./ElectricList.css"

library.add(faTrash)
library.add(faPen)


export default class NewElectricCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.electricToggle = this.electricToggle.bind(this);
    }

    electricToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="electricEntries">
                    {
                            <div key={this.props.electric.id} className="card electricCard" style={{width: 432}}>
                                <div className="card-header bg-#ef5350 red lighten-1">
                                    <img src={electricGuitar} className="icon--electric" />
                                    <h3>My {this.props.electric.make} {this.props.electric.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.electric.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.electric.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {this.props.electric.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {this.props.electric.pickups}
                                    </section>
                                    <section className="card-title">
                                        Body: {this.props.electric.body}
                                    </section>
                                    <section className="card-title">
                                        Neck and Fretboard Material: {this.props.electric.neck}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.electric.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="electricEditDelete">
                                        <Link to={`/gear/edit/electric/${this.props.electric.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="electricTrash" onClick={this.electricToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} electricToggle={this.electricToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteElectricPost(this.props.electric.id, "electrics") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.electricToggle}>Cancel</Button>
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