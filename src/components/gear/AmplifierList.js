import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
library.add(faPen)


export default class AmplifierList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="amplifierEntries">
                    {
                        this.props.amplifiers.map(amplifier =>

                            <div key={amplifier.id} className="card">
                                <div className="card-header bg-success"></div>
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
                                        Head or Combo: {amplifier.amplifierHeadCombo}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {amplifier.features}
                                    </section>
                                    <p></p>
                                    <h6>
                                        <FontAwesomeIcon icon="trash" color="red" onClick={() => this.props.deleteAmplifierPost(amplifier.id, "amplifiers")} />
                                        <p></p>
                                        <Link to={`/gear/edit/amplifier/${amplifier.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" /></Link>
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