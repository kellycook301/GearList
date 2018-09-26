import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import bassGuitar from "./images/bass_(md).png"
import musician from "./images/Musician.png"
import "./BassList.css"

library.add(faTrash)
library.add(faPen)


export default class NewBassCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.bassToggle = this.bassToggle.bind(this);
    }

    bassToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="bassEntries">
                    {
                            <div key={this.props.bass.id} className="card bassCard" style={{width: 400}}>
                                <div className="card-header bg-#0091ea light-blue accent-4">
                                    <img src={bassGuitar} className="icon--bass" />
                                    <h3>My {this.props.bass.make} {this.props.bass.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.bass.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.bass.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {this.props.bass.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {this.props.bass.pickups}
                                    </section>
                                    <section className="card-title">
                                        Body: {this.props.bass.body}
                                    </section>
                                    <section className="card-title">
                                        Neck and Fretboard Material: {this.props.bass.neck}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.bass.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="bassEditDelete">
                                        <Link to={`/gear/edit/bass/${this.props.bass.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="bassTrash" onClick={this.bassToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} bassToggle={this.bassToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteBassPost(this.props.bass.id, "basses") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.bassToggle}>Cancel</Button>
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