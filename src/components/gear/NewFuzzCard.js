import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import fuzzPedal from "./images/fuzz_(md).png"
import musician from "./images/Musician.png"
import "./FuzzList.css"

library.add(faTrash)
library.add(faPen)


export default class FuzzList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.fuzzToggle = this.fuzzToggle.bind(this);
    }

    fuzzToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="fuzzEntries">
                    {
                            <div key={this.props.fuzz.id} className="card fuzzCard" style={{width: 432}}>
                                <div className="card-header bg-#ff7043 deep-orange lighten-1">
                                    <img src={fuzzPedal} className="icon--fuzz" />
                                    <h3>My {this.props.fuzz.make} {this.props.fuzz.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.fuzz.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.fuzz.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {this.props.fuzz.style}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {this.props.fuzz.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {this.props.fuzz.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {this.props.fuzz.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.fuzz.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="fuzzEditDelete">
                                        <Link to={`/gear/edit/fuzz/${this.props.fuzz.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="fuzzTrash" onClick={this.fuzzToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} fuzzToggle={this.fuzzToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteFuzzPost(this.props.fuzz.id, "fuzzes") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.fuzzToggle}>Cancel</Button>
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

