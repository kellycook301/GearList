import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import amp from "./images/amplifier.png"
import "./AmplifierList.css"

library.add(faTrash)
library.add(faPen)


export default class AmplifierList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="amplifierEntries">
                    {
                        this.props.amplifiers.map(amplifier =>

                            <div key={amplifier.id} className="card ampCard" style={{ width: 400 }}>
                                <div className="card-header bg-#757575 grey darken-1">
                                    <img src={amp} className="icon--amp" />
                                    <h3>My {amplifier.make} {amplifier.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {amplifier.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {amplifier.model}
                                    </section>
                                    <section className="card-title">
                                        Power Section: {amplifier.powerSection}
                                    </section>
                                    <section className="card-title">
                                        Preamp Section: {amplifier.preampSection}
                                    </section>
                                    <section className="card-title">
                                        Amplifier Wattage: {amplifier.wattage}
                                    </section>
                                    <section className="card-title">
                                        Matching Cabinet for Amplifier?: {amplifier.matching}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {amplifier.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="ampEditDelete">
                                        <Link to={`/gear/edit/amplifier/${amplifier.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="ampTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteAmplifierPost(amplifier.id, "amplifiers") }; window.location.reload(); }} />
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
            </React.Fragment>
        )
    }
}