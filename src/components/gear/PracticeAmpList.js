import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import practiceAmp from "./images/practiceAmp_(md).png"
import "./PracticeAmpList.css"

library.add(faTrash)
library.add(faPen)


export default class PracticeAmpList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="practiceAmpEntries">
                    {
                        this.props.practices.map(practice =>

                            <div key={practice.id} className="card practiceCard" style={{width: 400}}>
                                <div className="card-header bg-#e0e0e0 grey lighten-2">
                                    <img src={practiceAmp} className="icon--practice" />
                                    <h3>My {practice.make} {practice.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {practice.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {practice.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {practice.style}
                                    </section>
                                    <section className="card-title">
                                        Wattage: {practice.wattage}
                                    </section>
                                    <section className="card-title">
                                        MIDI: {practice.MIDI}
                                    </section>
                                    <section className="card-title">
                                        Speakers: {practice.speakers}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {practice.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="practiceEditDelete">
                                        <Link to={`/gear/edit/practice/${practice.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="practiceTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deletePracticeAmpPost(practice.id, "practices") }; window.location.reload(); }} />
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

