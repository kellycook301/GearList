
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import acousticBassGuitar from "./images/acousticBass_(md).png"
import "./AcousticBassList.css"

library.add(faTrash)
library.add(faPen)


export default class AcousticBassList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="acousticBassEntries">
                    {
                        this.props.acousticBasses.map(acousticBass =>

                            <div key={acousticBass.id} className="card acousticBassCard" style={{width: 400}}>
                                <div className="card-header bg-#a1887f brown lighten-2">
                                    <img src={acousticBassGuitar} className="icon--acousticBass" />
                                    <h3>My {acousticBass.make} {acousticBass.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {acousticBass.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {acousticBass.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {acousticBass.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {acousticBass.pickup}
                                    </section>
                                    <section className="card-title">
                                        Top: {acousticBass.top}
                                    </section>
                                    <section className="card-title">
                                        Back And Sides: {acousticBass.backSides}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {acousticBass.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="acousticBassEditDelete">
                                        <Link to={`/gear/edit/acousticBass/${acousticBass.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="acousticBassTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteAcousticBassPost(acousticBass.id, "acousticBasses") }; window.location.reload(); }} />
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