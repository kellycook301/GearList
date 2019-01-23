import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalBody } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import modulationPedal from "./images/modulation_(md).png"
import musician from "./images/Musician.png"
import "./ModulationList.css"

library.add(faTrash)
library.add(faPen)


export default class NewModulationCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.modulationToggle = this.modulationToggle.bind(this);
    }

    modulationToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="modulationEntries">
                    {
                            <div key={this.props.modulation.id} className="card modulationCard" style={{width: 432}}>
                                <div className="card-header bg-#03a9f4 light-blue">
                                    <img src={modulationPedal} className="icon--modulation"/>
                                    <h3>My {this.props.modulation.make} {this.props.modulation.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {this.props.modulation.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {this.props.modulation.model}
                                    </section>
                                    <section className="card-title">
                                        Type: {this.props.modulation.type}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {this.props.modulation.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {this.props.modulation.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {this.props.modulation.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {this.props.modulation.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="modulationEditDelete">
                                        <Link to={`/gear/edit/modulation/${this.props.modulation.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="modulationTrash" onClick={this.modulationToggle} />
                                    </h6>
                                    <div>
                                        <Modal isOpen={this.state.modal} modulationToggle={this.modulationToggle} className={this.props.className}>
                                            <ModalBody>
                                                <h4>Are You Sure You Want To Delete This Post?</h4>
                                                <img src={musician} className="icon--musician" />
                                                <Button color="danger" className="deleteAmplifierButton" onClick={ () => this.props.deleteModulationPost(this.props.modulation.id, "modulations") }>Delete</Button>{' '}
                                                <Button color="secondary" className="cancelAmplifierButton" onClick={this.modulationToggle}>Cancel</Button>
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

